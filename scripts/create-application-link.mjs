#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');

const platformCodes = {
  saramin: 's',
  jobkorea: 'j',
  wanted: 'w',
  linkedin: 'l',
  direct: 'd',
  other: 'o'
};

const companyTypeCodes = {
  enterprise: 'e',
  large: 'e',
  sme: 'm',
  mid: 'm',
  startup: 't',
  agency: 'a',
  public: 'p',
  other: 'o'
};

const roleCodes = {
  design: 'd',
  bx: 'b',
  marketing: 'm',
  content: 'c',
  brand: 'r',
  visual: 'v',
  ui: 'u',
  package: 'p',
  graphic: 'g',
  editorial: 'e',
  product: 'o',
  other: 'x'
};

function parseArgs(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) continue;
    const key = token.slice(2);
    if (key === 'dry-run') {
      result.dryRun = true;
      continue;
    }
    result[key] = argv[index + 1];
    index += 1;
  }
  return result;
}

function requireChoice(label, value, choices) {
  const normalized = String(value || '').trim().toLowerCase();
  if (!choices[normalized]) {
    throw new Error(`${label}: ${Object.keys(choices).join(', ')} 중 하나를 사용하세요.`);
  }
  return normalized;
}

const args = parseArgs(process.argv.slice(2));
const required = ['company', 'platform', 'company-type', 'role', 'date'];
const missing = required.filter((key) => !args[key]);
if (missing.length) {
  throw new Error(`필수 값이 없습니다: ${missing.join(', ')}`);
}

const company = String(args.company).trim().toLowerCase();
const platform = requireChoice('platform', args.platform, platformCodes);
const companyType = requireChoice('company-type', args['company-type'], companyTypeCodes);
const role = requireChoice('role', args.role, roleCodes);
const contactRoute = String(args['contact-route'] || 'standard').trim().toLowerCase();
if (!/^[a-z0-9_-]{2,40}$/.test(contactRoute)) {
  throw new Error('contact-route는 영문 소문자, 숫자, _, -만 사용할 수 있습니다.');
}
const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(args.date));
if (!dateMatch) throw new Error('date는 YYYY-MM-DD 형식이어야 합니다.');

const year = Number(dateMatch[1]);
const month = Number(dateMatch[2]);
const day = Number(dateMatch[3]);
const parsedDate = new Date(Date.UTC(year, month - 1, day));
if (
  parsedDate.getUTCFullYear() !== year ||
  parsedDate.getUTCMonth() !== month - 1 ||
  parsedDate.getUTCDate() !== day
) {
  throw new Error('유효하지 않은 날짜입니다.');
}

const registryPath = path.resolve(args.registry || path.join(projectRoot, 'go', 'links.json'));
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const entries = Object.values(registry.links || {});
const yearPrefix = `${year}-`;
const annualSequence = entries
  .filter((entry) => String(entry.applied_at || '').startsWith(yearPrefix))
  .reduce((maximum, entry) => Math.max(maximum, Number(entry.annual_sequence) || 0), 0) + 1;
const dailySequence = entries
  .filter((entry) => entry.applied_at === args.date)
  .reduce((maximum, entry) => Math.max(maximum, Number(entry.daily_sequence) || 0), 0) + 1;

if (annualSequence > 99) throw new Error('연간 지원 순번이 99를 넘었습니다. 규칙 확장이 필요합니다.');

const numericBlock = `${year % 10}${String(annualSequence).padStart(2, '0')}`;
const code = [
  platformCodes[platform],
  companyTypeCodes[companyType],
  roleCodes[role],
  numericBlock
].join('');

if (registry.links && registry.links[code]) throw new Error(`이미 존재하는 코드입니다: ${code}`);

const entry = {
  company,
  platform,
  company_type: companyType,
  role,
  contact_route: contactRoute,
  job_title: String(args['job-title'] || args.role).trim(),
  campaign: `${year}_hiring`,
  applied_at: args.date,
  annual_sequence: annualSequence,
  daily_sequence: dailySequence,
  active: true,
  created_at: args.date
};

if (!args.dryRun) {
  registry.version = 2;
  registry.links = registry.links || {};
  registry.links[code] = entry;
  fs.writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`);
}

console.log(JSON.stringify({
  code,
  url: `https://designpersona.kr/go/#${code}`,
  dry_run: Boolean(args.dryRun),
  entry
}, null, 2));

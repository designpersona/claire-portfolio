# 지원 링크 기안번호 규칙

공유 주소 형식:

`https://designpersona.kr/go/#코드`

코드는 하이픈 없이 9자리로 생성합니다.

`플랫폼 1 + 기업군 1 + 직무 1 + 숫자 블록 3 + 월 1 + 일 1 + 당일 순번 1`

Kinkos / 사람인 / 중견·중소 / Design / 2026-08-07 / 연간 첫 번째 / 당일 첫 번째:

`smd601hga`

- `s`: 사람인
- `m`: 중견·중소
- `d`: Design
- `601`: 2026년 끝자리 `6` + 연간 지원 순번 `01`
- `h`: 8번째 알파벳, 8월
- `g`: 7번째 알파벳, 7일
- `a`: 그날 첫 번째 지원

월·일은 문자로 바꿔 날짜가 주소에 직접 드러나지 않습니다. 정확한 연도, 날짜, 회사명과 공고명은 `go/links.json`에 저장합니다.

## 코드표

### 플랫폼

- `s`: 사람인
- `j`: 잡코리아
- `w`: 원티드
- `l`: 링크드인
- `d`: 직접 지원
- `o`: 기타

### 기업군

- `e`: 대기업
- `m`: 중견·중소
- `t`: 스타트업
- `a`: 에이전시
- `p`: 공공기관
- `o`: 기타

### 직무

- `d`: 포괄적인 Design
- `b`: BX
- `m`: Marketing Design
- `c`: Content Design
- `r`: Brand Design
- `v`: Visual Design
- `u`: UI/UX
- `p`: Package Design
- `g`: Graphic Design
- `e`: Editorial Design
- `o`: Product Design
- `x`: 기타

### 날짜와 순번

- 숫자 블록: 연도 끝자리 1개 + 해당 연도의 지원 순번 2개
- 월: `a`=1월부터 `l`=12월
- 일: `a`=1일부터 `z`=26일, `1`=27일, `2`=28일, `3`=29일, `4`=30일, `5`=31일
- 당일 순번: `a`=첫 번째부터 `z`=26번째

## 다음 링크 생성

등록 스크립트가 연간 순번과 당일 순번을 자동 계산하고 `go/links.json`에 한 항목을 추가합니다.

```sh
node scripts/create-application-link.mjs \
  --company kinkos \
  --platform saramin \
  --company-type sme \
  --role design \
  --job-title "Design" \
  --date 2026-08-07
```

등록 전 결과만 확인하려면 끝에 `--dry-run`을 붙입니다.

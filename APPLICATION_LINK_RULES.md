# 지원 링크 기안번호 규칙

공유 주소 형식:

`https://designpersona.kr/go/#코드`

코드는 하이픈 없이 6자리로 생성하고 숫자 3자리로 끝납니다.

`플랫폼 1 + 기업군 1 + 직무 1 + 숫자 블록 3`

Kinkos / 사람인 / 중견·중소 / Design / 2026-08-07 / 연간 첫 번째 / 당일 첫 번째:

`smd601`

- `s`: 사람인
- `m`: 중견·중소
- `d`: Design
- `601`: 2026년 끝자리 `6` + 연간 지원 순번 `01`

정확한 월·일, 회사명과 공고명은 주소에 드러내지 않고 `go/links.json`에 저장합니다. 코드만 보고 플랫폼·기업군·직무·연도·연간 순번을 확인할 수 있습니다.

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
- 정확한 지원일과 당일 순번은 등록부에만 저장

## 다음 링크 생성

등록 스크립트가 연간 순번과 당일 순번을 자동 계산하고 `go/links.json`에 한 항목을 추가합니다.

```sh
node scripts/create-application-link.mjs \
  --company kinkos \
  --platform saramin \
  --company-type sme \
  --role design \
  --job-title "Design" \
  --contact-route standard \
  --date 2026-08-07
```

헤드헌터 제안으로 전달받은 건은 `--contact-route headhunter`를 사용합니다.

등록 전 결과만 확인하려면 끝에 `--dry-run`을 붙입니다.

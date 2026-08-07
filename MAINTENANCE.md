# Maintenance mode

## Backups

공사중 모드 적용 전 원본은 상위 `backups/` 폴더에 보관되어 있습니다.

- 실제 운영본: commit `52033f1` — 2026-05-29 16:21 KST 배포 확인
- 저장소 최신본: commit `327b608` — 2026-07-06 10:08 KST
- 전체 이력: Git bundle 파일

## Restore

최신 포트폴리오 파일만 복구하려면 상위 폴더의
`designpersona-latest-source-2026-07-06-100819-KST-327b608.tar.gz`를 새 폴더에 해제합니다.

전체 Git 이력을 복구하려면 다음 bundle을 저장소로 clone합니다.

`designpersona-full-history-through-2026-07-06-327b608.bundle`

## Publishing note

`designpersona.kr`은 GitHub Pages의 `main` 브랜치 `/ (root)`에서 배포됩니다.
2026-08-07 재배포 후 사용자 도메인의 HTTPS 응답을 확인했습니다.

## Split access

- `index.html`과 기존 `#/...` 링크: 공사중 페이지
- `go/#고유코드`: `APPLICATION_LINK_RULES.md` 규칙으로 생성되고 `go/links.json`에 등록된 활성 지원 링크만 전체 포트폴리오 UTM 주소로 이동
- 필수 채용 UTM 네 개와 `invite_id`가 붙은 `portfolio.html?...#/archive`: 신규 채용 지원용 전체 포트폴리오
- UTM이나 `invite_id`가 없거나 형식이 잘못된 `portfolio.html`: 공사중 페이지로 이동

UTM 검사는 일반 링크를 가리고 유입을 식별하기 위한 장치입니다. `portfolio.html`은 검색 노출을 막았지만 비밀번호로 보호되는 파일은 아닙니다.

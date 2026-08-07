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

`designpersona.kr`은 GitHub Pages IP를 가리키지만 2026-08-07 확인 시 TLS 인증서가 사용자 도메인을 포함하지 않았습니다.
배포 전에 GitHub Pages의 Custom domain 설정에서 DNS check와 Enforce HTTPS 상태를 다시 확인해야 합니다.

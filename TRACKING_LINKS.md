# Design Persona 유입 링크 구분 가이드

현재 사이트는 한 개의 `index.html` 안에서 `#/프로젝트명` 형태로 화면을 바꾸는 정적 SPA입니다.
`#` 뒤의 값은 브라우저 안에서만 사용되고 서버 요청에는 포함되지 않으므로, 분석 도구의 기본 URL 보고서에서는 여러 내부 화면이 `designpersona.kr/` 하나로 합쳐져 보일 수 있습니다.

공사중 페이지는 아래 값을 Microsoft Clarity custom tag로 기록합니다.

- `site_mode`: `construction`
- `entry_source`: 유입 채널
- `entry_medium`: 채널 종류
- `entry_campaign`: 캠페인 이름
- `entry_content`: 링크 위치 또는 게시물 이름
- `entry_route`: 방문자가 원래 열려고 했던 `#/...` 주소

Clarity에서는 **Filters → Custom tags**에서 위 항목으로 세션과 녹화를 구분합니다.

## 채널별 링크 예시

아래 링크는 그대로 복사하되 `utm_content`만 실제 게시물 이름으로 바꾸면 됩니다.

- Instagram 프로필  
  `https://designpersona.kr/?utm_source=instagram&utm_medium=social&utm_campaign=portfolio_lock&utm_content=profile`
- LinkedIn 프로필  
  `https://designpersona.kr/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio_lock&utm_content=profile`
- Behance 프로젝트  
  `https://designpersona.kr/?utm_source=behance&utm_medium=referral&utm_campaign=portfolio_lock&utm_content=project_name`
- 카카오톡 직접 공유  
  `https://designpersona.kr/?utm_source=kakao&utm_medium=messenger&utm_campaign=portfolio_lock&utm_content=direct_share`
- 이메일 서명  
  `https://designpersona.kr/?utm_source=email&utm_medium=signature&utm_campaign=portfolio_lock&utm_content=default`
- 게시판 게시물  
  `https://designpersona.kr/?utm_source=board_name&utm_medium=referral&utm_campaign=portfolio_lock&utm_content=post_202608`

기존 특정 프로젝트 주소도 추적할 수 있습니다. 쿼리 문자열을 `#`보다 앞에 둬야 합니다.

`https://designpersona.kr/?utm_source=board_name&utm_medium=referral&utm_campaign=portfolio_lock&utm_content=chatlog#/chatlog`

## 해석할 때 주의할 점

- UTM이나 `ref`가 없는 복사·붙여넣기 링크, 메신저·앱의 개인정보 보호 기능, 광고 차단기는 유입 정보를 없앨 수 있어 `direct`로 남습니다.
- 같은 원본 링크를 여러 곳에 복사하면 출처를 나눌 수 없습니다. 배치 위치마다 `utm_content`를 다르게 만드세요.
- Clarity의 `email_inquiry_click`은 메일 앱을 열려는 클릭입니다. 실제 발송 완료를 뜻하지는 않습니다.
- `stay_05s`, `stay_15s`, `stay_30s` 이벤트는 페이지를 실제로 열어 둔 최소 시간을 비교하는 보조 지표입니다.

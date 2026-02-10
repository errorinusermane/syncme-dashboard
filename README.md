## Background and Product Intent

The existing mood/diary services have these issues:

- (1) Writing feels tedious → let users select just three numbers, with a cute UI
- (2) Rewards feel slow → provide instant character changes as feedback on input
- (3) Writing ends in isolation → weak return motivation, so allow friends to comment and share a My Home page
- (4) High entry barrier (app install, sign-up) → Google login only, web-based

### Server Dashboard Including Load - Design

Additional backend/cloud/operations data:

- Request processing metrics (avg / p95 / p99 response time)
- Error metrics (error rate (%) vs total requests / error type distribution (4xx / 5xx))
- Current sustainable load (concurrent requests supported / bottleneck explanation)
⇒ Server dashboard: built directly in Google Spreadsheet

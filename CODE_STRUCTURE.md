# AI 3-Day Challenge - 코드 구조 가이드

## 📁 프로젝트 구조

```
AI_3Days_Web/
├── index.html          # 랜딩 페이지 (시작점)
├── style.css           # 전체 스타일시트
└── main.js             # 메인 애플리케이션 로직
```

---

## 🗂️ main.js 코드 구조

### 1. 전역 상태 관리 (Line 1-10)
- `completedParts`: 완료된 파트 추적

### 2. 페이지 전환 함수 (Line 12-45)
- `startChallenge()`: 랜딩 → 대시보드 전환
- `renderDashboard()`: 대시보드 메인 레이아웃 렌더링

### 3. 사이드바 렌더링 (Line 47-80)
- `renderSidebar()`: 네비게이션, 진행률, 치트시트

### 4. DAY 1 콘텐츠 렌더링 (Line 82-400)
- `renderDay1Content()`: 전체 콘텐츠 조합
- `renderDay1Header()`: 헤더 섹션
- `renderTimeline()`: 타임라인 섹션
- `renderPart1_Terms()`: Part 1 - AI 용어
- `renderPart2_AgentVsChatbot()`: Part 2 - 챗봇 vs 에이전트
- `renderPart3_RTFFormula()`: Part 3 - RTF 공식
- `renderPart4_Mission()`: Part 4 - 실습 미션
- `renderPart5_Quiz()`: Part 5 - 셀프 퀴즈
- `renderDay1Footer()`: 푸터 섹션

### 5. 인터랙션 핸들러 (Line 402-끝)
- `markComplete(partNum)`: 파트 완료 처리
- `copyTemplate()`: RTF 템플릿 복사
- `copyCommand()`: 실습 명령어 복사
- `checkAnswer(qNum, correctAnswer)`: 퀴즈 정답 확인
- `loadDay(dayNum)`: DAY 전환 (향후 구현)

---

## 🎨 style.css 구조

### 1. CSS 변수 (Line 1-20)
- 색상 팔레트
- 글래스모피즘 효과

### 2. 기본 스타일 (Line 21-80)
- 전역 리셋
- 타이포그래피

### 3. 랜딩 페이지 (Line 81-135)
- Hero 섹션
- Feature 카드

### 4. 대시보드 레이아웃 (Line 136-200)
- Dashboard 컨테이너
- Sidebar
- Content Area

### 5. 컴포넌트 스타일 (Line 201-700)
- Timeline
- Term Cards
- Comparison Box
- Tools Grid
- RTF Formula
- Mission Box
- Quiz Container
- Progress Bar
- Buttons

### 6. 애니메이션 (Line 701-끝)
- Fade In
- Slide In
- Hover Effects

---

## 🔧 수정 가이드

### DAY 1 콘텐츠 수정
1. `main.js`에서 해당 `renderPartX_XXX()` 함수 찾기
2. HTML 템플릿 리터럴 수정
3. 브라우저 새로고침으로 확인

### 스타일 수정
1. `style.css`에서 해당 클래스 찾기
2. CSS 속성 수정
3. 브라우저 새로고침으로 확인

### 새로운 DAY 추가
1. `main.js`에 `renderDay2Content()` 함수 추가
2. `loadDay()` 함수에서 DAY 2 로직 구현
3. 사이드바에서 "locked" 클래스 제거

---

## 📝 주요 함수 위치 빠른 참조

| 기능 | 함수명 | 위치 (Line) |
|------|--------|-------------|
| 페이지 전환 | `startChallenge()` | ~15 |
| 대시보드 렌더링 | `renderDashboard()` | ~30 |
| 사이드바 | `renderSidebar()` | ~50 |
| Part 1 (용어) | `renderPart1_Terms()` | ~150 |
| Part 2 (에이전트) | `renderPart2_AgentVsChatbot()` | ~200 |
| Part 3 (RTF) | `renderPart3_RTFFormula()` | ~250 |
| Part 4 (실습) | `renderPart4_Mission()` | ~300 |
| Part 5 (퀴즈) | `renderPart5_Quiz()` | ~350 |
| 완료 처리 | `markComplete()` | ~410 |
| 복사 기능 | `copyTemplate()`, `copyCommand()` | ~425 |
| 퀴즈 확인 | `checkAnswer()` | ~440 |

---

## 🚀 다음 단계

### DAY 2 구현 체크리스트
- [ ] `Day_2_Action.md` 콘텐츠 확인
- [ ] `renderDay2Content()` 함수 작성
- [ ] `loadDay(2)` 로직 구현
- [ ] 사이드바 "locked" 해제

### DAY 3 "건설중" 표시
- [ ] 사이드바에 🚧 아이콘 추가
- [ ] 클릭 시 "Coming Soon" 모달 표시

### 배포 준비
- [ ] GitHub Repository 생성
- [ ] GitHub Pages 설정
- [ ] 또는 Vercel/Netlify 배포

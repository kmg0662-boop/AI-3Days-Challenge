// ============================================================
// AI 3-Day Challenge - Main Application
// ============================================================

// ============================================================
// 1. 전역 상태 관리
// ============================================================
let completedParts = new Set();

// ============================================================
// 2. 페이지 전환 함수
// ============================================================

/**
 * 랜딩 페이지에서 대시보드로 전환
 */
function startChallenge() {
    const app = document.querySelector('#app');
    
    // 화면 페이드 아웃 효과
    app.style.opacity = '0';
    app.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        renderDashboard();
        app.style.opacity = '1';
    }, 500);
}

/**
 * 대시보드 메인 레이아웃 렌더링
 */
function renderDashboard() {
    const app = document.querySelector('#app');
    app.innerHTML = `
        <div class="dashboard">
            ${renderSidebar()}
            <main class="content-area fade-in" id="main-content">
                ${renderDay1Content()}
            </main>
        </div>
    `;
}

// ============================================================
// 3. 사이드바 렌더링
// ============================================================

/**
 * 사이드바 컴포넌트 렌더링
 */
function renderSidebar() {
    return `
        <aside class="sidebar slide-in">
            <div class="logo">AI 3-DAYS</div>
            <nav>
                <div class="nav-item active" onclick="loadDay(1)">📚 DAY 1: Basics</div>
                <div class="nav-item locked">🚀 DAY 2: Action 🔒</div>
                <div class="nav-item locked">👑 DAY 3: Master 🔒</div>
            </nav>
            <div class="progress-box">
                <p>전체 진행률</p>
                <div class="progress-bar">
                    <div class="progress" id="overall-progress" style="width: 5%"></div>
                </div>
                <span class="progress-text">5%</span>
            </div>
            <div class="cheat-sheet">
                <h4>📑 치트 시트</h4>
                <ul>
                    <li>"단계별로 생각해서 처리해"</li>
                    <li>"이 내용을 파일에 저장해"</li>
                    <li>"RTF 공식 사용"</li>
                </ul>
            </div>
        </aside>
    `;
}

// ============================================================
// 4. DAY 1 콘텐츠 렌더링
// ============================================================

/**
 * DAY 1 전체 콘텐츠 렌더링
 */
function renderDay1Content() {
    return `
        ${renderDay1Header()}
        ${renderTimeline()}
        ${renderPart1_Terms()}
        ${renderPart2_AgentVsChatbot()}
        ${renderPart3_RTFFormula()}
        ${renderPart4_Mission()}
        ${renderPart5_Quiz()}
        ${renderDay1Footer()}
    `;
}

/**
 * DAY 1 헤더
 */
function renderDay1Header() {
    return `
        <header class="content-header">
            <div class="badge">120분 마스터 코스</div>
            <h2>🍎 DAY 1: AI 네이티브 입문</h2>
            <p class="lucky-quote">"완전 럭키비키잖아! 오늘 배우면 내일은 AI 마스터! ✨"</p>
        </header>
    `;
}

/**
 * 타임라인 섹션
 */
function renderTimeline() {
    return `
        <section class="timeline-section">
            <h3>⏱️ 오늘의 학습 타임라인</h3>
            <div class="timeline-grid">
                <div class="timeline-item">
                    <div class="time-badge">30분</div>
                    <h4>Part 1: 기초 지식</h4>
                    <p>LLM 원리 및 용어 정복</p>
                </div>
                <div class="timeline-item">
                    <div class="time-badge">30분</div>
                    <h4>Part 2: 에이전트 이해</h4>
                    <p>챗봇과의 차이 및 3대 도구</p>
                </div>
                <div class="timeline-item">
                    <div class="time-badge">20분</div>
                    <h4>Part 3: 실전 기술</h4>
                    <p>RTF 프롬프트 공식 습득</p>
                </div>
                <div class="timeline-item">
                    <div class="time-badge">30분</div>
                    <h4>Part 4: 집중 실습</h4>
                    <p>Command Center 구축</p>
                </div>
                <div class="timeline-item">
                    <div class="time-badge">10분</div>
                    <h4>Part 5: 마무리</h4>
                    <p>치트 시트 & 퀴즈</p>
                </div>
            </div>
        </section>
    `;
}

/**
 * Part 1: AI 용어 학습
 */
function renderPart1_Terms() {
    return `
        <section class="lesson-section">
            <h3>1. AI 뇌구조와 필수 용어 (⏱️ 30분)</h3>
            <div class="term-cards">
                <!-- LLM 카드 -->
                <div class="term-card">
                    <div class="term-header">
                        <span class="term-name">LLM</span>
                        <span class="term-icon">🧠</span>
                    </div>
                    <p class="term-desc">AI의 뇌 (단어 맞히기 천재)</p>
                    <div class="term-value">💡 AI의 사고 수준을 판단하는 기준</div>
                    <button class="detail-toggle" onclick="toggleDetail('llm-detail')">📖 자세히 보기</button>
                    <div class="detail-content" id="llm-detail" style="display: none;">
                        <h4>🧠 LLM이란? (Large Language Model)</h4>
                        <p><strong>한마디로:</strong> 엄청나게 많은 텍스트를 학습해서 "다음에 올 단어"를 예측하는 초거대 AI 모델입니다.</p>
                        
                        <h5>🎯 핵심 원리</h5>
                        <p>LLM은 마치 <strong>자동완성의 끝판왕</strong>입니다. 여러분이 "오늘 날씨가..."라고 입력하면 "좋네요", "흐리네요" 등을 예측하는 것처럼, LLM은 수십억 개의 단어 패턴을 학습해서 문맥에 맞는 다음 단어를 예측합니다.</p>
                        
                        <h5>📊 크기가 왜 중요한가?</h5>
                        <ul>
                            <li><strong>GPT-3:</strong> 1,750억 개의 파라미터 (뇌의 시냅스 같은 것)</li>
                            <li><strong>GPT-4:</strong> 추정 1조 개 이상</li>
                            <li><strong>Gemini 1.5 Pro:</strong> 수조 개 규모</li>
                        </ul>
                        <p>파라미터가 많을수록 더 복잡한 패턴을 학습하고, 더 정교한 답변이 가능합니다.</p>
                        
                        <h5>🎓 실전 활용</h5>
                        <p>LLM의 성능을 판단할 때는 <strong>파라미터 수</strong>와 <strong>학습 데이터의 질</strong>을 함께 봐야 합니다. 크다고 무조건 좋은 게 아니라, 어떤 데이터로 학습했느냐가 더 중요할 수 있습니다.</p>
                    </div>
                </div>

                <!-- RAG 카드 -->
                <div class="term-card highlight">
                    <div class="term-header">
                        <span class="term-name">RAG</span>
                        <span class="term-icon">📚</span>
                    </div>
                    <p class="term-desc">오픈북 커닝 기술</p>
                    <div class="term-value">💡 내 문서/메일을 읽고 대답하게 만드는 핵심!</div>
                    <button class="detail-toggle" onclick="toggleDetail('rag-detail')">📖 자세히 보기</button>
                    <div class="detail-content" id="rag-detail" style="display: none;">
                        <h4>📚 RAG란? (Retrieval-Augmented Generation)</h4>
                        <p><strong>한마디로:</strong> AI가 답변하기 전에 관련 자료를 먼저 찾아보게 하는 기술입니다.</p>
                        
                        <h5>🎯 왜 필요한가?</h5>
                        <p>LLM은 학습 데이터에만 의존합니다. 즉, <strong>2023년 이후 정보</strong>나 <strong>여러분 회사의 내부 문서</strong>는 모릅니다. RAG는 이 문제를 해결합니다!</p>
                        
                        <h5>⚙️ 작동 원리 (3단계)</h5>
                        <ol>
                            <li><strong>검색 (Retrieval):</strong> 질문과 관련된 문서를 데이터베이스에서 찾습니다.</li>
                            <li><strong>컨텍스트 주입:</strong> 찾은 문서를 AI에게 "이 자료를 참고해서 답해"라고 전달합니다.</li>
                            <li><strong>생성 (Generation):</strong> AI가 참고 자료를 바탕으로 답변을 생성합니다.</li>
                        </ol>
                        
                        <h5>🔥 실전 예시</h5>
                        <div class="example-box">
                            <p><strong>질문:</strong> "우리 회사의 2024년 휴가 정책은?"</p>
                            <p><strong>RAG 없이:</strong> "죄송합니다. 회사 내부 정보는 모릅니다."</p>
                            <p><strong>RAG 사용:</strong> "2024년 휴가 정책 문서에 따르면, 연차는 15일이며 반차 사용이 가능합니다..."</p>
                        </div>
                        
                        <h5>💼 비즈니스 활용</h5>
                        <p>RAG를 사용하면 <strong>사내 문서, 고객 데이터, 최신 뉴스</strong> 등을 AI가 참고할 수 있어, 훨씬 더 정확하고 맞춤화된 답변이 가능합니다.</p>
                    </div>
                </div>

                <!-- Hallucination 카드 -->
                <div class="term-card">
                    <div class="term-header">
                        <span class="term-name">Hallucination</span>
                        <span class="term-icon">🎭</span>
                    </div>
                    <p class="term-desc">그럴듯한 거짓말 (환각)</p>
                    <div class="term-value">💡 AI가 아는 척할 때 '팩트체크'를 시키게 함</div>
                    <button class="detail-toggle" onclick="toggleDetail('hallucination-detail')">📖 자세히 보기</button>
                    <div class="detail-content" id="hallucination-detail" style="display: none;">
                        <h4>🎭 Hallucination이란?</h4>
                        <p><strong>한마디로:</strong> AI가 자신 있게 거짓 정보를 만들어내는 현상입니다.</p>
                        
                        <h5>🎯 왜 발생하는가?</h5>
                        <p>LLM은 <strong>"그럴듯한 다음 단어"</strong>를 예측하도록 학습되었지, <strong>"사실인 정보"</strong>를 찾도록 학습된 게 아닙니다. 마치 소설가가 이야기를 지어내듯, AI도 문맥에 맞는 답변을 "창작"할 수 있습니다.</p>
                        
                        <h5>⚠️ 위험한 예시</h5>
                        <div class="warning-box">
                            <p><strong>질문:</strong> "2024년 노벨 물리학상 수상자는?"</p>
                            <p><strong>AI 답변:</strong> "김철수 박사가 양자컴퓨팅 연구로 수상했습니다."</p>
                            <p><strong>실제:</strong> 완전히 지어낸 이야기! (2024년 수상자는 다른 사람)</p>
                        </div>
                        
                        <h5>🛡️ 방어 전략</h5>
                        <ol>
                            <li><strong>출처 요구:</strong> "어디서 확인할 수 있나요?" 라고 물어보세요.</li>
                            <li><strong>교차 검증:</strong> 중요한 정보는 반드시 다른 소스로 확인하세요.</li>
                            <li><strong>RAG 활용:</strong> 신뢰할 수 있는 문서를 참고하게 만드세요.</li>
                            <li><strong>프롬프트 개선:</strong> "확실하지 않으면 모른다고 말해"라고 명시하세요.</li>
                        </ol>
                        
                        <h5>💡 프로 팁</h5>
                        <p>AI에게 <strong>"답변에 대한 확신도를 1-10점으로 표현해줘"</strong>라고 요청하면, AI가 스스로 불확실성을 인지하게 만들 수 있습니다.</p>
                    </div>
                </div>

                <!-- Token 카드 -->
                <div class="term-card">
                    <div class="term-header">
                        <span class="term-name">Token</span>
                        <span class="term-icon">🪙</span>
                    </div>
                    <p class="term-desc">AI의 글자 연산 단위</p>
                    <div class="term-value">💡 사용료와 답변 속도를 결정하는 숨은 변수</div>
                    <button class="detail-toggle" onclick="toggleDetail('token-detail')">📖 자세히 보기</button>
                    <div class="detail-content" id="token-detail" style="display: none;">
                        <h4>🪙 Token이란?</h4>
                        <p><strong>한마디로:</strong> AI가 텍스트를 처리할 때 사용하는 최소 단위입니다. 글자도 아니고 단어도 아닌, 그 중간쯤 되는 개념입니다.</p>
                        
                        <h5>🎯 토큰 계산 예시</h5>
                        <div class="example-box">
                            <p><strong>영어:</strong> "Hello, world!" = 약 3 토큰 (Hello, , world, !)</p>
                            <p><strong>한글:</strong> "안녕하세요!" = 약 5-7 토큰 (한글은 영어보다 토큰이 많이 필요)</p>
                            <p><strong>코드:</strong> "function test() {}" = 약 6 토큰</p>
                        </div>
                        
                        <h5>💰 왜 중요한가?</h5>
                        <p>대부분의 AI API는 <strong>토큰 단위로 과금</strong>합니다!</p>
                        <ul>
                            <li><strong>GPT-4:</strong> 입력 1,000토큰당 $0.03, 출력 1,000토큰당 $0.06</li>
                            <li><strong>GPT-3.5:</strong> 입력 1,000토큰당 $0.0015, 출력 1,000토큰당 $0.002</li>
                        </ul>
                        
                        <h5>⚡ 속도에도 영향</h5>
                        <p>토큰이 많을수록 처리 시간이 길어집니다. 10,000 토큰 답변은 100 토큰 답변보다 100배 느립니다!</p>
                        
                        <h5>🎓 실전 최적화 팁</h5>
                        <ol>
                            <li><strong>간결한 프롬프트:</strong> 불필요한 설명은 빼세요.</li>
                            <li><strong>답변 길이 제한:</strong> "200자 이내로 요약해줘"</li>
                            <li><strong>스트리밍 활용:</strong> 답변을 실시간으로 받아 필요한 부분만 사용</li>
                            <li><strong>캐싱:</strong> 같은 질문은 저장해두고 재사용</li>
                        </ol>
                        
                        <h5>📊 컨텍스트 윈도우</h5>
                        <p>AI가 한 번에 처리할 수 있는 최대 토큰 수를 <strong>컨텍스트 윈도우</strong>라고 합니다:</p>
                        <ul>
                            <li><strong>GPT-4:</strong> 8K, 32K, 128K 버전</li>
                            <li><strong>Gemini 1.5 Pro:</strong> 최대 2M (200만!) 토큰</li>
                        </ul>
                        <p>큰 컨텍스트 윈도우는 긴 문서를 한 번에 분석할 수 있다는 뜻입니다!</p>
                    </div>
                </div>
            </div>
            <button class="check-btn" onclick="markComplete(1)">✅ Part 1 완료</button>
        </section>
    `;
}

/**
 * Part 2: 챗봇 vs 에이전트
 */
function renderPart2_AgentVsChatbot() {
    return `
        <section class="lesson-section">
            <h3>2. 챗봇 vs 에이전트: 실행의 차이 (⏱️ 30분)</h3>
            <div class="comparison-box">
                <div class="compare-item chatbot">
                    <h4>💬 챗봇 (ChatGPT)</h4>
                    <p>"이렇게 하세요"라고 조언만 함</p>
                    <span class="role-tag">말만 하는 입</span>
                </div>
                <div class="vs-divider">VS</div>
                <div class="compare-item agent">
                    <h4>🤖 에이전트 (김비서)</h4>
                    <p>"제가 했습니다!"라며 결과물을 가져옴</p>
                    <span class="role-tag active">직접 일하는 손발</span>
                </div>
            </div>
            
            <button class="detail-toggle" onclick="toggleDetail('agent-vs-chatbot-detail')">📖 자세히 보기</button>
            <div class="detail-content" id="agent-vs-chatbot-detail" style="display: none;">
                <h4>🤖 챗봇과 에이전트의 결정적 차이</h4>
                <p><strong>한마디로:</strong> 챗봇은 "컨설턴트", 에이전트는 "집행 비서"입니다.</p>
                
                <h5>🎯 실전 비교</h5>
                <div class="example-box">
                    <p><strong>요청:</strong> "내일 회의 자료를 만들어줘"</p>
                    <p><strong>챗봇 (ChatGPT):</strong></p>
                    <ul>
                        <li>"회의 자료는 이렇게 만드세요:"</li>
                        <li>1. 제목 슬라이드 만들기</li>
                        <li>2. 목차 작성하기</li>
                        <li>3. 본문 내용 채우기...</li>
                        <li>→ <strong>결과:</strong> 조언만 받음, 직접 작업해야 함</li>
                    </ul>
                    <p><strong>에이전트 (안티그래비티):</strong></p>
                    <ul>
                        <li>"회의자료.pptx 파일을 생성했습니다."</li>
                        <li>"Documents/Meetings/ 폴더에 저장했습니다."</li>
                        <li>"10페이지 분량으로 작성했습니다."</li>
                        <li>→ <strong>결과:</strong> 실제 파일이 만들어짐!</li>
                    </ul>
                </div>
                
                <h5>⚙️ 에이전트가 할 수 있는 것들</h5>
                <ol>
                    <li><strong>파일 시스템 제어:</strong> 폴더 생성, 파일 저장, 이름 변경, 삭제</li>
                    <li><strong>코드 실행:</strong> 프로그램 작성 및 실행, 버그 수정</li>
                    <li><strong>웹 브라우징:</strong> 정보 검색, 데이터 수집, 폼 작성</li>
                    <li><strong>API 호출:</strong> 외부 서비스 연동 (이메일, 캘린더, 데이터베이스)</li>
                    <li><strong>자동화:</strong> 반복 작업을 워크플로우로 저장</li>
                </ol>
                
                <h5>💡 왜 에이전트가 게임 체인저인가?</h5>
                <p>챗봇은 <strong>"복사-붙여넣기"</strong>가 필요합니다. 에이전트는 <strong>"실행"</strong>만 하면 됩니다. 시간 절약은 10배 이상입니다!</p>
            </div>
            
            <div class="tools-section">
                <h4>🔌 김비서의 3대 비밀 병기</h4>
                <div class="tools-grid">
                    <div class="tool-card">
                        <span class="tool-icon">🔗</span>
                        <h5>MCP</h5>
                        <p>외부 지식 연결 고리</p>
                        <button class="detail-toggle" onclick="toggleDetail('mcp-detail')">📖 자세히</button>
                    </div>
                    <div class="tool-card">
                        <span class="tool-icon">⏰</span>
                        <h5>Git</h5>
                        <p>작업 되돌리는 타임머신</p>
                        <button class="detail-toggle" onclick="toggleDetail('git-detail')">📖 자세히</button>
                    </div>
                    <div class="tool-card">
                        <span class="tool-icon">⚡</span>
                        <h5>Terminal</h5>
                        <p>실제 폴더/코딩 집행 창구</p>
                        <button class="detail-toggle" onclick="toggleDetail('terminal-detail')">📖 자세히</button>
                    </div>
                </div>
                
                <!-- MCP 상세 설명 -->
                <div class="detail-content" id="mcp-detail" style="display: none;">
                    <h4>🔗 MCP (Model Context Protocol)</h4>
                    <p><strong>한마디로:</strong> AI가 외부 데이터와 서비스에 접근할 수 있게 해주는 "플러그인 시스템"입니다.</p>
                    
                    <h5>🎯 MCP가 없다면?</h5>
                    <p>AI는 학습 데이터에만 의존합니다. 즉, <strong>실시간 정보, 내 파일, 회사 데이터베이스</strong>에 접근할 수 없습니다.</p>
                    
                    <h5>⚙️ MCP로 할 수 있는 것</h5>
                    <ul>
                        <li><strong>파일 시스템 MCP:</strong> 내 컴퓨터의 파일 읽기/쓰기</li>
                        <li><strong>데이터베이스 MCP:</strong> PostgreSQL, MySQL 등에 쿼리 실행</li>
                        <li><strong>웹 검색 MCP:</strong> 실시간 정보 검색</li>
                        <li><strong>Slack/Gmail MCP:</strong> 메시지 읽기/보내기</li>
                        <li><strong>Google Drive MCP:</b> 클라우드 파일 관리</li>
                    </ul>
                    
                    <h5>🔥 실전 예시</h5>
                    <div class="example-box">
                        <p><strong>요청:</strong> "지난주 Slack에서 '프로젝트 A' 관련 대화를 요약해줘"</p>
                        <p><strong>MCP 없이:</strong> "죄송합니다. Slack 데이터에 접근할 수 없습니다."</p>
                        <p><strong>MCP 사용:</strong> "Slack MCP를 통해 123개의 메시지를 분석했습니다. 주요 내용은..."</p>
                    </div>
                </div>
                
                <!-- Git 상세 설명 -->
                <div class="detail-content" id="git-detail" style="display: none;">
                    <h4>⏰ Git (버전 관리 시스템)</h4>
                    <p><strong>한마디로:</strong> 작업의 "타임머신"입니다. 언제든 과거로 돌아갈 수 있습니다.</p>
                    
                    <h5>🎯 왜 필요한가?</h5>
                    <p>AI가 코드를 수정하다가 망가뜨릴 수 있습니다. Git이 있으면 <strong>Ctrl+Z의 무한 버전</strong>이 가능합니다!</p>
                    
                    <h5>⚙️ Git의 핵심 개념</h5>
                    <ul>
                        <li><strong>Commit:</strong> 현재 상태를 "저장 포인트"로 기록</li>
                        <li><strong>Branch:</strong> 실험용 평행 세계 만들기</li>
                        <li><strong>Revert:</strong> 특정 시점으로 되돌리기</li>
                        <li><strong>History:</strong> 모든 변경 기록 조회</li>
                    </ul>
                    
                    <h5>🔥 실전 활용</h5>
                    <div class="example-box">
                        <p><strong>상황:</strong> AI가 코드를 수정했는데 프로그램이 안 돌아감</p>
                        <p><strong>Git 없이:</strong> "어디가 잘못됐지?" 하며 수동으로 복구 시도</p>
                        <p><strong>Git 사용:</strong> "git revert HEAD" 명령어로 1초 만에 이전 상태로 복구</p>
                    </div>
                    
                    <h5>💡 프로 팁</h5>
                    <p>AI에게 <strong>"작업 전에 git commit 해줘"</strong>라고 습관화하면, 안전하게 실험할 수 있습니다!</p>
                </div>
                
                <!-- Terminal 상세 설명 -->
                <div class="detail-content" id="terminal-detail" style="display: none;">
                    <h4>⚡ Terminal (터미널)</h4>
                    <p><strong>한마디로:</strong> 컴퓨터에게 직접 명령을 내리는 "지휘 본부"입니다.</p>
                    
                    <h5>🎯 왜 필요한가?</h5>
                    <p>마우스 클릭으로는 할 수 없는 <strong>강력한 작업</strong>들을 명령어로 실행할 수 있습니다.</p>
                    
                    <h5>⚙️ Terminal로 할 수 있는 것</h5>
                    <ul>
                        <li><strong>파일 관리:</strong> 100개 파일을 1초 만에 이름 변경</li>
                        <li><strong>프로그램 실행:</strong> 서버 시작, 스크립트 실행</li>
                        <li><strong>패키지 설치:</strong> npm, pip 등으로 라이브러리 설치</li>
                        <li><strong>시스템 제어:</b> 프로세스 관리, 환경 변수 설정</li>
                    </ul>
                    
                    <h5>🔥 자주 쓰는 명령어</h5>
                    <div class="example-box">
                        <p><strong>폴더 이동:</strong> cd Documents/Projects</p>
                        <p><strong>파일 목록:</strong> ls (Mac/Linux) 또는 dir (Windows)</p>
                        <p><strong>폴더 생성:</strong> mkdir new-project</p>
                        <p><strong>프로그램 실행:</strong> npm run dev</p>
                        <p><strong>Git 명령:</strong> git status, git commit -m "메시지"</p>
                    </div>
                    
                    <h5>💡 에이전트와의 조합</h5>
                    <p>AI 에이전트는 터미널 명령을 자동으로 실행할 수 있습니다. 여러분은 <strong>"프로젝트 폴더 만들고 npm 설치해줘"</strong>라고만 말하면 됩니다!</p>
                </div>
            </div>
            <button class="check-btn" onclick="markComplete(2)">✅ Part 2 완료</button>
        </section>
    `;
}

/**
 * Part 3: RTF 공식
 */
function renderPart3_RTFFormula() {
    return `
        <section class="lesson-section rtf-section">
            <h3>3. 프롬프트 필살기: RTF 공식 (⏱️ 20분)</h3>
            <p class="section-intro">결과가 마음에 안 들면 질문을 의심하세요.</p>
            
            <div class="rtf-formula">
                <div class="rtf-item">
                    <div class="rtf-letter">R</div>
                    <div class="rtf-content">
                        <h5>Role (역할)</h5>
                        <p>"너는 세계 최고의 기획자야"</p>
                    </div>
                </div>
                <div class="rtf-arrow">→</div>
                <div class="rtf-item">
                    <div class="rtf-letter">T</div>
                    <div class="rtf-content">
                        <h5>Task (과제)</h5>
                        <p>"홈페이지의 핵심 슬로건 5개를 지어줘"</p>
                    </div>
                </div>
                <div class="rtf-arrow">→</div>
                <div class="rtf-item">
                    <div class="rtf-letter">F</div>
                    <div class="rtf-content">
                        <h5>Format (형식)</h5>
                        <p>"표 형식으로, 타깃 고객별 장점 포함"</p>
                    </div>
                </div>
            </div>
            
            <button class="detail-toggle" onclick="toggleDetail('rtf-detail')">📖 자세히 보기</button>
            <div class="detail-content" id="rtf-detail" style="display: none;">
                <h4>📝 RTF 공식의 힘</h4>
                <p><strong>한마디로:</strong> AI에게 "누구 입장에서, 무엇을, 어떻게" 답변할지 명확히 알려주는 프롬프트 구조입니다.</p>
                
                <h5>🎯 왜 RTF가 중요한가?</h5>
                <p>같은 질문이라도 <strong>어떻게 물어보느냐</strong>에 따라 답변의 질이 10배 이상 차이납니다. RTF는 프롬프트 엔지니어링의 기본이자 핵심입니다.</p>
                
                <h5>⚙️ 각 요소 상세 설명</h5>
                
                <h6>1️⃣ Role (역할) - AI의 정체성 설정</h6>
                <div class="example-box">
                    <p><strong>나쁜 예:</strong> "마케팅 전략 알려줘"</p>
                    <p><strong>좋은 예:</strong> "너는 10년 경력의 디지털 마케팅 전문가야. 스타트업 마케팅에 특화되어 있어."</p>
                    <p><strong>효과:</strong> AI가 전문가 관점에서 깊이 있는 답변을 제공합니다.</p>
                </div>
                
                <h6>2️⃣ Task (과제) - 구체적인 요청사항</h6>
                <div class="example-box">
                    <p><strong>나쁜 예:</strong> "마케팅 해줘"</p>
                    <p><strong>좋은 예:</strong> "월 예산 100만원으로 인스타그램 광고 캠페인을 기획해줘. 타깃은 20-30대 여성이야."</p>
                    <p><strong>효과:</strong> 구체적일수록 실행 가능한 답변을 받습니다.</p>
                </div>
                
                <h6>3️⃣ Format (형식) - 결과물의 모양</h6>
                <div class="example-box">
                    <p><strong>나쁜 예:</strong> (형식 지정 없음)</p>
                    <p><strong>좋은 예:</strong> "표 형식으로 정리해줘. 각 전략마다 예상 비용, 기대 효과, 실행 난이도를 포함해."</p>
                    <p><strong>효과:</strong> 바로 사용할 수 있는 형태로 답변을 받습니다.</p>
                </div>
                
                <h5>🔥 실전 RTF 예시</h5>
                
                <h6>예시 1: 이메일 작성</h6>
                <div class="example-box">
                    <p><strong>R:</strong> "너는 친근하면서도 전문적인 고객 서비스 담당자야."</p>
                    <p><strong>T:</strong> "제품 배송 지연에 대한 사과 이메일을 작성해줘. 고객은 3일 늦게 받았어."</p>
                    <p><strong>F:</strong> "200자 이내로, 사과-설명-보상 순서로 작성해줘."</p>
                </div>
                
                <h6>예시 2: 데이터 분석</h6>
                <div class="example-box">
                    <p><strong>R:</strong> "너는 데이터 분석 전문가야. 비즈니스 인사이트 도출에 강해."</p>
                    <p><strong>T:</strong> "첨부한 매출 데이터에서 주요 트렌드 3가지를 찾아줘."</p>
                    <p><strong>F:</strong> "각 트렌드마다 그래프 설명, 원인 분석, 액션 아이템을 포함한 보고서 형식으로."</p>
                </div>
                
                <h5>💡 고급 팁</h5>
                <ol>
                    <li><strong>역할을 구체적으로:</strong> "마케터" 보다 "B2B SaaS 마케팅 전문가"가 더 좋습니다.</li>
                    <li><strong>제약 조건 추가:</strong> "300자 이내", "초등학생도 이해할 수 있게" 등</li>
                    <li><strong>예시 제공:</strong> "이런 스타일로: [예시]"</li>
                    <li><strong>단계별 요청:</strong> 복잡한 작업은 "먼저 A를 하고, 그 다음 B를 해줘"</li>
                </ol>
                
                <h5>⚠️ 흔한 실수</h5>
                <div class="warning-box">
                    <p><strong>실수 1:</strong> 역할 없이 과제만 던지기 → AI가 일반적인 답변만 제공</p>
                    <p><strong>실수 2:</strong> 형식 지정 없이 요청 → 사용하기 어려운 형태로 답변</p>
                    <p><strong>실수 3:</strong> 너무 모호한 과제 → AI가 추측해서 엉뚱한 답변</p>
                </div>
            </div>
            
            <div class="copy-template">
                <h5>📋 복사해서 쓰는 RTF 템플릿</h5>
                <div class="code-box">
                    <code>너는 [전문가 역할]이야. [구체적 과제]를 해줘. [원하는 형식]으로 결과를 보여줘.</code>
                    <button class="copy-btn" onclick="copyTemplate()">📋 복사</button>
                </div>
            </div>
            <button class="check-btn" onclick="markComplete(3)">✅ Part 3 완료</button>
        </section>
    `;
}

/**
 * Part 4: 실습 미션
 */
function renderPart4_Mission() {
    return `
        <section class="lesson-section mission-section">
            <h3>4. [집중 실습] Project: THE COMMAND CENTER (⏱️ 30분)</h3>
            <div class="mission-box">
                <h4>🎯 미션: 나의 첫 AI 집무실(웹사이트) 뼈대 만들기</h4>
                <div class="mission-command">
                    <p>에이전트에게 아래 명령을 내려 실제 시스템을 구축하세요:</p>
                    <div class="command-box">
                        <code>"에이전트, Projects/The_Command_Center 폴더를 만들고 Vite 리액트 프로젝트를 생성해줘. 메인 화면 중앙에 'AI Base Online'이라고 크게 써주고 배경은 검정색으로 바꿔줘."</code>
                        <button class="copy-btn" onclick="copyCommand()">📋 복사</button>
                    </div>
                </div>
                
                <div class="troubleshooting">
                    <h5>🆘 김비서 구조대 - 트러블슈팅</h5>
                    <ul>
                        <li><strong>명령 수행이 안 될 때:</strong> "에러 로그를 읽고 원인을 단계별로 생각해서 다시 시도해"</li>
                        <li><strong>엉뚱한 결과가 나올 때:</strong> "내 의도는 ~였어. 다시 한번 분석해봐"</li>
                    </ul>
                </div>
            </div>
            
            <button class="detail-toggle" onclick="toggleDetail('antigravity-setup-detail')">📖 안티그래비티 완벽 가이드 보기</button>
            <div class="detail-content" id="antigravity-setup-detail" style="display: none;">
                <h4>🚀 안티그래비티 (Antigravity) 완벽 설치 & 사용 가이드</h4>
                <p><strong>한마디로:</strong> Google의 Gemini AI를 VS Code에서 에이전트로 사용할 수 있게 해주는 확장 프로그램입니다.</p>
                
                <h5>📋 사전 준비물 체크리스트</h5>
                <ol>
                    <li>✅ <strong>VS Code</strong> 설치 (최신 버전 권장)</li>
                    <li>✅ <strong>Google 계정</strong> (Gemini API 키 발급용)</li>
                    <li>✅ <strong>Node.js</strong> 설치 (v18 이상 권장)</li>
                    <li>✅ <strong>Git</strong> 설치 (버전 관리용)</li>
                </ol>
                
                <h5>🎯 STEP 1: Gemini API 키 발급받기</h5>
                <div class="example-box">
                    <p><strong>1단계:</strong> <a href="https://aistudio.google.com/apikey" target="_blank">Google AI Studio</a> 접속</p>
                    <p><strong>2단계:</strong> Google 계정으로 로그인</p>
                    <p><strong>3단계:</strong> "Get API Key" 또는 "Create API Key" 버튼 클릭</p>
                    <p><strong>4단계:</strong> 생성된 API 키 복사 (예: AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXX)</p>
                    <p><strong>⚠️ 주의:</strong> API 키는 절대 공개하지 마세요! 비밀번호처럼 관리하세요.</p>
                </div>
                
                <h5>🎯 STEP 2: VS Code에 안티그래비티 설치</h5>
                <div class="example-box">
                    <p><strong>방법 1: Extensions 마켓플레이스에서 설치</strong></p>
                    <ol>
                        <li>VS Code 좌측 사이드바에서 Extensions 아이콘 클릭 (또는 Ctrl+Shift+X)</li>
                        <li>검색창에 "Antigravity" 입력</li>
                        <li>"Install" 버튼 클릭</li>
                        <li>설치 완료 후 VS Code 재시작</li>
                    </ol>
                    
                    <p><strong>방법 2: 명령어로 설치 (고급)</strong></p>
                    <code>code --install-extension google.antigravity</code>
                </div>
                
                <h5>🎯 STEP 3: API 키 설정하기</h5>
                <div class="example-box">
                    <p><strong>1단계:</strong> VS Code에서 Ctrl+Shift+P (Mac: Cmd+Shift+P) 눌러 Command Palette 열기</p>
                    <p><strong>2단계:</strong> "Antigravity: Set API Key" 입력 후 선택</p>
                    <p><strong>3단계:</strong> 복사한 Gemini API 키 붙여넣기</p>
                    <p><strong>4단계:</strong> Enter 키로 저장</p>
                    <p><strong>✅ 확인:</strong> 우측 하단에 "API Key saved successfully" 메시지 표시</p>
                </div>
                
                <h5>🎯 STEP 4: 첫 대화 시작하기</h5>
                <div class="example-box">
                    <p><strong>방법 1: 사이드바에서 시작</strong></p>
                    <ol>
                        <li>VS Code 좌측 사이드바에서 Antigravity 아이콘 클릭</li>
                        <li>"New Chat" 버튼 클릭</li>
                        <li>채팅창 하단 입력창에 메시지 입력</li>
                    </ol>
                    
                    <p><strong>방법 2: 단축키로 시작 (빠름!)</strong></p>
                    <p>Ctrl+Shift+A (Mac: Cmd+Shift+A) → 즉시 채팅창 열림</p>
                </div>
                
                <h5>🔥 실전 사용 예시</h5>
                
                <h6>예시 1: 프로젝트 폴더 생성 및 초기화</h6>
                <div class="example-box">
                    <p><strong>명령:</strong> "Projects 폴더 안에 My_First_App이라는 폴더를 만들고, 그 안에 index.html, style.css, script.js 파일을 생성해줘"</p>
                    <p><strong>결과:</strong> 안티그래비티가 자동으로 폴더와 파일 생성</p>
                    <p><strong>확인:</strong> VS Code 탐색기에서 생성된 파일 확인 가능</p>
                </div>
                
                <h6>예시 2: React 프로젝트 생성</h6>
                <div class="example-box">
                    <p><strong>명령:</strong> "Vite를 사용해서 React 프로젝트를 생성해줘. 프로젝트 이름은 'my-react-app'이야"</p>
                    <p><strong>결과:</strong> 안티그래비티가 npm create vite 명령 실행 및 설정</p>
                    <p><strong>추가 명령:</strong> "이제 npm install을 실행해서 의존성을 설치해줘"</p>
                </div>
                
                <h6>예시 3: 코드 작성 및 수정</h6>
                <div class="example-box">
                    <p><strong>명령:</strong> "index.html에 간단한 로그인 폼을 만들어줘. 이메일과 비밀번호 입력창, 로그인 버튼이 필요해"</p>
                    <p><strong>결과:</strong> 안티그래비티가 HTML 코드 작성 및 파일 저장</p>
                    <p><strong>수정 명령:</strong> "로그인 버튼 색깔을 파란색으로 바꿔줘"</p>
                </div>
                
                <h5>💡 프로 팁: 효과적인 명령어 작성법</h5>
                <ol>
                    <li><strong>구체적으로 요청:</strong> "웹사이트 만들어줘" ❌ → "검정 배경에 흰 글씨로 'Hello World'를 표시하는 HTML 파일 만들어줘" ✅</li>
                    <li><strong>단계별로 진행:</strong> 복잡한 작업은 여러 단계로 나눠서 요청</li>
                    <li><strong>확인 요청:</strong> "제대로 작동하는지 확인해줘"라고 추가 요청</li>
                    <li><strong>에러 발생 시:</strong> "에러 메시지를 읽고 문제를 해결해줘"</li>
                </ol>
                
                <h5>🆘 자주 발생하는 문제 & 해결법</h5>
                
                <h6>문제 1: "API Key가 유효하지 않습니다"</h6>
                <div class="warning-box">
                    <p><strong>원인:</strong> API 키가 잘못 입력되었거나 만료됨</p>
                    <p><strong>해결:</strong> Google AI Studio에서 새 API 키 발급 후 재설정</p>
                </div>
                
                <h6>문제 2: "명령이 실행되지 않습니다"</h6>
                <div class="warning-box">
                    <p><strong>원인:</strong> 터미널 권한 부족 또는 Node.js 미설치</p>
                    <p><strong>해결:</strong> VS Code를 관리자 권한으로 실행 또는 Node.js 설치 확인</p>
                </div>
                
                <h6>문제 3: "파일이 생성되지 않습니다"</h6>
                <div class="warning-box">
                    <p><strong>원인:</strong> 작업 폴더가 열려있지 않음</p>
                    <p><strong>해결:</strong> VS Code에서 File → Open Folder로 작업 폴더 먼저 열기</p>
                </div>
                
                <h5>🎓 고급 기능</h5>
                <ol>
                    <li><strong>파일 읽기:</strong> "index.html 파일을 읽고 문제점을 찾아줘"</li>
                    <li><strong>리팩토링:</strong> "이 코드를 더 깔끔하게 정리해줘"</li>
                    <li><strong>디버깅:</strong> "왜 버튼이 작동하지 않는지 분석해줘"</li>
                    <li><strong>문서화:</strong> "이 함수에 주석을 추가해줘"</li>
                    <li><strong>테스트:</strong> "이 기능이 제대로 작동하는지 테스트 코드 작성해줘"</li>
                </ol>
                
                <h5>✨ 실전 미션: Command Center 만들기</h5>
                <div class="example-box">
                    <p><strong>목표:</strong> 나만의 AI 작업 공간 웹사이트 만들기</p>
                    <p><strong>명령 1:</strong> "Documents/Projects 폴더에 The_Command_Center 폴더 만들어줘"</p>
                    <p><strong>명령 2:</strong> "Vite로 바닐라 JavaScript 프로젝트 생성해줘"</p>
                    <p><strong>명령 3:</strong> "index.html을 수정해서 중앙에 'AI Base Online'이라는 큰 제목을 표시해줘. 배경은 검정색, 글자는 흰색으로"</p>
                    <p><strong>명령 4:</strong> "npm run dev로 개발 서버 실행해줘"</p>
                    <p><strong>명령 5:</strong> "브라우저에서 localhost:5173 열어서 확인해줘"</p>
                </div>
            </div>
            
            <button class="check-btn" onclick="markComplete(4)">✅ Part 4 완료</button>
        </section>
    `;
}

/**
 * Part 5: 셀프 퀴즈
 */
function renderPart5_Quiz() {
    return `
        <section class="lesson-section quiz-section">
            <h3>5. 마무리: 셀프 퀴즈 (⏱️ 10분)</h3>
            <div class="quiz-container">
                <div class="quiz-item">
                    <p class="quiz-q">Q1. AI가 오픈북처럼 정보를 참조하는 기술은?</p>
                    <input type="text" class="quiz-input" id="q1" placeholder="정답을 입력하세요">
                    <button onclick="checkAnswer(1, 'RAG')">확인</button>
                    <span class="quiz-result" id="result1"></span>
                </div>
                <div class="quiz-item">
                    <p class="quiz-q">Q2. 비서에게 폴더 생성을 시키는 주된 도구는?</p>
                    <input type="text" class="quiz-input" id="q2" placeholder="정답을 입력하세요">
                    <button onclick="checkAnswer(2, '터미널')">확인</button>
                    <span class="quiz-result" id="result2"></span>
                </div>
            </div>
            <button class="check-btn" onclick="markComplete(5)">✅ Part 5 완료</button>
        </section>
    `;
}

/**
 * DAY 1 푸터
 */
function renderDay1Footer() {
    return `
        <footer class="content-footer">
            <div class="completion-badge" id="completion-badge" style="display: none;">
                <h3>🎉 DAY 1 완료!</h3>
                <p>완전 럭키비키! 2시간 꽉 채웠다! 폼 미쳤다!</p>
            </div>
            <button class="btn-primary" onclick="alert('DAY 2는 곧 오픈됩니다! 🚀')">다음: DAY 2로 →</button>
        </footer>
    `;
}

// ============================================================
// 5. 인터랙션 핸들러
// ============================================================

/**
 * 파트 완료 처리
 */
function markComplete(partNum) {
    completedParts.add(partNum);
    const progress = (completedParts.size / 5) * 100;
    document.getElementById('overall-progress').style.width = progress + '%';
    document.querySelector('.progress-text').textContent = Math.round(progress) + '%';
    
    if (completedParts.size === 5) {
        document.getElementById('completion-badge').style.display = 'block';
    }
    
    event.target.textContent = '✅ 완료됨!';
    event.target.disabled = true;
}

/**
 * RTF 템플릿 복사
 */
function copyTemplate() {
    const text = "너는 [전문가 역할]이야. [구체적 과제]를 해줘. [원하는 형식]으로 결과를 보여줘.";
    navigator.clipboard.writeText(text);
    alert('RTF 템플릿이 복사되었습니다! 📋');
}

/**
 * 실습 명령어 복사
 */
function copyCommand() {
    const text = "에이전트, Projects/The_Command_Center 폴더를 만들고 Vite 리액트 프로젝트를 생성해줘. 메인 화면 중앙에 'AI Base Online'이라고 크게 써주고 배경은 검정색으로 바꿔줘.";
    navigator.clipboard.writeText(text);
    alert('미션 명령어가 복사되었습니다! 📋');
}

/**
 * 퀴즈 정답 확인
 */
function checkAnswer(qNum, correctAnswer) {
    const input = document.getElementById('q' + qNum).value.trim();
    const result = document.getElementById('result' + qNum);
    
    if (input.toLowerCase().includes(correctAnswer.toLowerCase()) || 
        (qNum === 2 && input.toLowerCase().includes('terminal'))) {
        result.textContent = '✅ 정답!';
        result.style.color = '#10b981';
    } else {
        result.textContent = '❌ 다시 생각해보세요';
        result.style.color = '#ef4444';
    }
}

/**
 * 상세 설명 토글 (아코디언)
 */
function toggleDetail(detailId) {
    const detail = document.getElementById(detailId);
    const button = event.target;
    
    if (detail.style.display === 'none') {
        detail.style.display = 'block';
        button.textContent = '📕 접기';
    } else {
        detail.style.display = 'none';
        button.textContent = '📖 자세히 보기';
    }
}

/**
 * DAY 로드 (향후 구현)
 */
function loadDay(dayNum) {
    if (dayNum === 1) {
        // 이미 DAY 1이므로 아무것도 하지 않음
        return;
    }
    alert(`DAY ${dayNum}은 곧 오픈됩니다! 🚀`);
}

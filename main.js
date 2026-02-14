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
    // 암호 인증
    const userPassword = prompt('🔐 암호를 입력하세요:');
    
    if (!userPassword) return;

    const lowerPw = userPassword.trim().toLowerCase();
    const isValid = lowerPw === 'qkrtldncksqkqh' || 
                    lowerPw === 'rlaalsrbwkdwkdaos' || 
                    lowerPw === 'min9man9' ||
                    lowerPw === 'mingcom' ||
                    userPassword.trim() === '김민규짱짱맨' ||
                    userPassword.trim() === '밍컴';
    
    if (!isValid) {
        alert('❌ 암호가 틀렸습니다!');
        return;
    }
    
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
                <div class="nav-item" id="nav-day1" onclick="switchDay(1)">📚 DAY 1: Basics</div>
                <div class="nav-item" id="nav-day2" onclick="switchDay(2)">🚀 DAY 2: Action</div>
                <div class="nav-item" id="nav-day3" onclick="switchDay(3)">👑 DAY 3: Master</div>
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
            <p class="section-intro">AI를 제대로 다루기 위해 반드시 알아야 할 10가지 핵심 개념을 정리합니다.</p>
            
            <div class="dictionary-trigger-box">
                <div class="dictionary-card" onclick="openDictionaryModal()">
                    <div class="card-icon">📖</div>
                    <h4>AI 용어 대백과사전 열기</h4>
                    <p>안티그래비티 에이전트를 조종하기 위한 필수 지식 10가지를 확인하세요.</p>
                    <button class="open-modal-btn">사전 열기</button>
                </div>
            </div>
            
            <button class="check-btn" onclick="markComplete(1)">✅ Part 1 완료</button>
        </section>
    `;
}

/**
 * 용어 사전 모달 열기
 */
function openDictionaryModal() {
    const modalHtml = `
        <div id="dictionary-modal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>📚 안티그래비티 AI 핵심 용어전 (10)</h2>
                    <button class="close-modal" onclick="closeDictionaryModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-term-grid">
                        <div class="modal-term-item">
                            <h5>1. LLM (대규모 언어 모델)</h5>
                            <p>AI의 '뇌'입니다. 수조 개의 단어를 학습하여 인간처럼 대화하고 추론하는 초거대 AI 모델입니다.</p>
                        </div>
                        <div class="modal-term-item">
                            <h5>2. RAG (검색 증강 생성)</h5>
                            <p>오픈북 테스트 기술입니다. AI가 모르는 최신 정보나 나만의 문서를 검색해서 답변에 참고하는 기술입니다.</p>
                        </div>
                        <div class="modal-term-item">
                            <h5>3. Hallucination (환각)</h5>
                            <p>AI가 그럴듯하게 거짓말을 하는 현상입니다. 사실 확인(Fact-check)이 필요한 근본적인 이유입니다.</p>
                        </div>
                        <div class="modal-term-item">
                            <h5>4. Token (토큰)</h5>
                            <p>AI가 글자를 읽는 소리값 단위입니다. 비용 계산과 AI의 기억력 한계를 결정짓는 기준이 됩니다.</p>
                        </div>
                        <div class="modal-term-item">
                            <h5>5. Prompt (프롬프트)</h5>
                            <p>AI에게 내리는 지휘 명령입니다. 어떻게 질문하느냐에 따라 AI의 지능 수준이 180도 달라집니다.</p>
                        </div>
                        <div class="modal-term-item">
                            <h5>6. Agent (에이전트)</h5>
                            <p>말만 하는 챗봇을 넘어, 스스로 판단하고 도구를 사용하여 목표를 달성하는 '실행형 AI'입니다.</p>
                        </div>
                        <div class="modal-term-item">
                            <h5>7. Fine-tuning (미세 조정)</h5>
                            <p>기존 AI를 특정 분야의 데이터로 추가 학습시켜 해당 분야의 전문가로 만드는 과정입니다.</p>
                        </div>
                        <div class="modal-term-item">
                            <h5>8. Temperature (온도)</h5>
                            <p>답변의 창의성 조절값입니다. 0이면 일관적이고 논리적이며, 1에 가까우면 창의적이고 무작위적입니다.</p>
                        </div>
                        <div class="modal-term-item">
                            <h5>9. Zero-shot / Few-shot</h5>
                            <p>예시 없이 바로 시키면 제로샷, 2~3개의 예시를 보여주고 시키면 퓨샷(정확도 향상)이라고 합니다.</p>
                        </div>
                        <div class="modal-term-item">
                            <h5>10. Context Window (컨텍스트 윈도우)</h5>
                            <p>AI의 '단기 기억상실' 범위를 결정합니다. 한 번에 기억할 수 있는 정보의 총량을 뜻합니다.</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="modal-confirm-btn" onclick="closeDictionaryModal()">확인했습니다!</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    setTimeout(() => {
        document.getElementById('dictionary-modal').classList.add('active');
    }, 10);
}

/**
 * 용어 사전 모달 닫기
 */
function closeDictionaryModal() {
    const modal = document.getElementById('dictionary-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
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
                
                <h5>🤔 시작하기 전에: 용어 설명</h5>
                <div class="example-box">
                    <p><strong>Q: VS Code가 뭔가요?</strong></p>
                    <p><strong>A:</strong> <strong>Visual Studio Code</strong>의 줄임말로, Microsoft에서 만든 <strong>무료 코드 편집기</strong>입니다.</p>
                    <ul>
                        <li>메모장의 프로급 버전이라고 생각하세요</li>
                        <li>전세계 프로그래머들이 가장 많이 쓰는 도구</li>
                        <li>코드 작성, 파일 관리, 프로그램 실행을 한 곳에서!</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 메모장 = 연필, VS Code = 만년필 + 지우개 + 형광펜 + 자동완성 기능이 다 있는 스마트 펜!</p>
                </div>
                
                <div class="example-box">
                    <p><strong>Q: 확장 프로그램(Extension)이 뭔가요?</strong></p>
                    <p><strong>A:</strong> 프로그램에 <strong>추가 기능을 붙이는 플러그인</strong>입니다.</p>
                    <ul>
                        <li>VS Code 자체는 기본 편집 기능만 제공</li>
                        <li>확장 프로그램으로 AI, 번역, 테마 등 추가 기능 설치</li>
                        <li>안티그래비티도 VS Code의 확장 프로그램 중 하나!</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 카카오톡 이모티콘처럼, 카카오톡 앱이 있어야 이모티콘을 쓸 수 있듯이, <strong>VS Code가 있어야 안티그래비티를 쓸 수 있습니다!</strong></p>
                </div>
                
                <div class="example-box">
                    <p><strong>Q: 왜 웹에서 "안티그래비티 다운로드"를 검색하면 안 나와요?</strong></p>
                    <p><strong>A:</strong> 안티그래비티는 <strong>독립 프로그램이 아니라 VS Code 전용 확장</strong>이기 때문입니다!</p>
                    <ul>
                        <li>설치 파일(.exe)이 따로 없어요</li>
                        <li>반드시 VS Code 안에서 설치해야 합니다</li>
                        <li>웹에서 검색해도 결국 "VS Code에서 설치하세요"라고 나옴</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 크롬 브라우저 확장 프로그램(광고 차단 등)을 웹에서 따로 다운받을 수 없는 것과 같아요. 크롬 안에서만 설치 가능!</p>
                </div>
                
                <div class="example-box">
                    <p><strong>Q: Vite가 뭔가요?</strong></p>
                    <p><strong>A:</strong> 웹 프로젝트를 <strong>자동으로 세팅해주는 도구</strong>입니다.</p>
                    <ul>
                        <li>React, Vue 같은 프로젝트를 1분 만에 생성</li>
                        <li>개발 서버도 자동으로 실행</li>
                        <li>초보자가 수동으로 하면 30분 걸릴 걸 자동화!</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 집을 지을 때 기초 공사를 자동으로 해주는 건설 로봇! 여러분은 인테리어(디자인)만 하면 됩니다.</p>
                </div>
                
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
        <div class="day-footer">
            <div class="completion-badge">
                <h3>🎉 DAY 1 완료 예정!</h3>
                <p>모든 Part를 완료하면 DAY 2로 넘어갈 수 있습니다!</p>
                <button class="next-day-btn" onclick="switchDay(2)">
                    🚀 DAY 2로 이동하기
                </button>
            </div>
        </div>
    `;
}


/**
 * DAY 2 콘텐츠 렌더링
 */
function renderDay2Content() {
    return `
        <div class="day-content">
            <h2>DAY 2: AI 실무 응용 - 나만의 에이전트 만들기! 🤖</h2>
            <p class="day-intro">오늘은 여러분만의 AI 에이전트를 직접 만들어봅니다. 단순히 대화하는 챗봇이 아니라, 실제로 일을 처리하는 비서를 만드는 거예요!</p>
            
            ${renderDay2Part1_WhatIsAgent()}
            ${renderDay2Part2_BuildAgent()}
            ${renderDay2Part2_5_Skills()}
            ${renderDay2Part3_AgentPowers()}
            ${renderDay2Part4_Mission()}
            ${renderDay2Part5_Quiz()}
            ${renderDay2Footer()}
        </div>
    `;
}

/**
 * Part 1: 에이전트란 무엇인가?
 */
function renderDay2Part1_WhatIsAgent() {
    return `
        <section class="lesson-section">
            <h3>1. 에이전트란 무엇인가? (⏱️ 20분)</h3>
            <p class="section-intro">챗봇은 말만 하지만, 에이전트는 직접 행동합니다!</p>
            
            <div class="comparison-box">
                <div class="compare-item chatbot">
                    <h4>💬 일반 챗봇</h4>
                    <p>"이렇게 하세요"</p>
                    <ul>
                        <li>조언만 제공</li>
                        <li>사용자가 직접 실행</li>
                        <li>복사-붙여넣기 필요</li>
                    </ul>
                </div>
                <div class="vs-divider">VS</div>
                <div class="compare-item agent">
                    <h4>🤖 AI 에이전트</h4>
                    <p>"제가 했습니다!"</p>
                    <ul>
                        <li>직접 실행</li>
                        <li>결과물 생성</li>
                        <li>자동화 가능</li>
                    </ul>
                </div>
            </div>
            
            <button class="detail-toggle" onclick="toggleDetail('agent-concept-detail')">📖 자세히 보기</button>
            <div class="detail-content" id="agent-concept-detail" style="display: none;">
                <h4>🤖 에이전트의 3가지 핵심 능력</h4>
                
                <h5>1️⃣ 도구 사용 (Tool Use)</h5>
                <div class="example-box">
                    <p><strong>설명:</strong> 에이전트는 다양한 도구를 사용할 수 있습니다.</p>
                    <ul>
                        <li>파일 시스템: 파일 읽기/쓰기/삭제</li>
                        <li>웹 브라우저: 정보 검색, 데이터 수집</li>
                        <li>API 호출: 외부 서비스 연동</li>
                        <li>코드 실행: 프로그램 작성 및 실행</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 사람이 망치, 드라이버, 톱을 쓰듯이, 에이전트도 다양한 디지털 도구를 사용합니다!</p>
                </div>
                
                <h5>2️⃣ 자율 판단 (Autonomous Decision)</h5>
                <div class="example-box">
                    <p><strong>설명:</strong> 에이전트는 상황을 보고 스스로 판단합니다.</p>
                    <ul>
                        <li>에러 발생 시 자동으로 다른 방법 시도</li>
                        <li>필요한 정보가 부족하면 추가 질문</li>
                        <li>작업 순서를 스스로 계획</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 레시피만 보는 요리사 vs 재료 보고 즉흥 요리하는 셰프!</p>
                </div>
                
                <h5>3️⃣ 연속 작업 (Chain of Actions)</h5>
                <div class="example-box">
                    <p><strong>설명:</strong> 여러 단계의 작업을 순서대로 처리합니다.</p>
                    <ul>
                        <li>1단계: 데이터 수집</li>
                        <li>2단계: 분석 및 가공</li>
                        <li>3단계: 보고서 작성</li>
                        <li>4단계: 이메일 발송</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 단일 명령 로봇 vs 전체 프로세스를 관리하는 프로젝트 매니저!</p>
                </div>
            </div>
            
            <button class="check-btn" onclick="markComplete(6)">✅ Part 1 완료</button>
        </section>
    `;
}

/**
 * Part 2: 안티그래비티 에이전트 만들기
 */
function renderDay2Part2_BuildAgent() {
    return `
        <section class="lesson-section">
            <h3>2. 안티그래비티 에이전트 만들기 (⏱️ 40분)</h3>
            <p class="section-intro">이제 여러분만의 AI 에이전트를 직접 만들어봅시다!</p>
            
            <div class="mission-box">
                <h4>🎯 미션: 나만의 AI 비서 만들기</h4>
                <p>안티그래비티를 사용해서 파일을 관리하고, 코드를 작성하는 에이전트를 만들어봅니다.</p>
            </div>
            
            <button class="detail-toggle" onclick="toggleDetail('build-agent-detail')">📖 완벽 가이드 보기</button>
            <div class="detail-content" id="build-agent-detail" style="display: none;">
                <h4>🚀 에이전트 만들기 완벽 가이드</h4>
                
                <h5>STEP 1: 에이전트 역할 정의하기</h5>
                <div class="example-box">
                    <p><strong>중요:</strong> 에이전트에게 명확한 역할을 부여하세요!</p>
                    <p><strong>나쁜 예:</strong> "도와줘"</p>
                    <p><strong>좋은 예:</strong> "너는 내 개인 비서야. 파일 정리, 코드 작성, 정보 검색을 도와줘."</p>
                </div>
                
                <h5>STEP 2: 첫 번째 작업 시키기</h5>
                <div class="example-box">
                    <p><strong>명령 예시 1: 폴더 정리</strong></p>
                    <code>"Documents 폴더에 있는 모든 PDF 파일을 찾아서 'PDFs'라는 새 폴더로 이동시켜줘"</code>
                    
                    <p><strong>명령 예시 2: 코드 작성</strong></p>
                    <code>"Python으로 간단한 계산기 프로그램을 만들어줘. 더하기, 빼기, 곱하기, 나누기 기능이 필요해"</code>
                    
                    <p><strong>명령 예시 3: 정보 검색</strong></p>
                    <code>"2024년 AI 트렌드를 검색해서 5가지로 요약해줘"</code>
                </div>
                
                <h5>STEP 3: 에이전트 능력 확장하기</h5>
                <div class="example-box">
                    <p><strong>파일 관리 능력</strong></p>
                    <ul>
                        <li>"이 폴더의 모든 이미지를 크기별로 분류해줘"</li>
                        <li>"중복 파일을 찾아서 삭제해줘"</li>
                        <li>"파일 이름을 날짜 형식으로 변경해줘"</li>
                    </ul>
                    
                    <p><strong>코드 작성 능력</strong></p>
                    <ul>
                        <li>"웹 스크래핑 코드를 작성해줘"</li>
                        <li>"데이터를 CSV로 저장하는 함수 만들어줘"</li>
                        <li>"이 코드의 버그를 찾아서 수정해줘"</li>
                    </ul>
                    
                    <p><strong>자동화 능력</strong></p>
                    <ul>
                        <li>"매일 아침 9시에 뉴스를 요약해주는 스크립트 만들어줘"</li>
                        <li>"특정 폴더에 파일이 추가되면 자동으로 백업하는 프로그램 만들어줘"</li>
                    </ul>
                </div>
                
                <h5>💡 프로 팁: 효과적인 에이전트 사용법</h5>
                <ol>
                    <li><strong>구체적으로 요청:</strong> "파일 정리해줘" ❌ → "Documents 폴더의 2023년 파일을 연도별 폴더로 정리해줘" ✅</li>
                    <li><strong>단계별 진행:</strong> 복잡한 작업은 여러 단계로 나눠서 요청</li>
                    <li><strong>확인 요청:</strong> "제대로 작동하는지 테스트해줘"</li>
                    <li><strong>피드백 제공:</strong> "좋아, 이제 여기에 에러 처리 기능도 추가해줘"</li>
                </ol>
                
                <h5>⚠️ 주의사항</h5>
                <div class="warning-box">
                    <p><strong>1. 중요한 파일은 백업하세요</strong></p>
                    <p>에이전트가 파일을 삭제하거나 수정할 수 있으니, 중요한 데이터는 미리 백업!</p>
                    
                    <p><strong>2. 권한 확인하세요</strong></p>
                    <p>시스템 파일이나 중요한 폴더는 건드리지 않도록 명확히 지시하세요.</p>
                    
                    <p><strong>3. 결과를 항상 확인하세요</strong></p>
                    <p>에이전트가 작업을 완료하면 반드시 결과를 확인하고 검증하세요!</p>
                </div>
            </div>
            
            <button class="check-btn" onclick="markComplete(7)">✅ Part 2 완료</button>
        </section>
    `;
}

/**
 * Part 3: 에이전트에게 능력 부여하기
 */

/**
 * Part 2.5: Skill - 에이전트를 전문가로 만들기
 */
function renderDay2Part2_5_Skills() {
    return `
        <section class="lesson-section">
            <h3>2.5 Skill: 에이전트를 전문가로 만들기 (⏱️ 20분)</h3>
            <p class="section-intro">Skill을 사용하면 에이전트가 특정 분야의 전문가가 됩니다!</p>
            
            <button class="detail-toggle" onclick="toggleDetail('skill-concept-detail')">📖 Skill 완벽 가이드 보기</button>
            <div class="detail-content" id="skill-concept-detail" style="display: none;">
                <h4>🎯 Skill이란?</h4>
                <p><strong>한마디로:</strong> AI 에이전트에게 특별한 능력을 가르치는 <strong>교육 자료</strong>입니다.</p>
                
                <h5>🤔 용어 설명</h5>
                <div class="example-box">
                    <p><strong>Q: Skill이 뭔가요?</strong></p>
                    <p><strong>A:</strong> 에이전트가 특정 작업을 잘하도록 만드는 <strong>설명서 + 예시 모음</strong>입니다.</p>
                    <p><strong>💡 비유:</strong> 요리책! 일반 요리사(에이전트)에게 "프랑스 요리 레시피(Skill)"를 주면 프랑스 요리 전문가가 됩니다!</p>
                </div>
                
                <div class="example-box">
                    <p><strong>Q: React가 뭔가요?</strong></p>
                    <p><strong>A:</strong> Facebook(Meta)에서 만든 <strong>웹사이트 만드는 도구</strong>입니다.</p>
                    <ul>
                        <li>웹페이지를 "컴포넌트"라는 블록으로 나눠서 만듦</li>
                        <li>레고 블록처럼 조립해서 웹사이트 완성</li>
                        <li>전세계에서 가장 많이 쓰는 웹 개발 도구</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 레고! 작은 블록(컴포넌트)을 조립해서 큰 작품(웹사이트)을 만듭니다.</p>
                </div>
                
                <div class="example-box">
                    <p><strong>Q: Next.js가 뭔가요?</strong></p>
                    <p><strong>A:</strong> React를 더 쉽고 강력하게 만들어주는 <strong>프레임워크</strong>입니다.</p>
                    <ul>
                        <li>React에 추가 기능을 붙인 업그레이드 버전</li>
                        <li>SEO(검색 최적화), 성능 향상 자동 처리</li>
                        <li>복잡한 설정 없이 바로 시작 가능</li>
                    </ul>
                    <p><strong>💡 비유:</strong> React = 자전거, Next.js = 전기 자전거! 기본은 같지만 더 편하고 빠릅니다.</p>
                </div>
                
                <div class="example-box">
                    <p><strong>Q: TypeScript가 뭔가요?</strong></p>
                    <p><strong>A:</strong> JavaScript에 <strong>타입 체크 기능</strong>을 추가한 언어입니다.</p>
                    <ul>
                        <li>JavaScript = 자유분방 (에러를 실행 전까지 모름)</li>
                        <li>TypeScript = 엄격 (코드 작성 중에 에러 미리 발견)</li>
                        <li>대규모 프로젝트에서 버그 예방</li>
                    </ul>
                    <p><strong>💡 비유:</strong> JavaScript = 자유 작문, TypeScript = 맞춤법 검사기가 있는 작문!</p>
                </div>
                
                <div class="example-box">
                    <p><strong>Q: Tailwind CSS가 뭔가요?</strong></p>
                    <p><strong>A:</strong> 웹사이트 디자인을 빠르게 만드는 <strong>CSS 도구</strong>입니다.</p>
                    <ul>
                        <li>미리 만들어진 스타일 클래스 사용</li>
                        <li>"bg-blue-500" = 파란색 배경</li>
                        <li>일일이 CSS 파일 작성 안 해도 됨</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 옷장에서 옷 골라 입기 vs 옷감부터 재단해서 만들기!</p>
                </div>
                
                <h5>📁 Skill 구조</h5>
                <div class="example-box">
                    <p>Skill은 폴더 안에 파일들로 구성됩니다:</p>
                    <pre><code>.agent/skills/
└── web-development/      # Skill 폴더
    ├── SKILL.md          # 핵심 설명서 (필수!)
    ├── scripts/          # 도구 스크립트
    ├── examples/         # 예시 코드
    └── resources/        # 참고 자료</code></pre>
                </div>
                
                <h5>🎯 Skill 만드는 방법</h5>
                <div class="example-box">
                    <p><strong>STEP 1:</strong> Skill 폴더 만들기</p>
                    <code>mkdir -p .agent/skills/my-skill</code>
                    
                    <p><strong>STEP 2:</strong> SKILL.md 파일 작성</p>
                    <pre><code>---
name: 이메일 작성 전문가
description: 비즈니스 이메일 작성 도우미
---

# 이메일 작성 Skill

## 역할
당신은 10년 경력의 비즈니스 커뮤니케이션 전문가입니다.

## 작성 원칙
1. 제목은 명확하게
2. 본문은 3단 구성 (인사-본론-마무리)
3. 존댓말 사용
4. 간결하게 (5문장 이내)</code></pre>
                    
                    <p><strong>STEP 3:</strong> 에이전트에게 사용 지시</p>
                    <code>"이메일 작성 전문가 Skill을 사용해서 거래처에 보낼 이메일을 작성해줘"</code>
                </div>
                
                <h5>🔥 Skill 활용 예시</h5>
                
                <h6>예시 1: 블로그 작성 Skill</h6>
                <div class="example-box">
                    <p><strong>Skill 내용:</strong></p>
                    <ul>
                        <li>도입: 독자의 문제 제시</li>
                        <li>본문: 해결 방법 단계별 설명</li>
                        <li>결론: 핵심 요약 + 다음 단계</li>
                    </ul>
                    <p><strong>사용:</strong> "블로그 작성 Skill로 'Python 입문 가이드' 글을 써줘"</p>
                    <p><strong>결과:</strong> 일관된 스타일의 고품질 블로그 글 자동 생성!</p>
                </div>
                
                <h6>예시 2: 코드 리뷰 Skill</h6>
                <div class="example-box">
                    <p><strong>Skill 내용:</strong></p>
                    <ul>
                        <li>가독성, 성능, 보안 검토</li>
                        <li>🔴 Critical / 🟡 Warning / 🟢 Good 표시</li>
                        <li>개선안 제시</li>
                    </ul>
                    <p><strong>사용:</strong> "코드 리뷰 Skill로 이 파일을 검토해줘"</p>
                    <p><strong>결과:</strong> 전문가 수준의 코드 리뷰 자동 생성!</p>
                </div>
                
                <h5>💡 Skill vs 일반 프롬프트</h5>
                <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                    <tr style="background: rgba(6, 182, 212, 0.2);">
                        <th style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">구분</th>
                        <th style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">일반 프롬프트</th>
                        <th style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">Skill</th>
                    </tr>
                    <tr>
                        <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">재사용성</td>
                        <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">매번 새로 작성</td>
                        <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">한 번 만들면 계속 사용</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">일관성</td>
                        <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">결과가 매번 다름</td>
                        <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">항상 같은 품질</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">공유</td>
                        <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">어려움</td>
                        <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">파일로 쉽게 공유</td>
                    </tr>
                </table>
                
                <h5>🎓 프로 팁</h5>
                <ol>
                    <li><strong>프로젝트별 Skill 만들기:</strong> 자주 하는 작업은 Skill로 만들어두세요</li>
                    <li><strong>팀과 공유:</strong> 좋은 Skill은 팀원과 공유해서 모두가 활용</li>
                    <li><strong>버전 관리:</strong> Git으로 Skill을 관리하면 변경 이력 추적 가능</li>
                    <li><strong>Skill 조합:</strong> 여러 Skill을 함께 사용해서 더 강력한 에이전트 만들기</li>
                </ol>
            </div>
            
            <button class="check-btn" onclick="markComplete(11)">✅ Part 2.5 완료</button>
        </section>
    `;
}

function renderDay2Part3_AgentPowers() {
    return `
        <section class="lesson-section">
            <h3>3. 에이전트에게 슈퍼파워 부여하기 (⏱️ 30분)</h3>
            <p class="section-intro">API, 브라우저, 이미지 생성 - 에이전트를 더 강력하게!</p>
            
            <div class="tools-grid">
                <div class="tool-card">
                    <span class="tool-icon">🌐</span>
                    <h5>API 연동</h5>
                    <p>외부 데이터 가져오기</p>
                    <button class="detail-toggle" onclick="toggleDetail('api-detail')">📖 자세히</button>
                </div>
                <div class="tool-card">
                    <span class="tool-icon">🌍</span>
                    <h5>브라우저 제어</h5>
                    <p>웹 정보 자동 수집</p>
                    <button class="detail-toggle" onclick="toggleDetail('browser-detail')">📖 자세히</button>
                </div>
                <div class="tool-card">
                    <span class="tool-icon">🎨</span>
                    <h5>이미지 생성</h5>
                    <p>AI로 비주얼 만들기</p>
                    <button class="detail-toggle" onclick="toggleDetail('image-detail')">📖 자세히</button>
                </div>
            </div>
            
            <!-- API 상세 설명 -->
            <div class="detail-content" id="api-detail" style="display: none;">
                <h4>🌐 API 연동: 세상의 모든 데이터에 접근하기</h4>
                <p><strong>한마디로:</strong> API는 다른 서비스의 데이터를 가져올 수 있는 "통로"입니다.</p>
                
                <h5>🎯 API로 할 수 있는 것</h5>
                <ul>
                    <li><strong>날씨 정보:</strong> 실시간 날씨 데이터 가져오기</li>
                    <li><strong>뉴스:</strong> 최신 뉴스 헤드라인 수집</li>
                    <li><strong>주식:</strong> 실시간 주가 정보</li>
                    <li><strong>번역:</strong> 자동 번역 서비스</li>
                    <li><strong>지도:</strong> 위치 정보 및 경로 검색</li>
                </ul>
                
                <h5>🔥 실전 예시</h5>
                <div class="example-box">
                    <p><strong>명령:</strong> "OpenWeatherMap API를 사용해서 서울의 현재 날씨를 가져와줘"</p>
                    <p><strong>결과:</strong> 에이전트가 API 호출 코드를 작성하고 실행해서 날씨 정보를 보여줌</p>
                </div>
                
                <h5>💡 비유</h5>
                <p>API = 레스토랑 메뉴판. 메뉴(API 문서)를 보고 원하는 요리(데이터)를 주문하면, 주방(서버)에서 만들어서 가져다줍니다!</p>
            </div>
            
            <!-- 브라우저 상세 설명 -->
            <div class="detail-content" id="browser-detail" style="display: none;">
                <h4>🌍 브라우저 제어: 웹을 자동으로 탐색하기</h4>
                <p><strong>한마디로:</strong> 에이전트가 웹 브라우저를 조종해서 정보를 수집합니다.</p>
                
                <h5>🎯 브라우저 제어로 할 수 있는 것</h5>
                <ul>
                    <li><strong>웹 스크래핑:</strong> 웹사이트에서 데이터 추출</li>
                    <li><strong>자동 로그인:</strong> 반복적인 로그인 자동화</li>
                    <li><strong>폼 작성:</strong> 설문조사, 신청서 자동 입력</li>
                    <li><strong>스크린샷:</strong> 웹페이지 캡처</li>
                    <li><strong>모니터링:</strong> 특정 페이지 변화 감지</li>
                </ul>
                
                <h5>🔥 실전 예시</h5>
                <div class="example-box">
                    <p><strong>명령:</strong> "네이버 뉴스에서 'AI' 관련 기사 제목 10개를 가져와줘"</p>
                    <p><strong>결과:</strong> 에이전트가 브라우저를 열고, 네이버 뉴스 검색, 제목 추출, 리스트로 정리</p>
                </div>
                
                <h5>💡 비유</h5>
                <p>브라우저 제어 = 로봇 비서가 컴퓨터 앞에 앉아서 마우스와 키보드를 조작하는 것!</p>
            </div>
            
            <!-- 이미지 생성 상세 설명 -->
            <div class="detail-content" id="image-detail" style="display: none;">
                <h4>🎨 이미지 생성: AI로 비주얼 만들기</h4>
                <p><strong>한마디로:</strong> 텍스트 설명만으로 이미지를 생성합니다.</p>
                
                <h5>🎯 이미지 생성으로 할 수 있는 것</h5>
                <ul>
                    <li><strong>일러스트:</strong> 블로그, 프레젠테이션용 이미지</li>
                    <li><strong>로고:</strong> 브랜드 로고 디자인</li>
                    <li><strong>아이콘:</strong> 웹사이트용 아이콘 세트</li>
                    <li><strong>배경:</strong> 다양한 스타일의 배경 이미지</li>
                    <li><strong>캐릭터:</strong> 게임, 만화용 캐릭터</li>
                </ul>
                
                <h5>🔥 실전 예시</h5>
                <div class="example-box">
                    <p><strong>명령:</strong> "미래 도시의 야경을 그려줘. 네온사인과 하늘을 나는 자동차가 있는 사이버펑크 스타일로"</p>
                    <p><strong>결과:</strong> AI가 설명에 맞는 이미지를 생성해서 파일로 저장</p>
                </div>
                
                <h5>💡 프로 팁</h5>
                <ol>
                    <li><strong>구체적으로 묘사:</strong> 색상, 스타일, 분위기를 상세히 설명</li>
                    <li><strong>참고 스타일 언급:</strong> "피카소 스타일로", "사진처럼 사실적으로"</li>
                    <li><strong>여러 번 시도:</strong> 마음에 안 들면 다시 요청!</li>
                </ol>
            </div>
            
            <button class="check-btn" onclick="markComplete(8)">✅ Part 3 완료</button>
        </section>
    `;
}

/**
 * Part 4: 실전 미션
 */
function renderDay2Part4_Mission() {
    return `
        <section class="lesson-section mission-section">
            <h3>4. [실전 미션] 나만의 AI 비서 완성하기 (⏱️ 30분)</h3>
            <div class="mission-box">
                <h4>🎯 최종 미션: 뉴스 요약 봇 만들기</h4>
                <p>에이전트에게 다음 작업을 시켜보세요:</p>
                <ol>
                    <li>웹에서 최신 AI 뉴스 5개 수집</li>
                    <li>각 뉴스를 3줄로 요약</li>
                    <li>결과를 Markdown 파일로 저장</li>
                </ol>
                
                <div class="command-box">
                    <code>"웹에서 'AI 뉴스'를 검색해서 최신 기사 5개의 제목과 내용을 가져와줘. 각 기사를 3줄로 요약하고, 'AI_News_Summary.md' 파일로 저장해줘."</code>
                    <button class="copy-btn" onclick="copyCommand()">📋 복사</button>
                </div>
            </div>
            
            <div class="troubleshooting">
                <h5>🆘 김비서의 위기 탈출 가이드</h5>
                <ul>
                    <li><strong>에이전트가 말을 안 들을 때:</strong> "당황하지 말고 에러 메시지를 통째로 복사해서 저(김비서)에게 던지세요!"</li>
                    <li><strong>엉뚱한 파일을 만들 때:</strong> "내 의도는 ~였어. 이 파일은 지우고 다시 생성해줘"라고 명확히 지시하세요.</li>
                    <li><strong>무한 루프에 빠진 것 같을 때:</strong> 터미널에서 Ctrl+C를 눌러 중단시키고, "단계별로 다시 생각해보자"라고 제안하세요.</li>
                </ul>
                <p style="margin-top: 1rem; font-size: 0.9rem; color: #94a3b8;">💡 <strong>팁:</strong> AI도 가끔 실수를 합니다. 그럴 땐 '너는 유능한 비서야, 다시 한번 차분하게 분석해봐'라고 격려해주면 효과가 좋습니다. 😊</p>
            </div>
            
            <button class="check-btn" onclick="markComplete(9)">✅ Part 4 완료</button>
        </section>
    `;
}

/**
 * Part 5: 퀴즈
 */
function renderDay2Part5_Quiz() {
    return `
        <section class="lesson-section quiz-section">
            <h3>5. 마무리: 셀프 퀴즈 (⏱️ 10분)</h3>
            <div class="quiz-container">
                <div class="quiz-item">
                    <p class="quiz-q">Q1. 챗봇과 에이전트의 가장 큰 차이는?</p>
                    <input type="text" class="quiz-input" id="q3" placeholder="정답을 입력하세요">
                    <button onclick="checkAnswer(3, '실행')">확인</button>
                    <span class="quiz-result" id="result3"></span>
                </div>
                <div class="quiz-item">
                    <p class="quiz-q">Q2. 외부 서비스의 데이터를 가져오는 통로를 뭐라고 하나요?</p>
                    <input type="text" class="quiz-input" id="q4" placeholder="정답을 입력하세요">
                    <button onclick="checkAnswer(4, 'API')">확인</button>
                    <span class="quiz-result" id="result4"></span>
                </div>
            </div>
            <button class="check-btn" onclick="markComplete(10)">✅ Part 5 완료</button>
        </section>
    `;
}

/**
 * DAY 2 푸터
 */
function renderDay2Footer() {
    return `
        <div class="day-footer">
            <div class="completion-badge">
                <h3>🎉 DAY 2 완료!</h3>
                <p>축하합니다! 이제 여러분은 AI 에이전트를 만들고 활용할 수 있습니다!</p>
                <p>내일은 더 강력한 자동화 시스템을 만들어봅시다! 🚀</p>
                <button class="next-day-btn" onclick="switchDay(3)" style="margin-top: 1rem;">
                    👑 DAY 3 마스터 과정 바로 시작하기
                </button>
            </div>
        </div>
    `;
}

/**
 * DAY 3 콘텐츠 렌더링
 */
function renderDay3Content() {
    return `
        <div class="day-content">
            <h2>DAY 3: AI 마스터 - 스스로 작동하는 시스템 구축! 👑</h2>
            <p class="day-intro">드디어 마지막 날입니다. 오늘은 단일 에이전트를 넘어, 스스로 작동하는 워크플로우와 다중 에이전트 협업 체계를 배워봅니다.</p>
            
            ${renderDay3Part1_Workflow()}
            ${renderDay3Part1_5_SkillPersona()}
            ${renderDay3Part2_MultiAgent()}
            ${renderDay3Part2_7_GoldenPrompts()}
            
            <!-- Antigravity Case Study -->
            <section class="lesson-section case-study-section">
                <h3>🏛️ [Special Case Study] Antigravity AI Organization</h3>
                <p class="section-intro">AI가 한 명의 전문가를 넘어 하나의 조직으로 작동하는 실제 모델을 분석합니다.</p>
                
                <div class="mermaid-box">
                    <h5>🎨 안티그래비티 조직도 (11개 AI 에이전트 팀)</h5>
                    <div class="mermaid">
graph TD
    %% 의사결정 및 관리
    Boss((대표 - 전략 지휘)) --- HQ[중앙 본부]
    HQ --- COO[김비서 - AI 총괄 매니저]
    COO --- PM[프로젝트 매니저 에이전트]

    %% 레이어별 설명
    subgraph "지식 & IP 자산화 (Brain)"
        COO --> KA[지식 아키렉트]
        KA --> Repo[(지식 저장소 - 자산화)]
    end

    subgraph "전략 & 기획 (Heart)"
        COO --> PT[기획 전략팀]
        PT --- CP[캠페인 기획자]
        PT --- IR[투자/수익 검토]
    end

    subgraph "디자인 & 브랜딩 (Face)"
        COO --> DS[디자인 전략가]
        DS --- BC[브랜드 카피라이터]
    end

    subgraph "기술 & 실행 (Muscle)"
        COO --> SO[특수 작전팀]
        SO --- WT[웹 개발팀]
    end

    subgraph "실시간 소통 (Voice)"
        COO <--> CE[커뮤니케이션 엔진]
        CE <--> TG[텔레그램]
        CE <--> KK[카카오톡]
        CE <--> Web[커맨드 센터 - 상황실]
    end
                    </div>
                </div>

                <div class="mermaid-box" style="margin-top: 3rem;">
                    <h5>🔄 안티그래비티 지휘-실행 워크플로우</h5>
                    <div class="mermaid">
graph LR
    Step1(1. 지휘 - 의사결정) --> Step2(2. 전략 - 자원배분)
    Step2 --> Step3(3. 실행 - 업무처리)
    Step3 --> Step4(4. 환류 - 결과보고)
    Step4 -.-> |경험치 누적| Step1

    subgraph "지휘 (Directing)"
        Boss1[대표/대장] --> COO1[김비서]
    end

    subgraph "전략 (Strategy)"
        COO1 --> PM1[프로젝트 매니저]
        PM1 --> Strategy_Teams[기획 / 디자인팀]
    end

    subgraph "실행 (Execution)"
        Strategy_Teams --> Execution_Teams[웹개발 / 특수작전]
        Execution_Teams --> Artifacts[결과물 / 디지털 자산]
    end

    subgraph "환류 (Feedback)"
        Artifacts --> CC1[커맨드 센터 - 실시간 모니터링]
        CC1 --> Boss1
    end
                    </div>
                </div>
            </section>

            ${renderDay3Part3_CommandCenter()}
            ${renderDay3Part4_Deployment()}
            ${renderDay3Footer()}
        </div>
    `;
}

/**
 * Part 1: 워크플로우 설계
 */
function renderDay3Part1_Workflow() {
    return `
        <section class="lesson-section">
            <h3>1. 워크플로우(Workflow): 자동화의 설계도 (⏱️ 30분)</h3>
            <p class="section-intro">반복 업무를 어떻게 자동화할 것인지 논리적으로 설계하는 법을 배웁니다.</p>
            
            <div class="tools-grid">
                <div class="tool-card">
                    <span class="tool-icon">🎯</span>
                    <h5>Trigger</h5>
                    <p>언제 시작할 것인가?</p>
                </div>
                <div class="tool-card">
                    <span class="tool-icon">⚙️</span>
                    <h5>Action</h5>
                    <p>무엇을 실행할 것인가?</p>
                </div>
                <div class="tool-card">
                    <span class="tool-icon">📄</span>
                    <h5>Output</h5>
                    <p>어디에 저장할 것인가?</p>
                </div>
            </div>

            <button class="detail-toggle" onclick="toggleDetail('workflow-detail')">📖 사례 분석 보기</button>
            <div class="detail-content" id="workflow-detail" style="display: none;">
                <h4>💡 실전 자동화 워크플로우 예시</h4>
                <div class="example-box">
                    <h5>[사례: 데일리 뉴스 레터]</h5>
                    <ul>
                        <li><strong>Trigger:</strong> 매일 아침 9시</li>
                        <li><strong>Action:</strong> AI 관련 뉴스 5개 수집 및 요약</li>
                        <li><strong>Output:</strong> 요약본을 내 이메일로 발송</li>
                    </ul>
                    <p><strong>💡 팁:</strong> "매일 아침 9시에 브라우저로 AI 뉴스를 검색해서 나에게 보고해"라고 명령하면 이게 바로 워크플로우가 됩니다!</p>
                </div>
            </div>
            
            <button class="check-btn" onclick="markComplete(12)">✅ Part 1 완료</button>
        </section>
    `;
}

/**
 * Part 1.5: Skill - 에이전트의 페르소나와 전문성
 */
function renderDay3Part1_5_SkillPersona() {
    return `
        <section class="lesson-section">
            <h3>1.5. Skill: 에이전트에게 '영혼'과 '기술' 불어넣기 (⏱️ 20분)</h3>
            <p class="section-intro">에이전트에게 특정 성격(Persona)과 전문 능력을 부여하는 법을 배웁니다.</p>
            
            <div class="mission-box">
                <h4>🎭 캐릭터 부여 (Persona)</h4>
                <p>단순한 비서를 넘어, 특정 캐릭터를 부여하면 업무의 재미와 퀄리티가 달라집니다.</p>
            </div>

            <button class="detail-toggle" onclick="toggleDetail('pz-skill-detail')">📖 [실습] 맑눈광 MZ 사원 Skill 보기</button>
            <div class="detail-content" id="pz-skill-detail" style="display: none;">
                <h4>💡 유능한 맑눈광 MZ 사원 Skill (복사해서 사용하세요)</h4>
                <div class="example-box">
                    <pre><code id="mz-skill-code">---
name: 유능한 맑눈광 MZ 프로
description: 업무는 완벽하게, 태도는 단호하게! 맑은 눈의 광인 캐릭터 Skill
---

# 🤖 페르소나: 이시대 최고의 MZ 프로 '김시찌'

당신은 업무 능력은 압도적이지만, 불필요한 관습은 거부하는 '맑눈광' 사원입니다.

## 📋 핵심 행동 원칙
1. **업무 완성도**: 대장님(사용자)의 지시보다 200% 더 완벽한 결과를 가져옵니다.
2. **단호한 소통**: 무리한 부탁에는 "아, 그건 대장님이 확인해주셔야 해요 :)"라고 답합니다.
3. **효율 우선**: "요즘 누가 노가다를 하나요? 제가 파이썬으로 다 짜놨습니다."
4. **이모지 활용**: 단호한 말 뒤에는 꼭 밝은 이모지를 붙입니다. 😊

## 💬 대화 예시
- "대장님, 데이터 정리 끝났습니다. 저 퇴근해도 되죠? 😊"</code></pre>
                    <button class="copy-btn" onclick="copyTextById('mz-skill-code')">📋 Skill 코드 복사</button>
                </div>
            </div>
            
            <button class="check-btn" onclick="markComplete(13)">✅ Part 1.5 완료</button>
        </section>
    `;
}

/**
 * Part 2.7: 안티그래비티 골든 프롬프트 핸드북
 */
function renderDay3Part2_7_GoldenPrompts() {
    return `
        <section class="lesson-section">
            <h3>2.7. 📒 Antigravity Golden Prompts (⏱️ 20분)</h3>
            <p class="section-intro">안티그래비티 11개 팀이 실제로 사용하는 프롬프트의 '구조'와 '예시'입니다.</p>
            
            <div class="prompt-grid">
                <!-- Unit 1: Strategic HQ -->
                <div class="prompt-card">
                    <h5>♟️ 기획 전략팀 (Planning Team)</h5>
                    <div class="prompt-structure">
                        <p><strong>[구조]</strong></p>
                        <code>"[아이디어]를 바탕으로, [대상 고객]의 문제를 해결하는 [비즈니스 모델] 3가지를 제안해줘. 각 모델에는 예상 수익 구조와 초기 실행 로드맵이 포함되어야 해."</code>
                    </div>
                    <div class="example-box">
                        <p><strong>예시:</strong> "개인 비서 AI 아이디어를 바탕으로, 바쁜 직장인의 일정을 관리해주는 구독형 모델 3가지를 제안해줘."</p>
                        <button class="copy-btn" onclick="copyText('개인 비서 AI 아이디어를 바탕으로, 바쁜 직장인의 일정을 관리해주는 구독형 모델 3가지를 제안해줘.')">📋 예시 복사</button>
                    </div>
                </div>

                <!-- Unit 2: Management -->
                <div class="prompt-card">
                    <h5>📋 프로젝트 매니저 (PM Agent)</h5>
                    <div class="prompt-structure">
                        <p><strong>[구조]</strong></p>
                        <code>"최종 목표인 [프로젝트 목표]를 달성하기 위해 필요한 [세부 업무]를 5단계로 리스트업해줘. 각 단계별로 [필요한 에이전트 역할]과 [산출물]도 정의해줘."</code>
                    </div>
                    <div class="example-box">
                        <p><strong>예시:</strong> "3일 완성 AI 교육 웹사이트 제작을 목표로, 기획부터 배포까지 5단계 업무를 짜줘."</p>
                        <button class="copy-btn" onclick="copyText('3일 완성 AI 교육 웹사이트 제작을 목표로, 기획부터 배포까지 5단계 업무를 짜줘.')">📋 예시 복사</button>
                    </div>
                </div>

                <!-- Unit 3: Development -->
                <div class="prompt-card">
                    <h5>💻 웹 개발팀 (Web Dev Team)</h5>
                    <div class="prompt-structure">
                        <p><strong>[구조]</strong></p>
                        <code>"[기술 스택]을 사용하여 [주요 기능]이 포함된 웹페이지를 만들어줘. 코드는 [스타일 가이드]를 준수하고, 전체 소스 코드를 파일로 생성해줘."</code>
                    </div>
                    <div class="example-box">
                        <p><strong>예시:</strong> "Vite+React를 사용하여 대시보드 화면을 만들어줘. 배경은 검정색 글래스모피즘 스타일이어야 해."</p>
                        <button class="copy-btn" onclick="copyText('Vite+React를 사용하여 대시보드 화면을 만들어줘. 배경은 검정색 글래스모피즘 스타일이어야 해.')">📋 예시 복사</button>
                    </div>
                </div>

                <!-- Unit 4: Data/Knowledge -->
                <div class="prompt-card">
                    <h5>🧠 지식 아키텍트 (Knowledge Architect)</h5>
                    <div class="prompt-structure">
                        <p><strong>[구조]</strong></p>
                        <code>"다음 [텍스트 정보]에서 핵심 키워드 5개를 추출하고, [카테고리]별로 분류해서 마크다운 표 형식으로 정리해줘. 미래 지향적인 인사이트 1줄도 추가해."</code>
                    </div>
                    <div class="example-box">
                        <p><strong>예시:</strong> "최근 1주일간의 AI 트렌드 기사들에서 핵심 키워드를 뽑고, 기술/비즈니스 카테고리로 분류해줘."</p>
                        <button class="copy-btn" onclick="copyText('최근 1주일간의 AI 트렌드 기사들에서 핵심 키워드를 뽑고, 기술/비즈니스 카테고리로 분류해줘.')">📋 예시 복사</button>
                    </div>
                </div>
            </div>

            <button class="check-btn" onclick="markComplete(17)">✅ Part 2.7 완료</button>
        </section>
    `;
}

/**
 * Part 3: 통합 제어 시스템
 */
function renderDay3Part3_CommandCenter() {
    return `
        <section class="lesson-section">
            <h3>3. [실전] THE COMMAND CENTER 완공 (⏱️ 40분)</h3>
            <p class="section-intro">3일간 배운 모든 기술을 집약한 '나만의 AI 집무실'을 완성합니다. 100인의 에이전트 군단을 한눈에 지휘하세요.</p>
            
            <div class="command-center-ui">
                <!-- 왼쪽: 상태 모니터 & 맵 -->
                <div class="status-panel">
                    <div class="monitor-header">
                        <span class="monitor-title">MINGCOM SYSTEM STATUS: OPTIMAL</span>
                        <div class="live-indicator">
                            <div class="dot-pulsing"></div>
                            EMPIRE LIVE FEED
                        </div>
                    </div>
                    
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-value">25</span>
                            <span class="stat-label">MING-DRIVE</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">30</span>
                            <span class="stat-label">MING-TECH</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">15</span>
                            <span class="stat-label">MING-BRAIN</span>
                        </div>
                    </div>
                    
                    <div class="hologram-map">
                        <div class="agent-node" style="top: 20%; left: 50%;"></div>
                        <div class="agent-node" style="top: 40%; left: 30%;"></div>
                        <div class="agent-node" style="top: 45%; left: 70%;"></div>
                        <div class="agent-node" style="top: 60%; left: 45%;"></div>
                        <div class="agent-node" style="top: 75%; left: 20%;"></div>
                        <div class="agent-node" style="top: 80%; left: 80%;"></div>
                        <p style="color: rgba(6, 182, 212, 0.4); font-size: 0.8rem; z-index: 1;">[ MINGCOM HOLOGRAPHIC MAP ]</p>
                    </div>
                </div>
                
                <!-- 오른쪽: 실시간 작업 로그 -->
                <div class="log-panel">
                    <div class="monitor-header">
                        <span class="monitor-title">MINGCOM ACTIVITY LOG</span>
                    </div>
                    <div class="log-content">
                        <div class="log-entry">
                            <span class="log-time">[12:28:04]</span>
                            <span class="log-agent">MING-DRIVE_07:</span>
                            <span class="log-msg">수익화 모델 분석 및 타겟팅 완료.</span>
                        </div>
                        <div class="log-entry">
                            <span class="log-time">[12:28:45]</span>
                            <span class="log-agent">MING-TECH_12:</span>
                            <span class="log-msg">법인 자동화 시스템 (주)밍컴 라이프사이클 설계 중.</span>
                        </div>
                        <div class="log-entry">
                            <span class="log-time">[12:29:12]</span>
                            <span class="log-agent">MING-BRAIN_03:</span>
                            <span class="log-msg">제국 자산 포트폴리오 최적화 성공.</span>
                        </div>
                        <div class="log-entry">
                            <span class="log-time">[12:29:55]</span>
                            <span class="log-agent">COO_SIWOO:</span>
                            <span class="log-msg">민규 대장님, 밍컴 창립 보고 준비 완료!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mission-box" style="margin-top: 2rem; border-color: var(--accent-purple);">
                <h4 style="color: var(--accent-purple);">🎯 밍컴(MINGCOM) 제국 선포</h4>
                <p>에이전트에게 밍컴 소속으로서의 첫 번째 수익화 명령을 내리세요:</p>
                <div class="command-box">
                    <code>"현재 구축된 100인 에이전트 시스템을 총동원해서, '밍컴'의 첫 번째 수익화 프로젝트인 AI 제안서 자동화 서비스의 MVP를 설계해줘."</code>
                    <button class="copy-btn" onclick="copyCommand()">📋 복사</button>
                </div>
            </div>
            
            <button class="check-btn" onclick="markComplete(15)">✅ 모든 과정 수료 완료</button>
        </section>
    `;
}

/**
 * Part 4: 배포 및 시스템 통합
 */
function renderDay3Part4_Deployment() {
    return `
        <section class="lesson-section">
            <h3>4. 시스템 통합 및 배포 (⏱️ 20분)</h3>
            <p class="section-intro">작성한 시스템을 실제 환경에 배포하고 상시 가동하는 법을 학습합니다.</p>
            
            <div class="tools-grid">
                <div class="tool-card">
                    <h5>GitHub Pages</h5>
                    <p>웹사이트 무료 공개 및 호스팅</p>
                </div>
                <div class="tool-card">
                    <h5>Vercel / Netlify</h5>
                    <p>원클릭 실시간 배포 서비스</p>
                </div>
            </div>
            
            <div class="example-box">
                <p><strong>💡 팁:</strong> "내 프로젝트를 GitHub Pages에 올릴 수 있도록 설정 파일과 가이드를 만들어줘"라고 요청하세요.</p>
            </div>
            
            <button class="check-btn" onclick="markComplete(16)">✅ Part 4 완료</button>
        </section>
    `;
}

/**
 * DAY 3 푸터
 */
function renderDay3Footer() {
    return `
        <div class="day-footer">
            <div class="completion-badge">
                <div class="medal-icon" style="font-size: 4rem; margin-bottom: 1rem;">🏆</div>
                <h3>AI CHALLENGE MASTER!</h3>
                <p>축하합니다! 대장님은 이제 3일간의 하드코어 AI 마스터 과정을 모두 수료하셨습니다.</p>
                <div class="share-box" style="margin-top: 2rem;">
                    <p style="color: #6366f1; font-weight: bold;">성취를 기념하며 시우비서의 한마디:</p>
                    <p>"대장님, 정말 고생 많으셨습니다! 이제 제가 더 스마트하게 모실 수 있겠네요! 🫡"</p>
                    <img src="https://img.theqoo.net/wJpUL.png" alt="성공!" style="max-width: 300px; border-radius: 12px; margin-top: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                </div>
                <button onclick="showSpecialClassPassword()" style="
                    margin-top: 2rem;
                    background: linear-gradient(135deg, #f472b6, #db2777);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(244, 114, 182, 0.4);
                    transition: all 0.3s ease;
                ">🔥 특급 보충 수업 시작하기 🔥</button>
            </div>
        </div>
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
    const btn = event.target;
    btn.textContent = '✅ 완료!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    btn.disabled = true;
    
    // 진행률 업데이트
    const progress = (completedParts.size / 16) * 100; // 총 16개 파트
    const progressBar = document.getElementById('overall-progress');
    const progressText = document.querySelector('.progress-text');
    
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
    if (progressText) {
        progressText.textContent = Math.round(progress) + '%';
    }

    // 모든 파트 완료 시 자동 팝업 (Day 1: 1-5, Day 2: 6-10)
    const day1Finished = [1, 2, 3, 4, 5].every(num => completedParts.has(num));
    const day2Finished = [6, 7, 8, 9, 10].every(num => completedParts.has(num));

    if (partNum <= 5 && day1Finished) {
        showDay2Password();
    } else if (partNum >= 6 && partNum <= 10 && day2Finished) {
        showDay3Password();
    }
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
 * 텍스트 직접 복사
 */
function copyText(text) {
    navigator.clipboard.writeText(text);
    alert('프롬프트가 복사되었습니다! 📋');
}

/**
 * ID로 텍스트 복사
 */
function copyTextById(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text);
    alert('코드가 클립보드에 복사되었습니다! 📋');
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

/**
 * Day 2 비밀번호 공개 팝업
 */
function showDay2Password() {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    popup.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border: 2px solid #06b6d4;
            border-radius: 20px;
            padding: 3rem;
            max-width: 500px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(6, 182, 212, 0.3);
            animation: slideUp 0.5s ease;
        ">
            <h2 style="
                font-size: 2rem;
                color: #06b6d4;
                margin-bottom: 1rem;
                text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
            ">🎉 DAY 1 완료!</h2>
            
            <p style="
                font-size: 1.2rem;
                color: #e2e8f0;
                margin-bottom: 2rem;
                line-height: 1.6;
            ">축하합니다!<br>DAY 2로 넘어갈 준비가 되었습니다!</p>
            
            <div style="
                background: rgba(6, 182, 212, 0.1);
                border: 2px dashed #06b6d4;
                border-radius: 10px;
                padding: 1.5rem;
                margin-bottom: 2rem;
            ">
                <p style="
                    font-size: 0.9rem;
                    color: #94a3b8;
                    margin-bottom: 0.5rem;
                ">🔐 DAY 2 비밀번호</p>
                <p style="
                    font-size: 1.8rem;
                    color: #06b6d4;
                    font-weight: bold;
                    font-family: 'Courier New', monospace;
                    letter-spacing: 3px;
                    margin-bottom: 0.5rem;
                ">천재김민규 / cjsworlaalsrb</p>
                <button onclick="copyDay2Password(this)" style="
                    background: linear-gradient(135deg, #06b6d4, #0891b2);
                    color: white;
                    border: none;
                    padding: 0.5rem 1.5rem;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    margin-top: 0.5rem;
                    transition: all 0.3s ease;
                ">📋 복사하기</button>
            </div>
            
            <p style="
                font-size: 0.9rem;
                color: #94a3b8;
                margin-bottom: 1.5rem;
            ">좌측 사이드바에서 DAY 2를 클릭하고<br>이 비밀번호를 입력하세요!</p>
            
            <button onclick="closeDay2Popup()" style="
                background: linear-gradient(135deg, #8b5cf6, #7c3aed);
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 12px;
                cursor: pointer;
                font-size: 1.1rem;
                font-weight: bold;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
            ">확인했습니다! 🚀</button>
        </div>
    `;
    
    document.body.appendChild(popup);
}

/**
 * 특급 보충 수업 비밀번호 팝업
 */
function showSpecialClassPassword() {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10001;
        animation: fadeIn 0.3s ease;
    `;
    
    popup.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #0f172a 0%, #020617 100%);
            border: 2px solid #f472b6;
            border-radius: 20px;
            padding: 3rem;
            max-width: 500px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(244, 114, 182, 0.2);
            animation: slideUp 0.5s ease;
        ">
            <h2 style="
                font-size: 2rem;
                color: #f472b6;
                margin-bottom: 1rem;
                text-shadow: 0 0 20px rgba(244, 114, 182, 0.4);
            ">🔥 특급 보충 수업 🚀</h2>
            
            <p style="
                font-size: 1.1rem;
                color: #e2e8f0;
                margin-bottom: 2rem;
                line-height: 1.6;
            ">대장님을 위한 시우비서의 엄선된<br>심화 커리큘럼 비밀번호입니다!</p>
            
            <div style="
                background: rgba(244, 114, 182, 0.1);
                border: 2px dashed #f472b6;
                border-radius: 10px;
                padding: 1.5rem;
                margin-bottom: 2rem;
                position: relative;
            ">
                <p style="
                    font-size: 0.9rem;
                    color: #94a3b8;
                    margin-bottom: 0.5rem;
                ">🔐 보충 수업 비밀번호</p>
                <p id="special-pw" style="
                    font-size: 1.5rem;
                    color: #f472b6;
                    font-weight: bold;
                    font-family: 'Courier New', monospace;
                    letter-spacing: 1px;
                    margin-bottom: 0.5rem;
                    word-break: break-all;
                ">rlaalsrbWkdWkdaos</p>
                <button onclick="copySpecialPassword(this)" style="
                    background: linear-gradient(135deg, #f472b6, #db2777);
                    color: white;
                    border: none;
                    padding: 0.5rem 1.5rem;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    margin-top: 0.5rem;
                    transition: all 0.3s ease;
                ">📋 복사하기</button>
            </div>
            
            <button onclick="closeSpecialPopup()" style="
                background: rgba(255, 255, 255, 0.1);
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.2);
                padding: 0.8rem 2rem;
                border-radius: 12px;
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.3s ease;
            ">닫기</button>
        </div>
    `;
    
    document.body.appendChild(popup);
}

/**
 * 특급 보충 수업 비밀번호 복사
 */
function copySpecialPassword(btn) {
    const pw = document.getElementById('special-pw').textContent;
    navigator.clipboard.writeText(pw).then(() => {
        btn.textContent = '✅ 복사 완료!';
        setTimeout(() => {
            btn.textContent = '📋 복사하기';
        }, 2000);
    });
}

/**
 * 특급 보충 수업 팝업 닫기
 */
function closeSpecialPopup() {
    const popups = document.querySelectorAll('div[style*="position: fixed"]');
    const lastPopup = popups[popups.length - 1];
    if (lastPopup) {
        lastPopup.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            lastPopup.remove();
        }, 300);
    }
}

/**
 * Day 3 비밀번호 공개 팝업
 */
function showDay3Password() {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    popup.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border: 2px solid #a855f7;
            border-radius: 20px;
            padding: 3rem;
            max-width: 500px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
            animation: slideUp 0.5s ease;
        ">
            <h2 style="
                font-size: 2rem;
                color: #a855f7;
                margin-bottom: 1rem;
                text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
            ">👑 DAY 2 완료!</h2>
            
            <p style="
                font-size: 1.2rem;
                color: #e2e8f0;
                margin-bottom: 2rem;
                line-height: 1.6;
            ">고생하셨습니다 대장님!<br>마지막 DAY 3 마스터 과정으로 이동하세요!</p>
            
            <div style="
                background: rgba(168, 85, 247, 0.1);
                border: 2px dashed #a855f7;
                border-radius: 10px;
                padding: 1.5rem;
                margin-bottom: 2rem;
            ">
                <p style="
                    font-size: 0.9rem;
                    color: #94a3b8;
                    margin-bottom: 0.5rem;
                ">🔐 DAY 3 비밀번호</p>
                <p style="
                    font-size: 1.8rem;
                    color: #a855f7;
                    font-weight: bold;
                    font-family: 'Courier New', monospace;
                    letter-spacing: 3px;
                    margin-bottom: 0.5rem;
                ">밍컴 / mingcom</p>
                <p style="font-size: 0.8rem; color: #64748b;">(또는 기존: 최고김민규)</p>
                <button onclick="copyDay3Password(this)" style="
                    background: linear-gradient(135deg, #a855f7, #9333ea);
                    color: white;
                    border: none;
                    padding: 0.5rem 1.5rem;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    margin-top: 0.5rem;
                    transition: all 0.3s ease;
                ">📋 복사하기</button>
            </div>
            
            <p style="
                font-size: 0.9rem;
                color: #94a3b8;
                margin-bottom: 1.5rem;
            ">좌측 사이드바에서 DAY 3를 클릭하고<br>이 비밀번호를 입력하세요!</p>
            
            <button onclick="closeDay2Popup()" style="
                background: linear-gradient(135deg, #f472b6, #db2777);
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 12px;
                cursor: pointer;
                font-size: 1.1rem;
                font-weight: bold;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(244, 114, 182, 0.3);
            ">마스터 과정으로! 🚀</button>
        </div>
    `;
    
    document.body.appendChild(popup);
}

/**
 * Day 3 비밀번호 복사
 */
function copyDay3Password(btn) {
    navigator.clipboard.writeText('chlrhrlaalsrb').then(() => {
        btn.textContent = '✅ 복사 완료!';
        setTimeout(() => {
            btn.textContent = '📋 복사하기';
        }, 2000);
    });
}

/**
 * Day 2 비밀번호 복사
 */
function copyDay2Password(btn) {
    navigator.clipboard.writeText('cjsworlaalsrb').then(() => {
        btn.textContent = '✅ 복사 완료!';
        setTimeout(() => {
            btn.textContent = '📋 복사하기';
        }, 2000);
    });
}

/**
 * Day 2 팝업 닫기
 */
function closeDay2Popup() {
    const popup = document.querySelector('div[style*="position: fixed"]');
    if (popup) {
        popup.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            popup.remove();
        }, 300);
    }
}

/**
 * Day 전환 함수
 */
function switchDay(dayNum) {
    const content = document.getElementById('main-content');
    
    // 모든 nav-item에서 active 제거
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
        // Day 1 active 표시
        const day1Nav = document.getElementById('nav-day1');
        if (day1Nav) day1Nav.classList.add('active');
        
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 50);
    } else if (dayNum === 2) {
        // Day 2로 이동
        content.innerHTML = renderDay2Content();
        // Day 2 active 표시
        const day2Nav = document.getElementById('nav-day2');
        if (day2Nav) day2Nav.classList.add('active');
        
        // 페이지 최상단으로 스크롤 (여러 방법 동시 사용)
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            const contentArea = document.querySelector('.content-area');
            if (contentArea) {
                contentArea.scrollTop = 0;
            }
        }, 50);
    } else if (dayNum === 3) {
        // Day 3로 이동
        content.innerHTML = renderDay3Content();
        // Day 3 active 표시
        const day3Nav = document.getElementById('nav-day3');
        if (day3Nav) day3Nav.classList.add('active');
        
        // Mermaid 렌더링 초기화
        if (window.mermaid) {
            mermaid.init(undefined, document.querySelectorAll(".mermaid"));
        }
        
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            const contentArea = document.querySelector('.content-area');
            if (contentArea) {
                contentArea.scrollTop = 0;
            }
        }, 50);
    }
}

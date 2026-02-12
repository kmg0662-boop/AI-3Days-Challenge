#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Day 2 콘텐츠를 main.js에 추가하는 스크립트

day2_content = '''
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
                <h5>🆘 문제 해결 가이드</h5>
                <ul>
                    <li><strong>에이전트가 웹 접근을 못 할 때:</strong> "브라우저를 열어서 직접 검색해줘"</li>
                    <li><strong>요약이 너무 길 때:</strong> "각 요약을 50자 이내로 줄여줘"</li>
                    <li><strong>파일 저장 위치를 모를 때:</strong> "현재 폴더에 저장해줘"</li>
                </ul>
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
            </div>
        </div>
    `;
}
'''

# main.js 파일 읽기
with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Day 2 함수들이 이미 있는지 확인
if 'renderDay2Content' in content:
    print("⚠️ Day 2 콘텐츠가 이미 존재합니다.")
else:
    # renderDay1Footer 함수 다음에 Day 2 콘텐츠 삽입
    insert_position = content.find('// ============================================================\n// 5. 인터랙션 핸들러')
    
    if insert_position != -1:
        content = content[:insert_position] + day2_content + '\n' + content[insert_position:]
        print("✅ Day 2 콘텐츠 추가 완료!")
    else:
        print("❌ 삽입 위치를 찾을 수 없습니다.")
        exit(1)

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 파일 업데이트 완료!")
print("📝 Day 2 콘텐츠:")
print("  - Part 1: 에이전트란 무엇인가?")
print("  - Part 2: 안티그래비티 에이전트 만들기")
print("  - Part 3: 에이전트에게 슈퍼파워 부여하기")
print("  - Part 4: 실전 미션 - 뉴스 요약 봇")
print("  - Part 5: 퀴즈")

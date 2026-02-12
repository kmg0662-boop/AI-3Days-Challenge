#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Day 2에 Skill 및 용어 설명 추가

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Skill 설명 섹션 (Part 2 안티그래비티 에이전트 만들기 뒤에 추가)
skill_section = '''
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
'''

# renderDay2Part3_AgentPowers 함수 앞에 Skill 섹션 삽입
insert_marker = "function renderDay2Part3_AgentPowers()"

if insert_marker in content and 'renderDay2Part2_5_Skills' not in content:
    content = content.replace(insert_marker, skill_section + '\n' + insert_marker)
    print("✅ Skill 설명 섹션 추가 완료!")
else:
    print("⚠️ Skill 섹션이 이미 존재하거나 삽입 위치를 찾을 수 없습니다.")

# renderDay2Content 함수에 Skill 섹션 추가
old_day2_content = '''            ${renderDay2Part1_WhatIsAgent()}
            ${renderDay2Part2_BuildAgent()}
            ${renderDay2Part3_AgentPowers()}'''

new_day2_content = '''            ${renderDay2Part1_WhatIsAgent()}
            ${renderDay2Part2_BuildAgent()}
            ${renderDay2Part2_5_Skills()}
            ${renderDay2Part3_AgentPowers()}'''

if old_day2_content in content:
    content = content.replace(old_day2_content, new_day2_content)
    print("✅ Day 2 콘텐츠에 Skill 섹션 연결 완료!")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ 모든 업데이트 완료!")
print("📝 추가된 용어 설명:")
print("  - Skill (개념, 구조, 만드는 방법)")
print("  - React (웹 개발 도구)")
print("  - Next.js (React 프레임워크)")
print("  - TypeScript (타입 체크 언어)")
print("  - Tailwind CSS (CSS 도구)")

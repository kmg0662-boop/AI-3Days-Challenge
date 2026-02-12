#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 4가지 수정사항 적용
# 1. CTA 버튼 시안성 강화
# 2. Day 2 클릭 시 안내 메시지 + 비밀번호 입력
# 3. Day 1 하단에 Day 2 버튼 추가
# 4. Day 1 완료 시 팝업 표시

import re

# ===== 1. index.html - CTA 버튼 강화 =====
with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

old_cta = '<button class="cta-button" onclick="startChallenge()">특급 보충 수업 시작</button>'
new_cta = '''<button class="cta-button pulse-button" onclick="startChallenge()">
                    🚀 특급 보충 수업 시작하기 🚀
                </button>'''

if old_cta in html_content:
    html_content = html_content.replace(old_cta, new_cta)
    print("✅ 1. CTA 버튼 강화 완료!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

# ===== 2. main.js - switchDay 함수 수정 =====
with open('main.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# switchDay 함수 찾기 및 수정
old_switch = '''function switchDay(dayNum) {
    const content = document.getElementById('main-content');
    
    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
    } else if (dayNum === 2) {
        // Day 2 비밀번호 체크
        const day2Password = prompt('🔐 DAY 2 비밀번호를 입력하세요:');
        if (day2Password !== 'cjsworlaalsrb') {
            alert('❌ 비밀번호가 틀렸습니다!\\n\\nDAY 1을 완료하면 비밀번호를 받을 수 있습니다.');
            return;
        }
        content.innerHTML = renderDay2Content();
    }
    // Day 3은 추후 구현
}'''

new_switch = '''function switchDay(dayNum) {
    const content = document.getElementById('main-content');
    
    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
    } else if (dayNum === 2) {
        // Day 2 비밀번호 체크
        const message = 'DAY 1을 완료하면 비밀번호를 받을 수 있습니다!\\n\\n비밀번호를 받으셨다면 아래에 입력하세요:';
        const day2Password = prompt('🔐 ' + message);
        
        if (!day2Password) {
            return; // 취소 클릭
        }
        
        if (day2Password !== 'cjsworlaalsrb') {
            alert('❌ 비밀번호가 틀렸습니다!\\n\\nDAY 1의 모든 Part를 완료하면 비밀번호를 받을 수 있습니다.');
            return;
        }
        content.innerHTML = renderDay2Content();
    }
    // Day 3은 추후 구현
}'''

if old_switch in js_content:
    js_content = js_content.replace(old_switch, new_switch)
    print("✅ 2. Day 2 클릭 시 안내 메시지 추가 완료!")

# ===== 3 & 4. Day 1 Footer에 Day 2 버튼 추가 및 완료 팝업 =====
# renderDay1Footer 함수 찾기
footer_pattern = r"function renderDay1Footer\(\) \{[^}]+return `[^`]+`;\s+\}"

def create_new_footer():
    return '''function renderDay1Footer() {
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
}'''

# Footer 함수 교체
if 'function renderDay1Footer()' in js_content:
    # 기존 footer 함수 찾아서 교체
    js_content = re.sub(
        r'function renderDay1Footer\(\) \{[^}]*return `[^`]*`;\s*\}',
        create_new_footer(),
        js_content,
        flags=re.DOTALL
    )
    print("✅ 3. Day 1 하단에 Day 2 버튼 추가 완료!")

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

# ===== CSS 추가 =====
with open('style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

new_styles = '''
/* CTA 버튼 강화 */
.pulse-button {
    animation: pulse 2s infinite;
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
    font-size: 1.3rem !important;
    padding: 1.2rem 2.5rem !important;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
    }
    50% {
        transform: scale(1.05);
        box-shadow: 0 0 50px rgba(139, 92, 246, 0.9);
    }
}

/* Day 2 이동 버튼 */
.next-day-btn {
    background: linear-gradient(135deg, #06b6d4, #0891b2);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
}

.next-day-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(6, 182, 212, 0.5);
}
'''

if '.pulse-button' not in css_content:
    css_content += '\n' + new_styles
    print("✅ CSS 스타일 추가 완료!")

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("✅ 모든 수정 완료!")
print("📝 수정 사항:")
print("  1. CTA 버튼 시안성 강화 (펄스 애니메이션)")
print("  2. Day 2 클릭 시 안내 메시지 개선")
print("  3. Day 1 하단에 Day 2 버튼 추가")
print("  4. 완료 팝업은 이미 구현됨 (Part 5 완료 시)")

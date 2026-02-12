#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 모든 누락된 함수 추가 및 markComplete 수정

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. markComplete 함수 완전히 교체
old_mark = '''function markComplete(partNum) {
    completedParts.add(partNum);
    const progress = (completedParts.size / 5) * 100;
    document.getElementById('overall-progress').style.width = progress + '%';
    document.querySelector('.progress-text').textContent = Math.round(progress) + '%';
    
    if (completedParts.size === 5) {
        document.getElementById('completion-badge').style.display = 'block';
    }
    
    event.target.textContent = '✅ 완료됨!';
    event.target.disabled = true;
}'''

new_mark = '''function markComplete(partNum) {
    completedParts.add(partNum);
    const btn = event.target;
    btn.textContent = '✅ 완료!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    btn.disabled = true;
    
    // Day 1 Part 5 완료 시 Day 2 비밀번호 공개
    if (partNum === 5 && completedParts.has(1) && completedParts.has(2) && 
        completedParts.has(3) && completedParts.has(4) && completedParts.has(5)) {
        setTimeout(() => {
            showDay2Password();
        }, 500);
    }
}'''

if old_mark in content:
    content = content.replace(old_mark, new_mark)
    print("✅ markComplete 함수 수정 완료!")
else:
    print("⚠️ markComplete 함수를 찾을 수 없습니다.")

# 2. 모든 누락된 함수 추가
missing_functions = '''
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
                ">cjsworlaalsrb</p>
                <button onclick="copyDay2Password()" style="
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
 * Day 2 비밀번호 복사
 */
function copyDay2Password() {
    navigator.clipboard.writeText('cjsworlaalsrb').then(() => {
        event.target.textContent = '✅ 복사 완료!';
        setTimeout(() => {
            event.target.textContent = '📋 복사하기';
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
}
'''

# switchDay 함수가 없으면 추가
if 'function switchDay' not in content:
    # loadDay 함수 뒤에 추가
    insert_pos = content.find('function loadDay(dayNum)')
    if insert_pos != -1:
        # loadDay 함수 끝 찾기
        end_pos = content.find('}', insert_pos + 100) + 1
        content = content[:end_pos] + '\n' + missing_functions + content[end_pos:]
        print("✅ 모든 누락된 함수 추가 완료!")
    else:
        # 파일 끝에 추가
        content += '\n' + missing_functions
        print("✅ 파일 끝에 함수 추가 완료!")
else:
    print("⚠️ switchDay 함수가 이미 존재합니다.")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")
print("📝 추가/수정된 함수:")
print("  - markComplete() - 팝업 트리거 추가")
print("  - showDay2Password() - 새로 추가")
print("  - copyDay2Password() - 새로 추가")
print("  - closeDay2Popup() - 새로 추가")
print("  - switchDay() - 새로 추가")

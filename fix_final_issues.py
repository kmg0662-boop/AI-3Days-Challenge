#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 2가지 수정:
# 1. copyDay2Password에서 event.target 에러 수정
# 2. switchDay에서 비밀번호 입력 후 자동 Day 2 이동 + 팝업 닫기

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. copyDay2Password 함수 수정 - event 대신 this 사용
old_copy = '''function copyDay2Password() {
    navigator.clipboard.writeText('cjsworlaalsrb').then(() => {
        event.target.textContent = '✅ 복사 완료!';
        setTimeout(() => {
            event.target.textContent = '📋 복사하기';
        }, 2000);
    });
}'''

new_copy = '''function copyDay2Password(btn) {
    navigator.clipboard.writeText('cjsworlaalsrb').then(() => {
        btn.textContent = '✅ 복사 완료!';
        setTimeout(() => {
            btn.textContent = '📋 복사하기';
        }, 2000);
    });
}'''

if old_copy in content:
    content = content.replace(old_copy, new_copy)
    print("✅ copyDay2Password 함수 수정 완료!")

# 팝업 HTML에서 onclick도 수정
old_onclick = 'onclick="copyDay2Password()"'
new_onclick = 'onclick="copyDay2Password(this)"'

content = content.replace(old_onclick, new_onclick)
print("✅ 복사 버튼 onclick 수정 완료!")

# 2. switchDay 함수 수정 - 비밀번호 맞으면 팝업 닫고 Day 2로 이동
old_switch = '''function switchDay(dayNum) {
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
        
        // 비밀번호 맞으면 팝업 닫고 Day 2로 이동
        closeDay2Popup();
        content.innerHTML = renderDay2Content();
    }
    // Day 3은 추후 구현
}'''

if old_switch in content:
    content = content.replace(old_switch, new_switch)
    print("✅ switchDay 함수 수정 완료 - 자동 이동 추가!")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")
print("📝 수정 사항:")
print("  - copyDay2Password: event.target → btn 파라미터")
print("  - switchDay: 비밀번호 맞으면 팝업 닫고 자동 Day 2 이동")

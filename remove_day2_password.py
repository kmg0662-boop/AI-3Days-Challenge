#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Day 2 비밀번호 제거 - 초기 암호만 유지

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. markComplete 함수에서 팝업 트리거 제거
old_mark = '''function markComplete(partNum) {
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

new_mark = '''function markComplete(partNum) {
    completedParts.add(partNum);
    const btn = event.target;
    btn.textContent = '✅ 완료!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    btn.disabled = true;
}'''

if old_mark in content:
    content = content.replace(old_mark, new_mark)
    print("✅ markComplete에서 팝업 트리거 제거 완료!")

# 2. switchDay 함수에서 비밀번호 체크 제거, 스크롤은 유지
old_switch = '''function switchDay(dayNum) {
    const content = document.getElementById('main-content');
    
    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 50);
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
    }
    // Day 3은 추후 구현
}'''

new_switch = '''function switchDay(dayNum) {
    const content = document.getElementById('main-content');
    
    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 50);
    } else if (dayNum === 2) {
        // Day 2로 바로 이동
        content.innerHTML = renderDay2Content();
        
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
    }
    // Day 3은 추후 구현
}'''

if old_switch in content:
    content = content.replace(old_switch, new_switch)
    print("✅ switchDay에서 비밀번호 체크 제거, 스크롤 유지 완료!")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")
print("📝 변경 사항:")
print("  - Day 1 완료 시 팝업 제거")
print("  - Day 2 접근 시 비밀번호 제거")
print("  - Day 2 이동 시 스크롤 기능 유지")
print("  - 초기 접근 암호만 유지")

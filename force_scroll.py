#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 더 강력한 스크롤 방법 - content-area를 직접 스크롤

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Day 2 스크롤을 더 강력하게
old_day2_scroll = '''        // 비밀번호 맞으면 팝업 닫고 Day 2로 이동
        closeDay2Popup();
        content.innerHTML = renderDay2Content();
        
        // DOM 렌더링 후 페이지 최상단으로 스크롤
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);'''

new_day2_scroll = '''        // 비밀번호 맞으면 팝업 닫고 Day 2로 이동
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
        }, 50);'''

if old_day2_scroll in content:
    content = content.replace(old_day2_scroll, new_day2_scroll)
    print("✅ Day 2 스크롤 강화 완료!")
else:
    print("⚠️ Day 2 스크롤 코드를 찾을 수 없습니다.")

# Day 1도 동일하게
old_day1_scroll = '''    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);'''

new_day1_scroll = '''    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 50);'''

if old_day1_scroll in content:
    content = content.replace(old_day1_scroll, new_day1_scroll)
    print("✅ Day 1 스크롤 강화 완료!")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")
print("📝 모든 스크롤 방법 동시 적용 - 확실한 최상단 이동!")

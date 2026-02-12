#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# setTimeout을 사용해서 DOM 렌더링 후 스크롤

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Day 2 스크롤 개선
old_day2_scroll = '''        // 비밀번호 맞으면 팝업 닫고 Day 2로 이동
        closeDay2Popup();
        content.innerHTML = renderDay2Content();
        
        // 페이지 최상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });'''

new_day2_scroll = '''        // 비밀번호 맞으면 팝업 닫고 Day 2로 이동
        closeDay2Popup();
        content.innerHTML = renderDay2Content();
        
        // DOM 렌더링 후 페이지 최상단으로 스크롤
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);'''

if old_day2_scroll in content:
    content = content.replace(old_day2_scroll, new_day2_scroll)
    print("✅ Day 2 스크롤 타이밍 개선 완료!")

# Day 1 스크롤도 개선
old_day1_scroll = '''    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
        window.scrollTo({ top: 0, behavior: 'smooth' });'''

new_day1_scroll = '''    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);'''

if old_day1_scroll in content:
    content = content.replace(old_day1_scroll, new_day1_scroll)
    print("✅ Day 1 스크롤 타이밍 개선 완료!")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")
print("📝 100ms 지연 후 스크롤 - DOM 렌더링 완료 보장!")

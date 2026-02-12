#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 사이드바에 Day 2 버튼 추가

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Day 2 버튼 HTML
day2_button = '''                <div class="day-item" onclick="switchDay(2)">
                    <div class="day-number">DAY 2</div>
                    <div class="day-title">AI 실무 응용</div>
                    <div class="day-subtitle">에이전트 만들기</div>
                </div>
'''

# Day 3 버튼 찾기
day3_marker = '                <div class="day-item coming-soon">'

if day3_marker in content and day2_button not in content:
    content = content.replace(day3_marker, day2_button + '                <div class="day-item coming-soon">')
    print("✅ 사이드바에 Day 2 버튼 추가 완료!")
else:
    print("⚠️ Day 2 버튼이 이미 존재하거나 Day 3를 찾을 수 없습니다.")

# switchDay 함수 업데이트
old_switch = '''function switchDay(dayNum) {
    const content = document.getElementById('main-content');
    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
    }
    // Day 2, 3은 추후 구현
}'''

new_switch = '''function switchDay(dayNum) {
    const content = document.getElementById('main-content');
    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
    } else if (dayNum === 2) {
        content.innerHTML = renderDay2Content();
    }
    // Day 3은 추후 구현
}'''

if old_switch in content:
    content = content.replace(old_switch, new_switch)
    print("✅ switchDay 함수 업데이트 완료!")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ 모든 업데이트 완료!")

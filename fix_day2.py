#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Day 2 버튼 활성화

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Day 2 버튼 활성화
old_day2_button = '<div class="nav-item locked">🚀 DAY 2: Action 🔒</div>'
new_day2_button = '<div class="nav-item" onclick="switchDay(2)">🚀 DAY 2: Action</div>'

if old_day2_button in content:
    content = content.replace(old_day2_button, new_day2_button)
    print("✅ Day 2 버튼 활성화 완료!")
else:
    print("⚠️ Day 2 버튼을 찾을 수 없습니다.")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")

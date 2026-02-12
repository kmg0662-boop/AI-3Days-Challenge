#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 진행률 계산 수정 - 총 11개 Part

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# markComplete 함수의 진행률 계산 수정
old_progress = '''    // 진행률 업데이트
    const progress = (completedParts.size / 10) * 100; // Day 1: 5개, Day 2: 5개 = 총 10개'''

new_progress = '''    // 진행률 업데이트
    const progress = (completedParts.size / 11) * 100; // Day 1: 5개, Day 2: 6개 = 총 11개'''

if old_progress in content:
    content = content.replace(old_progress, new_progress)
    print("✅ 진행률 계산 수정 완료! (10 → 11)")
else:
    print("⚠️ 진행률 계산 코드를 찾을 수 없습니다.")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")
print("📊 총 11개 Part:")
print("  - Day 1: Part 1~5 (5개)")
print("  - Day 2: Part 1, 2, 2.5, 3, 4, 5 (6개)")
print("  - 각 완료 시 약 9.09%씩 증가")

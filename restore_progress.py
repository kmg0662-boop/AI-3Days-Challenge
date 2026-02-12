#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# markComplete에 진행률 업데이트 로직 복구

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# markComplete 함수에 진행률 업데이트 추가
old_mark = '''function markComplete(partNum) {
    completedParts.add(partNum);
    const btn = event.target;
    btn.textContent = '✅ 완료!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    btn.disabled = true;
}'''

new_mark = '''function markComplete(partNum) {
    completedParts.add(partNum);
    const btn = event.target;
    btn.textContent = '✅ 완료!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    btn.disabled = true;
    
    // 진행률 업데이트
    const progress = (completedParts.size / 10) * 100; // Day 1: 5개, Day 2: 5개 = 총 10개
    const progressBar = document.getElementById('overall-progress');
    const progressText = document.querySelector('.progress-text');
    
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
    if (progressText) {
        progressText.textContent = Math.round(progress) + '%';
    }
}'''

if old_mark in content:
    content = content.replace(old_mark, new_mark)
    print("✅ markComplete에 진행률 업데이트 로직 추가 완료!")
else:
    print("⚠️ markComplete 함수를 찾을 수 없습니다.")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")
print("📝 이제 완료 버튼을 누르면 진행률이 업데이트됩니다!")
print("📊 총 10개 Part (Day 1: 5개, Day 2: 5개)")

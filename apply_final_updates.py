#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 3가지 수정사항 적용
# 1. 랜딩페이지에 '김민규 대장님의 AI특급 교육' 추가
# 2. 암호 인증 추가
# 3. 반응형 디자인 개선

import re

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 랜딩페이지 타이틀 수정
old_title = '<h1 class="hero-title">AI 3일 안에 뿌수기!</h1>'
new_title = '''<div class="hero-header">
                <p class="hero-subtitle">김민규 대장님의 AI특급 교육</p>
                <h1 class="hero-title">AI 3일 안에 뿌수기!</h1>
            </div>'''

if old_title in content:
    content = content.replace(old_title, new_title)
    print("✅ 1. 랜딩페이지 타이틀 수정 완료!")

# 2. startChallenge 함수에 암호 인증 추가
old_start_function = '''function startChallenge() {
    const app = document.querySelector('#app');
    
    // 화면 페이드 아웃 효과
    app.style.opacity = '0';
    app.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        renderDashboard();
        app.style.opacity = '1';
    }, 500);
}'''

new_start_function = '''function startChallenge() {
    // 암호 인증
    const validPasswords = ['qkrtldncksqkqh', 'rlaalsrbWKdWKdaos', 'min9man9'];
    const userPassword = prompt('🔐 암호를 입력하세요:');
    
    if (!userPassword || !validPasswords.includes(userPassword)) {
        alert('❌ 암호가 틀렸습니다!');
        return;
    }
    
    const app = document.querySelector('#app');
    
    // 화면 페이드 아웃 효과
    app.style.opacity = '0';
    app.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        renderDashboard();
        app.style.opacity = '1';
    }, 500);
}'''

if old_start_function in content:
    content = content.replace(old_start_function, new_start_function)
    print("✅ 2. 암호 인증 추가 완료!")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")

#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 사이드바 Day 1, 2 자유롭게 이동 + active 상태 표시

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. renderSidebar 함수 수정 - Day 2 클릭 가능하게
old_sidebar = '''function renderSidebar() {
    return `
        <aside class="sidebar slide-in">
            <div class="logo">AI 3-DAYS</div>
            <nav>
                <div class="nav-item active" onclick="loadDay(1)">📚 DAY 1: Basics</div>
                <div class="nav-item" onclick="switchDay(2)">🚀 DAY 2: Action</div>
                <div class="nav-item locked">👑 DAY 3: Master 🔒</div>
            </nav>'''

new_sidebar = '''function renderSidebar() {
    return `
        <aside class="sidebar slide-in">
            <div class="logo">AI 3-DAYS</div>
            <nav>
                <div class="nav-item" id="nav-day1" onclick="switchDay(1)">📚 DAY 1: Basics</div>
                <div class="nav-item" id="nav-day2" onclick="switchDay(2)">🚀 DAY 2: Action</div>
                <div class="nav-item locked">👑 DAY 3: Master 🔒</div>
            </nav>'''

if old_sidebar in content:
    content = content.replace(old_sidebar, new_sidebar)
    print("✅ 사이드바 Day 1, 2 클릭 가능하게 수정 완료!")

# 2. switchDay 함수에 active 상태 업데이트 추가
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

new_switch = '''function switchDay(dayNum) {
    const content = document.getElementById('main-content');
    
    // 모든 nav-item에서 active 제거
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
        // Day 1 active 표시
        const day1Nav = document.getElementById('nav-day1');
        if (day1Nav) day1Nav.classList.add('active');
        
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 50);
    } else if (dayNum === 2) {
        // Day 2로 바로 이동
        content.innerHTML = renderDay2Content();
        // Day 2 active 표시
        const day2Nav = document.getElementById('nav-day2');
        if (day2Nav) day2Nav.classList.add('active');
        
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
    print("✅ switchDay에 active 상태 업데이트 추가 완료!")

# 3. renderDashboard에서 초기 Day 1 active 설정
old_dashboard = '''function renderDashboard() {
    return `
        <div class="dashboard">
            ${renderSidebar()}
            <main class="content-area fade-in" id="main-content">
                ${renderDay1Content()}
            </main>
        </div>
    `;
}'''

new_dashboard = '''function renderDashboard() {
    const html = `
        <div class="dashboard">
            ${renderSidebar()}
            <main class="content-area fade-in" id="main-content">
                ${renderDay1Content()}
            </main>
        </div>
    `;
    
    // 렌더링 후 Day 1을 active로 설정
    setTimeout(() => {
        const day1Nav = document.getElementById('nav-day1');
        if (day1Nav) day1Nav.classList.add('active');
    }, 100);
    
    return html;
}'''

if old_dashboard in content:
    content = content.replace(old_dashboard, new_dashboard)
    print("✅ renderDashboard에 초기 Day 1 active 설정 완료!")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")
print("📝 변경 사항:")
print("  - 사이드바 Day 1, 2 모두 클릭 가능")
print("  - 현재 페이지에 따라 파란색 active 표시 이동")
print("  - Day 1 ↔ Day 2 자유롭게 이동 가능")

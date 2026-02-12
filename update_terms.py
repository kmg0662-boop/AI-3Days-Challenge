#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# main.js 파일에 용어 설명 추가하는 스크립트

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 삽입할 용어 설명 HTML
terms_section = '''                <h5>🤔 시작하기 전에: 용어 설명</h5>
                <div class="example-box">
                    <p><strong>Q: VS Code가 뭔가요?</strong></p>
                    <p><strong>A:</strong> <strong>Visual Studio Code</strong>의 줄임말로, Microsoft에서 만든 <strong>무료 코드 편집기</strong>입니다.</p>
                    <ul>
                        <li>메모장의 프로급 버전이라고 생각하세요</li>
                        <li>전세계 프로그래머들이 가장 많이 쓰는 도구</li>
                        <li>코드 작성, 파일 관리, 프로그램 실행을 한 곳에서!</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 메모장 = 연필, VS Code = 만년필 + 지우개 + 형광펜 + 자동완성 기능이 다 있는 스마트 펜!</p>
                </div>
                
                <div class="example-box">
                    <p><strong>Q: 확장 프로그램(Extension)이 뭔가요?</strong></p>
                    <p><strong>A:</strong> 프로그램에 <strong>추가 기능을 붙이는 플러그인</strong>입니다.</p>
                    <ul>
                        <li>VS Code 자체는 기본 편집 기능만 제공</li>
                        <li>확장 프로그램으로 AI, 번역, 테마 등 추가 기능 설치</li>
                        <li>안티그래비티도 VS Code의 확장 프로그램 중 하나!</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 카카오톡 이모티콘처럼, 카카오톡 앱이 있어야 이모티콘을 쓸 수 있듯이, <strong>VS Code가 있어야 안티그래비티를 쓸 수 있습니다!</strong></p>
                </div>
                
                <div class="example-box">
                    <p><strong>Q: 왜 웹에서 "안티그래비티 다운로드"를 검색하면 안 나와요?</strong></p>
                    <p><strong>A:</strong> 안티그래비티는 <strong>독립 프로그램이 아니라 VS Code 전용 확장</strong>이기 때문입니다!</p>
                    <ul>
                        <li>설치 파일(.exe)이 따로 없어요</li>
                        <li>반드시 VS Code 안에서 설치해야 합니다</li>
                        <li>웹에서 검색해도 결국 "VS Code에서 설치하세요"라고 나옴</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 크롬 브라우저 확장 프로그램(광고 차단 등)을 웹에서 따로 다운받을 수 없는 것과 같아요. 크롬 안에서만 설치 가능!</p>
                </div>
                
                <div class="example-box">
                    <p><strong>Q: Vite가 뭔가요?</strong></p>
                    <p><strong>A:</strong> 웹 프로젝트를 <strong>자동으로 세팅해주는 도구</strong>입니다.</p>
                    <ul>
                        <li>React, Vue 같은 프로젝트를 1분 만에 생성</li>
                        <li>개발 서버도 자동으로 실행</li>
                        <li>초보자가 수동으로 하면 30분 걸릴 걸 자동화!</li>
                    </ul>
                    <p><strong>💡 비유:</strong> 집을 지을 때 기초 공사를 자동으로 해주는 건설 로봇! 여러분은 인테리어(디자인)만 하면 됩니다.</p>
                </div>
                
'''

# 삽입 위치 찾기: "📋 사전 준비물 체크리스트" 바로 앞
target = '                <h5>📋 사전 준비물 체크리스트</h5>'

if target in content:
    # 용어 설명이 이미 있는지 확인
    if '🤔 시작하기 전에: 용어 설명' not in content:
        content = content.replace(target, terms_section + target)
        print("✅ 용어 설명 추가 완료!")
    else:
        print("⚠️ 용어 설명이 이미 존재합니다.")
else:
    print("❌ 삽입 위치를 찾을 수 없습니다.")
    exit(1)

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 파일 업데이트 완료!")

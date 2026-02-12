#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# CTA 버튼 스타일 변경 및 섹션 구분 추가

with open('style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. CTA 버튼 스타일 추가 (파란색 계열)
cta_style = '''
/* CTA Button Style */
.cta-button {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 1rem 3rem;
    font-size: 1.2rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.6);
    background: linear-gradient(135deg, #1d4ed8, #1e40af);
}

.cta-button::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.5s;
}

.cta-button:hover::after {
    left: 100%;
}
'''

# 2. Features 섹션 구분 강화
# 기존 features 스타일 찾기
old_features = '''.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}'''

new_features = '''.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 5rem auto 0; /* 상단 여백 대폭 추가 */
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* 구분선 추가 */
  position: relative;
}

/* 구분선 중앙에 텍스트 추가 효과 */
.features::before {
    content: "▼ CURRICULUM ▼";
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color);
    padding: 0 1.5rem;
    color: var(--primary-cyan);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 2px;
}'''

# 스타일 추가
if '.cta-button {' not in content:
    # Pulse button 앞에 추가
    insert_pos = content.find('.pulse-button {')
    if insert_pos != -1:
        content = content[:insert_pos] + cta_style + '\n' + content[insert_pos:]
        print("✅ CTA 버튼 스타일 추가 완료 (파란색)")
    else:
        content += cta_style
        print("✅ CTA 버튼 스타일 파일 끝에 추가 완료")

# Features 섹션 수정
if old_features in content:
    content = content.replace(old_features, new_features)
    print("✅ Features 섹션 구분 강화 완료 (여백 + 구분선)")
else:
    # 정확한 매칭이 안될 경우를 대비해 features 클래스 검색 후 직접 수정 시도할 수도 있지만,
    # 여기서는 파일 내용을 읽었으므로 매칭될 것으로 가정.
    # 만약 실패하면 정규식으로 접근
    import re
    features_pattern = r'\.features\s*\{[^}]+\}'
    if re.search(features_pattern, content):
        content = re.sub(features_pattern, new_features, content)
        print("✅ Features 섹션 구분 강화 완료 (정규식 사용)")
    else:
        print("⚠️ Features 클래스를 찾을 수 없습니다.")

# 파일 저장
with open('style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ style.css 업데이트 완료!")

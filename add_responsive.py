#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# CSS에 반응형 디자인 및 hero-subtitle 스타일 추가

with open('style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# hero-subtitle 스타일 추가
hero_subtitle_style = '''
/* Hero Header */
.hero-header {
    text-align: center;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: #06b6d4;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
    0%, 100% { text-shadow: 0 0 10px rgba(6, 182, 212, 0.5); }
    50% { text-shadow: 0 0 20px rgba(6, 182, 212, 0.8); }
}
'''

# 반응형 미디어 쿼리 추가
responsive_styles = '''
/* ============================================================
   반응형 디자인 (Mobile First)
   ============================================================ */

/* 태블릿 (768px 이하) */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .dashboard {
        flex-direction: column;
    }
    
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
    }
    
    .content-area {
        margin-left: 0;
        padding: 1rem;
    }
    
    .day-grid {
        grid-template-columns: 1fr;
    }
    
    .tools-grid {
        grid-template-columns: 1fr;
    }
    
    .comparison-box {
        flex-direction: column;
    }
    
    .vs-divider {
        transform: rotate(90deg);
        margin: 1rem 0;
    }
    
    .rtf-formula {
        flex-direction: column;
    }
    
    .rtf-arrow {
        transform: rotate(90deg);
        margin: 1rem 0;
    }
}

/* 모바일 (480px 이하) */
@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 0.9rem;
        letter-spacing: 1px;
    }
    
    .hero-description {
        font-size: 0.9rem;
    }
    
    .cta-button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
    }
    
    .lesson-section {
        padding: 1rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
    
    h3 {
        font-size: 1.25rem;
    }
    
    .code-box code {
        font-size: 0.75rem;
    }
    
    .quiz-input {
        width: 100%;
        margin-bottom: 0.5rem;
    }
}

/* 대형 화면 (1200px 이상) */
@media (min-width: 1200px) {
    .content-area {
        max-width: 1200px;
        margin-left: 280px;
        margin-right: auto;
    }
}
'''

# hero-subtitle 스타일이 없으면 추가
if '.hero-subtitle' not in content:
    # .hero-title 다음에 추가
    insert_pos = content.find('.hero-description {')
    if insert_pos != -1:
        content = content[:insert_pos] + hero_subtitle_style + '\n' + content[insert_pos:]
        print("✅ hero-subtitle 스타일 추가 완료!")

# 반응형 스타일이 없으면 추가
if '@media' not in content:
    content += '\n' + responsive_styles
    print("✅ 반응형 디자인 추가 완료!")
else:
    print("⚠️ 반응형 스타일이 이미 존재합니다.")

# 파일 저장
with open('style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ style.css 업데이트 완료!")

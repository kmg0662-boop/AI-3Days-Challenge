#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Day 2로 이동 시 페이지 최상단으로 스크롤

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# switchDay 함수에 스크롤 추가
old_switch = '''        // 비밀번호 맞으면 팝업 닫고 Day 2로 이동
        closeDay2Popup();
        content.innerHTML = renderDay2Content();
    }
    // Day 3은 추후 구현
}'''

new_switch = '''        // 비밀번호 맞으면 팝업 닫고 Day 2로 이동
        closeDay2Popup();
        content.innerHTML = renderDay2Content();
        
        // 페이지 최상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Day 3은 추후 구현
}'''

if old_switch in content:
    content = content.replace(old_switch, new_switch)
    print("✅ Day 2 이동 시 자동 스크롤 추가 완료!")
else:
    print("⚠️ switchDay 함수를 찾을 수 없습니다.")

# Day 1로 돌아갈 때도 스크롤
old_day1 = '''    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
    } else if (dayNum === 2) {'''

new_day1 = '''    if (dayNum === 1) {
        content.innerHTML = renderDay1Content();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (dayNum === 2) {'''

if old_day1 in content:
    content = content.replace(old_day1, new_day1)
    print("✅ Day 1 이동 시 자동 스크롤 추가 완료!")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 업데이트 완료!")
print("📝 Day 전환 시 자동으로 페이지 최상단으로 스크롤됩니다!")

#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# loadDay 함수 닫기 및 잘못된 코드 제거

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. loadDay 함수 제대로 닫기
old_loadday = '''function loadDay(dayNum) {
    if (dayNum === 1) {
        // 이미 DAY 1이므로 아무것도 하지 않음
        return;
    }

/**
 * Day 2 비밀번호 공개 팝업
 */'''

new_loadday = '''function loadDay(dayNum) {
    if (dayNum === 1) {
        // 이미 DAY 1이므로 아무것도 하지 않음
        return;
    }
    alert(`DAY ${dayNum}은 곧 오픈됩니다! 🚀`);
}

/**
 * Day 2 비밀번호 공개 팝업
 */'''

if old_loadday in content:
    content = content.replace(old_loadday, new_loadday)
    print("✅ loadDay 함수 닫기 완료!")
else:
    print("⚠️ loadDay 패턴을 찾을 수 없습니다.")

# 2. switchDay 함수 끝의 잘못된 코드 제거
old_end = '''    }
    // Day 3은 추후 구현
}

    alert(`DAY ${dayNum}은 곧 오픈됩니다! 🚀`);
}'''

new_end = '''    }
    // Day 3은 추후 구현
}'''

if old_end in content:
    content = content.replace(old_end, new_end)
    print("✅ 잘못된 코드 제거 완료!")
else:
    print("⚠️ 잘못된 코드를 찾을 수 없습니다.")

# 파일 저장
with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ main.js 수정 완료!")
print("📝 수정 사항:")
print("  - loadDay 함수 제대로 닫기")
print("  - switchDay 끝의 중복 코드 제거")

---
tags: [mini-cooper-se, dashboard]
type: dashboard
updated: 2026-07-20
---

# 🏁 MINI Cooper SE — Dashboard

> [!info] Single Source of Truth
> ฐานข้อมูลความรู้สำหรับการศึกษา ซื้อ ใช้งาน และดูแล **MINI Cooper SE (F56 Electric)** มือสอง
> ทุกข้อมูลใหม่ต้อง Merge เข้าไฟล์เดิม ห้ามสร้างซ้ำ — ดูกติกาใน [[CLAUDE|Project Spec & Workflow]]

---

## 📊 Current Research Status

| หมวด | ความคืบหน้า | หมายเหตุ |
| --- | --- | --- |
| Overview / Model History | 🟡 โครงพร้อม | รอเติมข้อมูลสเปกไทยละเอียด |
| Buying Guide | 🟡 โครงพร้อม | Checklist ใช้งานได้แล้ว |
| Battery Research | 🟡 โครงพร้อม | ต้องหาข้อมูล SOH จริงจากรถในตลาดไทย |
| Ownership | 🟡 โครงพร้อม | รอใบเสร็จ/ค่าบำรุงรักษาจริง |
| Problems / Recall | 🟡 โครงพร้อม | ต้องตรวจสอบ recall ที่มีผลกับรถไทย |
| Reviews | 🔴 เริ่มต้น | รอโยนลิงก์รีวิวเข้า Inbox |
| Market Database | 🔴 เริ่มต้น | ยังไม่มีรถใน Watchlist |

## 🎯 Target Budget

> [!todo] ยังไม่กำหนด
> ระบุงบประมาณเป้าหมาย เช่น `XXX,XXX – XXX,XXX บาท` แล้วอัปเดตที่นี่และใน [[07 Market/Market Analysis]]

## 🚗 Cars Being Watched

ดูรายละเอียดทั้งหมดใน [[07 Market/Cars Watchlist]]

```dataview
TABLE year AS "ปี", mileage AS "เลขไมล์", price AS "ราคา", soh AS "SOH", status AS "สถานะ"
FROM "MINI Cooper SE/07 Market"
WHERE type = "watchlist-car"
SORT price ASC
```

*(ยังไม่มีรถใน Watchlist — เพิ่มรถคันแรกได้เลย)*

## ⭐ Interesting Listings

- *(ว่าง — รอประกาศขายที่น่าสนใจ)*

## 🛡️ Warranty Knowledge

- แบตเตอรี่แรงดันสูง: **8 ปี / 100,000 กม.** (แล้วแต่อย่างใดถึงก่อน) → [[03 Battery/Warranty]]
- ตัวรถ (ไทย): โดยทั่วไป 4 ปี — **ต้องยืนยันเงื่อนไขของรถแต่ละคัน/แต่ละล็อต**
- MSI (MINI Service Inclusive): แพ็กเกจบำรุงรักษา ตรวจสอบว่ารถคันที่ดูมีเหลือหรือไม่

## 🔋 Battery Research Progress

- [x] โครงบทความ Battery Technology / SOH / Charging / Aging / Replacement
- [ ] รวบรวมค่า SOH จริงของรถมือสองในไทย (จาก battery report)
- [ ] ต้นทุนเปลี่ยนแบตจริงในไทย → [[03 Battery/Battery Replacement]]
- [ ] วิธีขอตรวจ SOH ที่ศูนย์ MINI ไทย + ค่าใช้จ่าย

## 📝 Review Progress

- [ ] รีวิวไทย (Pantip / YouTube ไทย / กลุ่ม Facebook) → [[06 Reviews/Thailand]]
- [ ] รีวิวต่างประเทศ → [[06 Reviews/International]]
- [ ] สรุป Consensus เจ้าของรถ → [[06 Reviews/Community Summary]]

## ❓ Open Questions

1. Heat pump เป็นอุปกรณ์มาตรฐานของสเปกไทยหรือไม่?
2. รถล็อตไทยมีปัญหา charging port lock / heat pump มากน้อยแค่ไหน?
3. ราคาตลาดมือสองไทยปัจจุบัน (2026) แยกตามปีรถเป็นเท่าไร?
4. ศูนย์ MINI ไทยคิดค่าตรวจ SOH เท่าไร และออกเอกสารให้หรือไม่?
5. การมาของ MINI Cooper SE เจนใหม่ (J01, ผลิตจีน) กดราคามือสอง F56 แค่ไหน?

## 🗂️ Recent Notes

```dataview
TABLE updated AS "อัปเดต"
FROM "MINI Cooper SE"
WHERE updated
SORT updated DESC
LIMIT 10
```

---

**Last Updated:** 2026-07-20

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
| Overview / Model History | 🟢 ยืนยันแล้ว | ราคา/วันเปิดตัวไทย + timeline ยืนยันจากแหล่งจริง (2026-07-20) |
| Buying Guide | 🟡 โครงพร้อม | Checklist ใช้งานได้ · Price Guide มีข้อมูลจริง 4 คันแรก |
| Battery Research | 🟡 คืบหน้า | ⚠️ วอร์รันตี้แบตไทยยังไม่ยืนยัน — งานอันดับ 1 |
| Ownership | 🟡 โครงพร้อม | รอใบเสร็จ/ค่าบำรุงรักษาจริง |
| Problems / Recall | 🟢 Recall ยืนยันแล้ว | 24V-612 + 24V-302 จาก NHTSA · รอเทียบ campaign ฝั่งไทย |
| Reviews | 🔴 เริ่มต้น | รอโยนลิงก์รีวิวเข้า Inbox |
| Market Database | 🟡 เริ่มมีข้อมูล | ราคาตั้ง 4 คันแรก (ก.ค. 2026): 0.73M–1.16M |

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

- ✅ ตัวรถ (ไทย): เปิดตัว 2020 ให้ **3 ปีไม่จำกัดระยะทาง + MSI 3 ปี/60,000 กม.** · เว็บ MINI TH ปัจจุบันระบุ MINI Electric **4 ปี** + ซื้อขยายได้ถึง 6 ปี → [[03 Battery/Warranty]]
- ⚠️ วอร์รันตี้แบตแรงดันสูงของรถไทย **ยังไม่ยืนยันว่ามีแยก/กี่ปี** — ตัวเลข "8 ปี/100,000 กม." เป็นของตลาดสหรัฐ ห้ามใช้กับรถไทยจนกว่าเช็ค VIN รายคัน
- ✅ Recall สำคัญ: 24V-612 (ซอฟต์แวร์แบต ครอบคลุมเกือบทุกคัน) — เช็คว่าทำแล้วหรือยัง ฟรี → [[05 Problems/Recall]]

## 🔋 Battery Research Progress

- [x] โครงบทความ Battery Technology / SOH / Charging / Aging / Replacement
- [x] ตัวเลข SOH/degradation จริง (ต่างประเทศ) เป็นฐานเทียบ → [[03 Battery/Battery SOH]]
- [x] ยืนยันสเปกชาร์จ (AC 11 kW 3 เฟส, DC 50 kW) + heat pump มาตรฐาน
- [ ] รวบรวมค่า SOH จริงของ**รถมือสองในไทย** (จาก battery report)
- [ ] ต้นทุนเปลี่ยนแบตจริงในไทย → [[03 Battery/Battery Replacement]]
- [ ] วิธีขอตรวจ SOH ที่ศูนย์ MINI ไทย + ค่าใช้จ่าย

## 📝 Review Progress

- [ ] รีวิวไทย (Pantip / YouTube ไทย / กลุ่ม Facebook) → [[06 Reviews/Thailand]]
- [ ] รีวิวต่างประเทศ → [[06 Reviews/International]]
- [ ] สรุป Consensus เจ้าของรถ → [[06 Reviews/Community Summary]]

## ❓ Open Questions

1. **⭐ วอร์รันตี้แบตแรงดันสูงของรถไทย: มีแยกไหม กี่ปี เกณฑ์เคลม SOH เท่าไร?** (สำคัญสุด — ถามศูนย์เป็นลายลักษณ์อักษร)
2. Campaign เทียบเท่า recall 24V-612 ฝั่งไทยใช้หมายเลขอะไร?
3. รถล็อตไทยมีปัญหา charging port lock / heat pump มากน้อยแค่ไหน (เก็บเคสไทย)?
4. ศูนย์ MINI ไทยคิดค่าตรวจ SOH เท่าไร และออกเอกสารให้หรือไม่?
5. ค่าซ่อมจริงในไทย (charging actuator, heat pump, KLE, แบต 12V) — ยังไม่มีตัวเลขไทย → [[05 Problems/Repair Cost]]
6. ทำไมประกาศปี 2022 มีทั้ง 999,000 และ 729,000 — คันถูกผิดปกติหรือตลาดกำลังลงแรง? (กวาดตลาดเต็มผ่าน Gemini Prompt 1)

> [!done] ปิดแล้วรอบนี้: Heat pump เป็นมาตรฐานทุกคัน · SOH จริงรถ 3–5 ปีอยู่กลาง 90 ปลาย ๆ (ฐาน i3 เสื่อมช้า) · ระยะทางจริง ~160–185 กม. · AC 11 kW 3 เฟส ยืนยันแล้ว

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

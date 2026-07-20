---
tags: [mini-cooper-se, market, watchlist]
type: database
updated: 2026-07-20
---

# Cars Watchlist — ฐานข้อมูลรถที่กำลังดู

## Summary

ฐานข้อมูลรถ Cooper SE ทุกคันที่เจอในตลาด — **บันทึกทุกคันที่พิจารณา ไม่ว่าจะสนใจจริงหรือไม่** เพราะทุกคันคือ data point ของราคากลาง แต่ละคันสร้างเป็นไฟล์ย่อยจาก Template ด้านล่าง เพื่อให้ Dataview ดึงขึ้น Dashboard ได้

## วิธีใช้

1. เจอประกาศ → สร้างไฟล์ใหม่ในโฟลเดอร์ `07 Market/` ชื่อ `Car - {ปี} {สี} {ราคา}.md` โดย copy Template ด้านล่าง
2. Claude ประเมิน **Good Deal / Fair / Overpriced** เทียบกับ [[02 Buying Guide/Price Guide]] พร้อมเหตุผล
3. เมื่อรถขายแล้ว → เปลี่ยน `status` เป็น `sold` และบันทึกราคาขายจริง (ถ้ารู้) ลง [[07 Market/Sold Cars]]

## รถในระบบ

```dataview
TABLE date AS "วันที่พบ", year AS "ปี", mileage AS "ไมล์", price AS "ราคา", soh AS "SOH", verdict AS "ประเมิน", status AS "สถานะ"
FROM "MINI Cooper SE/07 Market"
WHERE type = "watchlist-car"
SORT date DESC
```

*(ยังไม่มีรถในระบบ)*

## Template รถ 1 คัน

```markdown
---
type: watchlist-car
tags: [mini-cooper-se, market, watchlist]
date: 2026-07-20        # วันที่พบประกาศ
source: one2car          # one2car / kaidee / facebook / เต็นท์ / บุคคล
url: 
year: 2021               # ปีจดทะเบียน
model_year: LCI          # Pre-LCI / LCI
mileage: 45000
color: 
price: 
warranty: ""             # วอร์รันตี้แบตหมดเมื่อไร
msi: ""                  # MSI เหลือถึง
soh: ""                  # ตัวเลข + แหล่งตรวจ
dealer: ""
verdict: ""              # Good Deal / Fair / Overpriced
status: watching         # watching / contacted / inspected / passed / sold
updated: 2026-07-20
---

# Car — {ปี} {สี} {ราคา}

## ข้อมูลประกาศ
(รายละเอียด + รูป)

## Pros
- 

## Cons
- 

## การประเมิน (Good Deal / Fair / Overpriced)
เหตุผล:
1. เทียบราคากลาง [[02 Buying Guide/Price Guide]] …
2. SOH / วอร์รันตี้ …
3. คันเทียบใกล้เคียง …

## บันทึกการติดต่อ/ตรวจสภาพ
| วันที่ | เหตุการณ์ | ผล |
| --- | --- | --- |
```

## Related Notes

- [[02 Buying Guide/Price Guide]] · [[07 Market/Sold Cars]] · [[07 Market/Market Analysis]] · [[00 Dashboard]]

## Questions

- —

## Next Research

- เพิ่มรถคันแรกเข้าระบบ

**Last Updated:** 2026-07-20

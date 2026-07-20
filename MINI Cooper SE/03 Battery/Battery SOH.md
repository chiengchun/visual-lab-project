---
tags: [mini-cooper-se, battery, soh]
type: reference
updated: 2026-07-20
---

# Battery SOH — State of Health และวิธีตรวจ

## Summary

SOH (State of Health) คือเปอร์เซ็นต์ความจุแบตคงเหลือเทียบกับตอนใหม่ เป็น **ตัวเลขเดียวที่สำคัญที่สุดในการซื้อ Cooper SE มือสอง** เพราะกำหนดทั้งระยะทางใช้งานจริง มูลค่ารถ และสิทธิ์เคลมวอร์รันตี้ ต้องได้ตัวเลขจากเครื่องมือวินิจฉัยจริงเท่านั้น ไม่รับคำพูดปากเปล่า

## Key Points

- **เกณฑ์อ่านค่า (รถอายุ 3–6 ปี):**
  - ≥ 92% — ดีมาก
  - 88–92% — ปกติตามอายุ
  - 85–88% — เริ่มต่ำ ใช้ต่อรองราคา
  - < 85% — ต่ำผิดปกติ ตรวจหาสาเหตุ / ถอย
  - < 70% — เกณฑ์เคลมวอร์รันตี้แบตในตลาดสากล (⚠️ เงื่อนไขของรถไทยยังไม่ยืนยัน) → [[03 Battery/Warranty]]
- **วิธีได้ตัวเลข SOH:**
  1. **ศูนย์ MINI** — อ่านจากระบบ ISTA ออกเอกสารได้ (น่าเชื่อถือที่สุด)
  2. **OBD + แอป** เช่น Bimmerlink/BimmerCode ผ่าน adapter (อ่านค่าจาก SME ได้เอง ใช้ตอนไปดูรถ)
  3. อู่ EV อิสระที่มีเครื่องมือ BMW
- ตัวเลขบนหน้าจอรถ (ระยะทางคงเหลือ) **ไม่ใช่ SOH** — เป็นค่าประมาณจากพฤติกรรมขับล่าสุด ใช้อ้างอิงคร่าว ๆ เท่านั้น

## วิธีตรวจเองด้วย Bimmerlink (ทำได้หน้างาน)

1. เตรียม OBD adapter (ENET/OBD Bluetooth ที่รองรับ) + แอป Bimmerlink
2. เสียบพอร์ต OBD ใต้คอนโซลฝั่งคนขับ เปิด ignition
3. เลือก ECU ฝั่งแบต (SME) → อ่านค่า "Battery capacity / SOH"
4. บันทึกภาพหน้าจอ + วันที่ + เลขไมล์ เข้า [[07 Market/Cars Watchlist]] ทุกครั้ง

> [!warning]
> SOH ที่อ่านคนละเครื่องมือ/คนละอุณหภูมิอาจต่างกันได้ 1–3% — ใช้แนวโน้มและระดับ ไม่ใช่ทศนิยม

## บันทึกค่า SOH ที่พบในตลาด (สะสมข้อมูล)

### ข้อมูลเจ้าของต่างประเทศ (จาก forum/OBD — อ้างอิงเทียบเคียง)

| รถ (ปี/ไมล์) | SOH / การเสื่อม | แหล่งตรวจ | หมายเหตุ |
| --- | --- | --- | --- |
| 2021, ~21,000 ไมล์ (4 ปีถือครอง) | เสื่อม ~4% (SOH ~96%) | OBD Bluetooth dongle | ระยะทางจริงยังไม่ลดที่วัดได้ |
| 2022 (ม.ค.), ~42,000 ไมล์ | SOH ~94–96% (แกว่งตามอากาศ/การชาร์จล่าสุด) | — | ชาร์จถึง ~75% เป็นประจำ |
| กลุ่มรถ 2020–2021, 20,000–30,000 ไมล์ | SOH 96–98% | รวมจากหลายเจ้าของ | รถ 3–4 ปีเสื่อมหลัก single digit |
| กลุ่มรถ 30,000–35,000 ไมล์ climate ผสม | ความจุลด ~2–5% | รวมจากหลายเจ้าของ | ยังใกล้ความจุเดิม |

> [!note] อ่านค่าอย่างไร
> SOH กลาง 90 ปลาย ๆ ที่รถอายุ 3–5 ปี = สัญญาณดี · แพลตฟอร์มนี้ (ฐาน i3) เสื่อมช้าเมื่อชาร์จอย่างระวังและไม่ DC บ่อย · **ยังไม่มี data point ของรถไทยโดยตรง — ตัวเลขข้างบนเป็นฐานเทียบ ต้องเก็บของรถไทยเพิ่ม**

### ข้อมูลรถไทย (เก็บเมื่อไปดูรถจริง)

| วันที่ | รถ (ปี/ไมล์) | SOH | แหล่งตรวจ | หมายเหตุ |
| --- | --- | --- | --- | --- |
| *รอข้อมูล* | | | | |

## References

- [Mini Cooper SE Battery Degradation Per Year — Recharged](https://recharged.com/articles/mini-cooper-se-battery-degradation-per-year)
- [What is your battery state of health? — MINIF56 forum](https://www.minif56.com/threads/what-is-your-battery-state-of-health.98470/)
- [OBD battery State of Health — MINI Electric Forum](https://www.minievforum.com/threads/obd-battery-state-of-health.1433/)
- [How much have you seen your real range degrade — MINIF56 forum](https://www.minif56.com/threads/how-much-if-any-have-you-seen-your-real-range-degrade-over-time.95382/)

## Related Notes

- [[03 Battery/Battery Aging]] · [[03 Battery/Warranty]] · [[02 Buying Guide/Buying Checklist]]

## Questions

- ศูนย์ MINI ไทยใช้เกณฑ์/เอกสารแบบไหนในการรายงาน SOH?
- ค่า SOH เฉลี่ยของรถไทยปี 2020 ที่วิ่ง 50,000–80,000 กม. คือเท่าไร?

## Next Research

- ซื้อ OBD adapter + ทดสอบ Bimmerlink กับรถจริง 1 คัน บันทึกขั้นตอนละเอียดกลับมาที่หน้านี้

**Last Updated:** 2026-07-20

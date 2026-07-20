---
tags: [mini-cooper-se, problems, recall]
type: reference
updated: 2026-07-20
---

# Recall — การเรียกคืนและ Technical Campaign

## Summary

Cooper SE (F56 BEV) มี recall สำคัญ 2 รายการที่ยืนยันจาก NHTSA แล้ว — รายการใหญ่คือ **24V-612 (2024): ความเสี่ยงแบตแรงดันสูงลัดวงจร ครอบคลุมรถแทบทุกคันที่ผลิต (มี.ค. 2019 – ม.ค. 2024)** แก้ด้วยการอัปเดตซอฟต์แวร์ และรายการเล็ก 24V-302: ซีลเคสแบตไม่ได้มาตรฐานในรถส่วนน้อย ผู้ซื้อมือสองในไทย**ต้องให้ศูนย์เช็คจาก VIN ว่ารถคันนั้นทำ campaign เทียบเท่าแล้วหรือยัง** — recall ทำฟรีตลอดอายุรถ

## ตาราง Recall ที่ยืนยันแล้ว (NHTSA)

| Campaign | ประกาศ | เนื้อหา | รถที่กระทบ | วิธีแก้ | สถานะข้อมูล |
| --- | --- | --- | --- | --- | --- |
| **24V-612** | ส.ค.–ต.ค. 2024 | ชิ้นส่วนแบตแรงดันสูงบางชิ้นผลิตนอกสเปก เสี่ยงลัดวงจร → overheat/ไฟไหม้ได้แม้รถจอดอยู่ (เกิดเหตุจริง 2 เคส: ต.ค. 2023 และต้นปี 2024 ในเยอรมนี) | **12,535 คันในสหรัฐ — MY2020–2024 ผลิต 21 มี.ค. 2019 – 25 ม.ค. 2024 (= เกือบทุกคันของรุ่น)** | อัปเดตซอฟต์แวร์ SME/BMS เพิ่มฟังก์ชันวินิจฉัย ถ้าพบความผิดปกติจะ discharge แบตลงต่ำกว่า 30% อัตโนมัติ ทำฟรี ใช้เวลาหลายชั่วโมง | 🟢 ยืนยันจาก NHTSA |
| **24V-302** | พ.ค.–มิ.ย. 2024 | ซีลระหว่างเคสแบต 2 ซีกทาไม่พอ → น้ำซึมเข้าแบตได้ เสี่ยง isolation fault/รถดับ | ~128 คันในสหรัฐ — MY2021–2023 ประกอบ 12 มิ.ย. 2020 – 30 พ.ย. 2022 | ทดสอบรั่ว + ตรวจ isolation fault ถ้าพบน้ำเข้า **เปลี่ยนแบตให้ฟรี** | 🟢 ยืนยันจาก NHTSA |

> [!note] อย่าสับสน
> Recall 20V-601 (แบตแรงดันสูง 2020–2021) เป็นของ **Countryman PHEV** ไม่ใช่ Cooper SE

## นัยต่อผู้ซื้อมือสองในไทย

1. **24V-612 คือคำถามบังคับ:** ช่วงผลิตครอบคลุมรถทุกล็อตที่เข้าไทย — ถามศูนย์ด้วย VIN ว่า campaign ซอฟต์แวร์นี้ (หรือเทียบเท่าฝั่ง UK/EU) ทำแล้วหรือยัง ถ้ายัง = นัดทำก่อนโอน (ฟรี แต่กินเวลาหลายชม.)
2. รถที่ทำ 24V-612 แล้วได้ฟังก์ชันวินิจฉัยแบตเพิ่ม — เป็นข้อดีต่อความปลอดภัยระยะยาว
3. 24V-302 โอกาสเจอต่ำ (หลักร้อยคันทั่วโลก) แต่ถ้ารถอยู่ในช่วงประกอบ 2020–2022 ให้ถามด้วย — ถ้าเข้าเกณฑ์และพบปัญหา = ได้แบตใหม่ฟรี
4. รายการ recall ของรถสเปกไทยอาจใช้ชื่อ/หมายเลข campaign ต่างจาก NHTSA — ยึดผลเช็ค VIN จากศูนย์เป็นหลัก

## References

- [InsideEVs — BMW Recalls 12,535 Mini Cooper SEs Over Fire Risk (24V-612)](https://insideevs.com/news/732406/mini-cooper-se-battery-recall/)
- [MotoringFile — 2020-2024 MINI Cooper SE Recalled Due to Potential Battery Issue](https://www.motoringfile.com/2024/09/03/2020-2024-mimi-cooper-se-recalled-due-to-potential-battery-issue/)
- [NHTSA Part 573 Safety Recall Report 24V-612 (PDF)](https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V612-3912.PDF)
- [Carscoops — Mini Recalls Cooper SE Due To Battery Fire Risk After 2 Incidents](https://www.carscoops.com/2024/05/mini-recalls-cooper-se-due-to-battery-fire-risk-after-2-incidents/)
- [autoevolution — BMW Recalls MINI Cooper SE Over Water Intrusion (24V-302)](https://www.autoevolution.com/news/bmw-recalls-mini-cooper-se-over-potential-battery-damage-from-water-intrusion-233332.html)

## Related Notes

- [[02 Buying Guide/VIN Decoder]] · [[02 Buying Guide/Dealer Inspection]] · [[03 Battery/Warranty]] · [[05 Problems/Common Issues]]

## Questions

- Campaign เทียบเท่า 24V-612 ของรถสเปกไทยใช้หมายเลขอะไร และศูนย์ไทยเริ่มทำเมื่อไร?
- มี recall ที่ประกาศผ่านหน่วยงานไทย (สมอ./ขนส่ง) บ้างหรือไม่?

## Next Research

- เช็ค VIN รถจริงคันแรกที่ศูนย์ → บันทึกชื่อ campaign ฝั่งไทยกลับมาที่ตารางนี้

**Last Updated:** 2026-07-20 (ยืนยัน 24V-612 และ 24V-302 จาก NHTSA)

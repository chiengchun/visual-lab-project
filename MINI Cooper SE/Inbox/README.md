---
tags: [inbox, workflow]
type: system
updated: 2026-07-20
---

# 📥 Inbox — จุดรับข้อมูลดิบ

โยนข้อมูลดิบทุกชนิดลงโฟลเดอร์นี้ได้เลย ไม่ต้องจัดระเบียบ:

PDF · รูป · Screenshot · ลิงก์ YouTube · โพสต์ Facebook · กระทู้ Pantip · Reddit · เว็บไซต์ · ใบเสร็จค่าซ่อม · Battery report · คำตอบจาก ChatGPT/Gemini/Claude · Voice memo · โน้ตสั้น ๆ

## สิ่งที่ Claude จะทำกับไฟล์ในนี้ (ทุกครั้งที่สั่ง "process inbox")

1. อ่านทั้งหมด → Extract knowledge
2. แยกเป็นหัวข้อ → merge เข้าไฟล์ที่เกี่ยวข้อง (**ไม่สร้างซ้ำ** — กติกาใน [[CLAUDE|Project Spec]])
3. อัปเดต [[00 Dashboard]]
4. ใส่ Reference/ลิงก์ต้นฉบับ
5. ย้ายไฟล์ต้นฉบับไป `09 Resources/` (เอกสาร/สื่อ) หรือ `Archive/` (ข้อมูลดิบที่สกัดเสร็จ)

> [!tip]
> ถ้าเป็นลิงก์ ให้สร้างไฟล์ `.md` สั้น ๆ ในนี้ วางลิงก์ + บริบทหนึ่งบรรทัด (เช่น "ประกาศขายเจอ 19 ก.ค. ราคาน่าสนใจ")

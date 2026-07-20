# MINI Cooper SE Knowledge Base — Project Spec & Workflow

Owner: เชียง · Platform: Obsidian · Authoring AI: Claude Code

Repository นี้ไม่ใช่โน้ต แต่เป็น **Reference Book + Research Database + Buying Guide + Ownership Manual** ของ MINI Cooper SE (F56 Electric) — ใช้งานต่อเนื่องได้หลายปี และเป็น **Single Source of Truth**

## Workflow เมื่อมีข้อมูลใหม่เข้า `Inbox/`

1. อ่านข้อมูลทั้งหมด (PDF, รูป, screenshot, ลิงก์, ใบเสร็จ, battery report, คำตอบจาก AI ฯลฯ)
2. Extract knowledge
3. แบ่งข้อมูลออกเป็นหัวข้อ
4. อัปเดตไฟล์ที่เกี่ยวข้อง (Battery / Warranty / Maintenance / Review / Problems / Price / Timeline / Market / Comparison) **โดยไม่สร้างข้อมูลซ้ำ**
5. อัปเดต `00 Dashboard.md`
6. เพิ่ม Reference (ลิงก์ต้นฉบับเสมอ)
7. ย้ายไฟล์จาก `Inbox/` → `09 Resources/` (เอกสาร/สื่อ) หรือ `Archive/` (ข้อมูลดิบที่สกัดแล้ว)

## กติกา

- **Duplicate Rule:** ห้ามสร้างข้อมูลซ้ำ — หัวข้อเดิมมีอยู่แล้วให้ Merge + Rewrite เป็นบทความเดียว
- **Knowledge Rule:** ข้อมูลใหม่ต้อง Merge, Cross Reference, Link, Tag กับข้อมูลเดิมเสมอ
- **Writing Style:** เขียนเหมือนหนังสืออ้างอิง ไม่ใช่ chat ไม่ใช้ภาษาพูด — ใช้ Heading, Table, Bullet, Callout, Mermaid, Internal Link, Tags, Dataview-compatible frontmatter
- **ทุกหน้า ต้องมี:** Summary, Key Points, References, Related Notes, Questions, Next Research, Last Updated

## Workflow เฉพาะทาง

- **Review (YouTube/Facebook/Pantip/Reddit):** สรุปเป็น Owner Voice แบ่ง ข้อดี / ข้อเสีย / Consensus / Minority Opinion พร้อมลิงก์ต้นฉบับ → `06 Reviews/`
- **Service History (ใบเสร็จ):** OCR → Extract → สร้าง Timeline → อัปเดต `04 Ownership/Maintenance.md` + `05 Problems/Repair Cost.md` → แนบต้นฉบับใน `09 Resources/`
- **Market Intelligence (ประกาศขาย):** เปรียบเทียบกับฐานข้อมูล → ประเมิน **Good Deal / Fair / Overpriced** พร้อมเหตุผล → บันทึกใน `07 Market/Cars Watchlist.md`

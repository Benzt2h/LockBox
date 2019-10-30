export const DepositField = [
    { label: "ขนาดล็อกเกอร์", name: "size", type: "text", required: true, readonly: "readonly" },
    { label: "รหัสผ่าน", name: "password", type: "password", required: true, maxlength: "10" },
    { label: "ยืนยันรหัสผ่าน", name: "p-password", type: "password", required: true, maxlength: "10" }
]

export const WithdrawField = [
    { label: "ขนาดล็อกเกอร์", name: "size", type: "text", required: true, readonly: "readonly" },
    { label: "ฝากไว้เป็นเวลา(ชั่วโมง)", name: "time", type: "text", required: true, readonly: "readonly" },
    { label: "เงินที่ต้องจ่าย", name: "price", type: "number", required: true, readonly: "readonly" },
    { label: "จำนวนเงินที่ใส่", name: "p-price", type: "number", required: true },
    { label: "รหัสผ่าน", name: "p-password", type: "password", required: true, maxlength: "10" }
]

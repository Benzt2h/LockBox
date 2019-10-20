export const DepositField = [
    { label: "ขนาดล็อกเกอร์", name: "size", type: "text", required: true, readonly: "readonly" },
    { name: "start", type: "hidden", required: true },
    { label: "วันที่เริ่มฝาก", name: "timestamp", type: "text", required: true, readonly: "readonly" },
    { name: "status", type: "hidden", required: true },
    { label: "รหัสผ่าน", name: "password", type: "password", required: true, maxlength: "10" },
    { label: "ยืนยันรหัสผ่าน", name: "p-password", type: "password", required: true, maxlength: "10" }
]

export const WithdrawField = [
    { label: "ขนาดล็อกเกอร์", name: "size", type: "text", required: true, readonly: "readonly" },
    { name: "start", type: "hidden", required: true },
    { label: "วันที่เริ่มฝาก", name: "timestamp", type: "text", required: true, readonly: "readonly" },
    { name: "status", type: "hidden", required: true },
    { label: "รหัสผ่าน", name: "password", type: "password", required: true, maxlength: "10" }
]

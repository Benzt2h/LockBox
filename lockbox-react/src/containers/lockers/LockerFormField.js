export const DepositField = [
    { label: "ขนาดล็อกเกอร์", name: "size", type: "text", required: true, readonly: "readonly" },
    { label: "รหัสผ่าน", name: "password", type: "password", required: true, maxlength: "10" },
    { label: "ยืนยันรหัสผ่าน", name: "p-password", type: "password", required: true, maxlength: "10" }
]

export const WithdrawField = [
    { label: "ขนาดล็อกเกอร์", name: "size", type: "text", required: true, readonly: "readonly" },
    { label: "รหัสผ่าน", name: "password", type: "password", required: true, maxlength: "10" }
]

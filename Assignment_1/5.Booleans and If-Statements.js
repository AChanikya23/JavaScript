function evaluateConditions(obj) {
    if (obj.age > 18 && obj.hasLicense) {
        return "Eligible to drive";
    }
    if (obj.temperature > 30 || obj.humidity > 70) {
        return "Warning: High discomfort level";
    }
    if ((obj.role === "admin" || obj.role === "editor") && obj.isActive) {
        return "Access granted";
    }
    if (obj.age < 18 && !obj.isActive) {
        return "Minor and inactive";
    }
    if (obj.temperature <= 30 && obj.humidity <= 50) {
        return "Comfortable conditions";
    }
    if (obj.role === "guest" && !obj.isAllowed) {
        return "Guest access denied";
    }
    return "Conditions not met";
}
const user1 = {
    age: 20,
    hasLicense: true,
    temperature: 32,
    humidity: 60,
    role: "admin",
    isActive: true,
    isAllowed: true
};
console.log(evaluateConditions(user1)); 
const user2 = {
    age: 16,
    hasLicense: false,
    temperature: 28,
    humidity: 75,
    role: "guest",
    isActive: false,
    isAllowed: false
};
console.log(evaluateConditions(user2)); 
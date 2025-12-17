module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/Desktop/medical/src/types/roles.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserRole",
    ()=>UserRole,
    "roles",
    ()=>roles
]);
var UserRole = /*#__PURE__*/ function(UserRole) {
    UserRole["REGULAR"] = "Regular";
    UserRole["WHOLESALER"] = "Wholesaler";
    UserRole["DISTRIBUTOR"] = "Distributor";
    UserRole["ADMIN"] = "Admin";
    return UserRole;
}({});
const roles = [
    "Regular",
    "Wholesaler",
    "Distributor",
    "Admin"
];
}),
"[project]/Desktop/medical/src/app/api/admin/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$types$2f$roles$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/src/types/roles.ts [app-route] (ecmascript)"); // Assuming UserRole enum is defined here
;
;
;
;
const usersFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src/data/users.json');
async function readUsers() {
    try {
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(usersFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading users data:', error);
        return [];
    }
}
async function POST(request) {
    const { email, password } = await request.json();
    if (!email || !password) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Email and password are required'
        }, {
            status: 400
        });
    }
    const users = await readUsers();
    const adminUser = users.find((user)=>user.email === email && user.role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$types$2f$roles$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserRole"].ADMIN);
    if (!adminUser) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Invalid credentials or not an admin'
        }, {
            status: 401
        });
    }
    // In a real application, you would hash the password and compare it securely
    // For this example, we'll do a direct comparison.
    // We need to ensure the adminUser.password is available for comparison.
    // If password is not stored in users.json or not provided during creation,
    // this comparison will fail. For now, assuming it exists.
    if (adminUser.password !== password) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Invalid credentials'
        }, {
            status: 401
        });
    }
    // For simplicity, return a dummy token. In a real app, generate a JWT.
    const token = `admin-token-${adminUser.id}`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        message: 'Login successful',
        token,
        role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$types$2f$roles$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserRole"].ADMIN,
        user: {
            id: adminUser.id,
            email: adminUser.email,
            companyName: adminUser.companyName,
            gstin: adminUser.gstin
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c41d0847._.js.map
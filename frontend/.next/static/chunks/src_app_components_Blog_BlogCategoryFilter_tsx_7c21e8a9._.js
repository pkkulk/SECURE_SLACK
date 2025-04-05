(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_Blog_BlogCategoryFilter_tsx_7c21e8a9._.js", {

"[project]/src/app/components/Blog/BlogCategoryFilter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/Blog/BlogCategoryFilter.tsx
__turbopack_context__.s({
    "default": (()=>BlogCategoryFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const categories = [
    "All",
    "AI",
    "Security",
    "Cloud",
    "DevOps"
];
function BlogCategoryFilter() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-4 flex-wrap mb-4",
        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveCategory(cat),
                className: `px-4 py-2 rounded-full text-sm border transition ${activeCategory === cat ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`,
                children: cat
            }, cat, false, {
                fileName: "[project]/src/app/components/Blog/BlogCategoryFilter.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Blog/BlogCategoryFilter.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(BlogCategoryFilter, "dXg2LpGdJ7VQ6CNKcLAC25AcxBc=");
_c = BlogCategoryFilter;
var _c;
__turbopack_context__.k.register(_c, "BlogCategoryFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_Blog_BlogCategoryFilter_tsx_7c21e8a9._.js.map
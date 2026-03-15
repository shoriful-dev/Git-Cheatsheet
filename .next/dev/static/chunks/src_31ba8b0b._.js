(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Navbar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "abdbdaeeb70e17583832000446d98158bb1dd557875d5f613f7e55f793b53f97") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "abdbdaeeb70e17583832000446d98158bb1dd557875d5f613f7e55f793b53f97";
    }
    const { searchTerm, setSearchTerm, onMenuClick } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onMenuClick) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onMenuClick,
            className: "lg:hidden p-2 -ml-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all outline-none",
            "aria-label": "Open menu",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = onMenuClick;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== setSearchTerm) {
        t3 = ({
            "Navbar[<Link>.onClick]": ()=>{
                setSearchTerm("");
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        })["Navbar[<Link>.onClick]"];
        $[4] = setSearchTerm;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-1.5 rounded-lg bg-blue-600 shadow-md shadow-blue-600/20 group-hover:shadow-blue-600/40 transition-shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                className: "h-4 w-4 text-white"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 56,
                columnNumber: 134
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-bold text-base tracking-tight hidden sm:block",
            children: "GitDocs"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden lg:inline-flex px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-semibold text-slate-400 ml-1",
            children: "Hub"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t3) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            onClick: t3,
            className: "flex items-center gap-2.5 group outline-none",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t2 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 flex-shrink-0",
            children: [
                t2,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[11] = t2;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== setSearchTerm) {
        t10 = ({
            "Navbar[<input>.onChange]": (e)=>setSearchTerm(e.target.value)
        })["Navbar[<input>.onChange]"];
        $[15] = setSearchTerm;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== searchTerm || $[18] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search commands...",
            value: searchTerm,
            onChange: t10,
            className: "h-9 w-full rounded-lg border border-slate-800 bg-slate-900/80 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 outline-none ring-0 focus:border-blue-500/40 focus:bg-slate-900 transition-all duration-200"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[17] = searchTerm;
        $[18] = t10;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                className: "px-1.5 py-0.5 rounded border border-slate-700 bg-slate-800 text-[10px] text-slate-500 font-mono",
                children: "⌘K"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 112,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center max-w-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full",
                children: [
                    t9,
                    t11,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 119,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://github.com/shoriful-dev",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "p-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-700 transition-all hidden sm:flex outline-none",
            "aria-label": "GitHub Profile",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 127,
                columnNumber: 291
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 sm:gap-3 flex-shrink-0",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "#what-is-git",
                    className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/15 active:scale-95 outline-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 134,
                            columnNumber: 308
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline",
                            children: "Learn"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 134,
                            columnNumber: 330
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 134,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t13 || $[26] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky top-0 z-40 w-full border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 w-full gap-3 sm:gap-6",
                children: [
                    t8,
                    t13,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 141,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t8;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    return t16;
}
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/icons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryIcons",
    ()=>categoryIcons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
const categoryIcons = {
    "Getting Started": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
    "Creating Projects": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"],
    "Day-to-Day Workflow": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
    "Branching & Merging": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
    "Remote & Collaboration": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
    "Undoing Mistakes": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"],
    "Stashing": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"],
    "Advanced Techniques": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    "Inspection & Debugging": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
    "Cleanup & Maintenance": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/icons.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Sidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "e8da333d465508cf16ac8bdc2d4b890719146eccdc7ec6a08e367f44b8b8bf39") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e8da333d465508cf16ac8bdc2d4b890719146eccdc7ec6a08e367f44b8b8bf39";
    }
    const { items, isOpen, setIsOpen } = t0;
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[1] !== items) {
        t1 = ({
            "Sidebar[useEffect()]": ()=>{
                const observerOptions = {
                    root: null,
                    rootMargin: "-100px 0px -70% 0px",
                    threshold: 0
                };
                const handleIntersect = {
                    "Sidebar[useEffect() > handleIntersect]": (entries)=>{
                        entries.forEach({
                            "Sidebar[useEffect() > handleIntersect > entries.forEach()]": (entry)=>{
                                if (entry.isIntersecting) {
                                    setActiveId(entry.target.id);
                                }
                            }
                        }["Sidebar[useEffect() > handleIntersect > entries.forEach()]"]);
                    }
                }["Sidebar[useEffect() > handleIntersect]"];
                const observer = new IntersectionObserver(handleIntersect, observerOptions);
                items.forEach({
                    "Sidebar[useEffect() > items.forEach()]": (section)=>{
                        section.items.forEach({
                            "Sidebar[useEffect() > items.forEach() > section.items.forEach()]": (item)=>{
                                const id = item.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                                const el = document.getElementById(id);
                                if (el) {
                                    observer.observe(el);
                                }
                            }
                        }["Sidebar[useEffect() > items.forEach() > section.items.forEach()]"]);
                    }
                }["Sidebar[useEffect() > items.forEach()]"]);
                return ()=>observer.disconnect();
            }
        })["Sidebar[useEffect()]"];
        t2 = [
            items
        ];
        $[1] = items;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-1.5 rounded-lg bg-blue-500/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                        className: "h-4 w-4 text-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 73,
                        columnNumber: 102
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 73,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-sm",
                    children: "GitDocs"
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 73,
                    columnNumber: 155
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== setIsOpen) {
        t4 = ({
            "Sidebar[<button>.onClick]": ()=>setIsOpen(false)
        })["Sidebar[<button>.onClick]"];
        $[5] = setIsOpen;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-5 py-4 lg:hidden border-b border-slate-800/50",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t4,
                    className: "p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors outline-none",
                    "aria-label": "Close sidebar",
                    children: t5
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 97,
                    columnNumber: 114
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== activeId || $[11] !== items || $[12] !== setIsOpen) {
        let t8;
        if ($[14] !== activeId || $[15] !== setIsOpen) {
            t8 = ({
                "Sidebar[items.map()]": (section_0)=>{
                    const IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryIcons"][section_0.category] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                        size: 13,
                                        className: "text-slate-500 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 99
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500",
                                        children: section_0.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 167
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 110,
                                columnNumber: 48
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-px",
                                children: section_0.items.map({
                                    "Sidebar[items.map() > section_0.items.map()]": (item_0)=>{
                                        const itemId = item_0.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                                        const isActive = activeId === itemId;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `#${itemId}`,
                                            onClick: {
                                                "Sidebar[items.map() > section_0.items.map() > <Link>.onClick]": ()=>setIsOpen(false)
                                            }["Sidebar[items.map() > section_0.items.map() > <Link>.onClick]"],
                                            className: `group flex w-full items-center rounded-lg px-3 py-[7px] text-[13px] font-medium transition-all duration-150 relative outline-none ${isActive ? "text-blue-400 bg-blue-500/[0.08]" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,
                                            children: [
                                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    layoutId: "activeIndicator",
                                                    className: "absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-blue-500",
                                                    transition: {
                                                        type: "spring",
                                                        damping: 25,
                                                        stiffness: 300
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Sidebar.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 355
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-1 h-1 rounded-full mr-3 flex-shrink-0 transition-all ${isActive ? "bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.5)]" : "bg-slate-700 group-hover:bg-slate-500"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Sidebar.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: item_0.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Sidebar.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 212
                                                }, this)
                                            ]
                                        }, item_0.name, true, {
                                            fileName: "[project]/src/components/Sidebar.tsx",
                                            lineNumber: 114,
                                            columnNumber: 26
                                        }, this);
                                    }
                                }["Sidebar[items.map() > section_0.items.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 110,
                                columnNumber: 279
                            }, this)
                        ]
                    }, section_0.category, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 110,
                        columnNumber: 18
                    }, this);
                }
            })["Sidebar[items.map()]"];
            $[14] = activeId;
            $[15] = setIsOpen;
            $[16] = t8;
        } else {
            t8 = $[16];
        }
        t7 = items.map(t8);
        $[10] = activeId;
        $[11] = items;
        $[12] = setIsOpen;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex-1 overflow-y-auto custom-scrollbar px-3 py-4 lg:py-6 space-y-5",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-bold uppercase tracking-wider text-slate-500",
                    children: "Status"
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 149,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-bold text-blue-400",
                    children: "Stable"
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 149,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 border-t border-slate-800/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800/50",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 w-full bg-slate-800 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-full rounded-full animate-pulse-slow"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 156,
                            columnNumber: 218
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 156,
                        columnNumber: 148
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 156,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t6 || $[22] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col pt-14 lg:pt-0",
            children: [
                t6,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[21] = t6;
        $[22] = t8;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const sidebarContent = t11;
    let t12;
    if ($[24] !== sidebarContent) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "fixed left-0 top-14 z-30 hidden h-[calc(100vh-56px)] w-[260px] border-r border-slate-800/50 bg-slate-950 lg:block",
            children: sidebarContent
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[24] = sidebarContent;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== isOpen || $[27] !== setIsOpen || $[28] !== sidebarContent) {
        t13 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: {
                        "Sidebar[<motion.div>.onClick]": ()=>setIsOpen(false)
                    }["Sidebar[<motion.div>.onClick]"],
                    className: "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 181,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                    initial: {
                        x: "-100%"
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: "-100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 30,
                        stiffness: 300
                    },
                    className: "fixed left-0 top-0 z-50 h-full w-[280px] bg-slate-950 border-r border-slate-800 shadow-2xl lg:hidden",
                    children: sidebarContent
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 189,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true);
        $[26] = isOpen;
        $[27] = setIsOpen;
        $[28] = sidebarContent;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t12 || $[33] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t12,
                t14
            ]
        }, void 0, true);
        $[32] = t12;
        $[33] = t14;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    return t15;
}
_s(Sidebar, "E4vlR+Iv9SgfU0gy03ZDfO+IPVY=");
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DocSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CommandBlock = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "9750f95915fc6b266177b9560e1d3395b3daf315698c8a48638a1c7c9a986819") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9750f95915fc6b266177b9560e1d3395b3daf315698c8a48638a1c7c9a986819";
    }
    const { cmd, desc } = t0;
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== cmd) {
        t1 = ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            navigator.clipboard.writeText(cmd);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        };
        $[1] = cmd;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleCopy = t1;
    let t2;
    if ($[3] !== desc) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-400 font-medium leading-snug pr-4",
            children: desc
        }, void 0, false, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = desc;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== copied) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                exit: {
                    scale: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    size: 14,
                    className: "text-emerald-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/DocSection.tsx",
                    lineNumber: 53,
                    columnNumber: 10
                }, ("TURBOPACK compile-time value", void 0))
            }, "check", false, {
                fileName: "[project]/src/components/DocSection.tsx",
                lineNumber: 47,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                exit: {
                    scale: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/DocSection.tsx",
                    lineNumber: 59,
                    columnNumber: 10
                }, ("TURBOPACK compile-time value", void 0))
            }, "copy", false, {
                fileName: "[project]/src/components/DocSection.tsx",
                lineNumber: 53,
                columnNumber: 74
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = copied;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== handleCopy || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleCopy,
            className: "flex-shrink-0 rounded-lg p-2 hover:bg-slate-800 text-slate-500 hover:text-blue-400 transition-all active:scale-90 outline-none",
            "aria-label": "Copy command",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = handleCopy;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t2 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-slate-800/50 bg-slate-900/80",
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t2;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 select-none mr-2",
            children: "$"
        }, void 0, false, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== cmd) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 sm:px-5 py-4 font-mono text-[13px] sm:text-sm text-blue-300 overflow-x-auto whitespace-nowrap custom-scrollbar selection:bg-blue-500/20",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "group-hover:text-blue-200 transition-colors",
                    children: cmd
                }, void 0, false, {
                    fileName: "[project]/src/components/DocSection.tsx",
                    lineNumber: 92,
                    columnNumber: 172
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = cmd;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t5 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/50 hover:border-slate-700/80 transition-all duration-300",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t5;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
};
_s(CommandBlock, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = CommandBlock;
function DocSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "9750f95915fc6b266177b9560e1d3395b3daf315698c8a48638a1c7c9a986819") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9750f95915fc6b266177b9560e1d3395b3daf315698c8a48638a1c7c9a986819";
    }
    const { item } = t0;
    let t1;
    if ($[1] !== item.name) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /[^\w-]/g;
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        t1 = item.name.toLowerCase().replace(/\s+/g, "-").replace(t2, "");
        $[1] = item.name;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const id = t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 15
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        t4 = {
            once: true,
            margin: "-50px"
        };
        t5 = {
            duration: 0.4
        };
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)] flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 168,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== item.name) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 flex items-center gap-3",
            children: [
                t6,
                item.name
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[9] = item.name;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== item.description) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-slate-400 mb-6 text-[15px] sm:text-base leading-[1.8] max-w-3xl",
            children: item.description
        }, void 0, false, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 183,
            columnNumber: 10
        }, this);
        $[11] = item.description;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== item.tip) {
        t9 = item.tip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4 p-4 rounded-xl bg-blue-950/20 border border-blue-900/20 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    size: 20,
                    className: "text-blue-400 mt-0.5 flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/DocSection.tsx",
                    lineNumber: 191,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-blue-300/80 text-[14px] leading-relaxed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-blue-300 uppercase text-[10px] tracking-wider block mb-0.5",
                            children: "Pro Tip"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DocSection.tsx",
                            lineNumber: 191,
                            columnNumber: 255
                        }, this),
                        item.tip
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DocSection.tsx",
                    lineNumber: 191,
                    columnNumber: 193
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 191,
            columnNumber: 22
        }, this);
        $[13] = item.tip;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== item.warning) {
        t10 = item.warning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4 p-4 rounded-xl bg-amber-950/20 border border-amber-900/20 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    size: 20,
                    className: "text-amber-400 mt-0.5 flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/DocSection.tsx",
                    lineNumber: 199,
                    columnNumber: 130
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-amber-300/80 text-[14px] leading-relaxed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-amber-300 uppercase text-[10px] tracking-wider block mb-0.5",
                            children: "Warning"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DocSection.tsx",
                            lineNumber: 199,
                            columnNumber: 268
                        }, this),
                        item.warning
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DocSection.tsx",
                    lineNumber: 199,
                    columnNumber: 205
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 199,
            columnNumber: 27
        }, this);
        $[15] = item.warning;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== id || $[18] !== item.commands) {
        t11 = item.commands?.map({
            "DocSection[(anonymous)()]": (c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommandBlock, {
                    ...c
                }, `${id}-cmd-${i}`, false, {
                    fileName: "[project]/src/components/DocSection.tsx",
                    lineNumber: 208,
                    columnNumber: 46
                }, this)
        }["DocSection[(anonymous)()]"]);
        $[17] = id;
        $[18] = item.commands;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t10 || $[23] !== t12 || $[24] !== t7 || $[25] !== t8 || $[26] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl",
            children: [
                t7,
                t8,
                t9,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t12;
        $[24] = t7;
        $[25] = t8;
        $[26] = t9;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== id || $[29] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            id: id,
            initial: t2,
            whileInView: t3,
            viewport: t4,
            transition: t5,
            className: "scroll-mt-24 py-8 sm:py-12",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/DocSection.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[28] = id;
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    return t14;
}
_c1 = DocSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "CommandBlock");
__turbopack_context__.k.register(_c1, "DocSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TableOfContents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TableOfContents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TableOfContents(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "479d1b4eb2255a9a5d0f166f7aa1fd130074d51d76ff1566d3c7d52b4b89b868") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "479d1b4eb2255a9a5d0f166f7aa1fd130074d51d76ff1566d3c7d52b4b89b868";
    }
    const { items } = t0;
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[1] !== items) {
        t1 = ({
            "TableOfContents[useEffect()]": ()=>{
                const observer = new IntersectionObserver((entries)=>{
                    entries.forEach({
                        "TableOfContents[useEffect() > <anonymous> > entries.forEach()]": (entry)=>{
                            if (entry.isIntersecting) {
                                setActiveId(entry.target.id);
                            }
                        }
                    }["TableOfContents[useEffect() > <anonymous> > entries.forEach()]"]);
                }, {
                    rootMargin: "-100px 0% -80% 0%"
                });
                items.forEach({
                    "TableOfContents[useEffect() > items.forEach()]": (category)=>{
                        category.items.forEach({
                            "TableOfContents[useEffect() > items.forEach() > category.items.forEach()]": (item)=>{
                                const id = item.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                                const element = document.getElementById(id);
                                if (element) {
                                    observer.observe(element);
                                }
                            }
                        }["TableOfContents[useEffect() > items.forEach() > category.items.forEach()]"]);
                    }
                }["TableOfContents[useEffect() > items.forEach()]"]);
                return ()=>observer.disconnect();
            }
        })["TableOfContents[useEffect()]"];
        t2 = [
            items
        ];
        $[1] = items;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4",
            children: "On This Page"
        }, void 0, false, {
            fileName: "[project]/src/components/TableOfContents.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== activeId || $[6] !== items) {
        let t5;
        if ($[8] !== activeId) {
            t5 = ({
                "TableOfContents[items.map()]": (category_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: category_0.items.map({
                            "TableOfContents[items.map() > category_0.items.map()]": (item_0)=>{
                                const id_0 = item_0.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                                const isActive = activeId === id_0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${id_0}`,
                                    className: `block pl-4 text-[13px] font-medium transition-all relative outline-none ${isActive ? "text-blue-400 border-l border-blue-500 -ml-px" : "text-slate-500 hover:text-slate-300 border-l border-transparent -ml-px"}`,
                                    children: item_0.name
                                }, `${id_0}-toc-link`, false, {
                                    fileName: "[project]/src/components/TableOfContents.tsx",
                                    lineNumber: 75,
                                    columnNumber: 22
                                }, this);
                            }
                        }["TableOfContents[items.map() > category_0.items.map()]"])
                    }, `${category_0.category}-toc`, false, {
                        fileName: "[project]/src/components/TableOfContents.tsx",
                        lineNumber: 71,
                        columnNumber: 55
                    }, this)
            })["TableOfContents[items.map()]"];
            $[8] = activeId;
            $[9] = t5;
        } else {
            t5 = $[9];
        }
        t4 = items.map(t5);
        $[5] = activeId;
        $[6] = items;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden xl:block w-64 flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-24 pl-4",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "space-y-3 border-l border-slate-800",
                        children: t4
                    }, void 0, false, {
                        fileName: "[project]/src/components/TableOfContents.tsx",
                        lineNumber: 93,
                        columnNumber: 102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TableOfContents.tsx",
                lineNumber: 93,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TableOfContents.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_s(TableOfContents, "E4vlR+Iv9SgfU0gy03ZDfO+IPVY=");
_c = TableOfContents;
var _c;
__turbopack_context__.k.register(_c, "TableOfContents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/commands.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gitItems",
    ()=>gitItems
]);
const gitItems = [
    {
        category: "Getting Started",
        icon: "Rocket",
        description: "Brand new to Git? Start here. These commands will help you install, configure, and understand the basics of version control.",
        items: [
            {
                name: "What is Git?",
                description: "Git is the world's most popular version control system. It lets you track every change you make to your code, collaborate with other developers, and safely experiment with new ideas without breaking your project. Think of it as an \"undo button\" for your entire codebase.",
                tip: "Git is installed on most systems. Run the command below to verify.",
                commands: [
                    {
                        cmd: "git --version",
                        desc: "Check your installed Git version"
                    }
                ]
            },
            {
                name: "First-Time Configuration",
                description: "Before you start using Git, you need to tell it who you are. Your name and email will be attached to every commit (save point) you create. This is how your teammates will know who made each change.",
                tip: "You only need to do this once. The --global flag means these settings apply to all your projects.",
                commands: [
                    {
                        cmd: "git config --global user.name \"Your Name\"",
                        desc: "Set your display name for commits"
                    },
                    {
                        cmd: "git config --global user.email \"you@example.com\"",
                        desc: "Set your email for commits"
                    },
                    {
                        cmd: "git config --global init.defaultBranch main",
                        desc: "Set 'main' as the default branch name"
                    },
                    {
                        cmd: "git config --list",
                        desc: "Review all your current settings"
                    }
                ]
            }
        ]
    },
    {
        category: "Creating Projects",
        icon: "FolderOpen",
        description: "Every project starts somewhere. Learn how to create a brand new repository or download an existing one.",
        items: [
            {
                name: "Initialize a New Repository",
                description: "When you start a new project from scratch, you need to initialize a Git repository. This creates a hidden .git folder that tracks all your changes from this point forward.",
                tip: "Run this inside your project folder. It won't affect any existing files.",
                commands: [
                    {
                        cmd: "git init",
                        desc: "Create a new Git repository in current folder"
                    },
                    {
                        cmd: "git init my-project",
                        desc: "Create a new project folder with Git already set up"
                    }
                ]
            },
            {
                name: "Clone an Existing Repository",
                description: "If a project already exists on GitHub (or another remote server), you can download the entire project — including its full history — using the clone command.",
                tip: "This is the most common way to start working on a team project.",
                commands: [
                    {
                        cmd: "git clone https://github.com/user/repo.git",
                        desc: "Download a full copy of a remote repository"
                    },
                    {
                        cmd: "git clone https://github.com/user/repo.git my-folder",
                        desc: "Clone into a specific folder name"
                    },
                    {
                        cmd: "git clone --depth 1 https://github.com/user/repo.git",
                        desc: "Clone only the latest version (faster)"
                    }
                ]
            }
        ]
    },
    {
        category: "Day-to-Day Workflow",
        icon: "Code",
        description: "These are the commands you will type every single day. Master them and Git becomes effortless.",
        items: [
            {
                name: "Checking the Status",
                description: "Before you do anything in Git, it's a good habit to check your status. This tells you which files have been modified, which are staged (ready to commit), and which are untracked (new files Git doesn't know about yet).",
                commands: [
                    {
                        cmd: "git status",
                        desc: "See a summary of all changes in your project"
                    },
                    {
                        cmd: "git status -s",
                        desc: "Show a compact one-line-per-file summary"
                    }
                ]
            },
            {
                name: "Staging Changes",
                description: "Before committing, you need to 'stage' your changes. Staging means selecting exactly which changes you want to include in your next save point. This gives you fine-grained control over your project history.",
                tip: "Think of staging as putting items in a shopping cart before checking out.",
                commands: [
                    {
                        cmd: "git add index.html",
                        desc: "Stage a specific file"
                    },
                    {
                        cmd: "git add src/",
                        desc: "Stage an entire folder"
                    },
                    {
                        cmd: "git add .",
                        desc: "Stage everything that has changed"
                    },
                    {
                        cmd: "git add -p",
                        desc: "Interactively choose specific lines to stage"
                    }
                ]
            },
            {
                name: "Committing Changes",
                description: "A commit is a permanent save point in your project's history. Every commit has a unique ID and a message describing what changed. Good commit messages make your project's history easy to understand.",
                tip: "Write your commit messages in the imperative mood: 'Add feature' not 'Added feature'.",
                commands: [
                    {
                        cmd: "git commit -m \"Add user login page\"",
                        desc: "Create a commit with a message"
                    },
                    {
                        cmd: "git commit -am \"Fix header styling\"",
                        desc: "Stage all tracked files and commit in one step"
                    },
                    {
                        cmd: "git commit --amend",
                        desc: "Edit the message or content of your last commit"
                    }
                ]
            },
            {
                name: "Viewing History",
                description: "Your project's history is a powerful record of every change ever made. You can browse it, search it, and even travel back in time to any point.",
                commands: [
                    {
                        cmd: "git log",
                        desc: "View the full commit history"
                    },
                    {
                        cmd: "git log --oneline",
                        desc: "Show each commit as a single line (compact)"
                    },
                    {
                        cmd: "git log --oneline --graph --all",
                        desc: "Beautiful visual graph of all branches"
                    },
                    {
                        cmd: "git show abc1234",
                        desc: "View the full details of a specific commit"
                    },
                    {
                        cmd: "git diff",
                        desc: "Show unstaged changes line by line"
                    },
                    {
                        cmd: "git diff --staged",
                        desc: "Show staged changes that are ready to commit"
                    }
                ]
            }
        ]
    },
    {
        category: "Branching & Merging",
        icon: "GitBranch",
        description: "Branches let you work on new features, bug fixes, or experiments in isolation — without affecting the main codebase.",
        items: [
            {
                name: "Working with Branches",
                description: "A branch is like a parallel universe for your code. You can create a branch, make changes, and merge them back when you're ready. The main branch stays safe while you experiment freely.",
                tip: "Create a branch for every new feature or bug fix. This is called 'feature branching'.",
                commands: [
                    {
                        cmd: "git branch",
                        desc: "List all local branches"
                    },
                    {
                        cmd: "git branch -a",
                        desc: "List all branches including remote ones"
                    },
                    {
                        cmd: "git branch feature/navbar",
                        desc: "Create a new branch called 'feature/navbar'"
                    },
                    {
                        cmd: "git checkout feature/navbar",
                        desc: "Switch to an existing branch"
                    },
                    {
                        cmd: "git checkout -b feature/navbar",
                        desc: "Create AND switch to a new branch in one step"
                    },
                    {
                        cmd: "git switch feature/navbar",
                        desc: "Modern way to switch branches (Git 2.23+)"
                    },
                    {
                        cmd: "git branch -d feature/navbar",
                        desc: "Delete a branch after it's been merged"
                    }
                ]
            },
            {
                name: "Merging Branches",
                description: "Once your work on a branch is complete, you merge it back into the main branch. Git intelligently combines the changes. If two people edited the same line, Git will ask you to resolve the conflict manually.",
                tip: "Always pull the latest changes from main before merging to avoid conflicts.",
                commands: [
                    {
                        cmd: "git checkout main",
                        desc: "First, switch to the branch you want to merge INTO"
                    },
                    {
                        cmd: "git merge feature/navbar",
                        desc: "Merge the feature branch into main"
                    },
                    {
                        cmd: "git merge --abort",
                        desc: "Cancel a merge if there are too many conflicts"
                    }
                ]
            }
        ]
    },
    {
        category: "Remote & Collaboration",
        icon: "Globe",
        description: "Git becomes truly powerful when you connect it to a remote server like GitHub. These commands let you share your work and collaborate with others.",
        items: [
            {
                name: "Connecting to Remote",
                description: "A 'remote' is a version of your project hosted on the internet (like GitHub). When you clone a repository, the remote is set up automatically. For projects you initialized locally, you need to add it manually.",
                commands: [
                    {
                        cmd: "git remote -v",
                        desc: "View your current remote connections"
                    },
                    {
                        cmd: "git remote add origin https://github.com/user/repo.git",
                        desc: "Connect your local project to GitHub"
                    },
                    {
                        cmd: "git remote remove origin",
                        desc: "Disconnect from a remote"
                    }
                ]
            },
            {
                name: "Pushing & Pulling",
                description: "Push sends your local commits to the remote server so others can see your work. Pull downloads the latest changes from the remote and merges them into your local branch.",
                tip: "Always pull before you push to avoid conflicts with your teammate's work.",
                commands: [
                    {
                        cmd: "git push origin main",
                        desc: "Upload your commits to the remote main branch"
                    },
                    {
                        cmd: "git push -u origin feature/login",
                        desc: "Push a new branch to remote for the first time"
                    },
                    {
                        cmd: "git pull origin main",
                        desc: "Download and merge remote changes into your branch"
                    },
                    {
                        cmd: "git fetch origin",
                        desc: "Download remote changes without merging (safer)"
                    }
                ]
            }
        ]
    },
    {
        category: "Undoing Mistakes",
        icon: "Undo2",
        description: "Made a mistake? Don't panic. Git has powerful tools to undo almost anything, from a simple typo to an entire commit.",
        items: [
            {
                name: "Unstaging & Discarding",
                description: "If you accidentally staged a file or want to throw away recent changes, these commands can help you go back without losing your commit history.",
                warning: "git checkout -- <file> permanently discards changes. There is no undo for this.",
                commands: [
                    {
                        cmd: "git reset HEAD index.html",
                        desc: "Unstage a file (keep the changes in your editor)"
                    },
                    {
                        cmd: "git checkout -- index.html",
                        desc: "Discard all changes to a specific file"
                    },
                    {
                        cmd: "git restore index.html",
                        desc: "Modern way to discard changes (Git 2.23+)"
                    },
                    {
                        cmd: "git restore --staged index.html",
                        desc: "Modern way to unstage a file"
                    }
                ]
            },
            {
                name: "Reverting & Resetting Commits",
                description: "If you need to undo an entire commit, you have two options: revert (safe — creates a new commit that undoes the changes) or reset (destructive — rewrites history).",
                warning: "Never use git reset --hard on commits that have already been pushed to a shared branch.",
                commands: [
                    {
                        cmd: "git revert abc1234",
                        desc: "Safely undo a commit by creating a new reversal commit"
                    },
                    {
                        cmd: "git reset --soft HEAD~1",
                        desc: "Undo last commit but keep changes staged"
                    },
                    {
                        cmd: "git reset --mixed HEAD~1",
                        desc: "Undo last commit and unstage the changes"
                    },
                    {
                        cmd: "git reset --hard HEAD~1",
                        desc: "Completely erase the last commit and all its changes"
                    }
                ]
            }
        ]
    },
    {
        category: "Stashing",
        icon: "Archive",
        description: "Need to quickly switch branches but have uncommitted work? Stash lets you save your current changes temporarily and come back to them later.",
        items: [
            {
                name: "Using the Stash",
                description: "The stash is like a clipboard for your code. It saves your current work-in-progress and gives you a clean working directory. When you're ready, you can pop the changes right back.",
                tip: "Stashing is perfect for when you need to switch branches to fix an urgent bug.",
                commands: [
                    {
                        cmd: "git stash",
                        desc: "Save all uncommitted changes to the stash"
                    },
                    {
                        cmd: "git stash save \"login page work-in-progress\"",
                        desc: "Stash with a descriptive message"
                    },
                    {
                        cmd: "git stash list",
                        desc: "See all your saved stashes"
                    },
                    {
                        cmd: "git stash pop",
                        desc: "Apply the latest stash and remove it from the list"
                    },
                    {
                        cmd: "git stash apply stash@{1}",
                        desc: "Apply a specific stash without removing it"
                    },
                    {
                        cmd: "git stash drop stash@{0}",
                        desc: "Delete a specific stash"
                    },
                    {
                        cmd: "git stash clear",
                        desc: "Delete ALL stashes (use with caution)"
                    }
                ]
            }
        ]
    },
    {
        category: "Advanced Techniques",
        icon: "Zap",
        description: "Ready to level up? These advanced commands give you surgical precision over your commit history and workflow.",
        items: [
            {
                name: "Interactive Rebase",
                description: "Rebase lets you rewrite your commit history. You can squash multiple messy commits into one clean commit, reorder them, rename them, or even delete specific commits entirely.",
                warning: "Never rebase commits that have been pushed to a shared branch — it rewrites history.",
                commands: [
                    {
                        cmd: "git rebase -i HEAD~5",
                        desc: "Interactively edit the last 5 commits"
                    },
                    {
                        cmd: "git rebase main",
                        desc: "Move your branch's commits on top of the latest main"
                    },
                    {
                        cmd: "git rebase --abort",
                        desc: "Cancel a rebase if something goes wrong"
                    }
                ]
            },
            {
                name: "Cherry-Pick",
                description: "Cherry-pick lets you copy a specific commit from one branch and apply it to another. This is useful when you only need one particular change, not an entire branch merge.",
                commands: [
                    {
                        cmd: "git cherry-pick abc1234",
                        desc: "Apply a specific commit to your current branch"
                    },
                    {
                        cmd: "git cherry-pick abc1234 --no-commit",
                        desc: "Apply changes without auto-committing"
                    }
                ]
            },
            {
                name: "Tagging Releases",
                description: "Tags mark important points in your project's history, like version releases. Unlike branches, tags don't change — they're permanent bookmarks.",
                commands: [
                    {
                        cmd: "git tag v1.0.0",
                        desc: "Create a lightweight tag"
                    },
                    {
                        cmd: "git tag -a v1.0.0 -m \"First stable release\"",
                        desc: "Create an annotated tag with a message"
                    },
                    {
                        cmd: "git tag",
                        desc: "List all tags"
                    },
                    {
                        cmd: "git push origin v1.0.0",
                        desc: "Push a tag to the remote server"
                    },
                    {
                        cmd: "git push origin --tags",
                        desc: "Push all tags at once"
                    }
                ]
            }
        ]
    },
    {
        category: "Inspection & Debugging",
        icon: "Search",
        description: "When things go wrong, these commands help you investigate, compare, and find exactly where a bug was introduced.",
        items: [
            {
                name: "Comparing Changes",
                description: "The diff command shows you exactly what has changed, line by line. This is essential for code reviews and understanding what happened between two points in your history.",
                commands: [
                    {
                        cmd: "git diff HEAD~3..HEAD",
                        desc: "Compare the last 3 commits"
                    },
                    {
                        cmd: "git diff main..feature/login",
                        desc: "Compare two branches"
                    },
                    {
                        cmd: "git diff --stat",
                        desc: "Show a summary of changed files and lines"
                    }
                ]
            },
            {
                name: "Blame & Bisect",
                description: "Who changed this line? When was a bug introduced? Git's blame and bisect tools help you answer these detective questions.",
                commands: [
                    {
                        cmd: "git blame index.html",
                        desc: "Show who last modified each line of a file"
                    },
                    {
                        cmd: "git bisect start",
                        desc: "Start a binary search to find the commit that introduced a bug"
                    },
                    {
                        cmd: "git bisect good abc1234",
                        desc: "Mark a commit as 'good' (bug-free)"
                    },
                    {
                        cmd: "git bisect bad",
                        desc: "Mark the current commit as 'bad' (has the bug)"
                    }
                ]
            }
        ]
    },
    {
        category: "Cleanup & Maintenance",
        icon: "Trash2",
        description: "Keep your repository clean and organized with these housekeeping commands.",
        items: [
            {
                name: "Cleaning Up",
                description: "Over time, your working directory can accumulate untracked files (build artifacts, temp files, etc.). The clean command helps you remove them.",
                warning: "git clean is destructive. Always use -n (dry run) first to preview what will be deleted.",
                commands: [
                    {
                        cmd: "git clean -n",
                        desc: "Preview which untracked files would be deleted"
                    },
                    {
                        cmd: "git clean -fd",
                        desc: "Delete untracked files and directories"
                    },
                    {
                        cmd: "git gc",
                        desc: "Run garbage collection to optimize the repository"
                    }
                ]
            },
            {
                name: "Using .gitignore",
                description: "The .gitignore file tells Git which files and folders to completely ignore. This is essential for keeping sensitive data, build artifacts, and dependencies out of your repository.",
                tip: "Create a .gitignore file before your first commit. Visit gitignore.io for templates.",
                commands: [
                    {
                        cmd: "node_modules/",
                        desc: "Ignore the node_modules folder"
                    },
                    {
                        cmd: ".env",
                        desc: "Ignore environment variable files"
                    },
                    {
                        cmd: "*.log",
                        desc: "Ignore all .log files"
                    },
                    {
                        cmd: "dist/",
                        desc: "Ignore build output folders"
                    }
                ]
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DocSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DocSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TableOfContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TableOfContents.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/commands.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/icons.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const deferredSearchTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(searchTerm);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentYear, setCurrentYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2026);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Home.useEffect": ()=>{
            setCurrentYear(new Date().getFullYear());
            // Auto scroll to top on refresh if no hash is present
            if (window.location.hash === '') {
                window.scrollTo(0, 0);
            }
        }
    }["Home.useEffect"], []);
    const filteredItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[filteredItems]": ()=>{
            if (!deferredSearchTerm) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gitItems"];
            const searchLower = deferredSearchTerm.toLowerCase();
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gitItems"].map({
                "Home.useMemo[filteredItems]": (category)=>{
                    const matchedItems = category.items.filter({
                        "Home.useMemo[filteredItems].matchedItems": (item)=>item.name.toLowerCase().includes(searchLower) || item.description.toLowerCase().includes(searchLower) || item.commands.some({
                                "Home.useMemo[filteredItems].matchedItems": (c)=>c.cmd.toLowerCase().includes(searchLower) || c.desc.toLowerCase().includes(searchLower)
                            }["Home.useMemo[filteredItems].matchedItems"])
                    }["Home.useMemo[filteredItems].matchedItems"]);
                    return matchedItems.length > 0 ? {
                        ...category,
                        items: matchedItems
                    } : null;
                }
            }["Home.useMemo[filteredItems]"]).filter({
                "Home.useMemo[filteredItems]": (cat)=>cat !== null
            }["Home.useMemo[filteredItems]"]);
        }
    }["Home.useMemo[filteredItems]"], [
        searchTerm
    ]);
    const totalCommands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[totalCommands]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gitItems"].reduce({
                "Home.useMemo[totalCommands]": (acc, cat_0)=>acc + cat_0.items.reduce({
                        "Home.useMemo[totalCommands]": (a, i)=>a + i.commands.length
                    }["Home.useMemo[totalCommands]"], 0)
            }["Home.useMemo[totalCommands]"], 0)
    }["Home.useMemo[totalCommands]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col bg-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                searchTerm: searchTerm,
                setSearchTerm: setSearchTerm,
                onMenuClick: ()=>setIsSidebarOpen(true)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 w-full flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        items: filteredItems,
                        isOpen: isSidebarOpen,
                        setIsOpen: setIsSidebarOpen
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex w-full lg:pl-[260px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "flex-1 min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 sm:px-6 lg:px-12 xl:pl-16 xl:pr-8 py-8 sm:py-12",
                                    children: [
                                        !searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.5
                                            },
                                            className: "relative mb-16 sm:mb-20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-500/[0.07] blur-[100px] rounded-full pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 max-w-4xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 63,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-300 text-[11px] font-semibold uppercase tracking-wider",
                                                                    children: "Comprehensive Documentation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]",
                                                            children: [
                                                                "Git & GitHub",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 69,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent",
                                                                    children: "Complete Reference Guide"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 70,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base sm:text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl",
                                                            children: "Everything you need to master version control — from your very first commit to advanced team workflows. Designed for beginners looking to learn and professionals who need a quick reference."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap items-center gap-3 sm:gap-4 mb-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                            size: 16,
                                                                            className: "text-blue-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 83,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-semibold text-slate-300",
                                                                            children: [
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gitItems"].length,
                                                                                " Categories"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 84,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                                                            size: 16,
                                                                            className: "text-indigo-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 87,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-semibold text-slate-300",
                                                                            children: [
                                                                                totalCommands,
                                                                                "+ Commands"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 88,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                                            size: 16,
                                                                            className: "text-purple-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 91,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-semibold text-slate-300",
                                                                            children: "Copy & Use Instantly"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 92,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 90,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#what-is-git",
                                                                    className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95 outline-none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 99,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "Start Learning"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#working-with-branches",
                                                                    className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-slate-200 text-sm font-semibold hover:bg-slate-700 border border-slate-700 transition-all active:scale-95 outline-none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 103,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "Jump to Branching"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                filteredItems.map((category_0)=>{
                                                    const CatIcon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryIcons"][category_0.category] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-16 sm:mb-20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatIcon, {
                                                                        size: 16,
                                                                        className: "text-blue-400 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 117,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-400",
                                                                        children: category_0.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 118,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-px flex-1 bg-slate-800"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 121,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 21
                                                            }, this),
                                                            category_0.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 text-sm sm:text-[15px] mb-8 max-w-3xl leading-relaxed pl-7 sm:pl-9",
                                                                children: category_0.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 48
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pl-4 sm:pl-8 border-l-2 border-slate-800/50 space-y-2",
                                                                children: category_0.items.map((item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DocSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        item: item_0
                                                                    }, `${item_0.name}-doc-section`, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 55
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, `${category_0.category}-section`, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 24
                                                    }, this);
                                                }),
                                                filteredItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0.98
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    className: "py-20 text-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            size: 40,
                                                            className: "mx-auto text-slate-700 mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-bold text-slate-400 mb-2",
                                                            children: "No results found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-600 text-sm max-w-sm mx-auto",
                                                            children: [
                                                                "Try searching for keywords like ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-400",
                                                                    children: '"commit"'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 53
                                                                }, this),
                                                                ", ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-400",
                                                                    children: '"push"'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 102
                                                                }, this),
                                                                ", or ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-400",
                                                                    children: '"rebase"'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 152
                                                                }, this),
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TableOfContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: filteredItems
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-slate-800/50 py-10 sm:py-14 bg-slate-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 lg:px-12 xl:px-16 lg:pl-[calc(260px+3rem)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-center gap-6 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-1.5 rounded-lg bg-blue-600/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                            className: "h-4 w-4 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-sm text-slate-300",
                                        children: "GitDocs Hub"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 text-xs",
                                children: [
                                    "© ",
                                    currentYear,
                                    " Shoriful Islam · Built for the developer community"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://github.com/shoriful-dev",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-slate-500 hover:text-slate-300 transition-colors text-xs font-medium outline-none",
                                        children: "GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://github.com/shoriful-dev",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-slate-500 hover:text-slate-300 transition-colors text-xs font-medium outline-none",
                                        children: "Contribute"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_s(Home, "DpQrLXJ+qLmgm+RSrDBEIEpPRnE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_31ba8b0b._.js.map
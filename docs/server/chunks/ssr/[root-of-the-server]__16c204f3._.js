module.exports = [
"[project]/.next-internal/server/app/secret-index/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/hints.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Ten unique Halloween-themed scavenger hunt hints for kids
__turbopack_context__.s([
    "hints",
    ()=>hints
]);
const hints = [
    {
        id: 1,
        text: "I'm round and orange, with a spooky face. Find me where you carve and place!"
    },
    {
        id: 2,
        text: "Witches fly and black cats prowl, look for your clue where you hear an owl!"
    },
    {
        id: 3,
        text: "Ghosts go boo and goblins play, your next hint is where you rest each day!"
    },
    {
        id: 4,
        text: "Candy corn and chocolate bars, check the place you keep your jars!"
    },
    {
        id: 5,
        text: "Bats at night take to the sky, your next clue is where clothes dry!"
    },
    {
        id: 6,
        text: "Spiders spin webs, witches stir brew, look for your hint in a stinky shoe!"
    },
    {
        id: 7,
        text: "Skeletons dance and mummies creep, your next clue is where you sleep!"
    },
    {
        id: 8,
        text: "Jack-o'-lanterns glow with light, check the place that's out of sight!"
    },
    {
        id: 9,
        text: "Monsters mash and zombies moan, your next hint is by the phone!"
    },
    {
        id: 10,
        text: "Wands and potions, magic and fun, your final clue is where the race is won!"
    }
];
}),
"[project]/src/app/hint-hash-map.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file is hardcoded for stability and static export.
__turbopack_context__.s([
    "hashToHintId",
    ()=>hashToHintId,
    "hintHashMap",
    ()=>hintHashMap
]);
const hintHashMap = [
    {
        id: 1,
        hash: "FFB347"
    },
    {
        id: 2,
        hash: "FFA500"
    },
    {
        id: 3,
        hash: "FF8C00"
    },
    {
        id: 4,
        hash: "FF7518"
    },
    {
        id: 5,
        hash: "E2725B"
    },
    {
        id: 6,
        hash: "A259FF"
    },
    {
        id: 7,
        hash: "800080"
    },
    {
        id: 8,
        hash: "6A0DAD"
    },
    {
        id: 9,
        hash: "B6B6B4"
    },
    {
        id: 10,
        hash: "808080"
    }
];
const hashToHintId = {
    "FFB347": 1,
    "FFA500": 2,
    "FF8C00": 3,
    "FF7518": 4,
    "E2725B": 5,
    "A259FF": 6,
    "800080": 7,
    "6A0DAD": 8,
    "B6B6B4": 9,
    "808080": 10
};
}),
"[project]/src/app/secret-index/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SecretIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hints$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hints.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hint$2d$hash$2d$map$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hint-hash-map.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
function SecretIndex() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-screen p-8 gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-orange-600 drop-shadow-lg mb-2",
                        children: "🎃 PC Kids Halloween Scavenger Hunt"
                    }, void 0, false, {
                        fileName: "[project]/src/app/secret-index/page.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-700 mb-4",
                        children: "Welcome! This is the secret index page for grown-ups. Each link below leads to a unique hint page for the scavenger hunt. Share the QR code for each page with your hunters!"
                    }, void 0, false, {
                        fileName: "[project]/src/app/secret-index/page.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/secret-index/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hints$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hints"].map((hint)=>{
                        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hint$2d$hash$2d$map$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hintHashMap"].find((h)=>h.id === hint.id)?.hash;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "bg-white rounded-xl shadow-lg p-4 border-2 border-orange-200 hover:border-orange-400 transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/${hash}`,
                                className: "block text-center text-xl font-semibold text-orange-600 hover:text-orange-800",
                                children: [
                                    "Hint #",
                                    hint.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/secret-index/page.tsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, this)
                        }, hint.id, false, {
                            fileName: "[project]/src/app/secret-index/page.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "bg-white rounded-xl shadow-lg p-4 border-2 border-orange-200 hover:border-orange-400 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/congratulations",
                            className: "block text-center text-xl font-semibold text-orange-600 hover:text-orange-800",
                            children: "Congrats"
                        }, void 0, false, {
                            fileName: "[project]/src/app/secret-index/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, "congrats", false, {
                        fileName: "[project]/src/app/secret-index/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/secret-index/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 text-xs text-gray-400",
                children: "This page is hidden. Do not share with the kids!"
            }, void 0, false, {
                fileName: "[project]/src/app/secret-index/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/secret-index/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/secret-index/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/secret-index/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16c204f3._.js.map
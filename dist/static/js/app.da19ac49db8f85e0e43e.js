webpackJsonp([0, 2], [, , function(t, e, s) {
    "use strict";
    var a = s(0),
        i = s(13),
        r = s(10),
        n = s.n(r);
    a.a.use(i.a), e.a = new i.a({ routes: [{ path: "/", name: "Hello", component: n.a }] })
}, function(t, e, s) {
    s(6);
    var a = s(1)(s(4), s(11), null, null);
    t.exports = a.exports
}, function(t, e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { name: "app" }
}, function(t, e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
        name: "hello",
        mounted: function() {
            var t = [{ selector: "#staggered-list", offset: 200, callback: function(t) { Materialize.showStaggeredList($(t)) } }];
            Materialize.scrollFire(t)
        },
        components: {},
        methods: { openModal: function() { $(".modal").modal(), $("#loginModal").modal("open") } }
    }
}, function(t, e) {}, function(t, e) {}, function(t, e, s) { t.exports = "static/img/keepr.bbc9cf0.png" }, function(t, e, s) { t.exports = s.p + "static/img/passafist.933500c.png" }, function(t, e, s) {
    s(7);
    var a = s(1)(s(5), s(12), null, null);
    t.exports = a.exports
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { attrs: { id: "app" } }, [s("router-view")], 1)
        },
        staticRenderFns: []
    }
}, function(t, e, s) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { attrs: { id: "hello" } }, [s("div", { staticClass: "row big" }, [t._m(0), t._v(" "), s("div", { staticClass: "col m3 s12 side", staticStyle: { right: "0" } }, [s("div", { staticClass: "row text" }, [s("h4", { staticClass: "headingName" }, [t._v("RACHEL MASON")]), t._v(" "), s("h5", { staticClass: "test" }, [t._v("What I Know:")]), t._v(" "), s("h6", { staticClass: "text" }, [t._v("\n              Microsoft Office\n          ")]), t._v(" "), t._m(1), t._v(" "), s("h6", { staticClass: "text" }, [t._v("\n              Adobe Creative Suite\n          ")]), t._v(" "), t._m(2), t._v(" "), s("h6", { staticClass: "text" }, [t._v("\n              SPSS\n          ")]), t._v(" "), t._m(3), t._v(" "), s("h6", { staticClass: "text" }, [t._v("\n              HTML\n          ")]), t._v(" "), t._m(4), t._v(" "), s("h6", { staticClass: "text" }, [t._v("\n              CSS\n          ")]), t._v(" "), t._m(5), t._v(" "), s("h6", { staticClass: "text" }, [t._v("\n              JavaScript: Vue, Node, MongoDb\n          ")]), t._v(" "), t._m(6), t._v(" "), s("h6", { staticClass: "text" }, [t._v("\n              C#\n          ")]), t._v(" "), t._m(7), t._v(" "), s("h6", { staticClass: "text" }, [t._v("\n              Source Control: Git, Github\n          ")]), t._v(" "), t._m(8), t._v(" "), s("h5", [t._v("What I've Learned: ")]), t._v(" "), s("p", [t._v("- Full Stack Web Development\n          ")]), s("p", { staticClass: "underbc" }, [t._v("@ Boise CodeWorks")]), t._v(" "), s("p"), t._v(" "), s("p", [t._v("- Marketing BBA\n          ")]), s("p", { staticClass: "underbsu" }, [t._v("@ Boise State University")]), t._v(" "), s("p"), t._v(" "), s("h5", [t._v("Let's Talk: ")]), t._v(" "), t._m(9), t._v(" "), t._m(10), t._v(" "), t._m(11), t._v(" "), t._m(12), t._v(" "), s("p", { staticClass: "undercn", attrs: { "data-target": "modal1" }, on: { click: t.openModal } }, [t._v("ramason@icloud.com")])])]), t._v(" "), t._m(13)])])
        },
        staticRenderFns: [function() {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("div", { staticClass: "col m9 s12 " }, [a("div", { staticClass: "back" }, [a("div", { staticClass: "title" }, [a("h3", { staticClass: "heading" }, [t._v("\n            WEB DESIGN &\n          ")]), t._v(" "), a("h1", { staticClass: "heading under" }, [t._v("\n            MARKETING\n          ")])])]), t._v(" "), a("br"), t._v(" "), a("br"), t._v(" "), a("br"), t._v(" "), a("br"), t._v(" "), a("br"), t._v(" "), a("br"), t._v(" "), a("br"), t._v(" "), a("div", [a("ul", { attrs: { id: "staggered-list" } }, [a("li", [a("h1", { staticClass: "heading underport" }, [t._v("What I've Worked On:")])])]), t._v(" "), a("br"), t._v(" "), a("br"), t._v(" "), a("br"), t._v(" "), a("div", { staticClass: "col s12 flexIt" }, [a("a", { attrs: { href: "https://rachelmason.github.io/keepr" } }, [a("div", { staticClass: "portfolio" }, [a("img", { attrs: { src: s(8), alt: "" } }), t._v(" "), a("div", { staticClass: "imgDescription" }, [a("ul", { staticClass: "imgText" }, [a("li", [t._v("based on pinterest")]), t._v(" "), a("li", [t._v("view all public keeps")]), t._v(" "), a("li", [t._v("search keeps based off of keywords")]), t._v(" "), a("li", [t._v("create public or private keeps")]), t._v(" "), a("li", [t._v("create vaults")]), t._v(" "), a("li", [t._v("add keeps to personal vaults")])])])])]), t._v(" "), a("a", { attrs: { href: "https://rachelmason.github.io/passafist" } }, [a("div", { staticClass: "portfolio" }, [a("img", { attrs: { src: s(9), alt: "" } }), t._v(" "), a("div", { staticClass: "imgDescription" }, [a("ul", { staticClass: "imgText" }, [a("li", [t._v("group project based off of the card game, "), a("a", { attrs: { href: "pass-a-fist.net" } }), t._v("Pass-A-Fist")]), t._v(" "), a("li", [t._v("project utilized partner programming")]), t._v(" "), a("li", [t._v("worked mostly on:")]), t._v(" "), a("ul", [a("li", [t._v("design aspects")]), t._v(" "), a("li", [t._v("mobile responsiveness")])]), t._v(" "), a("li", [t._v("assisted with:")]), t._v(" "), a("ul", [a("li", [t._v("game logic")])])])])])])])])])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { staticClass: "progress" }, [s("div", { staticClass: "determinate", staticStyle: { width: "90%" } })])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { staticClass: "progress" }, [s("div", { staticClass: "determinate", staticStyle: { width: "20%" } })])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { staticClass: "progress" }, [s("div", { staticClass: "determinate", staticStyle: { width: "10%" } })])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { staticClass: "progress" }, [s("div", { staticClass: "determinate", staticStyle: { width: "80%" } })])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { staticClass: "progress" }, [s("div", { staticClass: "determinate", staticStyle: { width: "80%" } })])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { staticClass: "progress" }, [s("div", { staticClass: "determinate", staticStyle: { width: "50%" } })])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { staticClass: "progress" }, [s("div", { staticClass: "determinate", staticStyle: { width: "10%" } })])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { staticClass: "progress" }, [s("div", { staticClass: "determinate", staticStyle: { width: "30%" } })])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("p", [s("a", { staticClass: "underres", attrs: { href: "https://standardresume.co/rachelmason" } }, [t._v("Resume")])])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("p", [s("a", { staticClass: "underli", attrs: { href: "www.linkedin.com/rachmason" } }, [t._v("LinkedIn")])])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("p", [s("a", { staticClass: "undergh", attrs: { href: "www.github.com/rachelmason" } }, [t._v("GitHub")])])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("p", [s("a", { staticClass: "underinsta", attrs: { href: "www.instagram.com/raemase" } }, [t._v("Instagram")])])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", { staticClass: "modal text", attrs: { id: "modal1" } }, [s("div", { staticClass: "modal-content" }, [s("form", { attrs: { action: "https://formspree.io/ramason@icloud.com", method: "POST" } }, [s("div", { staticClass: "row" }, [s("div", { staticClass: "input-field col s6" }, [s("input", { attrs: { type: "text", name: "name", placeholder: "name", required: "", "aria-required": "true" } })]), t._v(" "), s("div", { staticClass: "input-field col s6" }, [s("input", { attrs: { type: "email", name: "_replyto", placeholder: "email", required: "", "aria-required": "true" } })])]), t._v(" "), s("div", { staticClass: "row" }, [s("div", { staticClass: "input-field col s8" }, [s("input", { attrs: { type: "text", name: "_subject", placeholder: "subject", required: "", "aria-required": "true" } })]), t._v(" "), s("div", { staticClass: "input-field col s8" }, [s("input", { attrs: { type: "hidden", name: "_subject", placeholder: "subject", required: "", "aria-required": "true" } })]), t._v(" "), s("div", { staticClass: "input-field col s12" }, [s("textarea", { staticClass: "materialize-textarea", attrs: { name: "message", placeholder: "let's talk", cols: "30", rows: "10", required: "", "aria-required": "true" } })]), t._v(" "), s("input", { attrs: { type: "hidden", name: "_next", value: "www.rachelmason.me" } })]), t._v(" "), s("div", { staticClass: "input-field col s1" }, [s("button", { staticClass: "waves-effect waves-light btn", attrs: { type: "submit" } }, [t._v("submit")])])])])])
        }]
    }
}, , , , function(t, e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = s(0),
        i = s(3),
        r = s.n(i),
        n = s(2);
    a.a.config.productionTip = !1, new a.a({ el: "#app", router: n.a, template: "<App/>", components: { App: r.a } })
}], [16]);
//# sourceMappingURL=app.da19ac49db8f85e0e43e.js.map
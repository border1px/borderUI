(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),e("ClientOnly",[e("Common-code-format",[e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("pre",[e("code",[t._v('  <bo-radio-group v-model="radio1" >\n    <bo-radio label="苹果">苹果</bo-radio>\n    <bo-radio label="香蕉">香蕉</bo-radio>\n    <bo-radio label="桃子">桃子</bo-radio>\n    <bo-radio label="荔枝">荔枝</bo-radio>\n  </bo-radio-group>\n')])])])],1)],1),t._v(" "),t._m(3),t._m(4),t._v(" "),e("ClientOnly",[e("Common-code-format",[e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("pre",[e("code",[t._v('  <bo-radio-group disabled>\n    <bo-radio label="苹果">苹果</bo-radio>\n    <bo-radio label="香蕉">香蕉</bo-radio>\n  </bo-radio-group>\n')])])])],1)],1),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("有几点需要注意：")]),t._v(" "),t._m(6),t._v(" "),e("ClientOnly",[e("Common-code-format",[e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("pre",[e("code",[t._v('  <bo-radio-group v-model="radio2" @change="onChange">\n    <bo-cell>\n      <bo-cell-item\n        v-for="(item, index) in radioList"\n        :key="item"\n        clickable\n        :title="`${item}`"\n        @click="toggle(index)"\n      >\n        <bo-radio :name="item" ref="checkboxes" :label=item slot="value"/>\n      </bo-cell-item>\n    </bo-cell>\n  </bo-radio-group>\n')])])])],1)],1),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"使用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用指南","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用指南")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" RadioGroup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Radio "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'border-ui'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RadioGroup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RadioGroup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Radio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Radio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本用法")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      radio1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'香蕉'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认会选中这个项目")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"禁用状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用状态","aria-hidden":"true"}},[this._v("#")]),this._v(" 禁用状态")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"搭配cell使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭配cell使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 搭配Cell使用")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[t._v("Radio组件通过slot"),e("code",[t._v("value")]),t._v("被正确的插入到CellItem的右侧")]),t._v(" "),e("li",[t._v("每个Radio组件需要定义一个"),e("code",[t._v("ref")]),t._v("引用，以便正确的找到每个CellItem对应的Radio")]),t._v(" "),e("li",[t._v("Checkbox、Radio组件内部都有"),e("code",[t._v("toggle")]),t._v("方法，绑定组件的click事件，用于触发组件选中状态")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      radioList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'苹果'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'香蕉'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'桃子'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'荔枝'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toggle")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("checkboxes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toggle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onChange")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"radio-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-props","aria-hidden":"true"}},[this._v("#")]),this._v(" Radio Props")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("iconSize")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("icon尺寸")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("24px")])]),t._v(" "),e("tr",[e("td",[t._v("label")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("需配合RadioGroup使用，被选中时的值")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"radiogroup-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radiogroup-props","aria-hidden":"true"}},[this._v("#")]),this._v(" RadioGroup Props")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("v-model")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当前选中的标识")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"radiogroup-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radiogroup-events","aria-hidden":"true"}},[this._v("#")]),this._v(" RadioGroup Events")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("change")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("单个Radio被选中触发，参数为Radio的label")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Function")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])])}],!1,null,null,null);a.default=s.exports}}]);
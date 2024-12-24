import { _ as __nuxt_component_0$1 } from "./Logo-Cre4-RWw.js";
import { _ as __nuxt_component_0$2 } from "./nuxt-link-BXxPlIRz.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
const _sfc_main$3 = {
  name: "HomeNavbar"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Logo = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Logo, null, null, _parent));
  _push(`<div height="100%">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/portfolio",
    height: "100%"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button${_scopeId}>Portfolio</button>`);
      } else {
        return [
          createVNode("button", null, "Portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    height: "100%"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button${_scopeId}>Contact</button>`);
      } else {
        return [
          createVNode("button", null, "Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "HomeSubtext",
  data() {
    return {
      texts: [
        { text: "Data Scientist", color: "red" },
        { text: "Audio Engineer", color: "yellow" },
        { text: "Web Developer", color: "green" },
        { text: "Software Developer", color: "mauve" }
      ],
      displayText: " ",
      currentTextIndex: 0,
      currentCharIndex: 0,
      isDeleting: false
    };
  },
  mounted() {
    this.type();
  },
  methods: {
    type() {
      const currentTextObj = this.texts[this.currentTextIndex];
      const currentText = currentTextObj.text;
      if (this.isDeleting) {
        this.displayText = currentText.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
      } else {
        this.displayText = currentText.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
      }
      if (!this.isDeleting && this.currentCharIndex === currentText.length) {
        setTimeout(() => this.isDeleting = true, 1e3);
      } else if (this.isDeleting && this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      }
      setTimeout(this.type, this.isDeleting ? 100 : 200);
    }
  },
  computed: {
    currentColor() {
      const color = this.texts[this.currentTextIndex].color;
      return `var(--${color})`;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "subtext" }, _attrs))} data-v-68a7f8e4><h2 style="${ssrRenderStyle({ color: $options.currentColor })}" data-v-68a7f8e4><span data-v-68a7f8e4>- </span>${ssrInterpolate($data.displayText)}</h2></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Subtext.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-68a7f8e4"]]);
const _imports_0$1 = "" + __buildAssetsURL("SoundGirlBackground.D2n_bN2q.jpg");
const _imports_1 = "" + __buildAssetsURL("SoundGirlRoto.Xov3KCNu.png");
const _sfc_main$1 = {
  name: "HomeHexPhoto",
  props: {
    hexColor: {
      type: String,
      default: "var(--green)"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hex-container" }, _attrs))} data-v-d609ce2b><svg viewBox="-15 -15 115 115" class="hex-svg" data-v-d609ce2b><defs data-v-d609ce2b><mask id="hexMask" data-v-d609ce2b><polygon points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25" fill="white" filter="url(#roundCorners)" data-v-d609ce2b></polygon></mask><filter id="roundCorners" data-v-d609ce2b><feGaussianBlur in="SourceGraphic" stdDeviation="0.75" data-v-d609ce2b></feGaussianBlur><feComponentTransfer data-v-d609ce2b><feFuncA type="linear" slope="2.5" intercept="0" data-v-d609ce2b></feFuncA></feComponentTransfer></filter></defs><polygon points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25" stroke-width="1"${ssrRenderAttr("stroke", $props.hexColor)} fill-opacity="0" stroke-linejoin="round" filter="url(#roundCorners)" data-v-d609ce2b></polygon><image${ssrRenderAttr("href", _imports_0$1)} width="100" heigh="100" mask="url(#hexMask)" transform="scale(0.9) translate(5.5,5.5)" data-v-d609ce2b></image><image${ssrRenderAttr("href", _imports_1)} width="100" heigh="100" mask="url(#hexMask)" transform="scale(0.9) translate(5.5,5.5)" data-v-d609ce2b></image></svg></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/HexPhoto.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d609ce2b"]]);
const _imports_0 = "" + __buildAssetsURL("BoomOp.6paUcs3z.png");
const _sfc_main = {
  name: "Home"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeNavbar = __nuxt_component_0;
  const _component_HomeSubtext = __nuxt_component_1;
  const _component_HomeHexPhoto = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-388e2e9b>`);
  _push(ssrRenderComponent(_component_HomeNavbar, null, null, _parent));
  _push(`<div class="landing" data-v-388e2e9b><span class="background-lambda" data-v-388e2e9b>λ</span><div class="left-text" data-v-388e2e9b><h1 data-v-388e2e9b>Quinn Valencia Cecil</h1>`);
  _push(ssrRenderComponent(_component_HomeSubtext, null, null, _parent));
  _push(`</div><div class="right-image" data-v-388e2e9b><img${ssrRenderAttr("src", _imports_0)} alt="Quinn Valencia Cecil" data-v-388e2e9b></div></div><div class="about" data-v-388e2e9b><div class="left-image" data-v-388e2e9b>`);
  _push(ssrRenderComponent(_component_HomeHexPhoto, { "hex-color": "var(--green)" }, null, _parent));
  _push(`</div><div class="right-text" data-v-388e2e9b><h2 data-v-388e2e9b>About Me</h2><p data-v-388e2e9b>Hi! I&#39;m Quinn, a full stack developer with a background in audio engineering. I love creating things, whether it&#39;s a new song or a new app. I&#39;m passionate about accessibility and making the web a better place for everyone. I&#39;m currently looking for new opportunities to grow and learn.</p><button data-v-388e2e9b>Resume</button></div></div><div class="skills" data-v-388e2e9b><h2 data-v-388e2e9b>Skills</h2></div><div class="portfolio" data-v-388e2e9b><h2 data-v-388e2e9b>Portfolio</h2></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-388e2e9b"]]);
export {
  index as default
};
//# sourceMappingURL=index-g790707v.js.map

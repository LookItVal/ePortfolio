import { a as buildAssetsURL } from '../_/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BXxPlIRz.mjs';
import { useSSRContext, mergeProps, withCtx, openBlock, createBlock, createVNode } from 'file:///Users/quinn/Documents/Programs/ePortfolio/lookitval.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'file:///Users/quinn/Documents/Programs/ePortfolio/lookitval.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "" + buildAssetsURL("QVC.CMajLVUU.svg");
const _sfc_main = {
  name: "Logo",
  data() {
    return {
      isAnimating: false
    };
  },
  methods: {
    shimmer() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      const svg = this.$refs.logoSvg;
      const animations = svg.querySelectorAll("animateMotion");
      animations.forEach((anim) => {
        anim.beginElement();
      });
      setTimeout(() => {
        this.isAnimating = false;
      }, 1e3);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/",
    class: "logo"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg height="100%" width="100%" viewBox="0 0 20 10" data-v-18ca9ff3${_scopeId}><defs data-v-18ca9ff3${_scopeId}><mask id="logo-mask" height="100%" width="100%" data-v-18ca9ff3${_scopeId}><image${ssrRenderAttr("href", _imports_0)} height="100%" width="100%" data-v-18ca9ff3${_scopeId}></image></mask><radialGradient id="radial-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" data-v-18ca9ff3${_scopeId}><stop offset="0%" style="${ssrRenderStyle({ "stop-color": "var(--red)", "stop-opacity": "1" })}" data-v-18ca9ff3${_scopeId}></stop><stop offset="100%" style="${ssrRenderStyle({ "stop-color": "var(--red)", "stop-opacity": "0" })}" data-v-18ca9ff3${_scopeId}></stop></radialGradient></defs><g mask="url(#logo-mask)" data-v-18ca9ff3${_scopeId}><rect width="100%" height="100%" fill="var(--lavender)" data-v-18ca9ff3${_scopeId}></rect><path id="animated-path-1" d="M 9.7,7.7
                                               L 7.4,2 
                                               C 7.2,1.6, 6.6,1.25, 6.25,1.25 
                                               H 2.3
                                               C 2.05,1.25, 1.2,1.6, 1.2,2.5
                                               V 7.7
                                               C 1.2,8.5, 2,8.75, 2.3,8.75
                                               H 9
                                               L 10,10" stroke="none" fill="none" data-v-18ca9ff3${_scopeId}></path><path id="animated-path-2" d="M 9.85,7.8
                                               L 12.2,2.1
                                               L 12.2,2
                                               L 12.5,0" stroke="none" fill="none" data-v-18ca9ff3${_scopeId}></path><path id="animated-path-3" d="M 9.7,7.7
                                               L 9.82,8
                                               C 10,8.4, 10.5,8.75, 10.75,8.75
                                               H 17.5
                                               C 17.8,8.75, 18.5,8.4, 18.5,7.5
                                               V 2.5
                                               C 18.5,1.6, 17.8,1.25, 17.5,1.25
                                               H 8.5
                                               L 7.5,0" stroke="none" fill="none" data-v-18ca9ff3${_scopeId}></path><circle r="1" fill="url(#radial-gradient)" data-v-18ca9ff3${_scopeId}><animateMotion id="anim1" dur="1s" fill="freeze" data-v-18ca9ff3${_scopeId}><mpath href="#animated-path-1" data-v-18ca9ff3${_scopeId}></mpath></animateMotion></circle><circle r="1" fill="url(#radial-gradient)" data-v-18ca9ff3${_scopeId}><animateMotion id="anim2" dur="0.25s" fill="freeze" data-v-18ca9ff3${_scopeId}><mpath href="#animated-path-2" data-v-18ca9ff3${_scopeId}></mpath></animateMotion></circle><circle r="1" fill="url(#radial-gradient)" data-v-18ca9ff3${_scopeId}><animateMotion id="anim3" dur="1s" fill="freeze" data-v-18ca9ff3${_scopeId}><mpath href="#animated-path-3" data-v-18ca9ff3${_scopeId}></mpath></animateMotion></circle><circle r="0.1" cx="21" cy="11" fill="var(--red)" data-v-18ca9ff3${_scopeId}></circle></g></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            ref: "logoSvg",
            height: "100%",
            width: "100%",
            viewBox: "0 0 20 10",
            onMouseover: $options.shimmer
          }, [
            createVNode("defs", null, [
              createVNode("mask", {
                id: "logo-mask",
                height: "100%",
                width: "100%"
              }, [
                createVNode("image", {
                  href: _imports_0,
                  height: "100%",
                  width: "100%"
                })
              ]),
              createVNode("radialGradient", {
                id: "radial-gradient",
                cx: "50%",
                cy: "50%",
                r: "50%",
                fx: "50%",
                fy: "50%"
              }, [
                createVNode("stop", {
                  offset: "0%",
                  style: { "stop-color": "var(--red)", "stop-opacity": "1" }
                }),
                createVNode("stop", {
                  offset: "100%",
                  style: { "stop-color": "var(--red)", "stop-opacity": "0" }
                })
              ])
            ]),
            createVNode("g", { mask: "url(#logo-mask)" }, [
              createVNode("rect", {
                width: "100%",
                height: "100%",
                fill: "var(--lavender)"
              }),
              createVNode("path", {
                id: "animated-path-1",
                d: "M 9.7,7.7\n                                               L 7.4,2 \n                                               C 7.2,1.6, 6.6,1.25, 6.25,1.25 \n                                               H 2.3\n                                               C 2.05,1.25, 1.2,1.6, 1.2,2.5\n                                               V 7.7\n                                               C 1.2,8.5, 2,8.75, 2.3,8.75\n                                               H 9\n                                               L 10,10",
                stroke: "none",
                fill: "none"
              }),
              createVNode("path", {
                id: "animated-path-2",
                d: "M 9.85,7.8\n                                               L 12.2,2.1\n                                               L 12.2,2\n                                               L 12.5,0",
                stroke: "none",
                fill: "none"
              }),
              createVNode("path", {
                id: "animated-path-3",
                d: "M 9.7,7.7\n                                               L 9.82,8\n                                               C 10,8.4, 10.5,8.75, 10.75,8.75\n                                               H 17.5\n                                               C 17.8,8.75, 18.5,8.4, 18.5,7.5\n                                               V 2.5\n                                               C 18.5,1.6, 17.8,1.25, 17.5,1.25\n                                               H 8.5\n                                               L 7.5,0",
                stroke: "none",
                fill: "none"
              }),
              createVNode("circle", {
                r: "1",
                fill: "url(#radial-gradient)"
              }, [
                createVNode("animateMotion", {
                  id: "anim1",
                  dur: "1s",
                  fill: "freeze"
                }, [
                  createVNode("mpath", { href: "#animated-path-1" })
                ])
              ]),
              createVNode("circle", {
                r: "1",
                fill: "url(#radial-gradient)"
              }, [
                createVNode("animateMotion", {
                  id: "anim2",
                  dur: "0.25s",
                  fill: "freeze"
                }, [
                  createVNode("mpath", { href: "#animated-path-2" })
                ])
              ]),
              createVNode("circle", {
                r: "1",
                fill: "url(#radial-gradient)"
              }, [
                createVNode("animateMotion", {
                  id: "anim3",
                  dur: "1s",
                  fill: "freeze"
                }, [
                  createVNode("mpath", { href: "#animated-path-3" })
                ])
              ]),
              createVNode("circle", {
                r: "0.1",
                cx: "21",
                cy: "11",
                fill: "var(--red)"
              })
            ])
          ], 40, ["onMouseover"]))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-18ca9ff3"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Logo-Cre4-RWw.mjs.map

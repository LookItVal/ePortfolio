import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-window" }, _attrs))}><div class="header"><h1>Quinn Valencia Cecil</h1></div><div class="temp-portfolio"><h2>DS210: Intro to Data Science</h2><p> To view the project, click <a href="https://docs.google.com/document/d/1wv9LefGa38sqqZ3cvvaTMCDypUtLAcbx/export?format=pdf">here</a></p></div><div class="bottom-note"><p> Note: this website is under construction and is not even the branch that I have worked on the most. The website will not look like this by the end of development and I plan to make it far more elaborate </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-d7b2d95c.mjs.map

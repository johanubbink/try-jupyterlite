"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2088,6604],{6604:(e,o,t)=>{t.r(o),t.d(o,{default:()=>k});var n,i=t(53782),r=t(82930),d=t(27485),s=t(2301),a=t(1308),c=t(69578),l=t(81734),u=t(28877);!function(e){e.dismiss="tooltip:dismiss",e.launchConsole="tooltip:launch-console",e.launchNotebook="tooltip:launch-notebook",e.launchFile="tooltip:launch-file"}(n||(n={}));const m={id:"@jupyterlab/tooltip-extension:manager",autoStart:!0,provides:c.ITooltipManager,activate:e=>{let o=null;return e.commands.addCommand(n.dismiss,{execute:()=>{o&&(o.dispose(),o=null)}}),{invoke(e){const{anchor:t,editor:n,kernel:i,rendermime:r}=e;return o&&(o.dispose(),o=null),f.fetch({detail:0,editor:n,kernel:i}).then((e=>{o=new c.Tooltip({anchor:t,bundle:e,editor:n,rendermime:r}),u.Widget.attach(o,document.body)})).catch((()=>{}))}}}},p={id:"@jupyterlab/tooltip-extension:consoles",autoStart:!0,requires:[c.ITooltipManager,i.IConsoleTracker],activate:(e,o,t)=>{e.commands.addCommand(n.launchConsole,{execute:()=>{var e,n;const i=t.currentWidget;if(!i)return;const r=i.console,d=null===(e=r.promptCell)||void 0===e?void 0:e.editor,s=null===(n=r.sessionContext.session)||void 0===n?void 0:n.kernel,a=r.rendermime;return d&&s&&a?o.invoke({anchor:r,editor:d,kernel:s,rendermime:a}):void 0}})}},v={id:"@jupyterlab/tooltip-extension:notebooks",autoStart:!0,requires:[c.ITooltipManager,s.INotebookTracker],activate:(e,o,t)=>{e.commands.addCommand(n.launchNotebook,{execute:()=>{var e,n;const i=t.currentWidget;if(!i)return;const r=i.content,d=null===(e=r.activeCell)||void 0===e?void 0:e.editor,s=null===(n=i.sessionContext.session)||void 0===n?void 0:n.kernel,a=r.rendermime;return d&&s&&a?o.invoke({anchor:r,editor:d,kernel:s,rendermime:a}):void 0}})}},h={id:"@jupyterlab/tooltip-extension:files",autoStart:!0,requires:[c.ITooltipManager,d.IEditorTracker,a.IRenderMimeRegistry],activate:(e,o,t,i)=>{const r={},d=e.serviceManager.sessions,s=(e,o)=>{t.forEach((e=>{const t=(0,l.find)(o,(o=>e.context.path===o.path));if(t){const o=r[e.id];if(o&&o.id===t.id)return;o&&(delete r[e.id],o.dispose());const n=d.connectTo({model:t});r[e.id]=n}else{const o=r[e.id];o&&(o.dispose(),delete r[e.id])}}))};s(0,(0,l.toArray)(d.running())),d.runningChanged.connect(s),t.widgetAdded.connect(((e,o)=>{o.disposed.connect((e=>{const o=r[e.id];o&&(o.dispose(),delete r[e.id])}))})),e.commands.addCommand(n.launchFile,{execute:async()=>{const e=t.currentWidget,n=e&&r[e.id]&&r[e.id].kernel;if(!n)return;const d=e.content,s=null==d?void 0:d.editor;return s&&n&&i?o.invoke({anchor:d,editor:s,kernel:n,rendermime:i}):void 0}})}},k=[m,p,v,h];var f;!function(e){let o=0;e.fetch=function(e){const{detail:t,editor:n,kernel:i}=e,d=n.model.value.text,s=n.getCursorPosition(),a=r.Text.jsIndexToCharIndex(n.getOffsetAt(s),d);if(!d||!i)return Promise.reject(void 0);const c={code:d,cursor_pos:a,detail_level:t||0},l=++o;return i.requestInspect(c).then((e=>{const t=e.content;return l!==o?Promise.reject(void 0):"ok"===t.status&&t.found?Promise.resolve(t.data):Promise.reject(void 0)}))}}(f||(f={}))}}]);
//# sourceMappingURL=2088.35237df.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6849:function(e,n,l){Promise.resolve().then(l.bind(l,1444))},1444:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return R}});var r=l(4503),t=l(5137),i=l(2628),a=l(789),s=l(8248),o=l(9337),u=l(7834),d=(0,o.G)(function(e,n){let{direction:l,align:t,justify:i,wrap:a,basis:s,grow:o,shrink:d,...c}=e;return(0,r.jsx)(u.m.div,{ref:n,__css:{display:"flex",flexDirection:l,alignItems:t,justifyContent:i,flexWrap:a,flexBasis:s,flexGrow:o,flexShrink:d},...c})});d.displayName="Flex";var c=(0,u.m)("div");c.displayName="Box";var m=(0,o.G)(function(e,n){let{size:l,centerContent:t=!0,...i}=e;return(0,r.jsx)(c,{ref:n,boxSize:l,__css:{...t?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});m.displayName="Square",(0,o.G)(function(e,n){let{size:l,...t}=e;return(0,r.jsx)(m,{size:l,ref:n,borderRadius:"9999px",...t})}).displayName="Circle";var p=l(5093);function f(...e){return n=>{e.forEach(e=>{!function(e,n){if(null!=e){if("function"==typeof e){e(n);return}try{e.current=n}catch(l){throw Error(`Cannot assign value '${n}' to ref '${e}'`)}}}(e,n)})}}var h=l(9623),x=l(3173),v=l(7212),[b,y]=(0,p.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[g,j]=(0,p.k)({strict:!1,name:"FormControlContext"}),_=(0,o.G)(function(e,n){let l=(0,h.jC)("Form",e),i=(0,x.Lr)(e),{getRootProps:a,htmlProps:s,...o}=function(e){let{id:n,isRequired:l,isInvalid:r,isDisabled:i,isReadOnly:a,...s}=e,o=(0,t.useId)(),u=n||`field-${o}`,d=`${u}-label`,c=`${u}-feedback`,m=`${u}-helptext`,[p,h]=(0,t.useState)(!1),[x,b]=(0,t.useState)(!1),[y,g]=(0,t.useState)(!1),j=(0,t.useCallback)((e={},n=null)=>({id:m,...e,ref:f(n,e=>{e&&b(!0)})}),[m]),_=(0,t.useCallback)((e={},n=null)=>({...e,ref:n,"data-focus":(0,v.PB)(y),"data-disabled":(0,v.PB)(i),"data-invalid":(0,v.PB)(r),"data-readonly":(0,v.PB)(a),id:void 0!==e.id?e.id:d,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,i,y,r,a,d]),N=(0,t.useCallback)((e={},n=null)=>({id:c,...e,ref:f(n,e=>{e&&h(!0)}),"aria-live":"polite"}),[c]),k=(0,t.useCallback)((e={},n=null)=>({...e,...s,ref:n,role:"group"}),[s]),C=(0,t.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!l,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!i,isFocused:!!y,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:p,setHasFeedbackText:h,hasHelpText:x,setHasHelpText:b,id:u,labelId:d,feedbackId:c,helpTextId:m,htmlProps:s,getHelpTextProps:j,getErrorMessageProps:N,getRootProps:k,getLabelProps:_,getRequiredIndicatorProps:C}}(i),d=(0,v.cx)("chakra-form-control",e.className);return(0,r.jsx)(g,{value:o,children:(0,r.jsx)(b,{value:l,children:(0,r.jsx)(u.m.div,{...a({},n),className:d,__css:l.container})})})});_.displayName="FormControl",(0,o.G)(function(e,n){let l=j(),t=y(),i=(0,v.cx)("chakra-form__helper-text",e.className);return(0,r.jsx)(u.m.div,{...null==l?void 0:l.getHelpTextProps(e,n),__css:t.helperText,className:i})}).displayName="FormHelperText";var N=(0,o.G)(function(e,n){var l;let t=(0,h.mq)("FormLabel",e),i=(0,x.Lr)(e),{className:a,children:s,requiredIndicator:o=(0,r.jsx)(k,{}),optionalIndicator:d=null,...c}=i,m=j(),p=null!=(l=null==m?void 0:m.getLabelProps(c,n))?l:{ref:n,...c};return(0,r.jsxs)(u.m.label,{...p,className:(0,v.cx)("chakra-form__label",i.className),__css:{display:"block",textAlign:"start",...t},children:[s,(null==m?void 0:m.isRequired)?o:d]})});N.displayName="FormLabel";var k=(0,o.G)(function(e,n){let l=j(),t=y();if(!(null==l?void 0:l.isRequired))return null;let i=(0,v.cx)("chakra-form__required-indicator",e.className);return(0,r.jsx)(u.m.span,{...null==l?void 0:l.getRequiredIndicatorProps(e,n),__css:t.requiredIndicator,className:i})});k.displayName="RequiredIndicator";var C=(0,o.G)(function(e,n){let{htmlSize:l,...t}=e,i=(0,h.jC)("Input",t),a=(0,x.Lr)(t),s=function(e){let{isDisabled:n,isInvalid:l,isReadOnly:r,isRequired:t,...i}=function(e){var n,l,r;let t=j(),{id:i,disabled:a,readOnly:s,required:o,isRequired:u,isInvalid:d,isReadOnly:c,isDisabled:m,onFocus:p,onBlur:f,...h}=e,x=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&x.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&x.push(t.helpTextId),{...h,"aria-describedby":x.join(" ")||void 0,id:null!=i?i:null==t?void 0:t.id,isDisabled:null!=(n=null!=a?a:m)?n:null==t?void 0:t.isDisabled,isReadOnly:null!=(l=null!=s?s:c)?l:null==t?void 0:t.isReadOnly,isRequired:null!=(r=null!=o?o:u)?r:null==t?void 0:t.isRequired,isInvalid:null!=d?d:null==t?void 0:t.isInvalid,onFocus:(0,v.v0)(null==t?void 0:t.onFocus,p),onBlur:(0,v.v0)(null==t?void 0:t.onBlur,f)}}(e);return{...i,disabled:n,readOnly:r,required:t,"aria-invalid":(0,v.Qm)(l),"aria-required":(0,v.Qm)(t),"aria-readonly":(0,v.Qm)(r)}}(a),o=(0,v.cx)("chakra-input",e.className);return(0,r.jsx)(u.m.input,{size:l,...s,__css:i.field,ref:n,className:o})});C.displayName="Input",C.id="Input";var[I,S]=(0,p.k)({strict:!1,name:"ButtonGroupContext"});function F(e){let{children:n,className:l,...i}=e,a=(0,t.isValidElement)(n)?(0,t.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,s=(0,v.cx)("chakra-button__icon",l);return(0,r.jsx)(u.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:s,children:a})}F.displayName="ButtonIcon";var B=l(7602);function q(e){let{label:n,placement:l,spacing:i="0.5rem",children:a=(0,r.jsx)(B.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:o,...d}=e,c=(0,v.cx)("chakra-button__spinner",s),m="start"===l?"marginEnd":"marginStart",p=(0,t.useMemo)(()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[m]:n?i:0,fontSize:"1em",lineHeight:"normal",...o}),[o,n,m,i]);return(0,r.jsx)(u.m.div,{className:c,...d,__css:p,children:a})}q.displayName="ButtonSpinner";var O=(0,o.G)((e,n)=>{let l=S(),i=(0,h.mq)("Button",{...l,...e}),{isDisabled:a=null==l?void 0:l.isDisabled,isLoading:s,isActive:o,children:d,leftIcon:c,rightIcon:m,loadingText:p,iconSpacing:b="0.5rem",type:y,spinner:g,spinnerPlacement:j="start",className:_,as:N,...k}=(0,x.Lr)(e),C=(0,t.useMemo)(()=>{let e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!l&&{_focus:e}}},[i,l]),{ref:I,type:F}=function(e){let[n,l]=(0,t.useState)(!e),r=(0,t.useCallback)(e=>{e&&l("BUTTON"===e.tagName)},[]);return{ref:r,type:n?"button":void 0}}(N),B={rightIcon:m,leftIcon:c,iconSpacing:b,children:d};return(0,r.jsxs)(u.m.button,{ref:function(...e){return(0,t.useMemo)(()=>f(...e),e)}(n,I),as:N,type:null!=y?y:F,"data-active":(0,v.PB)(o),"data-loading":(0,v.PB)(s),__css:C,className:(0,v.cx)("chakra-button",_),...k,disabled:a||s,children:[s&&"start"===j&&(0,r.jsx)(q,{className:"chakra-button__spinner--start",label:p,placement:"start",spacing:b,children:g}),s?p||(0,r.jsx)(u.m.span,{opacity:0,children:(0,r.jsx)(P,{...B})}):(0,r.jsx)(P,{...B}),s&&"end"===j&&(0,r.jsx)(q,{className:"chakra-button__spinner--end",label:p,placement:"end",spacing:b,children:g})]})});function P(e){let{leftIcon:n,rightIcon:l,children:t,iconSpacing:i}=e;return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)(F,{marginEnd:i,children:n}),t,l&&(0,r.jsx)(F,{marginStart:i,children:l})]})}function R(){let e=function(e){let{theme:n}=(0,s.uP)(),l=(0,i.OX)();return(0,t.useMemo)(()=>(0,a.Cj)(n.direction,{...l,...e}),[e,n.direction,l])}(),[n,l]=(0,t.useState)(!1),[o,u]=(0,t.useState)(""),[m,p]=(0,t.useState)(""),[f,h]=(0,t.useState)(""),x=()=>{let e={client:{host:"Please enter your server ip or url",port:"Please enter your server port",username:"Please enter the bot's username you want"},"! DO NOT EDIT BELOW !":"ONLY IF YOU KNOW WHAT YOU ARE DOING",logLevel:["error","log","debug"],action:{commands:["forward","back","left","right","jump"],holdDuration:5e3,retryDelay:15e3}};return e.client.host=o,e.client.port=m,e.client.username=f,JSON.stringify(e,null,"	")},v=async()=>{let n=o.length&&m.length&&f.length;n?(l(!1),await navigator.clipboard.writeText(x()),e({title:"Code generated!",description:"The code has been copied to your clipboard.",status:"success",duration:5e3,isClosable:!0})):l(!0)};return(0,r.jsx)(d,{width:"full",align:"center",justifyContent:"center",children:(0,r.jsx)(c,{minW:{md:"400px"},marginY:4,children:(0,r.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[(0,r.jsxs)(_,{isInvalid:n,isRequired:!0,children:[(0,r.jsx)(N,{children:"Host (URL or IP)"}),(0,r.jsx)(C,{value:o,onChange:e=>u(e.target.value)})]}),(0,r.jsxs)(_,{isInvalid:n,marginTop:5,isRequired:!0,children:[(0,r.jsx)(N,{children:"Port"}),(0,r.jsx)(C,{value:m,onChange:e=>p(e.target.value)})]}),(0,r.jsxs)(_,{isInvalid:n,marginTop:5,isRequired:!0,children:[(0,r.jsx)(N,{children:"Username"}),(0,r.jsx)(C,{value:f,onChange:e=>h(e.target.value)})]}),(0,r.jsx)(O,{width:"full",marginTop:10,type:"submit",onClick:v,children:"Generate!"})]})})})}O.displayName="Button"}},function(e){e.O(0,[628,929,215,744],function(){return e(e.s=6849)}),_N_E=e.O()}]);
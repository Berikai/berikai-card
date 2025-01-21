(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var fe,g,qt,Y,ct,Bt,Re,Wt,Ge,$e,ze,jt,le={},Ut=[],Un=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Se=Array.isArray;function $(e,t){for(var n in t)e[n]=t[n];return e}function Je(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function R(e,t,n){var r,o,a,i={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?fe.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return oe(e,i,r,o,null)}function oe(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++qt,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(a),a}function Hn(){return{current:null}}function q(e){return e.children}function F(e,t){this.props=e,this.context=t}function Z(e,t){if(t==null)return e.__?Z(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Z(e):null}function Ht(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ht(e)}}function qe(e){(!e.__d&&(e.__d=!0)&&Y.push(e)&&!be.__r++||ct!==g.debounceRendering)&&((ct=g.debounceRendering)||Bt)(be)}function be(){var e,t,n,r,o,a,i,s;for(Y.sort(Re);e=Y.shift();)e.__d&&(t=Y.length,r=void 0,a=(o=(n=e).__v).__e,i=[],s=[],n.__P&&((r=$({},o)).__v=o.__v+1,g.vnode&&g.vnode(r),Qe(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[a]:null,i,a??Z(o),!!(32&o.__u),s),r.__v=o.__v,r.__.__k[r.__i]=r,Xt(i,r,s),r.__e!=a&&Ht(r)),Y.length>t&&Y.sort(Re));be.__r=0}function Yt(e,t,n,r,o,a,i,s,u,f,m){var l,p,d,y,b,h,_=r&&r.__k||Ut,v=t.length;for(u=Yn(n,t,_,u,v),l=0;l<v;l++)(d=n.__k[l])!=null&&(p=d.__i===-1?le:_[d.__i]||le,d.__i=l,h=Qe(e,d,p,o,a,i,s,u,f,m),y=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&Ke(p.ref,null,d),m.push(d.ref,d.__c||y,d)),b==null&&y!=null&&(b=y),4&d.__u||p.__k===d.__k?u=Vt(d,u,e):typeof d.type=="function"&&h!==void 0?u=h:y&&(u=y.nextSibling),d.__u&=-7);return n.__e=b,u}function Yn(e,t,n,r,o){var a,i,s,u,f,m=n.length,l=m,p=0;for(e.__k=new Array(o),a=0;a<o;a++)(i=t[a])!=null&&typeof i!="boolean"&&typeof i!="function"?(u=a+p,(i=e.__k[a]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?oe(null,i,null,null,null):Se(i)?oe(q,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?oe(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,s=null,(f=i.__i=Vn(i,n,u,l))!==-1&&(l--,(s=n[f])&&(s.__u|=2)),s==null||s.__v===null?(f==-1&&p--,typeof i.type!="function"&&(i.__u|=4)):f!=u&&(f==u-1?p--:f==u+1?p++:(f>u?p--:p++,i.__u|=4))):e.__k[a]=null;if(l)for(a=0;a<m;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=Z(s)),Zt(s,s));return r}function Vt(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=Vt(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=Z(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function z(e,t){return t=t||[],e==null||typeof e=="boolean"||(Se(e)?e.some(function(n){z(n,t)}):t.push(e)),t}function Vn(e,t,n,r){var o,a,i=e.key,s=e.type,u=t[n];if(u===null||u&&i==u.key&&s===u.type&&!(2&u.__u))return n;if(r>(u!=null&&!(2&u.__u)?1:0))for(o=n-1,a=n+1;o>=0||a<t.length;){if(o>=0){if((u=t[o])&&!(2&u.__u)&&i==u.key&&s===u.type)return o;o--}if(a<t.length){if((u=t[a])&&!(2&u.__u)&&i==u.key&&s===u.type)return a;a++}}return-1}function ut(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Un.test(t)?n:n+"px"}function pe(e,t,n,r,o){var a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ut(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ut(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(Wt,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=Ge,e.addEventListener(t,a?ze:$e,a)):e.removeEventListener(t,a?ze:$e,a);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function ft(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Ge++;else if(t.t<n.u)return;return n(g.event?g.event(t):t)}}}function Qe(e,t,n,r,o,a,i,s,u,f){var m,l,p,d,y,b,h,_,v,A,S,T,N,K,V,ee,U,D=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),a=[s=t.__e=n.__e]),(m=g.__b)&&m(t);e:if(typeof D=="function")try{if(_=t.props,v="prototype"in D&&D.prototype.render,A=(m=D.contextType)&&r[m.__c],S=m?A?A.props.value:m.__:r,n.__c?h=(l=t.__c=n.__c).__=l.__E:(v?t.__c=l=new D(_,S):(t.__c=l=new F(_,S),l.constructor=D,l.render=Zn),A&&A.sub(l),l.props=_,l.state||(l.state={}),l.context=S,l.__n=r,p=l.__d=!0,l.__h=[],l._sb=[]),v&&l.__s==null&&(l.__s=l.state),v&&D.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=$({},l.__s)),$(l.__s,D.getDerivedStateFromProps(_,l.__s))),d=l.props,y=l.state,l.__v=t,p)v&&D.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),v&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(v&&D.getDerivedStateFromProps==null&&_!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(_,S),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(_,l.__s,S)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(l.props=_,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(te){te&&(te.__=t)}),T=0;T<l._sb.length;T++)l.__h.push(l._sb[T]);l._sb=[],l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(_,l.__s,S),v&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,y,b)})}if(l.context=S,l.props=_,l.__P=e,l.__e=!1,N=g.__r,K=0,v){for(l.state=l.__s,l.__d=!1,N&&N(t),m=l.render(l.props,l.state,l.context),V=0;V<l._sb.length;V++)l.__h.push(l._sb[V]);l._sb=[]}else do l.__d=!1,N&&N(t),m=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++K<25);l.state=l.__s,l.getChildContext!=null&&(r=$($({},r),l.getChildContext())),v&&!p&&l.getSnapshotBeforeUpdate!=null&&(b=l.getSnapshotBeforeUpdate(d,y)),s=Yt(e,Se(ee=m!=null&&m.type===q&&m.key==null?m.props.children:m)?ee:[ee],t,n,r,o,a,i,s,u,f),l.base=t.__e,t.__u&=-161,l.__h.length&&i.push(l),h&&(l.__E=l.__=null)}catch(te){if(t.__v=null,u||a!=null)if(te.then){for(t.__u|=u?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__e=s}else for(U=a.length;U--;)Je(a[U]);else t.__e=n.__e,t.__k=n.__k;g.__e(te,t,n)}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Xn(n.__e,t,n,r,o,a,i,u,f);return(m=g.diffed)&&m(t),128&t.__u?void 0:s}function Xt(e,t,n){for(var r=0;r<n.length;r++)Ke(n[r],n[++r],n[++r]);g.__c&&g.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){g.__e(a,o.__v)}})}function Xn(e,t,n,r,o,a,i,s,u){var f,m,l,p,d,y,b,h=n.props,_=t.props,v=t.type;if(v=="svg"?o="http://www.w3.org/2000/svg":v=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),a!=null){for(f=0;f<a.length;f++)if((d=a[f])&&"setAttribute"in d==!!v&&(v?d.localName==v:d.nodeType==3)){e=d,a[f]=null;break}}if(e==null){if(v==null)return document.createTextNode(_);e=document.createElementNS(o,v,_.is&&_),s&&(g.__m&&g.__m(t,a),s=!1),a=null}if(v===null)h===_||s&&e.data===_||(e.data=_);else{if(a=a&&fe.call(e.childNodes),h=n.props||le,!s&&a!=null)for(h={},f=0;f<e.attributes.length;f++)h[(d=e.attributes[f]).name]=d.value;for(f in h)if(d=h[f],f!="children"){if(f=="dangerouslySetInnerHTML")l=d;else if(!(f in _)){if(f=="value"&&"defaultValue"in _||f=="checked"&&"defaultChecked"in _)continue;pe(e,f,null,d,o)}}for(f in _)d=_[f],f=="children"?p=d:f=="dangerouslySetInnerHTML"?m=d:f=="value"?y=d:f=="checked"?b=d:s&&typeof d!="function"||h[f]===d||pe(e,f,d,h[f],o);if(m)s||l&&(m.__html===l.__html||m.__html===e.innerHTML)||(e.innerHTML=m.__html),t.__k=[];else if(l&&(e.innerHTML=""),Yt(e,Se(p)?p:[p],t,n,r,v=="foreignObject"?"http://www.w3.org/1999/xhtml":o,a,i,a?a[0]:n.__k&&Z(n,0),s,u),a!=null)for(f=a.length;f--;)Je(a[f]);s||(f="value",v=="progress"&&y==null?e.removeAttribute("value"):y!==void 0&&(y!==e[f]||v=="progress"&&!y||v=="option"&&y!==h[f])&&pe(e,f,y,h[f],o),f="checked",b!==void 0&&b!==e[f]&&pe(e,f,b,h[f],o))}return e}function Ke(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(o){g.__e(o,n)}}function Zt(e,t,n){var r,o;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ke(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){g.__e(a,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Zt(r[o],t,n||typeof e.type!="function");n||Je(e.__e),e.__c=e.__=e.__e=void 0}function Zn(e,t,n){return this.constructor(e,n)}function G(e,t,n){var r,o,a,i;t==document&&(t=document.documentElement),g.__&&g.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],i=[],Qe(t,e=(!r&&n||t).__k=R(q,null,[e]),o||le,le,t.namespaceURI,!r&&n?[n]:o?null:t.firstChild?fe.call(t.childNodes):null,a,!r&&n?n:o?o.__e:t.firstChild,r,i),Xt(a,e,i)}function Gt(e,t){G(e,t,Gt)}function Gn(e,t,n){var r,o,a,i,s=$({},e.props);for(a in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)a=="key"?r=t[a]:a=="ref"?o=t[a]:s[a]=t[a]===void 0&&i!==void 0?i[a]:t[a];return arguments.length>2&&(s.children=arguments.length>3?fe.call(arguments,2):n),oe(e.type,s,r||e.key,o||e.ref,null)}function Jn(e,t){var n={__c:t="__cC"+jt++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a;return this.getChildContext||(o=new Set,(a={})[t]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.forEach(function(s){s.__e=!0,qe(s)})},this.sub=function(i){o.add(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){o&&o.delete(i),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}fe=Ut.slice,g={__e:function(e,t,n,r){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(s){e=s}throw e}},qt=0,F.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),qe(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),qe(this))},F.prototype.render=q,Y=[],Bt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Re=function(e,t){return e.__v.__b-t.__v.__b},be.__r=0,Wt=/(PointerCapture)$|Capture$/i,Ge=0,$e=ft(!1),ze=ft(!0),jt=0;var H,E,Ie,dt,J=0,Jt=[],x=g,mt=x.__b,pt=x.__r,_t=x.diffed,ht=x.__c,yt=x.unmount,gt=x.__;function Q(e,t){x.__h&&x.__h(E,e,J||t),J=0;var n=E.__H||(E.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ce(e){return J=1,et(on,e)}function et(e,t,n){var r=Q(H++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):on(void 0,t),function(s){var u=r.__N?r.__N[0]:r.__[0],f=r.t(u,s);u!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=E,!E.u)){var o=function(s,u,f){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(p){return!!p.__c});if(m.every(function(p){return!p.__N}))return!a||a.call(this,s,u,f);var l=r.__c.props!==s;return m.forEach(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(l=!0)}}),a&&a.call(this,s,u,f)||l};E.u=!0;var a=E.shouldComponentUpdate,i=E.componentWillUpdate;E.componentWillUpdate=function(s,u,f){if(this.__e){var m=a;a=void 0,o(s,u,f),a=m}i&&i.call(this,s,u,f)},E.shouldComponentUpdate=o}return r.__N||r.__}function tt(e,t){var n=Q(H++,3);!x.__s&&nt(n.__H,t)&&(n.__=e,n.i=t,E.__H.__h.push(n))}function j(e,t){var n=Q(H++,4);!x.__s&&nt(n.__H,t)&&(n.__=e,n.i=t,E.__h.push(n))}function Qt(e){return J=5,Ne(function(){return{current:e}},[])}function Kt(e,t,n){J=6,j(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Ne(e,t){var n=Q(H++,7);return nt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function en(e,t){return J=8,Ne(function(){return e},t)}function tn(e){var t=E.context[e.__c],n=Q(H++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(E)),t.props.value):e.__}function nn(e,t){x.useDebugValue&&x.useDebugValue(t?t(e):e)}function rn(){var e=Q(H++,11);if(!e.__){for(var t=E.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Qn(){for(var e;e=Jt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ye),e.__H.__h.forEach(Be),e.__H.__h=[]}catch(t){e.__H.__h=[],x.__e(t,e.__v)}}x.__b=function(e){E=null,mt&&mt(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),gt&&gt(e,t)},x.__r=function(e){pt&&pt(e),H=0;var t=(E=e.__c).__H;t&&(Ie===E?(t.__h=[],E.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(ye),t.__h.forEach(Be),t.__h=[],H=0)),Ie=E},x.diffed=function(e){_t&&_t(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Jt.push(t)!==1&&dt===x.requestAnimationFrame||((dt=x.requestAnimationFrame)||Kn)(Qn)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),Ie=E=null},x.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ye),n.__h=n.__h.filter(function(r){return!r.__||Be(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],x.__e(r,n.__v)}}),ht&&ht(e,t)},x.unmount=function(e){yt&&yt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ye(r)}catch(o){t=o}}),n.__H=void 0,t&&x.__e(t,n.__v))};var vt=typeof requestAnimationFrame=="function";function Kn(e){var t,n=function(){clearTimeout(r),vt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);vt&&(t=requestAnimationFrame(n))}function ye(e){var t=E,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),E=t}function Be(e){var t=E;e.__c=e.__(),E=t}function nt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function on(e,t){return typeof t=="function"?t(e):t}function an(e,t){for(var n in t)e[n]=t[n];return e}function We(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function sn(e,t){var n=t(),r=ce({t:{__:n,u:t}}),o=r[0].t,a=r[1];return j(function(){o.__=n,o.u=t,Oe(o)&&a({t:o})},[e,n,t]),tt(function(){return Oe(o)&&a({t:o}),e(function(){Oe(o)&&a({t:o})})},[e]),n}function Oe(e){var t,n,r=e.u,o=e.__;try{var a=r();return!((t=o)===(n=a)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}function ln(e){e()}function cn(e){return e}function un(){return[!1,ln]}var fn=j;function je(e,t){this.props=e,this.context=t}function er(e,t){function n(o){var a=this.props.ref,i=a==o.ref;return!i&&a&&(a.call?a(null):a.current=null),t?!t(this.props,o)||!i:We(this.props,o)}function r(o){return this.shouldComponentUpdate=n,R(e,o)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(je.prototype=new F).isPureReactComponent=!0,je.prototype.shouldComponentUpdate=function(e,t){return We(this.props,e)||We(this.state,t)};var bt=g.__b;g.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),bt&&bt(e)};var tr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function nr(e){function t(n){var r=an({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=tr,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var wt=function(e,t){return e==null?null:z(z(e).map(t))},rr={map:wt,forEach:wt,count:function(e){return e?z(e).length:0},only:function(e){var t=z(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:z},or=g.__e;g.__e=function(e,t,n,r){if(e.then){for(var o,a=t;a=a.__;)if((o=a.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}or(e,t,n,r)};var kt=g.unmount;function dn(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=an({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return dn(r,t,n)})),e}function mn(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return mn(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function ge(){this.__u=0,this.o=null,this.__b=null}function pn(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function ar(e){var t,n,r;function o(a){if(t||(t=e()).then(function(i){n=i.default||i},function(i){r=i}),r)throw r;if(!n)throw t;return R(n,a)}return o.displayName="Lazy",o.__f=!0,o}function ne(){this.i=null,this.l=null}g.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),kt&&kt(e)},(ge.prototype=new F).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var o=pn(r.__v),a=!1,i=function(){a||(a=!0,n.__R=null,o?o(s):s())};n.__R=i;var s=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=mn(u,u.__c.__P,u.__c.__O)}var f;for(r.setState({__a:r.__b=null});f=r.o.pop();)f.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(i,i)},ge.prototype.componentWillUnmount=function(){this.o=[]},ge.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=dn(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&R(q,null,e.fallback);return o&&(o.__u&=-33),[R(q,null,t.__a?null:e.children),o]};var Et=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function ir(e){return this.getChildContext=function(){return e.context},e.children}function sr(e){var t=this,n=e.h;t.componentWillUnmount=function(){G(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),t.v||(t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],contains:function(){return!0},appendChild:function(r){this.childNodes.push(r),t.h.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),t.h.insertBefore(r,o)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.h.removeChild(r)}}),G(R(ir,{context:t.context},e.__v),t.v)}function lr(e,t){var n=R(sr,{__v:e,h:t});return n.containerInfo=t,n}(ne.prototype=new F).__a=function(e){var t=this,n=pn(t.__v),r=t.l.get(e);return r[0]++,function(o){var a=function(){t.props.revealOrder?(r.push(o),Et(t,e,r)):o()};n?n(a):a()}},ne.prototype.render=function(e){this.i=null,this.l=new Map;var t=z(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},ne.prototype.componentDidUpdate=ne.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Et(e,n,t)})};var _n=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,cr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ur=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,fr=/[A-Z0-9]/g,dr=typeof document<"u",mr=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function pr(e,t,n){return t.__k==null&&(t.textContent=""),G(e,t),typeof n=="function"&&n(),e?e.__c:null}function _r(e,t,n){return Gt(e,t),typeof n=="function"&&n(),e?e.__c:null}F.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(F.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var xt=g.event;function hr(){}function yr(){return this.cancelBubble}function gr(){return this.defaultPrevented}g.event=function(e){return xt&&(e=xt(e)),e.persist=hr,e.isPropagationStopped=yr,e.isDefaultPrevented=gr,e.nativeEvent=e};var rt,vr={enumerable:!1,configurable:!0,get:function(){return this.class}},St=g.vnode;g.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,o={},a=r.indexOf("-")===-1;for(var i in n){var s=n[i];if(!(i==="value"&&"defaultValue"in n&&s==null||dr&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var u=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&s===!0?s="":u==="translate"&&s==="no"?s=!1:u[0]==="o"&&u[1]==="n"?u==="ondoubleclick"?i="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||mr(n.type)?u==="onfocus"?i="onfocusin":u==="onblur"?i="onfocusout":ur.test(i)&&(i=u):u=i="oninput":a&&cr.test(i)?i=i.replace(fr,"-$&").toLowerCase():s===null&&(s=void 0),u==="oninput"&&o[i=u]&&(i="oninputCapture"),o[i]=s}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=z(n.children).forEach(function(f){f.props.selected=o.value.indexOf(f.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=z(n.children).forEach(function(f){f.props.selected=o.multiple?o.defaultValue.indexOf(f.props.value)!=-1:o.defaultValue==f.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",vr)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=_n,St&&St(e)};var Nt=g.__r;g.__r=function(e){Nt&&Nt(e),rt=e.__c};var Ct=g.diffed;g.diffed=function(e){Ct&&Ct(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),rt=null};var br={ReactCurrentDispatcher:{current:{readContext:function(e){return rt.__n[e.__c].props.value},useCallback:en,useContext:tn,useDebugValue:nn,useDeferredValue:cn,useEffect:tt,useId:rn,useImperativeHandle:Kt,useInsertionEffect:fn,useLayoutEffect:j,useMemo:Ne,useReducer:et,useRef:Qt,useState:ce,useSyncExternalStore:sn,useTransition:un}}};function wr(e){return R.bind(null,e)}function Ce(e){return!!e&&e.$$typeof===_n}function kr(e){return Ce(e)&&e.type===q}function Er(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function xr(e){return Ce(e)?Gn.apply(null,arguments):e}function Sr(e){return!!e.__k&&(G(null,e),!0)}function Nr(e){return e&&(e.base||e.nodeType===1&&e)||null}var Cr=function(e,t){return e(t)},Ar=function(e,t){return e(t)},Pr=q,Ir=Ce,c={useState:ce,useId:rn,useReducer:et,useEffect:tt,useLayoutEffect:j,useInsertionEffect:fn,useTransition:un,useDeferredValue:cn,useSyncExternalStore:sn,startTransition:ln,useRef:Qt,useImperativeHandle:Kt,useMemo:Ne,useCallback:en,useContext:tn,useDebugValue:nn,version:"18.3.1",Children:rr,render:pr,hydrate:_r,unmountComponentAtNode:Sr,createPortal:lr,createElement:R,createContext:Jn,createFactory:wr,cloneElement:xr,createRef:Hn,Fragment:q,isValidElement:Ce,isElement:Ir,isFragment:kr,isMemo:Er,findDOMNode:Nr,Component:F,PureComponent:je,memo:er,forwardRef:nr,flushSync:Ar,unstable_batchedUpdates:Cr,StrictMode:Pr,Suspense:ge,SuspenseList:ne,lazy:ar,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:br};const ae={show:!1},Or=()=>{const e=document.getElementById("Card"),t=document.querySelector(".pp_logo"),n=document.getElementById("switch"),r=document.getElementById("about-nav"),o=document.querySelector(".username"),a=document.querySelector(".App-about"),i=document.querySelector(".App-header"),s=document.querySelector(".App-footer"),u=document.querySelector(".App-about-extra"),f=document.querySelector(".navbar"),m=document.querySelector(".App"),l=document.querySelector(".threeD-info"),p=document.querySelector("#spotify-img"),d=document.querySelector(".spotify-panel"),y=document.querySelectorAll(".icon-nav"),b=document.querySelectorAll(".rotate-counterclockwise");de.rotation=-90,m.classList.add("about-open"),a.classList.add("about-open"),i.classList.add("about-open"),s.classList.add("about-open"),u.classList.add("about-open"),f.classList.add("about-open"),e.classList.add("about-open"),t.classList.add("about-open"),n.classList.add("about-open"),p.style.transform="rotate(90deg)",d.style.transform="rotate(90deg)",i.style.display="block",a.style.display="none",u.style.display="flex",window.innerWidth>678&&(t.style.transition="ease 0.2s"),e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",e.style.transform="rotateZ(-90deg)",t.style.borderRadius="70px 15px 70px 15px",t.style.transform="rotateZ(90deg)",n.style.transform="rotateZ(90deg)",l.style.transform="rotateZ(90deg)";for(let h of y)h.style.transform="rotateZ(90deg)";r.style.backgroundColor="#FF000099",r.style.color="#EEE",r.children[0].textContent="Back",r.onmouseover=()=>{r.style.backgroundColor="#FF0000DD",r.style.color="#FFF"},r.onmouseout=()=>{r.style.backgroundColor="#FF000099",r.style.color="#EEE"};for(let h of b)h.classList.remove("rotate-counterclockwise"),h.classList.add("rotate-clockwise"),h.classList.add("rotated-about");o.style.opacity="0",a.style.opacity="0",a.style.pointerEvents="none",s.style.opacity="0",u.style.opacity="1",u.style.pointerEvents="all"},hn=()=>{const e=document.getElementById("Card"),t=document.querySelector(".pp_logo"),n=document.getElementById("switch"),r=document.getElementById("about-nav"),o=document.querySelector(".username"),a=document.querySelector(".App-about"),i=document.querySelector(".App-header"),s=document.querySelector(".App-footer"),u=document.querySelector(".App-about-extra"),f=document.querySelector(".navbar"),m=document.querySelector(".App"),l=document.querySelector(".threeD-info"),p=document.querySelector("#spotify-img"),d=document.querySelector(".spotify-panel"),y=document.querySelectorAll(".icon-nav"),b=document.querySelectorAll(".rotated-about");de.rotation=0,m.classList.remove("about-open"),a.classList.remove("about-open"),i.classList.remove("about-open"),s.classList.remove("about-open"),u.classList.remove("about-open"),f.classList.remove("about-open"),e.classList.remove("about-open"),t.classList.remove("about-open"),n.classList.remove("about-open"),p.style.transform="rotate(0deg)",d.style.transform="rotate(0deg)",a.style.display="block",u.style.display="none",window.innerWidth<=678?t.style.transition="none":t.style.transition="ease 0.2s",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",e.style.transform="rotateZ(0deg)",t.style.borderRadius="15px 70px 15px 70px",t.style.transform="rotateZ(0deg)",n.style.transform="rotateZ(0deg)",l.style.transform="rotateZ(0deg)";for(let h of y)h.style.transform="rotateZ(0deg)";r.style.backgroundColor="#00000008",r.style.color="rgb(0, 0,0, 0.2)",r.children[0].textContent="About",r.onmouseover=()=>{r.style.backgroundColor="#0000000D",r.style.color="rgb(0, 0,0, 0.6)"},r.onmouseout=()=>{r.style.backgroundColor="#00000008",r.style.color="rgb(0, 0,0, 0.2)"};for(let h of b)h.classList.remove("rotated-about"),h.classList.remove("rotate-clockwise"),h.classList.add("rotate-counterclockwise");o.style.opacity="1",a.style.opacity="1",a.style.pointerEvents="all",s.style.opacity="1",u.style.opacity="0",u.style.pointerEvents="none"},Tr=()=>{L.show&&(L.show=!1,yn(!1)),ae.show=!ae.show,ae.show?Or():hn()},L={show:!1,card3D:!1},Lr=e=>{const t=document.querySelector(".Card"),n=document.querySelector(".App-about"),r=document.querySelector(".App-header"),o=document.querySelector(".App-footer"),a=document.querySelector(".App-portfolio"),i=document.getElementById("portfolio-nav"),s=document.querySelector(".pp_logo");L.card3D&&(e=!1),e?setTimeout(()=>{a.style.opacity="1",a.style.display="flex",i.style.backgroundColor="#FF000099",i.style.color="#EEE",i.children[0].textContent="Back",i.onmouseover=()=>{i.style.backgroundColor="#FF0000DD",i.style.color="#FFF"},i.onmouseout=()=>{i.style.backgroundColor="#FF000099",i.style.color="#EEE"},n.style.display="none",r.style.opacity="0",r.style.position="absolute",o.style.display="none",s.style.pointerEvents="none"},250):(a.style.opacity="1",a.style.display="flex",i.style.backgroundColor="#FF000099",i.style.color="#EEE",i.children[0].textContent="Back",i.onmouseover=()=>{i.style.backgroundColor="#FF0000DD",i.style.color="#FFF"},i.onmouseout=()=>{i.style.backgroundColor="#FF000099",i.style.color="#EEE"},n.style.display="none",r.style.opacity="0",r.style.position="absolute",o.style.display="none",s.style.pointerEvents="none"),t.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",L.card3D||(t.style.transform="rotateX(360deg)")},yn=e=>{const t=document.querySelector(".Card"),n=document.querySelector(".App-about"),r=document.querySelector(".App-header"),o=document.querySelector(".App-footer"),a=document.querySelector(".App-portfolio"),i=document.getElementById("portfolio-nav"),s=document.querySelector(".pp_logo");L.card3D&&(e=!1),e?setTimeout(()=>{a.style.opacity="0",a.style.display="none",i.style.backgroundColor="#00000008",i.style.color="rgb(0, 0,0, 0.2)",i.children[0].textContent="Portfolio",i.onmouseover=()=>{i.style.backgroundColor="#0000000D",i.style.color="rgb(0, 0,0, 0.6)"},i.onmouseout=()=>{i.style.backgroundColor="#00000008",i.style.color="rgb(0, 0,0, 0.2)"},n.style.display="block",r.style.opacity="1",r.style.position="static",o.style.display="flex",s.style.pointerEvents="all"},250):(a.style.opacity="0",a.style.display="none",i.style.backgroundColor="#00000008",i.style.color="rgb(0, 0,0, 0.2)",i.children[0].textContent="Portfolio",i.onmouseover=()=>{aboutNav.style.backgroundColor="#0000000D",aboutNav.style.color="rgb(0, 0,0, 0.6)"},i.onmouseout=()=>{aboutNav.style.backgroundColor="#00000008",aboutNav.style.color="rgb(0, 0,0, 0.2)"},n.style.display="block",r.style.opacity="1",r.style.position="static",o.style.display="flex",s.style.pointerEvents="all"),t.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",L.card3D||(t.style.transform="rotateX(0deg)")},Dr=()=>{let e=!0;ae.show&&(ae.show=!1,e=!1,hn()),L.show=!L.show,L.show?Lr(e):yn(e)},de={rotation:0},Mr=(e,t)=>n=>{const r=(window.innerWidth/2-n.pageX)/10,o=(window.innerHeight/2-n.pageY)/20;t.style.cursor="pointer",(de.rotation==0?r>0&&o>0:r>0&&o<0)?e.style.opacity="1":e.style.opacity="0"},Fr=e=>()=>{e.style.opacity="0"},Rr=e=>t=>{const n=(window.innerWidth/2-t.pageX)/10,r=(window.innerHeight/2-t.pageY)/20,o=de.rotation;e.style.transition="transform 0.1s ease, box-shadow 0.1s ease, border-radius 0.5s ease",e.style.transform=`rotateZ(${o}deg) rotateY(${o==0?n:r*-1}deg) rotateX(${o==0?r*-1:n*-1}deg)`,e.style.boxShadow=`${o==0?n*-1:r}px ${o==0?r*-1:n*-1}px 30px rgba(0, 0, 0, 0.4) `},$r=(e,t)=>()=>{t.style.opacity="0",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",e.style.transform=`rotateZ(${de.rotation}deg) rotateY(0deg) rotateX(0deg)`,e.style.boxShadow="0px 0px 15px rgba(0, 0, 0, 0.4)"},I={showSwitch:null,hideSwitch:null,cardFollowCursor3D:null,cardResetState3D:null},zr=()=>{const e=document.getElementById("Card"),t=document.getElementById("switch"),n=document.querySelector(".slider");I.showSwitch=Mr(t,n),I.hideSwitch=Fr(t),e.addEventListener("mousemove",I.showSwitch,!1),e.addEventListener("mouseout",I.hideSwitch,!1)},At=()=>{const e=document.getElementById("Card"),t=document.getElementById("switch");I.cardFollowCursor3D=Rr(e),I.cardResetState3D=$r(e,t),e.addEventListener("mousemove",I.cardFollowCursor3D,!1),e.addEventListener("mouseout",I.cardResetState3D,!1),L.card3D=!0},qr=()=>{const e=document.getElementById("Card");e.removeEventListener("mousemove",I.cardFollowCursor3D,!1),e.removeEventListener("mouseout",I.cardResetState3D,!1),I.cardResetState3D(),L.card3D=!1};function Br(){const[e,t]=c.useState(!1);return j(()=>{const n=document.getElementById("pp"),r=document.querySelector(".threeD-info");n.addEventListener("mouseleave",()=>{r.style.opacity="0",r.style.scale="1.0"}),n.addEventListener("mouseenter",()=>{r.style.opacity="1",r.style.scale="1.05"}),n.addEventListener("mousedown",o=>{r.style.opacity="1",r.style.scale="1.1",r.style.display="none"}),n.addEventListener("mouseup",o=>{r.style.opacity="1",r.style.scale="1.05"}),localStorage.getItem("mode3D")==="true"?(t(!0),r.style.display="none",setTimeout(()=>{At(),document.getElementById("pp").style.pointerEvents="auto"},2e3)):(t(!1),setTimeout(()=>{document.getElementById("pp").style.pointerEvents="auto"},2e3))},[]),c.createElement("header",{style:"pointer-events: none;",className:"App-header"},c.createElement("p",null,c.createElement("a",{id:"pp",onMouseDown:n=>e?(t(!1),qr(),localStorage.setItem("mode3D","false")):(t(!0),At(),I.cardFollowCursor3D(n),localStorage.setItem("mode3D","true"))},c.createElement("img",{className:"pp_logo",src:"https://avatars.githubusercontent.com/u/18515671?v=4",alt:"Berikai",onLoad:()=>{document.querySelector(".App").style.opacity=1,document.querySelector(".Card").style.animation="CardFrame 2s ease-in-out",document.querySelector(".pp_logo").style.animation="ProfileFrame 2s ease-in-out"}}),c.createElement("p",{className:"threeD-info"},"Tap to switch 3D"))),c.createElement("div",{className:"username"},"Berikai",c.createElement("div",{className:"aka"},"also known as Verdant")))}function Wr(){return c.createElement("div",{className:"App-about"},c.createElement("p",{className:"text-info"},"I love software tech and bass music"),c.createElement("ul",{className:"ul-padding"},c.createElement("li",{className:"li-element"},"🇹🇷   İzmir, Turkey "),c.createElement("li",{className:"li-element"},"🖥️   Software Enthusiast"),c.createElement("li",{className:"li-element"},"🎵   Dubstep, Drum 'n Bass, Experimental")),c.createElement("p",{className:"socials",align:"left"},c.createElement("a",{className:"padding-inline",href:"https://soundcloud.com/verdantbass",target:"_blank",rel:"noreferrer"},c.createElement("img",{src:"https://www.svgrepo.com/show/35013/soundcloud.svg",width:"24",height:"24",alt:"Soundcloud"})),c.createElement("a",{className:"padding-inline",href:"https://discordapp.com/users/385498463745343490",target:"_blank",rel:"noreferrer"},c.createElement("img",{src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg",width:"24",height:"24",alt:"Discord"})),c.createElement("a",{className:"padding-inline",href:"https://www.github.com/Berikai",target:"_blank",rel:"noreferrer"},c.createElement("img",{class:"dark",src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg",width:"24",height:"24",alt:"Github"})),c.createElement("a",{className:"padding-inline",href:"http://www.instagram.com/verdantbass",target:"_blank",rel:"noreferrer"},c.createElement("img",{src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg",width:"24",height:"24",alt:"Instagram"})),c.createElement("a",{className:"padding-inline",href:"https://www.twitter.com/verdantbass",target:"_blank",rel:"noreferrer"},c.createElement("img",{class:"dark",src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg",width:"24",height:"24",alt:"Twitter"}))))}function jr(){return c.createElement("div",{className:"App-about-extra",style:"opacity: 0;transition: transform 0.1s;"},c.createElement("p",{className:"title-about"},"About Me"),c.createElement("p",{className:"text-about"},"My name is Berkay Eren Konuk, but I usually go by the names ",c.createElement("b",null,"Berikai")," or ",c.createElement("b",null,"Verdant")," online."),c.createElement("p",{className:"text-about"},`I'm a big fan of open source and I love learning new things about software technologies. ...and "I use Arch, btw." 😄`),c.createElement("p",{className:"text-about"},"I create dubstep and drum and bass oriented experimental music. You can check out my music on ",c.createElement("a",{href:"https://soundcloud.com/verdantbass",target:"_blank",rel:"noreferrer"},"Soundcloud"),"."),c.createElement("p",{className:"text-about"},"I'm currently studying mechatronics engineering (sophomore) in ",c.createElement("i",null,"Izmir University of Economics"),"."))}function Ur(){return c.createElement("div",{className:"App-portfolio",style:"opacity: 0;transition: transform 0.1s;"},c.createElement("p",{className:"title-about"},"Portfolio"),c.createElement("p",{className:"text-about"},"Here, you can find some of my projects"),c.createElement("div",{className:"portfolio"},c.createElement("div",{className:"portfolio-element"},c.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/Berikai/bitwig-theme-editor"}),c.createElement("img",{className:"portfolio-img",width:68,src:"https://cdn.discordapp.com/attachments/935545276008116276/1331268052716752896/image.png?ex=6790ff7d&is=678fadfd&hm=2feaee3fb40c09aa0e2bceb14b9fd58ead48fe9f0b8bc11667436b2729322335&"}),c.createElement("div",{className:"portfolio-element-content dark"},c.createElement("div",{className:"portfolio-element-title dark"},"Bitwig Theme Editor"),c.createElement("div",{className:"portfolio-element-info dark"},"A patcher for Bitwig Studio, let's you customize the appearance of the most modular DAW in the world!"))),c.createElement("div",{className:"portfolio-element"},c.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://bitwig.berikai.dev"}),c.createElement("div",{className:"portfolio-element-content dark"},c.createElement("div",{className:"portfolio-element-title dark"},"Bitwig Theme Editor WebUI"),c.createElement("div",{className:"portfolio-element-info dark"},"Interactive visual playground to create and edit themes with ease and joy for Bitwig Studio")),c.createElement("img",{className:"portfolio-img",width:68,src:"https://cdn.discordapp.com/attachments/935545276008116276/1331267497726316647/image.png?ex=6790fef9&is=678fad79&hm=fe4a49a3ae9a4563eb2a050e095a73bf51ac0d14812c3958e64973c736c3f5f7&"})),c.createElement("div",{className:"portfolio-element"},c.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/Berikai/data/tree/main/pixbud",onClick:e=>{e.preventDefault(),window.confirm(`This project is not finished and as of now it's closed source. You'll be redirected to a github page to download the Windows binaries of its prototype.

Would you like to continue?`)&&window.open(e.target.href,"_blank")}}),c.createElement("img",{className:"portfolio-img",width:68,src:"https://cdn.discordapp.com/attachments/935545276008116276/1331266107226456086/ezgif-2-6735a308d0.gif?ex=6790fdad&is=678fac2d&hm=3532848315807f625c44ab7912f6d942c7daf1028d53abe87b09e61c92ba1ef1&"}),c.createElement("div",{className:"portfolio-element-content dark"},c.createElement("div",{className:"portfolio-element-title dark"},"Pixbud"),c.createElement("div",{className:"portfolio-element-info dark"},"Your desktop buddy, loves to hang around on the rooftops of your application windows."))),c.createElement("div",{className:"portfolio-element"},c.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/berikai/oasis-android"}),c.createElement("div",{className:"portfolio-element-content dark"},c.createElement("div",{className:"portfolio-element-title dark"},"OASIS Android"),c.createElement("div",{className:"portfolio-element-info dark"},"An unofficial mobile application for the student information system of Izmir University of Economics")),c.createElement("img",{className:"portfolio-img",width:68,src:"https://cdn.discordapp.com/attachments/935545276008116276/1331268275077644370/image.png?ex=6790ffb2&is=678fae32&hm=4f1108b77f83c9e40fa3e1f4eb4f809585c2b7d1db8ddeeb4835a0798ba8d593&"})),c.createElement("div",{className:"portfolio-element"},c.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/berikai/wr2-server-connector"}),c.createElement("img",{className:"portfolio-img",width:68,src:"https://user-images.githubusercontent.com/18515671/160943154-ebd29b37-19ec-4687-899a-24d555c46e7b.png"}),c.createElement("div",{className:"portfolio-element-content dark"},c.createElement("div",{className:"portfolio-element-title dark"},"WR2 Server Connector"),c.createElement("div",{className:"portfolio-element-info dark"},"A simple tool to play World Racing 2 online, since the official multiplayer tool is deprecated"))),c.createElement("div",{className:"text-about",style:"margin-top: -4px;"},"and many more, check my ",c.createElement("a",{href:"https://github.com/berikai",target:"_blank",rel:"noreferrer"},"Github"),"!")))}function Hr(){return c.createElement("footer",{className:"App-footer"},c.createElement("p",{className:"p-footer"},"Made with ",c.createElement("heart",null,"❤️")," by Berikai "))}const Te=e=>{const t=document.getElementById("Card"),n=document.querySelectorAll(".dark");if(e){document.body.style.backgroundColor="#222",document.body.style.color="#fff",t.style.backgroundColor="#222";for(let r of n)r.style.filter="invert(1)"}else{document.body.style.backgroundColor="#fff",document.body.style.color="#000",t.style.backgroundColor="#fff";for(let r of n)r.style.filter="invert(0)"}};function Yr(){return j(()=>{const e=document.getElementById("mode_switch");localStorage.getItem("themeMode")==="dark"&&(e.checked=!0,Te(!0)),setTimeout(()=>{e.addEventListener("change",t=>{t.target.checked?(localStorage.setItem("themeMode","dark"),Te(!0)):(localStorage.setItem("themeMode","light"),Te(!1))})},2e3)},[]),c.createElement("div",{className:"switch"},c.createElement("label",{id:"switch",className:"switch",style:"opacity: 0; transition: 0.4s, transform 0.2s;"},c.createElement("input",{id:"mode_switch",type:"checkbox"}),c.createElement("span",{className:"slider round"})))}function _e({id:e=null,text:t,rotation:n,action:r=()=>{},href:o=null}){return c.createElement("a",{...e?{id:e}:{},className:"nav-button dark",onClick:r,...o?{href:o}:{},target:"_blank",rel:"noreferrer"},c.createElement("span",{className:n=="rl"?"rotate-clockwise":"rotate-counterclockwise"},t))}const Vr=()=>{document.querySelector(".modal").style.opacity="1",document.querySelector(".modal").style.display="flex"},Xr=()=>{document.querySelector(".modal").style.opacity="0",setTimeout(()=>{document.querySelector(".modal").style.display="none"},200)};function Zr(){return c.createElement("div",{className:"modal",onClick:()=>Xr()},c.createElement("div",{className:"modal-content"},c.createElement("div",{className:"modal-box dark"},c.createElement("text",{className:"dark"},"The page you are trying to view is currently in development."),c.createElement("text",{className:"dark"},"Thank you for your patience."))))}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function ie(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ie=function(t){return typeof t}:ie=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ie(e)}function Gr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Qr(e,t,n){return Jr(e.prototype,t),e}function Kr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){Kr(e,o,n[o])})}return e}function gn(e,t){return eo(e)||to(e,t)}function eo(e){if(Array.isArray(e))return e}function to(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),s;!(r=(s=i.next()).done)&&(n.push(s.value),!(t&&n.length===t));r=!0);}catch(u){o=!0,a=u}finally{try{!r&&i.return!=null&&i.return()}finally{if(o)throw a}}return n}var Pt=function(){},ot={},vn={},no=null,bn={mark:Pt,measure:Pt};try{typeof window<"u"&&(ot=window),typeof document<"u"&&(vn=document),typeof MutationObserver<"u"&&(no=MutationObserver),typeof performance<"u"&&(bn=performance)}catch{}var ro=ot.navigator||{},It=ro.userAgent,Ot=It===void 0?"":It,Ae=ot,C=vn,he=bn;Ae.document;var at=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function";~Ot.indexOf("MSIE")||~Ot.indexOf("Trident/");var B="___FONT_AWESOME___",wn="fa",kn="svg-inline--fa",oo="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var Le={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},En=Ae.FontAwesomeConfig||{};function ao(e){var t=C.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function io(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(C&&typeof C.querySelector=="function"){var so=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];so.forEach(function(e){var t=gn(e,2),n=t[0],r=t[1],o=io(ao(n));o!=null&&(En[r]=o)})}var lo={familyPrefix:wn,replacementClass:kn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ue=w({},lo,En);Ue.autoReplaceSvg||(Ue.observeMutations=!1);var P=w({},Ue);Ae.FontAwesomeConfig=P;var W=Ae||{};W[B]||(W[B]={});W[B].styles||(W[B].styles={});W[B].hooks||(W[B].hooks={});W[B].shims||(W[B].shims=[]);var M=W[B],co=[],uo=function e(){C.removeEventListener("DOMContentLoaded",e),He=1,co.map(function(t){return t()})},He=!1;at&&(He=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),He||C.addEventListener("DOMContentLoaded",uo));var it="pending",xn="settled",we="fulfilled",ke="rejected",fo=function(){},Sn=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",mo=typeof setImmediate>"u"?setTimeout:setImmediate,re=[],Ye;function po(){for(var e=0;e<re.length;e++)re[e][0](re[e][1]);re=[],Ye=!1}function Ee(e,t){re.push([e,t]),Ye||(Ye=!0,mo(po,0))}function _o(e,t){function n(o){st(t,o)}function r(o){ue(t,o)}try{e(n,r)}catch(o){r(o)}}function Nn(e){var t=e.owner,n=t._state,r=t._data,o=e[n],a=e.then;if(typeof o=="function"){n=we;try{r=o(r)}catch(i){ue(a,i)}}Cn(a,r)||(n===we&&st(a,r),n===ke&&ue(a,r))}function Cn(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||ie(t)==="object")){var r=t.then;if(typeof r=="function")return r.call(t,function(o){n||(n=!0,t===o?An(e,o):st(e,o))},function(o){n||(n=!0,ue(e,o))}),!0}}catch(o){return n||ue(e,o),!0}return!1}function st(e,t){(e===t||!Cn(e,t))&&An(e,t)}function An(e,t){e._state===it&&(e._state=xn,e._data=t,Ee(ho,e))}function ue(e,t){e._state===it&&(e._state=xn,e._data=t,Ee(yo,e))}function Pn(e){e._then=e._then.forEach(Nn)}function ho(e){e._state=we,Pn(e)}function yo(e){e._state=ke,Pn(e),!e._handled&&Sn&&global.process.emit("unhandledRejection",e._data,e)}function go(e){global.process.emit("rejectionHandled",e)}function O(e){if(typeof e!="function")throw new TypeError("Promise resolver "+e+" is not a function");if(!(this instanceof O))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],_o(e,this)}O.prototype={constructor:O,_state:it,_then:null,_data:void 0,_handled:!1,then:function(t,n){var r={owner:this,then:new this.constructor(fo),fulfilled:t,rejected:n};return(n||t)&&!this._handled&&(this._handled=!0,this._state===ke&&Sn&&Ee(go,this)),this._state===we||this._state===ke?Ee(Nn,r):this._then.push(r),r.then},catch:function(t){return this.then(null,t)}};O.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new O(function(t,n){var r=[],o=0;function a(u){return o++,function(f){r[u]=f,--o||t(r)}}for(var i=0,s;i<e.length;i++)s=e[i],s&&typeof s.then=="function"?s.then(a(i),n):r[i]=s;o||t(r)})};O.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new O(function(t,n){for(var r=0,o;r<e.length;r++)o=e[r],o&&typeof o.then=="function"?o.then(t,n):t(o)})};O.resolve=function(e){return e&&ie(e)==="object"&&e.constructor===O?e:new O(function(t){t(e)})};O.reject=function(e){return new O(function(t,n){n(e)})};var X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vo(e){if(!(!e||!at)){var t=C.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=C.head.childNodes,r=null,o=n.length-1;o>-1;o--){var a=n[o],i=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=a)}return C.head.insertBefore(t,r),e}}var bo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xe(){for(var e=12,t="";e-- >0;)t+=bo[Math.random()*62|0];return t}function In(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(In(e[n]),'" ')},"").trim()}function On(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function Tn(e){return e.size!==X.size||e.x!==X.x||e.y!==X.y||e.rotate!==X.rotate||e.flipX||e.flipY}function Ln(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(a," ").concat(i," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:u,path:f}}var De={x:0,y:0,width:"100%",height:"100%"};function Tt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ko(e){return e.tag==="g"?e.children:[e]}function Eo(e){var t=e.children,n=e.attributes,r=e.main,o=e.mask,a=e.maskId,i=e.transform,s=r.width,u=r.icon,f=o.width,m=o.icon,l=Ln({transform:i,containerWidth:f,iconWidth:s}),p={tag:"rect",attributes:w({},De,{fill:"white"})},d=u.children?{children:u.children.map(Tt)}:{},y={tag:"g",attributes:w({},l.inner),children:[Tt(w({tag:u.tag,attributes:w({},u.attributes,l.path)},d))]},b={tag:"g",attributes:w({},l.outer),children:[y]},h="mask-".concat(a||xe()),_="clip-".concat(a||xe()),v={tag:"mask",attributes:w({},De,{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,b]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:ko(m)},v]};return t.push(A,{tag:"rect",attributes:w({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(h,")")},De)}),{children:t,attributes:n}}function xo(e){var t=e.children,n=e.attributes,r=e.main,o=e.transform,a=e.styles,i=On(a);if(i.length>0&&(n.style=i),Tn(o)){var s=Ln({transform:o,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:w({},s.outer),children:[{tag:"g",attributes:w({},s.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:w({},r.icon.attributes,s.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}function So(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,a=e.styles,i=e.transform;if(Tn(i)&&n.found&&!r.found){var s=n.width,u=n.height,f={x:s/u/2,y:.5};o.style=On(w({},a,{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function No(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,a=e.symbol,i=a===!0?"".concat(t,"-").concat(P.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:w({},o,{id:i}),children:r}]}]}function Co(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,a=e.iconName,i=e.transform,s=e.symbol,u=e.title,f=e.maskId,m=e.titleId,l=e.extra,p=e.watchable,d=p===void 0?!1:p,y=r.found?r:n,b=y.width,h=y.height,_=o==="fak",v=_?"":"fa-w-".concat(Math.ceil(b/h*16)),A=[P.replacementClass,a?"".concat(P.familyPrefix,"-").concat(a):"",v].filter(function(U){return l.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(l.classes).join(" "),S={children:[],attributes:w({},l.attributes,{"data-prefix":o,"data-icon":a,class:A,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(h)})},T=_&&!~l.classes.indexOf("fa-fw")?{width:"".concat(b/h*16*.0625,"em")}:{};d&&(S.attributes[oo]=""),u&&S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(m||xe())},children:[u]});var N=w({},S,{prefix:o,iconName:a,main:n,mask:r,maskId:f,transform:i,symbol:s,styles:w({},T,l.styles)}),K=r.found&&n.found?Eo(N):xo(N),V=K.children,ee=K.attributes;return N.children=V,N.attributes=ee,s?No(N):So(N)}var Lt=function(){};P.measurePerformance&&he&&he.mark&&he.measure;var Me=function(t,n,r,o){var a=Object.keys(t),i=a.length,s=n,u,f,m;for(r===void 0?(u=1,m=t[a[0]]):(u=0,m=r);u<i;u++)f=a[u],m=s(m,t[f],f,t);return m};function Dn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,a=Object.keys(t).reduce(function(i,s){var u=t[s],f=!!u.icon;return f?i[u.iconName]=u.icon:i[s]=u,i},{});typeof M.hooks.addPack=="function"&&!o?M.hooks.addPack(e,a):M.styles[e]=w({},M.styles[e]||{},a),e==="fas"&&Dn("fa",t)}var Dt=M.styles,Ao=M.shims,Mn=function(){var t=function(o){return Me(Dt,function(a,i,s){return a[s]=Me(i,o,{}),a},{})};t(function(r,o,a){return o[3]&&(r[o[3]]=a),r}),t(function(r,o,a){var i=o[2];return r[a]=a,i.forEach(function(s){r[s]=a}),r});var n="far"in Dt;Me(Ao,function(r,o){var a=o[0],i=o[1],s=o[2];return i==="far"&&!n&&(i="fas"),r[a]={prefix:i,iconName:s},r},{})};Mn();M.styles;function Mt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function Fn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,a=o===void 0?[]:o;return typeof e=="string"?In(e):"<".concat(t," ").concat(wo(r),">").concat(a.map(Fn).join(""),"</").concat(t,">")}var Po=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(r,o){var a=o.toLowerCase().split("-"),i=a[0],s=a.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n):n};function Ve(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=new Error().stack}Ve.prototype=Object.create(Error.prototype);Ve.prototype.constructor=Ve;var Pe={fill:"currentColor"},Rn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};w({},Pe,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var lt=w({},Rn,{attributeName:"opacity"});w({},Pe,{cx:"256",cy:"364",r:"28"}),w({},Rn,{attributeName:"r",values:"28;14;28;28;14;28;"}),w({},lt,{values:"1;0;1;1;0;1;"});w({},Pe,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),w({},lt,{values:"1;0;0;0;0;1;"});w({},Pe,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),w({},lt,{values:"0;0;1;1;0;0;"});M.styles;function Ft(e){var t=e[0],n=e[1],r=e.slice(4),o=gn(r,1),a=o[0],i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(Le.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(Le.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(Le.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:i}}M.styles;var Io=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function Oo(){var e=wn,t=kn,n=P.familyPrefix,r=P.replacementClass,o=Io;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(a,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return o}var To=function(){function e(){Gr(this,e),this.definitions={}}return Qr(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=o.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=w({},n.definitions[s]||{},i[s]),Dn(s,i[s]),Mn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(a){var i=o[a],s=i.prefix,u=i.iconName,f=i.icon;n[s]||(n[s]={}),n[s][u]=f}),n}}]),e}();function Lo(){P.autoAddCss&&!$t&&(vo(Oo()),$t=!0)}function Do(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Fn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(at){var r=C.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Rt(e){var t=e.prefix,n=t===void 0?"fa":t,r=e.iconName;if(r)return Mt(Fo.definitions,n,r)||Mt(M.styles,n,r)}function Mo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rt(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:Rt(o||{})),e(r,w({},n,{mask:o}))}}var Fo=new To,$t=!1,Ro={transform:function(t){return Po(t)}},$o=Mo(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?X:n,o=t.symbol,a=o===void 0?!1:o,i=t.mask,s=i===void 0?null:i,u=t.maskId,f=u===void 0?null:u,m=t.title,l=m===void 0?null:m,p=t.titleId,d=p===void 0?null:p,y=t.classes,b=y===void 0?[]:y,h=t.attributes,_=h===void 0?{}:h,v=t.styles,A=v===void 0?{}:v;if(e){var S=e.prefix,T=e.iconName,N=e.icon;return Do(w({type:"icon"},e),function(){return Lo(),P.autoA11y&&(l?_["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(d||xe()):(_["aria-hidden"]="true",_.focusable="false")),Co({icons:{main:Ft(N),mask:s?Ft(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:T,transform:w({},X,r),symbol:a,title:l,maskId:f,titleId:d,extra:{attributes:_,styles:A,classes:b}})})}});function zo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $n={exports:{}},qo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Bo=qo,Wo=Bo;function zn(){}function qn(){}qn.resetWarningCache=zn;var jo=function(){function e(r,o,a,i,s,u){if(u!==Wo){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:qn,resetWarningCache:zn};return n.PropTypes=n,n};$n.exports=jo();var Uo=$n.exports;const k=zo(Uo);function ve(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ve=function(t){return typeof t}:ve=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ve(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){se(e,o,n[o])})}return e}function Ho(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Yo(e,t){if(e==null)return{};var n=Ho(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ze(e){return Vo(e)||Xo(e)||Zo()}function Vo(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Xo(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Zo(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Bn(e){return typeof e!="string"?e:(e=e.replace(/[-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.charAt(0).toLowerCase()+e.substring(1))}function Go(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Jo(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=Bn(n.slice(0,r)),a=n.slice(r+1).trim();return o.startsWith("webkit")?t[Go(o)]=a:t[o]=a,t},{})}function Wn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return Wn(e,u)}),o=Object.keys(t.attributes||{}).reduce(function(u,f){var m=t.attributes[f];switch(f){case"class":u.attrs.className=m,delete t.attributes.class;break;case"style":u.attrs.style=Jo(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=m:u.attrs[Bn(f)]=m}return u},{attrs:{}}),a=n.style,i=a===void 0?{}:a,s=Yo(n,["style"]);return o.attrs.style=Xe({},o.attrs.style,i),e.apply(void 0,[t.tag,Xe({},o.attrs,s)].concat(Ze(r)))}var jn=!1;try{jn=!0}catch{}function Qo(){if(!jn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Fe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}function Ko(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},se(t,"fa-".concat(e.size),e.size!==null),se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),se(t,"fa-pull-".concat(e.pull),e.pull!==null),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function zt(e){if(e===null)return null;if(ve(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function me(e){var t=e.icon,n=e.mask,r=e.symbol,o=e.className,a=e.title,i=zt(t),s=Fe("classes",[].concat(Ze(Ko(e)),Ze(o.split(" ")))),u=Fe("transform",typeof e.transform=="string"?Ro.transform(e.transform):e.transform),f=Fe("mask",zt(n)),m=$o(i,Xe({},s,u,f,{symbol:r,title:a}));if(!m)return Qo("Could not find icon",i),null;var l=m.abstract,p={};return Object.keys(e).forEach(function(d){me.defaultProps.hasOwnProperty(d)||(p[d]=e[d])}),ea(l[0],p)}me.displayName="FontAwesomeIcon";me.propTypes={border:k.bool,className:k.string,mask:k.oneOfType([k.object,k.array,k.string]),fixedWidth:k.bool,inverse:k.bool,flip:k.oneOf(["horizontal","vertical","both"]),icon:k.oneOfType([k.object,k.array,k.string]),listItem:k.bool,pull:k.oneOf(["right","left"]),pulse:k.bool,rotation:k.oneOf([90,180,270]),size:k.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:k.bool,symbol:k.oneOfType([k.bool,k.string]),title:k.string,transform:k.oneOfType([k.string,k.object])};me.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var ea=Wn.bind(null,R);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ta={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};function na(){return c.createElement("nav",{className:"navbar"},c.createElement("div",{className:"navbar-half1"},c.createElement(_e,{id:"about-nav",text:"About",rotation:"rl",action:()=>Tr()}),c.createElement(_e,{text:"Blog",rotation:"rl",action:()=>Vr()})),c.createElement("div",{className:"navbar-half2"},c.createElement(_e,{link:!0,text:c.createElement(c.Fragment,null,c.createElement(me,{className:"icon-nav",size:"xs",icon:ta}),c.createElement(c.Fragment,null,"Console")),rotation:"lr",href:"https://console.berikai.dev"}),c.createElement(_e,{id:"portfolio-nav",text:"Portfolio",rotation:"lr",action:()=>Dr()})))}function ra(){var s,u,f,m,l,p,d;let e={};const[t,n]=ce({}),[r,o]=ce(0);let a=null;const i=y=>{const b=document.querySelector(".spotify"),h=document.querySelector(".spotify-panel");fetch("https://api.berikai.dev/spotify/current").then(_=>_.json()).then(_=>{var v;if(_.error=="Not authenticated"||_.error=="No track playing"){b.style.opacity=0,b.style.pointerEvents="none";return}b.style.opacity=1,b.style.pointerEvents="all",y&&clearInterval(y),e=_,n(_),h.style.opacity==1?b.getElementsByTagName("a")[0].href=(v=e.item)==null?void 0:v.external_urls.spotify:b.getElementsByTagName("a")[0].removeAttribute("href"),o(_.progress_ms),a=setInterval(()=>{const A=a;o(S=>{var N;const T=S+1e3;return T>=((N=_.item)==null?void 0:N.duration_ms)&&(clearInterval(A),i(),console.log("Song ended, fetching new song...")),T})},1e3)})};return j(()=>{setTimeout(()=>{const y=document.querySelector(".spotify"),b=document.querySelector(".spotify-panel"),h=document.querySelector(".spotify-container");i(),setInterval(()=>{console.log("Fetching current playing song..."),i(a)},2e4),y.addEventListener("mousemove",()=>{b.style.opacity=1,setTimeout(()=>{var _;y.getElementsByTagName("a")[0].href=(_=e.item)==null?void 0:_.external_urls.spotify},200)}),h.addEventListener("mouseleave",()=>{b.style.opacity=0,setTimeout(()=>{y.getElementsByTagName("a")[0].removeAttribute("href")},200)}),h.style.opacity=1},2e3)},[]),c.createElement("div",{className:"spotify-container",style:"opacity: 0;"},c.createElement("div",{className:"spotify-panel"},c.createElement("div",{className:"spotify-panel-content dark"},c.createElement("img",{className:"spotify-artwork dark",src:(s=t.item)==null?void 0:s.album.images[2].url,width:"33"}),c.createElement("div",{className:"spotify-info dark"},c.createElement("div",{className:"text-spotify",style:"display:flex;justify-content:space-between;font-size: 8px;"},c.createElement("span",null,"I'm currently listening"),c.createElement("span",null,Math.floor(r/6e4),":",Math.floor(r%6e4/1e3).toFixed(0).padStart(2,"0")," / ",Math.floor(((u=t.item)==null?void 0:u.duration_ms)/6e4),":",Math.floor(((f=t.item)==null?void 0:f.duration_ms)%6e4/1e3).toFixed(0).padStart(2,"0"))),c.createElement("div",{className:"text-spotify"},c.createElement("b",null,((m=t.item)==null?void 0:m.artists.length)<4?(l=t.item)==null?void 0:l.artists.map(y=>y.name).join(", "):(p=t.item)==null?void 0:p.artists[0].name," - ",(d=t.item)==null?void 0:d.name))))),c.createElement("div",{className:"spotify",style:"opacity: 0;"},c.createElement("a",{target:"_blank",rel:"noreferrer"},c.createElement("img",{id:"spotify-img",src:"https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",width:"24"}))))}function oa(){return j(()=>{setTimeout(()=>{zr()},2e3)},[]),c.createElement("div",{className:"App",style:"opacity: 0; transition: opacity 0.2s;"},c.createElement(Zr,null),c.createElement("div",{className:"App-scale"},c.createElement("div",{id:"Card",className:"Card"},c.createElement(Yr,null),c.createElement(na,null),c.createElement(Ur,null),c.createElement(Br,null),c.createElement(Wr,null),c.createElement(jr,null),c.createElement(Hr,null),c.createElement(ra,null))))}G(c.createElement(oa,null),document.getElementById("root"));

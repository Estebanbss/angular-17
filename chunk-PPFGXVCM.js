import{a as f}from"./chunk-IBA4HHWA.js";import{Aa as n,Ba as l,E as o,Y as u,c as i,d as p,e as h,fa as d,s as c}from"./chunk-UXPH6SZ6.js";var j=(()=>{var t;let s=class s{constructor(){p(this,t,void 0);this.http=d(f),h(this,t,l({loading:!0,users:[]})),this.users=n(()=>i(this,t).call(this).users),this.loading=n(()=>i(this,t).call(this).loading),this.http.get("https://reqres.in/api/users").pipe(o(1500)).subscribe(e=>{i(this,t).set({loading:!1,users:e.data})})}getUserById(e){return this.http.get(`https://reqres.in/api/users/${e}`).pipe(o(1500),c(a=>a.data))}};t=new WeakMap,s.\u0275fac=function(a){return new(a||s)},s.\u0275prov=u({token:s,factory:s.\u0275fac,providedIn:"root"});let r=s;return r})();export{j as a};

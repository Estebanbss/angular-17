import{a as D}from"./chunk-VYJCG3EA.js";import{Aa as w,Ba as h,Ob as C,Pb as y,Qb as v,T as A,Va as l,a as o,ab as m,b as s,bb as p,cb as k,kb as g,lb as u,pb as S,rb as c,tb as f,ub as d,va as r}from"./chunk-UXPH6SZ6.js";var F=(a,e)=>({"bg-red-500 text-white":a,"bg-blue-500 text-white":e}),E=(()=>{let e=class e{constructor(){this.frameworkAsSignal=h({name:"Angular",releaseDate:2016}),this.frameworkAsProperty={name:"Angular",releaseDate:2016},this.currentFramework=w(()=>`Change detection - ${this.frameworkAsSignal().name} `);for(let i=0;i<1e3;i++)setTimeout(()=>{this.frameworkAsSignal().name==="Angular"?this.frameworkAsSignal.update(t=>s(o({},t),{name:"React"})):this.frameworkAsSignal.update(t=>s(o({},t),{name:"Angular"})),console.log("Done!")},i*3e3)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=A({type:e,selectors:[["ng-component"]],standalone:!0,features:[S],decls:7,vars:15,consts:[[3,"ngClass","title"],[3,"ngClass"]],template:function(t,n){t&1&&(k(0,"app-title",0),m(1,"pre",1),g(2),f(3,"json"),p(),m(4,"pre"),g(5),f(6,"json"),p()),t&2&&(l("ngClass",c(9,F,n.frameworkAsSignal().name==="Angular",n.frameworkAsSignal().name==="React"))("title",n.currentFramework()),r(),l("ngClass",c(12,F,n.frameworkAsSignal().name==="Angular",n.frameworkAsSignal().name==="React")),r(),u(d(3,5,n.frameworkAsSignal())),r(3),u(d(6,7,n.frameworkAsProperty)))},dependencies:[v,C,y,D],encapsulation:2,changeDetection:0});let a=e;return a})();export{E as default};
import{c5 as n,cp as t}from"./vendor.d9ce5f39.js";function r(n){var t;return Array.isArray(n)?null==(t=n[0])?void 0:t.spatialReference:null==n?void 0:n.spatialReference}function e(n){return n?Array.isArray(n)?n.map(e):n.toJSON?n.toJSON():n:n}function i(t){return Array.isArray(t)?t.map((t=>n(t))):n(t)}let u;async function a(n,r){return(await async function(){return u||(u=t("geometryEngineWorker",{strategy:"distributed"})),u}()).invoke("executeGEOperation",{operation:n,parameters:e(r)})}async function c(n,t){return i(await a("clip",[r(n),n,t]))}async function o(n,t){return i(await a("cut",[r(n),n,t]))}function s(n,t){return a("contains",[r(n),n,t])}function f(n,t){return a("crosses",[r(n),n,t])}function l(n,t,e){return a("distance",[r(n),n,t,e])}function y(n,t){return a("equals",[r(n),n,t])}function p(n,t){return a("intersects",[r(n),n,t])}function w(n,t){return a("touches",[r(n),n,t])}function d(n,t){return a("within",[r(n),n,t])}function m(n,t){return a("disjoint",[r(n),n,t])}function g(n,t){return a("overlaps",[r(n),n,t])}function A(n,t,e){return a("relate",[r(n),n,t,e])}function h(n){return a("isSimple",[r(n),n])}async function v(n){return i(await a("simplify",[r(n),n]))}async function x(n,t){return i(await a("difference",[r(n),n,t]))}async function E(n,t){return i(await a("symmetricDifference",[r(n),n,t]))}async function O(n,t){return i(await a("intersect",[r(n),n,t]))}async function R(n,t=null){const e=function(n,t){let r;return Array.isArray(n)?r=n:(r=[],r.push(n),null!=t&&r.push(t)),r}(n,t);return i(await a("union",[r(e),e]))}async function S(n,t,e,u,c,o){return i(await a("offset",[r(n),n,t,e,u,c,o]))}async function J(n,t,e,u=!1){const c=[r(n),n,t,e,u];return i(await a("buffer",c))}async function N(n,t,e,u,c,o){const s=[r(n),n,t,e,u,c,o];return i(await a("geodesicBuffer",s))}async function b(n,t,r){var e;if(null==n)throw new Error("Illegal Argument Exception");const i=n.spatialReference;r=null!=(e=r)?e:function(n){return"xmin"in n?n.center:"x"in n?n:n.extent.center}(n);const u=n.constructor.fromJSON(await a("rotate",[i,n,t,r]));return u.spatialReference=i,u}async function j(n,t,e,u){return i(await a("generalize",[r(n),n,t,e,u]))}async function k(n,t,e){return i(await a("densify",[r(n),n,t,e]))}async function D(n,t,e,u=0){return i(await a("geodesicDensify",[r(n),n,t,e,u]))}function L(n,t){return a("planarArea",[r(n),n,t])}function q(n,t){return a("planarLength",[r(n),n,t])}function z(n,t,e){return a("geodesicArea",[r(n),n,t,e])}function B(n,t,e){return a("geodesicLength",[r(n),n,t,e])}export{w as A,E,q as F,j as G,S as I,v as J,z as K,B as M,g as O,k as P,x as R,m as S,D as U,J as V,L as W,N as b,y as d,p as g,A as h,O as j,R as k,c as l,l as m,s as p,b as q,h as v,f as w,d as x,o as y};
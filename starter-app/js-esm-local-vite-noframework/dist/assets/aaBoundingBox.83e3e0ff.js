import{t as n}from"./vendor.d9ce5f39.js";function t(n=x){return[n[0],n[1],n[2],n[3],n[4],n[5]]}function r(n,r,u,e,i,f,o=t()){return o[0]=n,o[1]=r,o[2]=u,o[3]=e,o[4]=i,o[5]=f,o}function u(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[3]),n[4]=Math.max(n[4],t[4]),n[5]=Math.max(n[5],t[5])}function e(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[0]),n[4]=Math.max(n[4],t[1]),n[5]=Math.max(n[5],t[2])}function i(n,t=[0,0,0]){return t[0]=function(n){return n[0]>=n[3]?0:n[3]-n[0]}(n),t[1]=function(n){return n[1]>=n[4]?0:n[4]-n[1]}(n),t[2]=function(n){return n[2]>=n[5]?0:n[5]-n[2]}(n),t}function f(n,t,r=n){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==n&&(r[3]=n[3],r[4]=n[4],r[5]=n[5]),r}function o(n,t,r=n){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==n&&(r[0]=n[0],r[1]=n[1],r[2]=n[2]),n}function a(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function c(n){return n?a(n,I):t(I)}function m(n,t){return n[0]=t[0],n[1]=t[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=t[2],n[4]=t[3],n[5]=Number.POSITIVE_INFINITY,n}function h(n){return 6===n.length}function M(t,r,u){if(n(t)||n(r))return t===r;if(!h(t)||!h(r))return!1;if(u){for(let n=0;n<t.length;n++)if(!u(t[n],r[n]))return!1}else for(let n=0;n<t.length;n++)if(t[n]!==r[n])return!1;return!0}const I=[1/0,1/0,1/0,-1/0,-1/0,-1/0],x=[0,0,0,0,0,0];t();export{a as A,c as B,I as D,i as F,m as O,t as a,u as f,e as h,M as k,f as q,r as u,o as w};
var e=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(r,a,t)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,c=(e,r)=>{for(var a in r||(r={}))n.call(r,a)&&s(e,a,r[a]);if(t)for(var a of t(r))o.call(r,a)&&s(e,a,r[a]);return e};import{fV as l,a as i}from"./vendor.d9ce5f39.js";import{a as y}from"./lazyLayerLoader.c5edae56.js";import{m as u,h as m,f as p,n as d}from"./layersLoader.3f052257.js";function f(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}function L(e){switch(e.type){case"Map Service":return function(e){return d(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}));case"Feature Service":return function(e){return I(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){if(await e.load(),f(e,"Map Notes"))return{className:"MapNotesLayer"};if(f(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===m(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return I(e).then((r=>{if("object"==typeof r){const a={};let t;if(null!=r.id?(a.layerId=r.id,t=`${e.url}/layers/${r.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const a of Object.keys(r))if(-1!==e.typeKeywords.indexOf(a))return{className:r[a]}}return d(t).then((e=>{let r="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:a}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var r,a,t;await e.load();const n=null!=(r=null==(a=e.typeKeywords)?void 0:a.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const o=await e.fetchData(),s=null==o?void 0:o.layerType;return"ArcGISTiledImageServiceLayer"===s?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===s?{className:"ImageryLayer"}:"map"===(null==(t=(await d(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Feed":return{className:"StreamLayer"};default:return Promise.reject(new i("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function S(e){return(0,y[e.className])().then((r=>({constructor:r,properties:e.properties})))}function I(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async r=>"Feature Service"===e.type?N(r=await u(r,e.url)):m(r)>0?N(r):d(e.url).then(N)))}function N(e){return 1===m(e)&&{id:p(e)}}var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",fromItem:function(e){return!e.portalItem||e.portalItem instanceof l||(t=c({},e),n={portalItem:new l(e.portalItem)},e=r(t,a(n))),function(e){return e.load().then(L).then(S)}(e.portalItem).then((r=>{const a=c({portalItem:e.portalItem},r.properties),t=r.constructor;return Promise.resolve(new t(a))}));var t,n},selectLayerClassPath:L});export{L as l,h as p,f as t};
var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,a=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&n(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&n(e,r,t[r]);return e},p=(e,i)=>t(e,r(i));import{ga as l,hB as c,r as y,ha as d,gh as u,t as f,gF as h,hC as m,hD as g,hE as v,hF as w,h3 as S,g9 as b,f1 as O,hG as j,X as I,Y as x,aV as T,bE as R,Z as _,cd as N,hH as L,h0 as P,hI as U,b5 as M,hJ as J,cf as D,dj as z,L as A,fz as K,fA as F,fB as B,gB as V,fC as E,gD as G,fG as $,ai as C,cu as k,hK as q,ex as H,a as X,ft as Y,h5 as Z}from"./vendor.d9ce5f39.js";import{i as Q,R as W}from"./SceneService.84b34086.js";import{s as ee,l as te,u as re,m as ie}from"./I3SLayerDefinitions.f6be28a1.js";import"./resourceUtils.cda1a7ad.js";function oe(e){return se[function(e){return e instanceof Blob?e.type:function(e){const t=l(e);return pe[t]||ne}(e.url)}(e)]||ae}const se={},ne="text/plain",ae=se[ne],pe={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const be in pe)se[pe[be]]=be;function le(e){const t=y(e)&&e.origins?e.origins:[void 0];return(r,i)=>{const o=function(e,t,r){if(y(e)&&"resource"===e.type)return function(e,t,r){const i=w(t,r);return{type:String,read:(e,t,r)=>{const o=d(e,t,r);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(t,o,s,n){if(!n||!n.resources)return"string"==typeof t?void(o[s]=u(t,n)):void(o[s]=t.write({},n));const c=function(e){return f(e)?null:"string"==typeof e?e:e.url}(t),d=c?u(c,p(a({},n),{verifyItemRelativeUrls:n&&n.verifyItemRelativeUrls?{writtenUrls:n.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),1):null,w=i.type!==String&&(!Q(this)||n&&n.origin&&this.originIdOf(r)>h(n.origin));n&&n.portalItem&&y(d)&&!m(d)?w?function(e,t,r,i,o,s,n,a){const p=n.portalItem.resourceFromPath(i),c=de(r,i,n);oe(c)===l(p.path)?(ye(e,t,p,c,n.resources.toUpdate),o[s]=i):ce(e,t,r,i,o,s,n,a)}(this,r,t,d,o,s,n,e):function(e,t,r,i){i.resources.toKeep.push({resource:i.portalItem.resourceFromPath(e)}),t[r]=e}(d,o,s,n):n&&n.portalItem&&(f(d)||y(g(d))||v(d)||w)?ce(this,r,t,d,o,s,n,e):o[s]=d}}}}(e,t,r);switch(y(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=j;return{read:e,write:t}}}}(e,r,i);for(const e of t){const t=c(r,e,i);for(const e in o)t[e]=o[e]}}}function ce(e,t,r,i,o,s,n,a){const p=S(),l=de(r,i,n),c=b(O(a,"prefix"),p),y=`${c}.${oe(l)}`,d=n.portalItem.resourceFromPath(y);v(i)&&n.resources.pendingOperations.push(async function(e){const t=(await import("./vendor.d9ce5f39.js").then((function(e){return e.iI}))).default,{data:r}=await t(e,{responseType:"blob"});return r}(i).then((e=>{d.path=`${c}.${oe(e)}`,o[s]=d.itemRelativeUrl})).catch((()=>{}))),ye(e,t,d,l,n.resources.toAdd),o[s]=d.itemRelativeUrl}function ye(e,t,r,i,o){o.push({resource:r,content:i,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function de(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}var ue;let fe=ue=class extends N{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,i){if(i.layer&&i.layer.spatialReference&&!i.layer.spatialReference.equals(this.geometry.spatialReference)){if(!L(e.spatialReference,i.layer.spatialReference))return void(i&&i.messages&&i.messages.push(new P("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:i.layer.spatialReference,context:i})));const o=new T;U(e,o,i.layer.spatialReference),t[r]=o.toJSON(i)}else t[r]=e.toJSON(i);delete t[r].spatialReference}clone(){return new ue({geometry:M(this.geometry),type:this.type})}};I([x({type:T}),le()],fe.prototype,"geometry",void 0),I([R(["web-scene","portal-item"],"geometry")],fe.prototype,"writeGeometry",null),I([x({type:["clip","mask","replace"],nonNullable:!0}),le()],fe.prototype,"type",void 0),fe=ue=I([_("esri.layers.support.SceneModification")],fe);var he,me=fe;let ge=he=class extends(J(D.ofType(me))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new he({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const r of e)this.add(me.fromJSON(r,t))}static fromJSON(e,t){const r=new he;return r._readModifications(e,t),r}static async fromUrl(e,t,r){const i={url:z(e),origin:"service"},o=await A(e,{responseType:"json",signal:O(r,"signal")}),s=t.toJSON(),n=[];for(const l of o.data)n.push(me.fromJSON(p(a({},l),{geometry:p(a({},l.geometry),{spatialReference:s})}),i));return new he({url:e,items:n})}};I([x({type:String})],ge.prototype,"url",void 0),ge=he=I([_("esri.layers.support.SceneModifications")],ge);var ve=ge;let we=class extends(W(K(F(B(V(E(G($)))))))){constructor(...e){super(...e),this.handles=new C,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(k(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?a({url:e},t):e}readModifications(e,t,r){this._modificationsSource={url:q(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=O(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){H(r)}if(await this._fetchService(t),y(this._modificationsSource)){const t=await ve.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!f(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,p(a({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new X("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new X("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new X("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};I([x({type:String,readOnly:!0})],we.prototype,"geometryType",void 0),I([x({type:["show","hide"]})],we.prototype,"listMode",void 0),I([x({type:["IntegratedMeshLayer"]})],we.prototype,"operationalLayerType",void 0),I([x({json:{read:!1},readOnly:!0})],we.prototype,"type",void 0),I([x({type:ee,readOnly:!0})],we.prototype,"nodePages",void 0),I([x({type:[te],readOnly:!0})],we.prototype,"materialDefinitions",void 0),I([x({type:[re],readOnly:!0})],we.prototype,"textureSetDefinitions",void 0),I([x({type:[ie],readOnly:!0})],we.prototype,"geometryDefinitions",void 0),I([x({readOnly:!0})],we.prototype,"serviceUpdateTimeStamp",void 0),I([x({type:ve}),le({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],we.prototype,"modifications",void 0),I([Y(["web-scene","portal-item"],"modifications")],we.prototype,"readModifications",null),I([x(Z)],we.prototype,"elevationInfo",void 0),I([x({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],we.prototype,"path",void 0),we=I([_("esri.layers.IntegratedMeshLayer")],we);var Se=we;export default Se;
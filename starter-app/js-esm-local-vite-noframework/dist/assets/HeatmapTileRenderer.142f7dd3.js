import{X as e,Z as t}from"./vendor.d9ce5f39.js";import{a as i,n}from"./heatmapUtils.a305ce35.js";import{n as s}from"./BitmapTileContainer.bad945ea.js";import{o as r}from"./BaseTileRenderer.276827fc.js";import"./Bitmap.53049b99.js";import"./VertexArrayObject.7996ec24.js";import"./Texture.dc80c2a5.js";import"./Container.bf5ca5d5.js";import"./mat4f32.9c1247c6.js";import"./TileContainer.b607574d.js";import"./Utils.da6d3650.js";import"./WGLContainer.4311c483.js";import"./definitions.8ca8ae21.js";import"./ShaderCompiler.f286663b.js";import"./config.042ea55e.js";import"./GeometryUtils.c1792d3b.js";import"./MaterialKey.57c8719e.js";import"./earcut.b5c0cad1.js";class a{constructor(){this.gradient=null,this.height=512,this.width=512}render(e){i(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let o=class extends r{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new s(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:i}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=i,this._gradient=n(e.toJSON()),this.tiles.forEach((e=>{const n=e.bitmap.source;n&&(n.minPixelIntensity=t,n.maxPixelIntensity=i,n.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:n,maxPixelIntensity:s}=this._intensityInfo,r=t.bitmap.source||new a;r.intensities=i&&i.matrix||null,r.minPixelIntensity=n,r.maxPixelIntensity=s,r.gradient=this._gradient,t.bitmap.source=r,this._container.addChild(t),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}};o=e([t("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);var l=o;export default l;
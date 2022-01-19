// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/copy-features.html":'\x3cdiv class\x3d"esriCTSelectFeaturesContainer"\x3e\r\n  \x3cdiv style\x3d"height: 100%; width: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesListTitle"\x3e${nls.copyFeatures.title}\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesHint" data-dojo-attach-point\x3d"warningMessage" tabindex\x3d"0" role\x3d"presentation"\r\n      aria-label\x3d"${nls.copyFeatures.multipleFeatureSaveWarning}"\x3e${nls.copyFeatures.multipleFeatureSaveWarning}\x3c/div\x3e\r\n    \x3cdiv style\x3d"width: 100; margin-bottom: 5px;" data-dojo-attach-point\x3d"applyEditsProgressParentNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesListContent" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesBtnContainer"\x3e\r\n      \x3cdiv tabindex\x3d"0" role\x3d"button" class\x3d"esriCTCopyFeaturesBtn jimu-btn"\r\n        data-dojo-attach-point\x3d"createMultipleFeaturesBtn" aria-label\x3d"${nls.copyFeatures.createFeatures}"\r\n        title\x3d"${nls.copyFeatures.createFeatures}"\x3e${nls.copyFeatures.createFeatures}\x3c/div\x3e\r\n      \x3cdiv tabindex\x3d"0" role\x3d"button" class\x3d"esriCTCopyFeaturesBtn jimu-btn"\r\n        data-dojo-attach-point\x3d"createSingleFeatureBtn" aria-label\x3d"${nls.copyFeatures.createSingleFeature}"\r\n        title\x3d"${nls.copyFeatures.createSingleFeature}"\x3e\r\n        ${nls.copyFeatures.createSingleFeature}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesBtnContainer esriCTBottomBorder"\x3e\r\n      \x3cdiv tabindex\x3d"0" role\x3d"button" class\x3d"esriCTCopyFeaturesBtn2 jimu-btn" data-dojo-attach-point\x3d"fieldsMatchingBtn"\r\n        aria-label\x3d"${nls.fieldsMapping.popupTittle}"\r\n        title\x3d"${nls.fieldsMapping.popupTittle}"\x3e${nls.fieldsMapping.popupTittle}\r\n      \x3c/div\x3e\r\n      \x3cdiv tabindex\x3d"0" role\x3d"button" class\x3d"esriCTCopyFeaturesBtn2 jimu-btn" data-dojo-attach-point\x3d"cancelBtn"\r\n        aria-label\x3d"${nls.cancel}" title\x3d"${nls.cancel}"\x3e${nls.cancel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/query dojo/string dojo/keys jimu/dijit/CheckBox dojo/dom-class dojo/dom-attr ./highlightSymbolUtils esri/layers/GraphicsLayer dojo/text!./copy-features.html jimu/dijit/Message esri/tasks/query esri/tasks/QueryTask dojo/Deferred dojo/promise/all jimu/dijit/LoadingIndicator dijit/ProgressBar dojo/dom-style jimu/dijit/Popup ./fieldsMapping".split(" "),function(A,
B,C,D,f,l,q,p,v,w,r,E,m,k,F,G,H,x,I,J,y,z,K,L,u,N,M){return C([A,D,B],{templateString:H,layerLabel:null,featuresList:null,checkBoxNodes:{},layerCheckBoxNodes:{},featuresByLayerId:{},featureTitlesByLayerId:{},highlightGraphicsLayer:null,allChildCheckboxes:[],loading:null,fieldsMappingObj:null,layerOrderSequence:[],startup:function(){this.inherited(arguments);this.highlightGraphicsLayer=this._createNewGraphicsLayer("highlightGraphicsLayer");this.loading=new K({hidden:!0});this.loading.placeAt(this.parentDomNode)},
postCreate:function(){this.checkBoxNodes={};this.layerCheckBoxNodes={};this.featuresByLayerId={};this.featureTitlesByLayerId={};this.fieldsMappingObj=this.highlightGraphicsLayer=null;this.layerOrderSequence=[];this.applyEditsProgress=new L(null,this.applyEditsProgressParentNode);u.set(this.applyEditsProgress.domNode,"display","none");this.own(p(this.cancelBtn,"click",f.hitch(this,function(){this.cancelBtnClicked()})));this.own(p(this.cancelBtn,"keydown",f.hitch(this,function(a){a.keyCode!==r.ENTER&&
a.keyCode!==r.SPACE||this.cancelBtnClicked()})));this.own(p(this.createMultipleFeaturesBtn,"click",f.hitch(this,this._createMultipleFeaturesBtnClicked)));this.own(p(this.createMultipleFeaturesBtn,"keydown",f.hitch(this,function(a){a.keyCode!==r.ENTER&&a.keyCode!==r.SPACE||this._createMultipleFeaturesBtnClicked()})));this.own(p(this.createSingleFeatureBtn,"click",f.hitch(this,this._createSingleFeatureBtnClicked)));this.own(p(this.createSingleFeatureBtn,"keydown",f.hitch(this,function(a){a.keyCode!==
r.ENTER&&a.keyCode!==r.SPACE||this._createSingleFeatureBtnClicked()})));this.own(p(this.fieldsMatchingBtn,"click",f.hitch(this,this._fieldMatchingBtnClicked)));this.own(p(this.fieldsMatchingBtn,"keydown",f.hitch(this,function(a){a.keyCode!==r.ENTER&&a.keyCode!==r.SPACE||this._fieldMatchingBtnClicked()})))},selectFeaturesToCopy:function(a,b){this.allChildCheckboxes=[];if(a&&0<a.length){this.checkBoxNodes={};this.layerCheckBoxNodes={};this.featuresByLayerId={};this.featureTitlesByLayerId={};this.targetLayerDetails=
b;var c=this.targetLayerDetails.featureLayer.geometryType;this._changeWarningNote(c);this._showHideSingleFeatureButton(c);this._showHideMultipleFeatureButton(c);m.remove(this.mainNode,"esriCTHidden");b=new y;this._processSelectedFeatures(a,b).then(f.hitch(this,function(){q.empty(this.layerListTable);var d=[];l.forEach(this.layerInfosObj.getLayerInfoArray(),f.hitch(this,function(g){if(this.featureTitlesByLayerId.hasOwnProperty(g.id))return d.push(g.id),this._createFeatureListUI(g.id,c),!0}));for(var e in this.featureTitlesByLayerId)this.featureTitlesByLayerId.hasOwnProperty(e)&&
-1===d.indexOf(e)&&this.layerInfosObj.getLayerInfoById(e)&&this._createFeatureListUI(e,c);this._canExpandFirstLayerNode()&&v(".esriCTExpandCollapseNode",this.domNode)[0].click();this._highlightFeatures();this.updateSingleFeatureButtonText()}))}},_canExpandFirstLayerNode:function(){var a=!1,b=[];b=Object.keys(this.layerCheckBoxNodes);this.layerCheckBoxNodes&&1===b.length?a=!0:1<b.length&&this.layerOrderSequence&&this.layerOrderSequence[0]&&10>=this.layerOrderSequence[0]&&(a=!0);return a},_processSelectedFeatures:function(a,
b){var c={},d,e;this.featuresByLayerId={};this.featureTitlesByLayerId={};l.forEach(a,f.hitch(this,function(g){this.featuresByLayerId[g._layer.id]||(this.featuresByLayerId[g._layer.id]=[],this.featureTitlesByLayerId[g._layer.id]=[]);this.featuresByLayerId[g._layer.id].push(g);var h=this.layerInfosObj.getLayerInfoById(g._layer.id).layerObject.objectIdField;h=g.getTitle()?g.getTitle():g.attributes[h];this.featureTitlesByLayerId[g._layer.id].push(h)}));this.loading.show();for(e in this.featuresByLayerId)e&&
(a=this._getObjectIdFieldOfLayer(e),a=this._getSelectedFeatureObjectIds(this.featuresByLayerId[e],a),c[e]=this._getFeatureByChunks(e,a));z(c).then(f.hitch(this,function(g){for(d in g)d&&this._updateGeometryForSelectedFeature(d,g);this._highlightFeatures();setTimeout(f.hitch(this,function(){this.loading.hide()}),1E3)}),f.hitch(this,function(){this.loading.hide();x({message:this.nls.copyFeatures.copyFeatureUpdateGeometryError})}));return b.resolve(null)},_getObjectIdFieldOfLayer:function(a){return this.layerInfosObj.getLayerInfoById(a).layerObject.objectIdField},
_updateGeometryForSelectedFeature:function(a,b){var c=this._getObjectIdFieldOfLayer(a);l.forEach(this.featuresByLayerId[a],f.hitch(this,function(d){l.some(b[a],f.hitch(this,function(e){if(e.attributes[c]===d.attributes[c])return d.geometry=e.geometry,!0}))}))},_getSelectedFeatureObjectIds:function(a,b){var c=[];l.forEach(a,f.hitch(this,function(d){c.push(d.attributes[b])}));return c},_getFeatureByChunks:function(a,b){var c=this.layerInfosObj.getLayerInfoById(a);var d=new y;var e=[];for(c=null===c.layerObject.url||
""===c.layerObject.url?b.length:c.layerObject.maxRecordCount||999;0<b.length;)e.push(this._getSelectedFeatureGeometry(a,b.splice(0,c)));z(e).then(f.hitch(this,function(g){var h=[];l.forEach(g,f.hitch(this,function(n){h=h.concat(n.features)}));d.resolve(h)}));return d.promise},_getSelectedFeatureGeometry:function(a,b){var c=this.layerInfosObj.getLayerInfoById(a);a=new J(c.getUrl());var d=new I;d.outFields=[c.layerObject.objectIdField];d.objectIds=b;d.returnGeometry=!0;d.outSpatialReference=this.map.spatialReference;
return(null===c.layerObject.url||""===c.layerObject.url?c.layerObject.queryFeatures(d):a.execute(d)).promise},_createFeatureEntries:function(a,b,c,d){l.forEach(this.featureTitlesByLayerId[a],f.hitch(this,function(e){e=this._createListNode(e,b,!0,a,c,d);this.checkBoxNodes[a].push(e);this.allChildCheckboxes.push(e)}))},_createListNode:function(a,b,c,d,e,g){var h=q.create("div",{"class":"jimu-widget-row esriCTCopyFeaturesNode"});var n=q.create("div",{"class":"jimu-float-leading checkBoxNode",style:"width: calc(100% - 20px)"},
h);e="esriGeometryPoint"===e&&this.hideMultipleFeatureButton?!1:!0;n=new E({label:a,checked:e},n);k.set(n.domNode,"layerName",a);c?(m.add(h,"esriCTCopyFeaturesChildNode"),k.set(n.domNode,"parentLayerId",d),p(n.domNode,"click",f.hitch(this,this._childNodeStateChanged)),k.set(g,"expandLayerId",d),q.place(h,g)):(this._updateParentCheckBoxLabel(n,a,this.featureTitlesByLayerId[d].length,d),c=q.create("div",{"class":"esriCTExpandCollapseNode collapsed",tabindex:"0",role:"button","aria-label":a,"aria-expanded":"false"}),
q.place(c,h,"first"),k.set(n.domNode,"layerId",d),k.set(n.domNode,"layerName",a),k.set(c,"layerId",d),e||(this._updateParentCheckBoxLabel(n,a,0,d),n.setStatus(!1)),p(n.domNode,"click",f.hitch(this,this._parentNodeStateChanged)),q.place(h,b,"first"),this.own(p(c,"click",f.hitch(this,function(t){this._expandButtonClicked(t)}))),this.own(p(c,"keydown",f.hitch(this,function(t){t.keyCode!==r.ENTER&&t.keyCode!==r.SPACE||this._expandButtonClicked(t)}))));return n},_expandButtonClicked:function(a){var b=
k.get(a.currentTarget,"layerId");if(b=v("[expandLayerId\x3d"+b+"]",this.domNode)[0])m.contains(a.currentTarget,"expanded")?(m.replace(a.currentTarget,"collapsed","expanded"),k.set(a.currentTarget,"aria-expanded","false"),m.add(b,"esriCTHidden")):(m.replace(a.currentTarget,"expanded","collapsed"),k.set(a.currentTarget,"aria-expanded","true"),m.remove(b,"esriCTHidden"))},_parentNodeStateChanged:function(a){a=k.get(a.currentTarget,"layerId");var b=this.layerCheckBoxNodes[a],c=k.get(b.domNode,"layerName");
if(b.getStatus()){var d=this.checkBoxNodes[a],e=b.getValue();l.forEach(d,f.hitch(this,function(g){e?g.setValue(!0):g.setValue(!1)}));e?this._updateParentCheckBoxLabel(b,c,this.featureTitlesByLayerId[a].length,a):this._updateParentCheckBoxLabel(b,c,0,a);this._highlightFeatures()}this.updateSingleFeatureButtonText()},_childNodeStateChanged:function(a){var b=k.get(a.currentTarget,"parentLayerId"),c=k.get(this.layerCheckBoxNodes[b].domNode,"layerName"),d=this.layerCheckBoxNodes[b],e=this.checkBoxNodes[b],
g=!1;d.getStatus()||l.forEach(this.allChildCheckboxes,f.hitch(this,function(h){h.getValue()&&h.domNode!==a.currentTarget&&(h.setValue(!1),h=k.get(h.domNode,"parentLayerId"),this._updateParentCheckBoxLabel(this.layerCheckBoxNodes[h],k.get(this.layerCheckBoxNodes[h].domNode,"layerName"),0,h))}));this._highlightFeatures();l.some(e,f.hitch(this,function(h){if(h.getValue())return g=!0}));d.setValue(g,!1);this.updateSingleFeatureButtonText();e=this.checkBoxNodes[b].filter(f.hitch(this,function(h){return!0===
h.checked}));this._updateParentCheckBoxLabel(d,c,e.length,b)},_updateParentCheckBoxLabel:function(a,b,c,d){a.setLabel(w.substitute(this.nls.copyFeatures.layerLabel,{layerName:b,selectedFeatures:c,totalFeatures:this.featureTitlesByLayerId[d].length}));k.set(a.domNode,"aria-label",w.substitute(this.nls.copyFeatures.layerAriaLabel,{layerName:b,selectedFeatures:c,totalFeatures:this.featureTitlesByLayerId[d].length}))},updateSingleFeatureButtonText:function(){var a=0;l.some(this.allChildCheckboxes,f.hitch(this,
function(b){b.getValue()&&a++;if(1<a)return!0}));1===a||1===this.allChildCheckboxes.length?(k.set(this.createSingleFeatureBtn,"innerHTML",this.nls.copyFeatures.createOneSingleFeature),k.set(this.createSingleFeatureBtn,"aria-label",this.nls.copyFeatures.createOneSingleFeature),k.set(this.createSingleFeatureBtn,"title",this.nls.copyFeatures.createOneSingleFeature),m.add(this.createMultipleFeaturesBtn,"esriCTCanCreateOnlyOneFeature"),"esriGeometryPoint"===this.targetLayerDetails.featureLayer.geometryType&&
m.remove(this.createSingleFeatureBtn,"esriCTHidden")):(k.set(this.createSingleFeatureBtn,"innerHTML",this.nls.copyFeatures.createSingleFeature),k.set(this.createSingleFeatureBtn,"aria-label",this.nls.copyFeatures.createSingleFeature),k.set(this.createSingleFeatureBtn,"title",this.nls.copyFeatures.createSingleFeature),m.remove(this.createMultipleFeaturesBtn,"esriCTCanCreateOnlyOneFeature"),"esriGeometryPoint"===this.targetLayerDetails.featureLayer.geometryType&&m.add(this.createSingleFeatureBtn,"esriCTHidden"))},
cancelBtnClicked:function(){m.add(this.mainNode,"esriCTHidden");this.highlightGraphicsLayer.clear();this.emit("cancelBtnClicked")},_createMultipleFeaturesBtnClicked:function(){var a=[],b;(b=this._getSelectedFeaturesForCopy())&&0<b.length&&(l.forEach(b,f.hitch(this,function(c){c&&c.geometry&&a.push(c)})),this.emit("createMultipleFeatures",a))},_createSingleFeatureBtnClicked:function(){var a;(a=this._getSelectedFeaturesForCopy())&&0<a.length&&this.emit("createSingleFeature",a)},_fieldMatchingBtnClicked:function(){var a=
[],b={id:this.targetLayerDetails.featureLayer.id,fields:this.targetLayerDetails.fieldInfos,fieldValues:this.targetLayerDetails.fieldValues},c=[];l.forEach(this.layerInfosObj.getLayerInfoArray(),f.hitch(this,function(e){this.featuresByLayerId.hasOwnProperty(e.id)&&(c.push(e.id),a.push(this._getSourceLayerInfo(e.id)))}));for(var d in this.featuresByLayerId)this.featuresByLayerId.hasOwnProperty(d)&&-1===c.indexOf(d)&&this.layerInfosObj.getLayerInfoById(d)&&a.push(this._getSourceLayerInfo(d));this.fieldsMappingObj=
new M({nls:this.nls,sourceLayerDetails:a,targetLayerDetails:b,fieldMappingDetails:this.fieldMappingDetails,usePresetValues:this.usePresetValues,overrideDefaultsByCopiedFeature:this.config.editor.overrideDefaultsByCopiedFeature});this.own(p(this.fieldsMappingObj,"field-mapping-changed",f.hitch(this,function(e){this.fieldMappingDetails=e.fieldMappingDetails;this.config.editor.overrideDefaultsByCopiedFeature=e.overrideDefaultsByCopiedFeature})))},_getConfiguredFieldInfos:function(a,b){var c=[];l.forEach(b,
function(d){var e=this._getFieldInfoByFieldName(a,d.fieldName);d=f.mixin(f.clone(e),d);c.push(d)},this);return c},_getFieldInfoByFieldName:function(a,b){var c={};l.some(a,function(d){if(d.name===b)return f.mixin(c,d),!0});return c},_validateSelectedFeature:function(a){(!a||0>=a.length)&&x({message:this.nls.copyFeatures.selectFeatureToCopyMessage})},_getSelectedFeaturesForCopy:function(){var a,b=[];for(a in this.featuresByLayerId){var c=this._getSelectedFeaturesByLayerId(a);0<c.length&&(b=b.concat(c))}this._validateSelectedFeature(b);
return b},_getSelectedFeaturesByLayerId:function(a){var b=[];l.forEach(this.checkBoxNodes[a],f.hitch(this,function(c,d){c.getValue()&&b.push(this.featuresByLayerId[a][d])}));return b},_showHideSingleFeatureButton:function(a){"esriGeometryPoint"===a?m.add(this.createSingleFeatureBtn,"esriCTHidden"):m.remove(this.createSingleFeatureBtn,"esriCTHidden")},_showHideMultipleFeatureButton:function(a){"esriGeometryPoint"!==a&&this.hideMultipleFeatureButton?m.add(this.createMultipleFeaturesBtn,"esriCTHidden"):
m.remove(this.createMultipleFeaturesBtn,"esriCTHidden")},_createNewGraphicsLayer:function(a){var b={};if(a+=this.widgetId)this.map._layers[a]&&this.map.removeLayer(this.map._layers[a]),b={id:a};a=new G(b);this.map.addLayer(a);return a},_highlightFeatures:function(){this.highlightGraphicsLayer.clear();for(var a in this.featureTitlesByLayerId)this._highlightSingleLayerFeatures(a)},_highlightSingleLayerFeatures:function(a){var b=this.map.getLayer(a);a=this._getSelectedFeaturesByLayerId(a);l.forEach(a,
f.hitch(this,function(c){c=F.getHighLightSymbol(c,b);this.highlightGraphicsLayer.add(c)}))},_changeWarningNote:function(a){a="esriGeometryPoint"===a&&this.hideMultipleFeatureButton?this.nls.copyFeatures.canNotSaveMultipleFeatureWarning:"esriGeometryPoint"!==a&&this.hideMultipleFeatureButton?this.nls.copyFeatures.createOnlyOneMultipartFeatureWarning:this.nls.copyFeatures.multipleFeatureSaveWarning;k.set(this.warningMessage,"innerHTML",a);k.set(this.warningMessage,"aria-label",a)},setProgressPercentage:function(a){a=
parseFloat(a.toFixed());0>=a?(this.applyEditsProgress.set({value:0}),u.set(this.applyEditsProgress.domNode,"display","block")):100<=a?(this.applyEditsProgress.set({value:100}),u.set(this.applyEditsProgress.domNode,"display","none")):this.applyEditsProgress.set({value:a})},_createFeatureListUI:function(a,b){var c=this.layerInfosObj.getLayerInfoById(a);c=c.title?c.title:c.name;var d=q.create("div",{},this.layerListTable);var e=q.create("div",{"class":"esriCTHidden"});q.place(e,d,"last");this.layerCheckBoxNodes[a]=
this._createListNode(c,d,!1,a,b);this.checkBoxNodes[a]||(this.checkBoxNodes[a]=[]);0<this.featureTitlesByLayerId[a].length&&(this._createFeatureEntries(a,d,b,e),this.layerOrderSequence.push(this.featureTitlesByLayerId[a].length))},_getSourceLayerInfo:function(a){var b=this.layerInfosObj.getLayerInfoById(a);var c=this.editUtils.getFieldInfosFromWebmap(b)||b.layerObject.fields;if(b&&b.layerObject&&c)return b=b.title?b.title:b.name,{id:a,fields:c,name:b}}})});
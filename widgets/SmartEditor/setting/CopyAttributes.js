// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/CopyAttributes.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"settingsDesc" data-dojo-attach-point\x3d"validationDesc"\x3e${nls.actionPage.description}\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"copyAttributeTable"\x3e\x3c/div\x3e\r\n  \x3cdiv style\x3d"color:red; display: none;" class\x3d"settingsNotes" data-dojo-attach-point\x3d"warningNote"\x3e${nls.actionPage.copyAttributesNote}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/query dojo/dom-style dijit/registry dojo/_base/lang dojo/_base/array dojo/on dojo/dom-construct dojo/text!./CopyAttributes.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup esri/lang ./Intersection ./Coordinates ./Address".split(" "),function(p,q,l,h,r,e,f,g,k,t,u,v,w,m,x,y,z,A){return p([v,q,u],{baseClass:"jimu-widget-smartEditor-rule-table",templateString:t,_resourceInfo:null,_url:null,_fieldName:null,_fieldValues:null,
_configuredFieldValues:null,_layerId:null,_validGeocoderFields:[],_fieldsPopUp:null,_removeGroupInfo:null,_cbxForActionsWithGroupName:[],ValidFieldsForCoordinates:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"],ValidFieldsByType:{esriFieldTypeOID:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeSmallInteger:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger",
"esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeInteger:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeDouble:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeSingle:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeGUID:["esriFieldTypeGUID","esriFieldTypeGlobalID"],
esriFieldTypeDate:["esriFieldTypeDate"],esriFieldTypeString:"esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeString esriFieldTypeGUID esriFieldTypeDate esriFieldTypeOID esriFieldTypeGlobalID".split(" ")},postCreate:function(){this.inherited(arguments);this._fieldsPopUp=null;this._configuredFieldValues=[];this._removeGroupInfo=null;this._initActionsTable();this._setActionsTable()},getSettings:function(){return this._fieldValues},_getConfigActionOrder:function(){var b=
[],a=[];this.isRelatedLayer?a=["Preset"]:(a=["Intersection"],this._validGeocoderFields=this._getValidGeocoderFields(),this._validGeocoderFields.length&&a.push("Address"),-1<this.ValidFieldsForCoordinates.indexOf(this._fieldType)&&a.push("Coordinates"),a.push("Preset"));return void 0!==this._fieldValues&&null!==this._fieldValues&&this._fieldValues.hasOwnProperty(this._fieldName)&&(f.forEach(this._fieldValues[this._fieldName],function(c){-1<a.indexOf(c.actionName)&&b.push(c.actionName)}),null!==b&&
0!==b.length)?b:a},_getValidGeocoderFields:function(){var b=[],a=[];b=this.ValidFieldsByType[this._fieldType];this._geocoderSettings&&this._geocoderSettings.hasOwnProperty("url")&&(a=f.filter(this._geocoderSettings.fields,function(c){return-1<b.indexOf(c.type)?!0:!1}));return a},_getConfigAction:function(b){var a=null;void 0!==this._fieldValues&&null!==this._fieldValues&&this._fieldValues.hasOwnProperty(this._fieldName)&&f.some(this._fieldValues[this._fieldName],function(c){return c.actionName===
b?(a=c,!0):!1});return a},_nlsActionToConfig:function(b){switch(b){case this.nls.actionPage.copyAction.intersection:return"Intersection";case this.nls.actionPage.copyAction.address:return"Address";case this.nls.actionPage.copyAction.coordinates:return"Coordinates";case this.nls.actionPage.copyAction.preset:return"Preset";default:return b}},popupActionsPage:function(){this._fieldsPopUp&&(this._fieldsPopUp.close(),this._fieldsPopUp=null);this._fieldsPopUp=new m({titleLabel:x.substitute({fieldname:this._fieldName},
this.nls.actionPage.title),width:920,maxHeight:600,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:e.hitch(this,function(){var b=this._copyAttrTable.getRows();if(void 0===this._fieldValues||null===this._fieldValues)this._fieldValues={};this._fieldValues[this._fieldName]=[];f.forEach(b,function(a){var c=this._copyAttrTable.getRowData(a);a={};a.actionName=this._nlsActionToConfig(c.actionName);this._configuredFieldValues[a.actionName]?e.mixin(a,this._configuredFieldValues[a.actionName]):
e.mixin(a,{enabled:!1});e.mixin(a,{enabled:c.enabled});"Preset"===a.actionName&&this._configuredPresetInfos&&!this._configuredPresetInfos.hasOwnProperty(this._fieldName)&&(this._configuredPresetInfos[this._fieldName]=[""]);!a.enabled&&c.attributeActionGroupName&&(c={groupName:c.attributeActionGroupName,layerId:this._layerId,fieldName:this._fieldName,action:a.actionName},this.removeFromGroup(c),delete a.attributeActionGroupName);this._fieldValues[this._fieldName].push(a)},this);this._fieldsPopUp.close()})},
{label:this.nls.cancel,classNames:["jimu-btn jimu-btn-vacation"],onClick:e.hitch(this,function(){this._fieldsPopUp.close()})}],onClose:e.hitch(this,function(){})})},_initActionsTable:function(){this._copyAttrTable=new w({fields:[{name:"enabled",title:this.nls.actionPage.copyAction.enableText,type:"checkbox",width:"15%"},{name:"actionName",title:this.nls.actionPage.copyAction.actionText,type:"text"},{name:"attributeActionGroupName",title:this.nls.actionPage.actionsSettingsTable.groupName,type:"text"},
{name:"actions",title:this.nls.actionPage.copyAction.criteriaText,type:"actions",actions:["up","down","edit"],"class":"actions"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._copyAttrTable.placeAt(this.copyAttributeTable);this._copyAttrTable.startup();this.own(g(this._copyAttrTable,"actions-edit",e.hitch(this,this._onActionEdit)))},_onActionEdit:function(b){this._removeGroupInfo=null;var a=this._copyAttrTable.getRowData(b);if(a.attributeActionGroupName){var c=k.create("div");k.create("div",
{innerHTML:this.nls.actionPage.editOptionsPopup.editAttributeGroup,className:"settingsDesc"},c);k.create("div",{innerHTML:this.nls.actionPage.editOptionsPopup.editAttributeGroupHint,className:"editGroupHint"},c);var d=new m({titleLabel:this.nls.actionPage.editOptionsPopup.popupTitle,width:500,maxHeight:445,autoHeight:!0,content:c,"class":this.baseClass,buttons:[{label:this.nls.actionPage.editOptionsPopup.editGroupButton,onClick:e.hitch(this,function(){this._editGroup(a);d.close()})},{label:this.nls.actionPage.editOptionsPopup.editIndependentlyButton,
disable:"Preset"===a.actionName?!0:!1,onClick:e.hitch(this,function(){a.attributeActionGroupName&&(this._removeGroupInfo={groupName:a.attributeActionGroupName,layerId:this._layerId,fieldName:this._fieldName,action:this._nlsActionToConfig(a.actionName)});this._onEditFieldInfoClick(b);d.close()})}]})}else this._onEditFieldInfoClick(b)},_onEditFieldInfoClick:function(b){switch(this._copyAttrTable.getRowData(b).actionName){case this.nls.actionPage.copyAction.intersection:this._createIntersectionPanel(b);
break;case this.nls.actionPage.copyAction.address:this._geocoderSettings&&this._geocoderSettings.hasOwnProperty("url")?this._createAddressPanel(b):this.emit("SetGeocoder");break;case this.nls.actionPage.copyAction.coordinates:this._createCoordinatesPanel(b)}},_removeFromGroup:function(b){this._removeGroupInfo&&(this.removeFromGroup(this._removeGroupInfo),this._copyAttrTable.editRow(b,{attributeActionGroupName:null}))},_createIntersectionPanel:function(b){this._intersectionDijit=y({nls:this.nls,_fieldValues:this._configuredFieldValues,
layerInfos:this.layerInfos,map:this.map,_fieldType:this._fieldType,isGroup:!1,ValidFieldsByType:this.ValidFieldsByType});this.own(g(this._intersectionDijit,"attributeActionUpdated",e.hitch(this,function(){this._removeFromGroup(b)})))},_createCoordinatesPanel:function(b){this._coordinatesDijit=z({nls:this.nls,isGroup:!1,_fieldType:this._fieldType,_fieldValues:this._configuredFieldValues});this.own(g(this._coordinatesDijit,"attributeActionUpdated",e.hitch(this,function(){this._removeFromGroup(b)})))},
_createAddressPanel:function(b){this._addressDijit=A({nls:this.nls,_fieldValues:this._configuredFieldValues,_geocoderSettings:this._geocoderSettings,_validGeocoderFields:this._validGeocoderFields,portalInfo:this.portalInfo,isGroup:!1});this.own(g(this._addressDijit,"attributeActionUpdated",e.hitch(this,function(){this._removeFromGroup(b)})))},_setActionsTable:function(){var b=this._getConfigActionOrder();this._cbxForActionsWithGroupName=[];f.forEach(b,function(a){var c=this._getConfigAction(a),d=
a;switch(a){case "Intersection":this.nls.actionPage.hasOwnProperty("copyAction")&&this.nls.actionPage.copyAction.hasOwnProperty("intersection")&&(d=this.nls.actionPage.copyAction.intersection);break;case "Address":this.nls.actionPage.hasOwnProperty("copyAction")&&this.nls.actionPage.copyAction.hasOwnProperty("address")&&(d=this.nls.actionPage.copyAction.address);break;case "Coordinates":this.nls.actionPage.hasOwnProperty("copyAction")&&this.nls.actionPage.copyAction.hasOwnProperty("coordinates")&&
(d=this.nls.actionPage.copyAction.coordinates);break;case "Preset":this.nls.actionPage.hasOwnProperty("copyAction")&&this.nls.actionPage.copyAction.hasOwnProperty("preset")&&(d=this.nls.actionPage.copyAction.preset);break;default:d=a}d={actionName:d};void 0!==c&&null!==c?this._configuredFieldValues[a]=c:(this._configuredFieldValues[a]={enabled:!1},"Intersection"===a&&(this._configuredFieldValues[a].fields=[]),"Coordinates"===a&&(this._configuredFieldValues[a].coordinatesSystem="MapSpatialReference",
this._configuredFieldValues[a].field="x"));d.enabled=this._configuredFieldValues[a].enabled;this._configuredFieldValues[a].hasOwnProperty("attributeActionGroupName")&&(d.attributeActionGroupName=this._configuredFieldValues[a].attributeActionGroupName);d.enabled&&"Preset"===a&&!this._configuredFieldValues[a].hasOwnProperty("attributeActionGroupName")&&(d.enabled=!1);c=this._copyAttrTable.addRow(d);d=l(".jimu-checkbox",c.tr)[0];d=r.byNode(d);"Preset"!==a||this._configuredFieldValues[a].hasOwnProperty("attributeActionGroupName")||
(d.set("disabled",!0),(c=l(".jimu-icon-edit",c.tr))&&0<c.length&&h.set(c[0],"display","none"));this._configuredFieldValues[a].hasOwnProperty("attributeActionGroupName")&&(this._cbxForActionsWithGroupName.push(d),this.own(g(d,"change",e.hitch(this,function(){var n=!0;f.some(this._cbxForActionsWithGroupName,function(B){B.getValue()||(n=!1,h.set(this.warningNote,"display","block"))},this);n&&h.set(this.warningNote,"display","none")}))))},this)},geocoderConfigured:function(){this._geocoderSettings&&this._geocoderSettings.hasOwnProperty("url")&&
this._createAddressPanel()},_editGroup:function(b){var a=b.attributeActionGroupName;var c=this._nlsActionToConfig(b.actionName);this._copyAttrTable&&(b=this._attributeActionsTable[c].getRows(),f.some(b,function(d){if(this._attributeActionsTable[c].getRowData(d).name===a)return this._fieldsPopUp.close(),this.onGroupEditingStart(this.nls.layersPage.attributeActionsTabTitle),this._attributeActionsTable[c]._onActionsEdit(d),!0},this))},onGroupEditingStart:function(b){this.emit("onGroupEditingStart",b)},
removeFromGroup:function(b){this.emit("removeFromGroup",b)}})});
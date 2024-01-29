gdjs.OptionCode = {};
gdjs.OptionCode.GDBackObjects1= [];
gdjs.OptionCode.GDBackObjects2= [];
gdjs.OptionCode.GDASWDObjects1= [];
gdjs.OptionCode.GDASWDObjects2= [];
gdjs.OptionCode.GDEObjects1= [];
gdjs.OptionCode.GDEObjects2= [];
gdjs.OptionCode.GDFObjects1= [];
gdjs.OptionCode.GDFObjects2= [];
gdjs.OptionCode.GDMouseObjects1= [];
gdjs.OptionCode.GDMouseObjects2= [];
gdjs.OptionCode.GDASWDTextObjects1= [];
gdjs.OptionCode.GDASWDTextObjects2= [];
gdjs.OptionCode.GDETextObjects1= [];
gdjs.OptionCode.GDETextObjects2= [];
gdjs.OptionCode.GDFTextObjects1= [];
gdjs.OptionCode.GDFTextObjects2= [];
gdjs.OptionCode.GDMouseTextObjects1= [];
gdjs.OptionCode.GDMouseTextObjects2= [];
gdjs.OptionCode.GDPlayerObjects1= [];
gdjs.OptionCode.GDPlayerObjects2= [];
gdjs.OptionCode.GDSlashObjects1= [];
gdjs.OptionCode.GDSlashObjects2= [];
gdjs.OptionCode.GDShadowObjects1= [];
gdjs.OptionCode.GDShadowObjects2= [];
gdjs.OptionCode.GDStatus_9595boxObjects1= [];
gdjs.OptionCode.GDStatus_9595boxObjects2= [];
gdjs.OptionCode.GDHealthBarObjects1= [];
gdjs.OptionCode.GDHealthBarObjects2= [];
gdjs.OptionCode.GDTargetObjects1= [];
gdjs.OptionCode.GDTargetObjects2= [];
gdjs.OptionCode.GDHPObjects1= [];
gdjs.OptionCode.GDHPObjects2= [];
gdjs.OptionCode.GDLevel_9595numberObjects1= [];
gdjs.OptionCode.GDLevel_9595numberObjects2= [];
gdjs.OptionCode.GDplayernameObjects1= [];
gdjs.OptionCode.GDplayernameObjects2= [];
gdjs.OptionCode.GDScreenObjects1= [];
gdjs.OptionCode.GDScreenObjects2= [];
gdjs.OptionCode.GDMenuObjects1= [];
gdjs.OptionCode.GDMenuObjects2= [];
gdjs.OptionCode.GDHealthemptyObjects1= [];
gdjs.OptionCode.GDHealthemptyObjects2= [];
gdjs.OptionCode.GDPotionObjects1= [];
gdjs.OptionCode.GDPotionObjects2= [];
gdjs.OptionCode.GDPotion_9595boxObjects1= [];
gdjs.OptionCode.GDPotion_9595boxObjects2= [];
gdjs.OptionCode.GDPotion_9595numberObjects1= [];
gdjs.OptionCode.GDPotion_9595numberObjects2= [];
gdjs.OptionCode.GDTImerObjects1= [];
gdjs.OptionCode.GDTImerObjects2= [];
gdjs.OptionCode.GDKillcountObjects1= [];
gdjs.OptionCode.GDKillcountObjects2= [];


gdjs.OptionCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.OptionCode.GDTargetObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.OptionCode.GDTargetObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDTargetObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.OptionCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.OptionCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionCode.GDBackObjects1[k] = gdjs.OptionCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.OptionCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.OptionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionCode.GDBackObjects1.length = 0;
gdjs.OptionCode.GDBackObjects2.length = 0;
gdjs.OptionCode.GDASWDObjects1.length = 0;
gdjs.OptionCode.GDASWDObjects2.length = 0;
gdjs.OptionCode.GDEObjects1.length = 0;
gdjs.OptionCode.GDEObjects2.length = 0;
gdjs.OptionCode.GDFObjects1.length = 0;
gdjs.OptionCode.GDFObjects2.length = 0;
gdjs.OptionCode.GDMouseObjects1.length = 0;
gdjs.OptionCode.GDMouseObjects2.length = 0;
gdjs.OptionCode.GDASWDTextObjects1.length = 0;
gdjs.OptionCode.GDASWDTextObjects2.length = 0;
gdjs.OptionCode.GDETextObjects1.length = 0;
gdjs.OptionCode.GDETextObjects2.length = 0;
gdjs.OptionCode.GDFTextObjects1.length = 0;
gdjs.OptionCode.GDFTextObjects2.length = 0;
gdjs.OptionCode.GDMouseTextObjects1.length = 0;
gdjs.OptionCode.GDMouseTextObjects2.length = 0;
gdjs.OptionCode.GDPlayerObjects1.length = 0;
gdjs.OptionCode.GDPlayerObjects2.length = 0;
gdjs.OptionCode.GDSlashObjects1.length = 0;
gdjs.OptionCode.GDSlashObjects2.length = 0;
gdjs.OptionCode.GDShadowObjects1.length = 0;
gdjs.OptionCode.GDShadowObjects2.length = 0;
gdjs.OptionCode.GDStatus_9595boxObjects1.length = 0;
gdjs.OptionCode.GDStatus_9595boxObjects2.length = 0;
gdjs.OptionCode.GDHealthBarObjects1.length = 0;
gdjs.OptionCode.GDHealthBarObjects2.length = 0;
gdjs.OptionCode.GDTargetObjects1.length = 0;
gdjs.OptionCode.GDTargetObjects2.length = 0;
gdjs.OptionCode.GDHPObjects1.length = 0;
gdjs.OptionCode.GDHPObjects2.length = 0;
gdjs.OptionCode.GDLevel_9595numberObjects1.length = 0;
gdjs.OptionCode.GDLevel_9595numberObjects2.length = 0;
gdjs.OptionCode.GDplayernameObjects1.length = 0;
gdjs.OptionCode.GDplayernameObjects2.length = 0;
gdjs.OptionCode.GDScreenObjects1.length = 0;
gdjs.OptionCode.GDScreenObjects2.length = 0;
gdjs.OptionCode.GDMenuObjects1.length = 0;
gdjs.OptionCode.GDMenuObjects2.length = 0;
gdjs.OptionCode.GDHealthemptyObjects1.length = 0;
gdjs.OptionCode.GDHealthemptyObjects2.length = 0;
gdjs.OptionCode.GDPotionObjects1.length = 0;
gdjs.OptionCode.GDPotionObjects2.length = 0;
gdjs.OptionCode.GDPotion_9595boxObjects1.length = 0;
gdjs.OptionCode.GDPotion_9595boxObjects2.length = 0;
gdjs.OptionCode.GDPotion_9595numberObjects1.length = 0;
gdjs.OptionCode.GDPotion_9595numberObjects2.length = 0;
gdjs.OptionCode.GDTImerObjects1.length = 0;
gdjs.OptionCode.GDTImerObjects2.length = 0;
gdjs.OptionCode.GDKillcountObjects1.length = 0;
gdjs.OptionCode.GDKillcountObjects2.length = 0;

gdjs.OptionCode.eventsList0(runtimeScene);

return;

}

gdjs['OptionCode'] = gdjs.OptionCode;

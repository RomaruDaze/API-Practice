gdjs.CreditsCode = {};
gdjs.CreditsCode.GDCreditsObjects1= [];
gdjs.CreditsCode.GDCreditsObjects2= [];
gdjs.CreditsCode.GDFrameObjects1= [];
gdjs.CreditsCode.GDFrameObjects2= [];
gdjs.CreditsCode.GDcredit_9595TextObjects1= [];
gdjs.CreditsCode.GDcredit_9595TextObjects2= [];
gdjs.CreditsCode.GDbuttonObjects1= [];
gdjs.CreditsCode.GDbuttonObjects2= [];
gdjs.CreditsCode.GDName_9595RogerObjects1= [];
gdjs.CreditsCode.GDName_9595RogerObjects2= [];
gdjs.CreditsCode.GDName_9595KomasanObjects1= [];
gdjs.CreditsCode.GDName_9595KomasanObjects2= [];
gdjs.CreditsCode.GDRogerObjects1= [];
gdjs.CreditsCode.GDRogerObjects2= [];
gdjs.CreditsCode.GDKomaObjects1= [];
gdjs.CreditsCode.GDKomaObjects2= [];
gdjs.CreditsCode.GDBackObjects1= [];
gdjs.CreditsCode.GDBackObjects2= [];
gdjs.CreditsCode.GDPlayerObjects1= [];
gdjs.CreditsCode.GDPlayerObjects2= [];
gdjs.CreditsCode.GDSlashObjects1= [];
gdjs.CreditsCode.GDSlashObjects2= [];
gdjs.CreditsCode.GDShadowObjects1= [];
gdjs.CreditsCode.GDShadowObjects2= [];
gdjs.CreditsCode.GDStatus_9595boxObjects1= [];
gdjs.CreditsCode.GDStatus_9595boxObjects2= [];
gdjs.CreditsCode.GDHealthBarObjects1= [];
gdjs.CreditsCode.GDHealthBarObjects2= [];
gdjs.CreditsCode.GDTargetObjects1= [];
gdjs.CreditsCode.GDTargetObjects2= [];
gdjs.CreditsCode.GDHPObjects1= [];
gdjs.CreditsCode.GDHPObjects2= [];
gdjs.CreditsCode.GDLevel_9595numberObjects1= [];
gdjs.CreditsCode.GDLevel_9595numberObjects2= [];
gdjs.CreditsCode.GDplayernameObjects1= [];
gdjs.CreditsCode.GDplayernameObjects2= [];
gdjs.CreditsCode.GDScreenObjects1= [];
gdjs.CreditsCode.GDScreenObjects2= [];
gdjs.CreditsCode.GDMenuObjects1= [];
gdjs.CreditsCode.GDMenuObjects2= [];
gdjs.CreditsCode.GDHealthemptyObjects1= [];
gdjs.CreditsCode.GDHealthemptyObjects2= [];
gdjs.CreditsCode.GDPotionObjects1= [];
gdjs.CreditsCode.GDPotionObjects2= [];
gdjs.CreditsCode.GDPotion_9595boxObjects1= [];
gdjs.CreditsCode.GDPotion_9595boxObjects2= [];
gdjs.CreditsCode.GDPotion_9595numberObjects1= [];
gdjs.CreditsCode.GDPotion_9595numberObjects2= [];
gdjs.CreditsCode.GDTImerObjects1= [];
gdjs.CreditsCode.GDTImerObjects2= [];
gdjs.CreditsCode.GDKillcountObjects1= [];
gdjs.CreditsCode.GDKillcountObjects2= [];


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.CreditsCode.GDTargetObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.CreditsCode.GDTargetObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDTargetObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.CreditsCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDBackObjects1[k] = gdjs.CreditsCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDCreditsObjects1.length = 0;
gdjs.CreditsCode.GDCreditsObjects2.length = 0;
gdjs.CreditsCode.GDFrameObjects1.length = 0;
gdjs.CreditsCode.GDFrameObjects2.length = 0;
gdjs.CreditsCode.GDcredit_9595TextObjects1.length = 0;
gdjs.CreditsCode.GDcredit_9595TextObjects2.length = 0;
gdjs.CreditsCode.GDbuttonObjects1.length = 0;
gdjs.CreditsCode.GDbuttonObjects2.length = 0;
gdjs.CreditsCode.GDName_9595RogerObjects1.length = 0;
gdjs.CreditsCode.GDName_9595RogerObjects2.length = 0;
gdjs.CreditsCode.GDName_9595KomasanObjects1.length = 0;
gdjs.CreditsCode.GDName_9595KomasanObjects2.length = 0;
gdjs.CreditsCode.GDRogerObjects1.length = 0;
gdjs.CreditsCode.GDRogerObjects2.length = 0;
gdjs.CreditsCode.GDKomaObjects1.length = 0;
gdjs.CreditsCode.GDKomaObjects2.length = 0;
gdjs.CreditsCode.GDBackObjects1.length = 0;
gdjs.CreditsCode.GDBackObjects2.length = 0;
gdjs.CreditsCode.GDPlayerObjects1.length = 0;
gdjs.CreditsCode.GDPlayerObjects2.length = 0;
gdjs.CreditsCode.GDSlashObjects1.length = 0;
gdjs.CreditsCode.GDSlashObjects2.length = 0;
gdjs.CreditsCode.GDShadowObjects1.length = 0;
gdjs.CreditsCode.GDShadowObjects2.length = 0;
gdjs.CreditsCode.GDStatus_9595boxObjects1.length = 0;
gdjs.CreditsCode.GDStatus_9595boxObjects2.length = 0;
gdjs.CreditsCode.GDHealthBarObjects1.length = 0;
gdjs.CreditsCode.GDHealthBarObjects2.length = 0;
gdjs.CreditsCode.GDTargetObjects1.length = 0;
gdjs.CreditsCode.GDTargetObjects2.length = 0;
gdjs.CreditsCode.GDHPObjects1.length = 0;
gdjs.CreditsCode.GDHPObjects2.length = 0;
gdjs.CreditsCode.GDLevel_9595numberObjects1.length = 0;
gdjs.CreditsCode.GDLevel_9595numberObjects2.length = 0;
gdjs.CreditsCode.GDplayernameObjects1.length = 0;
gdjs.CreditsCode.GDplayernameObjects2.length = 0;
gdjs.CreditsCode.GDScreenObjects1.length = 0;
gdjs.CreditsCode.GDScreenObjects2.length = 0;
gdjs.CreditsCode.GDMenuObjects1.length = 0;
gdjs.CreditsCode.GDMenuObjects2.length = 0;
gdjs.CreditsCode.GDHealthemptyObjects1.length = 0;
gdjs.CreditsCode.GDHealthemptyObjects2.length = 0;
gdjs.CreditsCode.GDPotionObjects1.length = 0;
gdjs.CreditsCode.GDPotionObjects2.length = 0;
gdjs.CreditsCode.GDPotion_9595boxObjects1.length = 0;
gdjs.CreditsCode.GDPotion_9595boxObjects2.length = 0;
gdjs.CreditsCode.GDPotion_9595numberObjects1.length = 0;
gdjs.CreditsCode.GDPotion_9595numberObjects2.length = 0;
gdjs.CreditsCode.GDTImerObjects1.length = 0;
gdjs.CreditsCode.GDTImerObjects2.length = 0;
gdjs.CreditsCode.GDKillcountObjects1.length = 0;
gdjs.CreditsCode.GDKillcountObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);

return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;

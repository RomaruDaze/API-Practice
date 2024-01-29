gdjs.InventoryCode = {};
gdjs.InventoryCode.GDKeyObjects1= [];
gdjs.InventoryCode.GDKeyObjects2= [];
gdjs.InventoryCode.GDMasterkeyObjects1= [];
gdjs.InventoryCode.GDMasterkeyObjects2= [];
gdjs.InventoryCode.GDPotion_9595InventoryObjects1= [];
gdjs.InventoryCode.GDPotion_9595InventoryObjects2= [];
gdjs.InventoryCode.GDBackObjects1= [];
gdjs.InventoryCode.GDBackObjects2= [];
gdjs.InventoryCode.GDKey_9595TextObjects1= [];
gdjs.InventoryCode.GDKey_9595TextObjects2= [];
gdjs.InventoryCode.GDMasterKey_9595TextObjects1= [];
gdjs.InventoryCode.GDMasterKey_9595TextObjects2= [];
gdjs.InventoryCode.GDPotion_9595TextObjects1= [];
gdjs.InventoryCode.GDPotion_9595TextObjects2= [];
gdjs.InventoryCode.GDKey_9595numObjects1= [];
gdjs.InventoryCode.GDKey_9595numObjects2= [];
gdjs.InventoryCode.GDMasterKey_9595numObjects1= [];
gdjs.InventoryCode.GDMasterKey_9595numObjects2= [];
gdjs.InventoryCode.GDPotion_9595numObjects1= [];
gdjs.InventoryCode.GDPotion_9595numObjects2= [];
gdjs.InventoryCode.GDPlayerObjects1= [];
gdjs.InventoryCode.GDPlayerObjects2= [];
gdjs.InventoryCode.GDSlashObjects1= [];
gdjs.InventoryCode.GDSlashObjects2= [];
gdjs.InventoryCode.GDShadowObjects1= [];
gdjs.InventoryCode.GDShadowObjects2= [];
gdjs.InventoryCode.GDStatus_9595boxObjects1= [];
gdjs.InventoryCode.GDStatus_9595boxObjects2= [];
gdjs.InventoryCode.GDHealthBarObjects1= [];
gdjs.InventoryCode.GDHealthBarObjects2= [];
gdjs.InventoryCode.GDTargetObjects1= [];
gdjs.InventoryCode.GDTargetObjects2= [];
gdjs.InventoryCode.GDHPObjects1= [];
gdjs.InventoryCode.GDHPObjects2= [];
gdjs.InventoryCode.GDLevel_9595numberObjects1= [];
gdjs.InventoryCode.GDLevel_9595numberObjects2= [];
gdjs.InventoryCode.GDplayernameObjects1= [];
gdjs.InventoryCode.GDplayernameObjects2= [];
gdjs.InventoryCode.GDScreenObjects1= [];
gdjs.InventoryCode.GDScreenObjects2= [];
gdjs.InventoryCode.GDMenuObjects1= [];
gdjs.InventoryCode.GDMenuObjects2= [];
gdjs.InventoryCode.GDHealthemptyObjects1= [];
gdjs.InventoryCode.GDHealthemptyObjects2= [];
gdjs.InventoryCode.GDPotionObjects1= [];
gdjs.InventoryCode.GDPotionObjects2= [];
gdjs.InventoryCode.GDPotion_9595boxObjects1= [];
gdjs.InventoryCode.GDPotion_9595boxObjects2= [];
gdjs.InventoryCode.GDPotion_9595numberObjects1= [];
gdjs.InventoryCode.GDPotion_9595numberObjects2= [];
gdjs.InventoryCode.GDTImerObjects1= [];
gdjs.InventoryCode.GDTImerObjects2= [];
gdjs.InventoryCode.GDKillcountObjects1= [];
gdjs.InventoryCode.GDKillcountObjects2= [];


gdjs.InventoryCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Key_num"), gdjs.InventoryCode.GDKey_9595numObjects1);
gdjs.copyArray(runtimeScene.getObjects("MasterKey_num"), gdjs.InventoryCode.GDMasterKey_9595numObjects1);
gdjs.copyArray(runtimeScene.getObjects("Potion_num"), gdjs.InventoryCode.GDPotion_9595numObjects1);
{for(var i = 0, len = gdjs.InventoryCode.GDMasterKey_9595numObjects1.length ;i < len;++i) {
    gdjs.InventoryCode.GDMasterKey_9595numObjects1[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15))) + "x");
}
}{for(var i = 0, len = gdjs.InventoryCode.GDKey_9595numObjects1.length ;i < len;++i) {
    gdjs.InventoryCode.GDKey_9595numObjects1[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14))) + "x");
}
}{for(var i = 0, len = gdjs.InventoryCode.GDPotion_9595numObjects1.length ;i < len;++i) {
    gdjs.InventoryCode.GDPotion_9595numObjects1[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16))) + "x");
}
}}

}


};gdjs.InventoryCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.InventoryCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.InventoryCode.GDTargetObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.InventoryCode.GDTargetObjects1.length ;i < len;++i) {
    gdjs.InventoryCode.GDTargetObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.InventoryCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InventoryCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.InventoryCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InventoryCode.GDBackObjects1[k] = gdjs.InventoryCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.InventoryCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.InventoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InventoryCode.GDKeyObjects1.length = 0;
gdjs.InventoryCode.GDKeyObjects2.length = 0;
gdjs.InventoryCode.GDMasterkeyObjects1.length = 0;
gdjs.InventoryCode.GDMasterkeyObjects2.length = 0;
gdjs.InventoryCode.GDPotion_9595InventoryObjects1.length = 0;
gdjs.InventoryCode.GDPotion_9595InventoryObjects2.length = 0;
gdjs.InventoryCode.GDBackObjects1.length = 0;
gdjs.InventoryCode.GDBackObjects2.length = 0;
gdjs.InventoryCode.GDKey_9595TextObjects1.length = 0;
gdjs.InventoryCode.GDKey_9595TextObjects2.length = 0;
gdjs.InventoryCode.GDMasterKey_9595TextObjects1.length = 0;
gdjs.InventoryCode.GDMasterKey_9595TextObjects2.length = 0;
gdjs.InventoryCode.GDPotion_9595TextObjects1.length = 0;
gdjs.InventoryCode.GDPotion_9595TextObjects2.length = 0;
gdjs.InventoryCode.GDKey_9595numObjects1.length = 0;
gdjs.InventoryCode.GDKey_9595numObjects2.length = 0;
gdjs.InventoryCode.GDMasterKey_9595numObjects1.length = 0;
gdjs.InventoryCode.GDMasterKey_9595numObjects2.length = 0;
gdjs.InventoryCode.GDPotion_9595numObjects1.length = 0;
gdjs.InventoryCode.GDPotion_9595numObjects2.length = 0;
gdjs.InventoryCode.GDPlayerObjects1.length = 0;
gdjs.InventoryCode.GDPlayerObjects2.length = 0;
gdjs.InventoryCode.GDSlashObjects1.length = 0;
gdjs.InventoryCode.GDSlashObjects2.length = 0;
gdjs.InventoryCode.GDShadowObjects1.length = 0;
gdjs.InventoryCode.GDShadowObjects2.length = 0;
gdjs.InventoryCode.GDStatus_9595boxObjects1.length = 0;
gdjs.InventoryCode.GDStatus_9595boxObjects2.length = 0;
gdjs.InventoryCode.GDHealthBarObjects1.length = 0;
gdjs.InventoryCode.GDHealthBarObjects2.length = 0;
gdjs.InventoryCode.GDTargetObjects1.length = 0;
gdjs.InventoryCode.GDTargetObjects2.length = 0;
gdjs.InventoryCode.GDHPObjects1.length = 0;
gdjs.InventoryCode.GDHPObjects2.length = 0;
gdjs.InventoryCode.GDLevel_9595numberObjects1.length = 0;
gdjs.InventoryCode.GDLevel_9595numberObjects2.length = 0;
gdjs.InventoryCode.GDplayernameObjects1.length = 0;
gdjs.InventoryCode.GDplayernameObjects2.length = 0;
gdjs.InventoryCode.GDScreenObjects1.length = 0;
gdjs.InventoryCode.GDScreenObjects2.length = 0;
gdjs.InventoryCode.GDMenuObjects1.length = 0;
gdjs.InventoryCode.GDMenuObjects2.length = 0;
gdjs.InventoryCode.GDHealthemptyObjects1.length = 0;
gdjs.InventoryCode.GDHealthemptyObjects2.length = 0;
gdjs.InventoryCode.GDPotionObjects1.length = 0;
gdjs.InventoryCode.GDPotionObjects2.length = 0;
gdjs.InventoryCode.GDPotion_9595boxObjects1.length = 0;
gdjs.InventoryCode.GDPotion_9595boxObjects2.length = 0;
gdjs.InventoryCode.GDPotion_9595numberObjects1.length = 0;
gdjs.InventoryCode.GDPotion_9595numberObjects2.length = 0;
gdjs.InventoryCode.GDTImerObjects1.length = 0;
gdjs.InventoryCode.GDTImerObjects2.length = 0;
gdjs.InventoryCode.GDKillcountObjects1.length = 0;
gdjs.InventoryCode.GDKillcountObjects2.length = 0;

gdjs.InventoryCode.eventsList1(runtimeScene);

return;

}

gdjs['InventoryCode'] = gdjs.InventoryCode;

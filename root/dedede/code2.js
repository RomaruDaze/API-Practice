gdjs.MenuCode = {};
gdjs.MenuCode.GDBackObjects1_1final = [];

gdjs.MenuCode.GDStatusObjects1= [];
gdjs.MenuCode.GDStatusObjects2= [];
gdjs.MenuCode.GDInventoryObjects1= [];
gdjs.MenuCode.GDInventoryObjects2= [];
gdjs.MenuCode.GDAlmanacObjects1= [];
gdjs.MenuCode.GDAlmanacObjects2= [];
gdjs.MenuCode.GDSaveObjects1= [];
gdjs.MenuCode.GDSaveObjects2= [];
gdjs.MenuCode.GDOptionObjects1= [];
gdjs.MenuCode.GDOptionObjects2= [];
gdjs.MenuCode.GDMain_9595MenuObjects1= [];
gdjs.MenuCode.GDMain_9595MenuObjects2= [];
gdjs.MenuCode.GDBackObjects1= [];
gdjs.MenuCode.GDBackObjects2= [];
gdjs.MenuCode.GDPlayerObjects1= [];
gdjs.MenuCode.GDPlayerObjects2= [];
gdjs.MenuCode.GDSlashObjects1= [];
gdjs.MenuCode.GDSlashObjects2= [];
gdjs.MenuCode.GDShadowObjects1= [];
gdjs.MenuCode.GDShadowObjects2= [];
gdjs.MenuCode.GDStatus_9595boxObjects1= [];
gdjs.MenuCode.GDStatus_9595boxObjects2= [];
gdjs.MenuCode.GDHealthBarObjects1= [];
gdjs.MenuCode.GDHealthBarObjects2= [];
gdjs.MenuCode.GDTargetObjects1= [];
gdjs.MenuCode.GDTargetObjects2= [];
gdjs.MenuCode.GDHPObjects1= [];
gdjs.MenuCode.GDHPObjects2= [];
gdjs.MenuCode.GDLevel_9595numberObjects1= [];
gdjs.MenuCode.GDLevel_9595numberObjects2= [];
gdjs.MenuCode.GDplayernameObjects1= [];
gdjs.MenuCode.GDplayernameObjects2= [];
gdjs.MenuCode.GDScreenObjects1= [];
gdjs.MenuCode.GDScreenObjects2= [];
gdjs.MenuCode.GDMenuObjects1= [];
gdjs.MenuCode.GDMenuObjects2= [];
gdjs.MenuCode.GDHealthemptyObjects1= [];
gdjs.MenuCode.GDHealthemptyObjects2= [];
gdjs.MenuCode.GDPotionObjects1= [];
gdjs.MenuCode.GDPotionObjects2= [];
gdjs.MenuCode.GDPotion_9595boxObjects1= [];
gdjs.MenuCode.GDPotion_9595boxObjects2= [];
gdjs.MenuCode.GDPotion_9595numberObjects1= [];
gdjs.MenuCode.GDPotion_9595numberObjects2= [];
gdjs.MenuCode.GDTImerObjects1= [];
gdjs.MenuCode.GDTImerObjects2= [];
gdjs.MenuCode.GDKillcountObjects1= [];
gdjs.MenuCode.GDKillcountObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.sendAsyncRequest("http://127.0.0.1:8000/savedata/save/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10))) + "/name=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) + "&level=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))) + "&area=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11))) + "&exp=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))) + "&key=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(21))) + "&mkey=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(20))) + "&potion=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22))) + "&kcount=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(24))) + "&hour=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19))) + "&minute=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(18))) + "&second=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17))), "", "POST", "", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.MenuCode.GDTargetObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.MenuCode.GDTargetObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTargetObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.MenuCode.GDBackObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MenuCode.GDBackObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MenuCode.GDBackObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBackObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBackObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDBackObjects2[k] = gdjs.MenuCode.GDBackObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBackObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDBackObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDBackObjects1_1final.indexOf(gdjs.MenuCode.GDBackObjects2[j]) === -1 )
            gdjs.MenuCode.GDBackObjects1_1final.push(gdjs.MenuCode.GDBackObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDBackObjects1_1final, gdjs.MenuCode.GDBackObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.MenuCode.GDStatusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStatusObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStatusObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStatusObjects1[k] = gdjs.MenuCode.GDStatusObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDStatusObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Player Status");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Almanac"), gdjs.MenuCode.GDAlmanacObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDAlmanacObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDAlmanacObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDAlmanacObjects1[k] = gdjs.MenuCode.GDAlmanacObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDAlmanacObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Almanac");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inventory"), gdjs.MenuCode.GDInventoryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDInventoryObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDInventoryObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDInventoryObjects1[k] = gdjs.MenuCode.GDInventoryObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDInventoryObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Inventory");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Option"), gdjs.MenuCode.GDOptionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionObjects1[k] = gdjs.MenuCode.GDOptionObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Option");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Save"), gdjs.MenuCode.GDSaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSaveObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSaveObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSaveObjects1[k] = gdjs.MenuCode.GDSaveObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSaveObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).add(1);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.MenuCode.GDMain_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMain_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMain_9595MenuObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMain_9595MenuObjects1[k] = gdjs.MenuCode.GDMain_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMain_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Menu", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDStatusObjects1.length = 0;
gdjs.MenuCode.GDStatusObjects2.length = 0;
gdjs.MenuCode.GDInventoryObjects1.length = 0;
gdjs.MenuCode.GDInventoryObjects2.length = 0;
gdjs.MenuCode.GDAlmanacObjects1.length = 0;
gdjs.MenuCode.GDAlmanacObjects2.length = 0;
gdjs.MenuCode.GDSaveObjects1.length = 0;
gdjs.MenuCode.GDSaveObjects2.length = 0;
gdjs.MenuCode.GDOptionObjects1.length = 0;
gdjs.MenuCode.GDOptionObjects2.length = 0;
gdjs.MenuCode.GDMain_9595MenuObjects1.length = 0;
gdjs.MenuCode.GDMain_9595MenuObjects2.length = 0;
gdjs.MenuCode.GDBackObjects1.length = 0;
gdjs.MenuCode.GDBackObjects2.length = 0;
gdjs.MenuCode.GDPlayerObjects1.length = 0;
gdjs.MenuCode.GDPlayerObjects2.length = 0;
gdjs.MenuCode.GDSlashObjects1.length = 0;
gdjs.MenuCode.GDSlashObjects2.length = 0;
gdjs.MenuCode.GDShadowObjects1.length = 0;
gdjs.MenuCode.GDShadowObjects2.length = 0;
gdjs.MenuCode.GDStatus_9595boxObjects1.length = 0;
gdjs.MenuCode.GDStatus_9595boxObjects2.length = 0;
gdjs.MenuCode.GDHealthBarObjects1.length = 0;
gdjs.MenuCode.GDHealthBarObjects2.length = 0;
gdjs.MenuCode.GDTargetObjects1.length = 0;
gdjs.MenuCode.GDTargetObjects2.length = 0;
gdjs.MenuCode.GDHPObjects1.length = 0;
gdjs.MenuCode.GDHPObjects2.length = 0;
gdjs.MenuCode.GDLevel_9595numberObjects1.length = 0;
gdjs.MenuCode.GDLevel_9595numberObjects2.length = 0;
gdjs.MenuCode.GDplayernameObjects1.length = 0;
gdjs.MenuCode.GDplayernameObjects2.length = 0;
gdjs.MenuCode.GDScreenObjects1.length = 0;
gdjs.MenuCode.GDScreenObjects2.length = 0;
gdjs.MenuCode.GDMenuObjects1.length = 0;
gdjs.MenuCode.GDMenuObjects2.length = 0;
gdjs.MenuCode.GDHealthemptyObjects1.length = 0;
gdjs.MenuCode.GDHealthemptyObjects2.length = 0;
gdjs.MenuCode.GDPotionObjects1.length = 0;
gdjs.MenuCode.GDPotionObjects2.length = 0;
gdjs.MenuCode.GDPotion_9595boxObjects1.length = 0;
gdjs.MenuCode.GDPotion_9595boxObjects2.length = 0;
gdjs.MenuCode.GDPotion_9595numberObjects1.length = 0;
gdjs.MenuCode.GDPotion_9595numberObjects2.length = 0;
gdjs.MenuCode.GDTImerObjects1.length = 0;
gdjs.MenuCode.GDTImerObjects2.length = 0;
gdjs.MenuCode.GDKillcountObjects1.length = 0;
gdjs.MenuCode.GDKillcountObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;

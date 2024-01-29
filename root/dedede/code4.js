gdjs.Player_32StatusCode = {};
gdjs.Player_32StatusCode.GDPlayer_9595nameObjects1= [];
gdjs.Player_32StatusCode.GDPlayer_9595nameObjects2= [];
gdjs.Player_32StatusCode.GDAttackObjects1= [];
gdjs.Player_32StatusCode.GDAttackObjects2= [];
gdjs.Player_32StatusCode.GDDefenseObjects1= [];
gdjs.Player_32StatusCode.GDDefenseObjects2= [];
gdjs.Player_32StatusCode.GDSpeedObjects1= [];
gdjs.Player_32StatusCode.GDSpeedObjects2= [];
gdjs.Player_32StatusCode.GDExpObjects1= [];
gdjs.Player_32StatusCode.GDExpObjects2= [];
gdjs.Player_32StatusCode.GDPlayer_9595levelObjects1= [];
gdjs.Player_32StatusCode.GDPlayer_9595levelObjects2= [];
gdjs.Player_32StatusCode.GDBackObjects1= [];
gdjs.Player_32StatusCode.GDBackObjects2= [];
gdjs.Player_32StatusCode.GDPlayer_9595HPObjects1= [];
gdjs.Player_32StatusCode.GDPlayer_9595HPObjects2= [];
gdjs.Player_32StatusCode.GDPlayerObjects1= [];
gdjs.Player_32StatusCode.GDPlayerObjects2= [];
gdjs.Player_32StatusCode.GDSlashObjects1= [];
gdjs.Player_32StatusCode.GDSlashObjects2= [];
gdjs.Player_32StatusCode.GDShadowObjects1= [];
gdjs.Player_32StatusCode.GDShadowObjects2= [];
gdjs.Player_32StatusCode.GDStatus_9595boxObjects1= [];
gdjs.Player_32StatusCode.GDStatus_9595boxObjects2= [];
gdjs.Player_32StatusCode.GDHealthBarObjects1= [];
gdjs.Player_32StatusCode.GDHealthBarObjects2= [];
gdjs.Player_32StatusCode.GDTargetObjects1= [];
gdjs.Player_32StatusCode.GDTargetObjects2= [];
gdjs.Player_32StatusCode.GDHPObjects1= [];
gdjs.Player_32StatusCode.GDHPObjects2= [];
gdjs.Player_32StatusCode.GDLevel_9595numberObjects1= [];
gdjs.Player_32StatusCode.GDLevel_9595numberObjects2= [];
gdjs.Player_32StatusCode.GDplayernameObjects1= [];
gdjs.Player_32StatusCode.GDplayernameObjects2= [];
gdjs.Player_32StatusCode.GDScreenObjects1= [];
gdjs.Player_32StatusCode.GDScreenObjects2= [];
gdjs.Player_32StatusCode.GDMenuObjects1= [];
gdjs.Player_32StatusCode.GDMenuObjects2= [];
gdjs.Player_32StatusCode.GDHealthemptyObjects1= [];
gdjs.Player_32StatusCode.GDHealthemptyObjects2= [];
gdjs.Player_32StatusCode.GDPotionObjects1= [];
gdjs.Player_32StatusCode.GDPotionObjects2= [];
gdjs.Player_32StatusCode.GDPotion_9595boxObjects1= [];
gdjs.Player_32StatusCode.GDPotion_9595boxObjects2= [];
gdjs.Player_32StatusCode.GDPotion_9595numberObjects1= [];
gdjs.Player_32StatusCode.GDPotion_9595numberObjects2= [];
gdjs.Player_32StatusCode.GDTImerObjects1= [];
gdjs.Player_32StatusCode.GDTImerObjects2= [];
gdjs.Player_32StatusCode.GDKillcountObjects1= [];
gdjs.Player_32StatusCode.GDKillcountObjects2= [];


gdjs.Player_32StatusCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Player_32StatusCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Player_32StatusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Player_32StatusCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}}

}


};gdjs.Player_32StatusCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Attack"), gdjs.Player_32StatusCode.GDAttackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Defense"), gdjs.Player_32StatusCode.GDDefenseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exp"), gdjs.Player_32StatusCode.GDExpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_HP"), gdjs.Player_32StatusCode.GDPlayer_9595HPObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_level"), gdjs.Player_32StatusCode.GDPlayer_9595levelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_name"), gdjs.Player_32StatusCode.GDPlayer_9595nameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.Player_32StatusCode.GDSpeedObjects1);
{for(var i = 0, len = gdjs.Player_32StatusCode.GDPlayer_9595nameObjects1.length ;i < len;++i) {
    gdjs.Player_32StatusCode.GDPlayer_9595nameObjects1[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.Player_32StatusCode.GDPlayer_9595levelObjects1.length ;i < len;++i) {
    gdjs.Player_32StatusCode.GDPlayer_9595levelObjects1[i].setBBText(gdjs.Player_32StatusCode.GDPlayer_9595levelObjects1[i].getBBText() + (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString()));
}
}{for(var i = 0, len = gdjs.Player_32StatusCode.GDPlayer_9595HPObjects1.length ;i < len;++i) {
    gdjs.Player_32StatusCode.GDPlayer_9595HPObjects1[i].setBBText(gdjs.Player_32StatusCode.GDPlayer_9595HPObjects1[i].getBBText() + (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString()));
}
}{for(var i = 0, len = gdjs.Player_32StatusCode.GDAttackObjects1.length ;i < len;++i) {
    gdjs.Player_32StatusCode.GDAttackObjects1[i].setBBText(gdjs.Player_32StatusCode.GDAttackObjects1[i].getBBText() + (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString()));
}
}{for(var i = 0, len = gdjs.Player_32StatusCode.GDDefenseObjects1.length ;i < len;++i) {
    gdjs.Player_32StatusCode.GDDefenseObjects1[i].setBBText(gdjs.Player_32StatusCode.GDDefenseObjects1[i].getBBText() + (runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()));
}
}{for(var i = 0, len = gdjs.Player_32StatusCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.Player_32StatusCode.GDSpeedObjects1[i].setBBText(gdjs.Player_32StatusCode.GDSpeedObjects1[i].getBBText() + (runtimeScene.getGame().getVariables().getFromIndex(7).getAsString()));
}
}{for(var i = 0, len = gdjs.Player_32StatusCode.GDExpObjects1.length ;i < len;++i) {
    gdjs.Player_32StatusCode.GDExpObjects1[i].setBBText(gdjs.Player_32StatusCode.GDExpObjects1[i].getBBText() + (gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)))));
}
}
{ //Subevents
gdjs.Player_32StatusCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.Player_32StatusCode.GDTargetObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Player_32StatusCode.GDTargetObjects1.length ;i < len;++i) {
    gdjs.Player_32StatusCode.GDTargetObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Player_32StatusCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32StatusCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Player_32StatusCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Player_32StatusCode.GDBackObjects1[k] = gdjs.Player_32StatusCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Player_32StatusCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.Player_32StatusCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Player_32StatusCode.GDPlayer_9595nameObjects1.length = 0;
gdjs.Player_32StatusCode.GDPlayer_9595nameObjects2.length = 0;
gdjs.Player_32StatusCode.GDAttackObjects1.length = 0;
gdjs.Player_32StatusCode.GDAttackObjects2.length = 0;
gdjs.Player_32StatusCode.GDDefenseObjects1.length = 0;
gdjs.Player_32StatusCode.GDDefenseObjects2.length = 0;
gdjs.Player_32StatusCode.GDSpeedObjects1.length = 0;
gdjs.Player_32StatusCode.GDSpeedObjects2.length = 0;
gdjs.Player_32StatusCode.GDExpObjects1.length = 0;
gdjs.Player_32StatusCode.GDExpObjects2.length = 0;
gdjs.Player_32StatusCode.GDPlayer_9595levelObjects1.length = 0;
gdjs.Player_32StatusCode.GDPlayer_9595levelObjects2.length = 0;
gdjs.Player_32StatusCode.GDBackObjects1.length = 0;
gdjs.Player_32StatusCode.GDBackObjects2.length = 0;
gdjs.Player_32StatusCode.GDPlayer_9595HPObjects1.length = 0;
gdjs.Player_32StatusCode.GDPlayer_9595HPObjects2.length = 0;
gdjs.Player_32StatusCode.GDPlayerObjects1.length = 0;
gdjs.Player_32StatusCode.GDPlayerObjects2.length = 0;
gdjs.Player_32StatusCode.GDSlashObjects1.length = 0;
gdjs.Player_32StatusCode.GDSlashObjects2.length = 0;
gdjs.Player_32StatusCode.GDShadowObjects1.length = 0;
gdjs.Player_32StatusCode.GDShadowObjects2.length = 0;
gdjs.Player_32StatusCode.GDStatus_9595boxObjects1.length = 0;
gdjs.Player_32StatusCode.GDStatus_9595boxObjects2.length = 0;
gdjs.Player_32StatusCode.GDHealthBarObjects1.length = 0;
gdjs.Player_32StatusCode.GDHealthBarObjects2.length = 0;
gdjs.Player_32StatusCode.GDTargetObjects1.length = 0;
gdjs.Player_32StatusCode.GDTargetObjects2.length = 0;
gdjs.Player_32StatusCode.GDHPObjects1.length = 0;
gdjs.Player_32StatusCode.GDHPObjects2.length = 0;
gdjs.Player_32StatusCode.GDLevel_9595numberObjects1.length = 0;
gdjs.Player_32StatusCode.GDLevel_9595numberObjects2.length = 0;
gdjs.Player_32StatusCode.GDplayernameObjects1.length = 0;
gdjs.Player_32StatusCode.GDplayernameObjects2.length = 0;
gdjs.Player_32StatusCode.GDScreenObjects1.length = 0;
gdjs.Player_32StatusCode.GDScreenObjects2.length = 0;
gdjs.Player_32StatusCode.GDMenuObjects1.length = 0;
gdjs.Player_32StatusCode.GDMenuObjects2.length = 0;
gdjs.Player_32StatusCode.GDHealthemptyObjects1.length = 0;
gdjs.Player_32StatusCode.GDHealthemptyObjects2.length = 0;
gdjs.Player_32StatusCode.GDPotionObjects1.length = 0;
gdjs.Player_32StatusCode.GDPotionObjects2.length = 0;
gdjs.Player_32StatusCode.GDPotion_9595boxObjects1.length = 0;
gdjs.Player_32StatusCode.GDPotion_9595boxObjects2.length = 0;
gdjs.Player_32StatusCode.GDPotion_9595numberObjects1.length = 0;
gdjs.Player_32StatusCode.GDPotion_9595numberObjects2.length = 0;
gdjs.Player_32StatusCode.GDTImerObjects1.length = 0;
gdjs.Player_32StatusCode.GDTImerObjects2.length = 0;
gdjs.Player_32StatusCode.GDKillcountObjects1.length = 0;
gdjs.Player_32StatusCode.GDKillcountObjects2.length = 0;

gdjs.Player_32StatusCode.eventsList1(runtimeScene);

return;

}

gdjs['Player_32StatusCode'] = gdjs.Player_32StatusCode;

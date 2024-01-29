gdjs.EndingCode = {};
gdjs.EndingCode.GDCongratulationObjects1= [];
gdjs.EndingCode.GDCongratulationObjects2= [];
gdjs.EndingCode.GDtextObjects1= [];
gdjs.EndingCode.GDtextObjects2= [];
gdjs.EndingCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.EndingCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.EndingCode.GDPlayerObjects1= [];
gdjs.EndingCode.GDPlayerObjects2= [];
gdjs.EndingCode.GDSlashObjects1= [];
gdjs.EndingCode.GDSlashObjects2= [];
gdjs.EndingCode.GDShadowObjects1= [];
gdjs.EndingCode.GDShadowObjects2= [];
gdjs.EndingCode.GDStatus_9595boxObjects1= [];
gdjs.EndingCode.GDStatus_9595boxObjects2= [];
gdjs.EndingCode.GDHealthBarObjects1= [];
gdjs.EndingCode.GDHealthBarObjects2= [];
gdjs.EndingCode.GDTargetObjects1= [];
gdjs.EndingCode.GDTargetObjects2= [];
gdjs.EndingCode.GDHPObjects1= [];
gdjs.EndingCode.GDHPObjects2= [];
gdjs.EndingCode.GDLevel_9595numberObjects1= [];
gdjs.EndingCode.GDLevel_9595numberObjects2= [];
gdjs.EndingCode.GDplayernameObjects1= [];
gdjs.EndingCode.GDplayernameObjects2= [];
gdjs.EndingCode.GDScreenObjects1= [];
gdjs.EndingCode.GDScreenObjects2= [];
gdjs.EndingCode.GDMenuObjects1= [];
gdjs.EndingCode.GDMenuObjects2= [];
gdjs.EndingCode.GDHealthemptyObjects1= [];
gdjs.EndingCode.GDHealthemptyObjects2= [];
gdjs.EndingCode.GDPotionObjects1= [];
gdjs.EndingCode.GDPotionObjects2= [];
gdjs.EndingCode.GDPotion_9595boxObjects1= [];
gdjs.EndingCode.GDPotion_9595boxObjects2= [];
gdjs.EndingCode.GDPotion_9595numberObjects1= [];
gdjs.EndingCode.GDPotion_9595numberObjects2= [];
gdjs.EndingCode.GDTImerObjects1= [];
gdjs.EndingCode.GDTImerObjects2= [];
gdjs.EndingCode.GDKillcountObjects1= [];
gdjs.EndingCode.GDKillcountObjects2= [];


gdjs.EndingCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs.EndingCode.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndingCode.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDBlackSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.EndingCode.GDBlackSquareDecoratedButtonObjects1[k] = gdjs.EndingCode.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.EndingCode.GDTargetObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.EndingCode.GDTargetObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDTargetObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};

gdjs.EndingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndingCode.GDCongratulationObjects1.length = 0;
gdjs.EndingCode.GDCongratulationObjects2.length = 0;
gdjs.EndingCode.GDtextObjects1.length = 0;
gdjs.EndingCode.GDtextObjects2.length = 0;
gdjs.EndingCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.EndingCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.EndingCode.GDPlayerObjects1.length = 0;
gdjs.EndingCode.GDPlayerObjects2.length = 0;
gdjs.EndingCode.GDSlashObjects1.length = 0;
gdjs.EndingCode.GDSlashObjects2.length = 0;
gdjs.EndingCode.GDShadowObjects1.length = 0;
gdjs.EndingCode.GDShadowObjects2.length = 0;
gdjs.EndingCode.GDStatus_9595boxObjects1.length = 0;
gdjs.EndingCode.GDStatus_9595boxObjects2.length = 0;
gdjs.EndingCode.GDHealthBarObjects1.length = 0;
gdjs.EndingCode.GDHealthBarObjects2.length = 0;
gdjs.EndingCode.GDTargetObjects1.length = 0;
gdjs.EndingCode.GDTargetObjects2.length = 0;
gdjs.EndingCode.GDHPObjects1.length = 0;
gdjs.EndingCode.GDHPObjects2.length = 0;
gdjs.EndingCode.GDLevel_9595numberObjects1.length = 0;
gdjs.EndingCode.GDLevel_9595numberObjects2.length = 0;
gdjs.EndingCode.GDplayernameObjects1.length = 0;
gdjs.EndingCode.GDplayernameObjects2.length = 0;
gdjs.EndingCode.GDScreenObjects1.length = 0;
gdjs.EndingCode.GDScreenObjects2.length = 0;
gdjs.EndingCode.GDMenuObjects1.length = 0;
gdjs.EndingCode.GDMenuObjects2.length = 0;
gdjs.EndingCode.GDHealthemptyObjects1.length = 0;
gdjs.EndingCode.GDHealthemptyObjects2.length = 0;
gdjs.EndingCode.GDPotionObjects1.length = 0;
gdjs.EndingCode.GDPotionObjects2.length = 0;
gdjs.EndingCode.GDPotion_9595boxObjects1.length = 0;
gdjs.EndingCode.GDPotion_9595boxObjects2.length = 0;
gdjs.EndingCode.GDPotion_9595numberObjects1.length = 0;
gdjs.EndingCode.GDPotion_9595numberObjects2.length = 0;
gdjs.EndingCode.GDTImerObjects1.length = 0;
gdjs.EndingCode.GDTImerObjects2.length = 0;
gdjs.EndingCode.GDKillcountObjects1.length = 0;
gdjs.EndingCode.GDKillcountObjects2.length = 0;

gdjs.EndingCode.eventsList0(runtimeScene);

return;

}

gdjs['EndingCode'] = gdjs.EndingCode;

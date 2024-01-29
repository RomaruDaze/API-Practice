
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown || {};

/**
 * Behavior generated from Remap Top-down
 */
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown = class RemapForTopdown extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Up = behaviorData.Up !== undefined ? behaviorData.Up : "w";
    this._behaviorData.Left = behaviorData.Left !== undefined ? behaviorData.Left : "a";
    this._behaviorData.Right = behaviorData.Right !== undefined ? behaviorData.Right : "d";
    this._behaviorData.Down = behaviorData.Down !== undefined ? behaviorData.Down : "s";
    this._behaviorData.Topdown = behaviorData.Topdown !== undefined ? behaviorData.Topdown : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Up !== newBehaviorData.Up)
      this._behaviorData.Up = newBehaviorData.Up;
    if (oldBehaviorData.Left !== newBehaviorData.Left)
      this._behaviorData.Left = newBehaviorData.Left;
    if (oldBehaviorData.Right !== newBehaviorData.Right)
      this._behaviorData.Right = newBehaviorData.Right;
    if (oldBehaviorData.Down !== newBehaviorData.Down)
      this._behaviorData.Down = newBehaviorData.Down;
    if (oldBehaviorData.Topdown !== newBehaviorData.Topdown)
      this._behaviorData.Topdown = newBehaviorData.Topdown;

    return true;
  }

  // Properties:
  
  _getUp() {
    return this._behaviorData.Up !== undefined ? this._behaviorData.Up : "w";
  }
  _setUp(newValue) {
    this._behaviorData.Up = newValue;
  }
  _getLeft() {
    return this._behaviorData.Left !== undefined ? this._behaviorData.Left : "a";
  }
  _setLeft(newValue) {
    this._behaviorData.Left = newValue;
  }
  _getRight() {
    return this._behaviorData.Right !== undefined ? this._behaviorData.Right : "d";
  }
  _setRight(newValue) {
    this._behaviorData.Right = newValue;
  }
  _getDown() {
    return this._behaviorData.Down !== undefined ? this._behaviorData.Down : "s";
  }
  _setDown(newValue) {
    this._behaviorData.Down = newValue;
  }
  _getTopdown() {
    return this._behaviorData.Topdown !== undefined ? this._behaviorData.Topdown : "";
  }
  _setTopdown(newValue) {
    this._behaviorData.Topdown = newValue;
  }
}

/**
 * Shared data generated from Remap Top-down
 */
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.SharedData = class RemapForTopdownSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._BehaviorRemapper_RemapForTopdownSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._BehaviorRemapper_RemapForTopdownSharedData = new gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.SharedData(
      initialData
    );
  }
  return instanceContainer._BehaviorRemapper_RemapForTopdownSharedData;
}

// Methods:
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, (( gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUp()));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Topdown")).simulateUpKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, (( gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft()));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Topdown")).simulateLeftKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, (( gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRight()));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Topdown")).simulateRightKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, (( gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDown()));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Topdown")).simulateDownKey();
}
}}

}


};

gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Topdown": this._getTopdown()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext = {};
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1= [];
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects2= [];


gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(23698036);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUp((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("up") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("left") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRight((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("right") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("down") : ""));
}
}}

}


};

gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustom = function(up, left, down, right, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Topdown": this._getTopdown()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "up") return up;
if (argName === "left") return left;
if (argName === "down") return down;
if (argName === "right") return right;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetCustomContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext = {};
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1= [];
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects2= [];


gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("options") : "") == "WASD");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUp("w");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft("a");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown("s");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRight("d");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("options") : "") == "ZQSD");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUp("z");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft("q");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown("s");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown("d");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("options") : "") == "Numpad");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUp("NumpadUp");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft("NumpadLeft");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown("NumpadDown");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRight("NumpadRight");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("options") : "") == "IJKL");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUp("i");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft("j");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown("k");
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRight("l");
}
}}

}


};

gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPreset = function(options, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Topdown": this._getTopdown()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "options") return options;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown.prototype.SetPresetContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("BehaviorRemapper::RemapForTopdown", gdjs.evtsExt__BehaviorRemapper__RemapForTopdown.RemapForTopdown);

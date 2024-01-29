
gdjs.evtsExt__ButtonStates__ButtonAnimationName = gdjs.evtsExt__ButtonStates__ButtonAnimationName || {};

/**
 * Behavior generated from Button animation
 */
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName = class ButtonAnimationName extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ButtonFSM = behaviorData.ButtonFSM !== undefined ? behaviorData.ButtonFSM : "";
    this._behaviorData.IdleAnimationName = behaviorData.IdleAnimationName !== undefined ? behaviorData.IdleAnimationName : "Idle";
    this._behaviorData.FocusedAnimationName = behaviorData.FocusedAnimationName !== undefined ? behaviorData.FocusedAnimationName : "Focused";
    this._behaviorData.PressedAnimationName = behaviorData.PressedAnimationName !== undefined ? behaviorData.PressedAnimationName : "Pressed";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ButtonFSM !== newBehaviorData.ButtonFSM)
      this._behaviorData.ButtonFSM = newBehaviorData.ButtonFSM;
    if (oldBehaviorData.IdleAnimationName !== newBehaviorData.IdleAnimationName)
      this._behaviorData.IdleAnimationName = newBehaviorData.IdleAnimationName;
    if (oldBehaviorData.FocusedAnimationName !== newBehaviorData.FocusedAnimationName)
      this._behaviorData.FocusedAnimationName = newBehaviorData.FocusedAnimationName;
    if (oldBehaviorData.PressedAnimationName !== newBehaviorData.PressedAnimationName)
      this._behaviorData.PressedAnimationName = newBehaviorData.PressedAnimationName;

    return true;
  }

  // Properties:
  
  _getButtonFSM() {
    return this._behaviorData.ButtonFSM !== undefined ? this._behaviorData.ButtonFSM : "";
  }
  _setButtonFSM(newValue) {
    this._behaviorData.ButtonFSM = newValue;
  }
  _getIdleAnimationName() {
    return this._behaviorData.IdleAnimationName !== undefined ? this._behaviorData.IdleAnimationName : "Idle";
  }
  _setIdleAnimationName(newValue) {
    this._behaviorData.IdleAnimationName = newValue;
  }
  _getFocusedAnimationName() {
    return this._behaviorData.FocusedAnimationName !== undefined ? this._behaviorData.FocusedAnimationName : "Focused";
  }
  _setFocusedAnimationName(newValue) {
    this._behaviorData.FocusedAnimationName = newValue;
  }
  _getPressedAnimationName() {
    return this._behaviorData.PressedAnimationName !== undefined ? this._behaviorData.PressedAnimationName : "Pressed";
  }
  _setPressedAnimationName(newValue) {
    this._behaviorData.PressedAnimationName = newValue;
  }
}

/**
 * Shared data generated from Button animation
 */
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.SharedData = class ButtonAnimationNameSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ButtonStates_ButtonAnimationNameSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ButtonStates_ButtonAnimationNameSharedData = new gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.SharedData(
      initialData
    );
  }
  return instanceContainer._ButtonStates_ButtonAnimationNameSharedData;
}

// Methods:
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext = {};
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleAnimationName()));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreated = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleAnimationName()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsFocused((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedAnimationName()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedAnimationName()));
}
}}

}


};gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "ButtonFSM": this._getButtonFSM()
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

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationNameContext = {};
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationNameContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationNameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleAnimationName()); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationName = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.IdleAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationNameContext = {};
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIdleAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationName = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetIdleAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationNameContext = {};
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationNameContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationNameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedAnimationName()); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationName = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.FocusedAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationNameContext = {};
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFocusedAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationName = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetFocusedAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationNameContext = {};
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationNameContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationNameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedAnimationName()); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationName = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.PressedAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationNameContext = {};
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPressedAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationName = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName.prototype.SetPressedAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("ButtonStates::ButtonAnimationName", gdjs.evtsExt__ButtonStates__ButtonAnimationName.ButtonAnimationName);

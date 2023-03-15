"use strict";
class TakePhoto {
    constructor(cameraMode, blur) {
        this.cameraMode = cameraMode;
        this.blur = blur;
    }
}
// const marciin = new TakePhoto("on", 2)  Cannot create object from abstract class can only extends
class TikTok extends TakePhoto {
    constructor(blur, cameraMode, cameraLight) {
        super(cameraMode, blur);
        this.blur = blur;
        this.cameraMode = cameraMode;
        this.cameraLight = cameraLight;
    }
}
const marciin = new TikTok(2, "on ", true);

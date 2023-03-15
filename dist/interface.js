"use strict";
class Instagram {
    constructor(cameraMode, blur, filter) {
        this.cameraMode = cameraMode;
        this.blur = blur;
        this.filter = filter;
    }
}
class Youtube {
    constructor(cameraMode, blur, filter, Story) {
        this.cameraMode = cameraMode;
        this.blur = blur;
        this.filter = filter;
        this.Story = Story;
    }
    createStory() {
        return "Story Created";
    }
}

abstract class TakePhoto {
  constructor(public cameraMode: string, public blur: number) {}
}

// const marciin = new TakePhoto("on", 2)  Cannot create object from abstract class can only extends

class TikTok extends TakePhoto {
  constructor(
    public blur: number,
    public cameraMode: string,
    public cameraLight: boolean
  ) {
    super(cameraMode, blur);
  }
}

const marciin = new TikTok(2, "on ", true);

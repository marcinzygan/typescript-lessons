interface TakePhoto {
  cameraMode: string;
  blur: number;
  filter: string;
}
interface Takestory {
  createStory(): string;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public blur: number,
    public filter: string
  ) {}
}

class Youtube implements TakePhoto, Takestory {
  constructor(
    public cameraMode: string,
    public blur: number,
    public filter: string,
    public Story: string
  ) {}
  createStory(): string {
    return "Story Created";
  }
}

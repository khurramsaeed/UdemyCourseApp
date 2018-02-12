export class Recipe {
  public name: string;
  public descr: string;
  public imageUrl: string;

  constructor(name: string, descr: string, imageUrl: string) {
    this.name = name;
    this.descr = descr;
    this.imageUrl = imageUrl;
  }
}

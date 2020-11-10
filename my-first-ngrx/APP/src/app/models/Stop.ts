export class Stop {
  ID: number;
  Name: string;

  copyFrom(item:Stop):Stop {
    this.ID = item.ID;
    this.Name = item.Name;
    return this;
  }
}

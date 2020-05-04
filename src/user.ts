class User {
  private status: string;
  private name: string;

  constructor(name: string) {
    this.name = name;
    this.status = "new";
  }

  public updateStatus(newStatus: string): void {
    this.status = newStatus;
  }
}

export default User;

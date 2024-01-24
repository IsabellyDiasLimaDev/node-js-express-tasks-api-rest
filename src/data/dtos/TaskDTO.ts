export class TaskDTO {
    public id?: string;
    public title: string;
    public description?: string;
    public deadline?: Date;
    public userId: string;
  
    constructor(
      title: string,
      userId: string,
      id?: string,
      description?: string,
      deadline?: Date
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.deadline = deadline;
      this.userId = userId;
    }
  }
  
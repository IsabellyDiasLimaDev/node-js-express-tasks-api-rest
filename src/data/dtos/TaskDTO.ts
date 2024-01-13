export class TaskDTO {
    public id: string;
    public title: string;
    public description: string;
    public deadline: string;
    public userId: string;
  
    constructor(
      id: string,
      title: string,
      description: string,
      deadline: string,
      userId: string,
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.deadline = deadline;
      this.userId = userId;
    }
  }
  
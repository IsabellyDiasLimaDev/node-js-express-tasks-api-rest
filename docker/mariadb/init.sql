CREATE TABLE tbl_user (
  uuid VARCHAR(36) PRIMARY KEY,
  user_name VARCHAR(255),
  user_email VARCHAR(255),
  user_password VARCHAR(255)
);

CREATE TABLE tbl_task (
  uuid VARCHAR(36) PRIMARY KEY,
  task_title VARCHAR(255),
  task_description TEXT,
  task_due_date DATE,
  user_id VARCHAR(36),
  FOREIGN KEY (user_id) REFERENCES tbl_user(uuid)
);
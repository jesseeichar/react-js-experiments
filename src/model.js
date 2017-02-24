class Task {
  id = 0;
  constructor(name, description, img) {
    this.name = name;
    this.description = description;
    this.img = img;
  }
}

class List {
  nextId = 1;
  constructor(name, tasks) {
    this.name = name;
    this.tasks = tasks;
    if (tasks) {
      tasks.forEach((t) => t.id = "task" + (this.nextId++))
    }
  }
  addTask(name, description, img) {
    let task = new Task(name, description, img)
    task.id = "task" + (this.nextId++)
    this.tasks.push(task)
  }
}

class Project {
  constructor(name, lists) {
    this.name = name;
    this.lists = lists;
  }
  addList(name, tasks) {
    this.lists.push(new List(name, tasks));
  }
  getList(name) {
    let matches = this.lists.filter((v) => v.name === name)
    if (matches.length > 0) {
      return matches[0];
    } else {
      return undefined;
    }
  }
}

class ProjectCatalog {
  nextId = 1;
  projects = {}
  firstProject() {
    for (var k in this.projects) {
      if (this.projects.hasOwnProperty(k)) {
        return this.projects[k];
      }
    }
  }
  allProjects() {
    var all = [];
    for (var k in this.projects) {
      if (this.projects.hasOwnProperty(k)) {
        all.push(this.projects[k]);
      }
    }
    return all;
  }
  addProject(project) {
    project.id = "project" + (this.nextId++);
    this.projects[project.id] = project;
    return this;
  }
  addNewProject(name, lists) {
    return this.addProject(new Project(name, lists))
  }
}

const catalog = new ProjectCatalog().addNewProject("Project 1", [
    new List("Backlog", [
      new Task("P1 Task1", "Some Task blah blah 1"),
      new Task("P1 Task2", "Some Task blah blah 2"),
      new Task("P1 Task3", "Some Task blah blah 3")]),
    new List("Planned", [
      new Task("P1 Task4", "Some Task blah blah 4"),
      new Task("P1 Task5", "Some Task blah blah 5")]),
    new List("Active"[new Task("P1 Task6", "Some Task blah blah 6")]),
    new List("Resolved", [
      new Task("P1 Task7", "Some Task blah blah 7"),
      new Task("P1 Task8", "Some Task blah blah 8"),
      new Task("P1 Task9", "Some Task blah blah 9")])
  ]).addNewProject("Project 2", [
    new List("Backlog",[
      new Task("P2 Task1", "Some Task blah blah 1"),
      new Task("P2 Task2", "Some Task blah blah 2")]),
    new List("Active", [
      new Task("P2 Task3", "Some Task blah blah 3")])
  ]).addNewProject("Project 3", [
    new List("Low Priority", [
      new Task("P3 Task1", "Some Task blah blah 1"),
      new Task("P3 Task2", "Some Task blah blah 2")]),
    new List("Medium Priority",[
      new Task("P3 Task3", "Some Task blah blah 3")]),
    new List("High Priority", [
      new Task("P3 Task4", "Some Task blah blah 4"),
      new Task("P3 Task5", "Some Task blah blah 5"),
      new Task("P3 Task6", "Some Task blah blah 6")]),
    new List("Active")
  ])
export default { Project, List, Task, catalog }
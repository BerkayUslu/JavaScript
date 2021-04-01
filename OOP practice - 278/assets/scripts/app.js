class ProjectItem {
  constructor(id, info, status, h2, p) {
    this.id = id;
    this.info = info;
    this.status = status;
    this.h2 = h2;
    this.p = p;
  }
}

class ButtonList {}

class ProjectItemHandler extends ProjectList {
  constructor() {
    super();
  }
  render() {}
}

class ProjectList {
  projects = [];
  constructor() {}
  listHandler() {
    this.projects = [
      new ProjectItem(
        'p1',
        'Got lifetime access, but would be nice to finish it soon!',
        'active',
        'Finish the Course',
        'Finish the course within the next two weeks.'
      ),
      new ProjectItem(
        'p2',
        'Not really a business topic but still important.',
        'active',
        'Buy Groceries',
        "Don't forget to pick up groceries today."
      ),
      new ProjectList(
        'p3',
        'Super important conference! Fictional but still!',
        'finished',
        'Book Hotel',
        "Academind conference takes place in December, don't forget to book a hotel."
      ),
    ];
  }
}

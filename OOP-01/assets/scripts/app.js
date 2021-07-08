class DOMhandler {
  static appendToDom(newAddress, projectItem) {
    newAddress.append(projectItem);
  }
  static updateDOM(projectItem, type, fnc) {
    const switchBtn = projectItem.querySelectorAll('button')[1];
    switchBtn.textContent = type;
    switchBtn.addEventListener('click', fnc.bind(null, projectItem.id));
  }
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
  static updateInfoBtn(infButtonDOM, func, project, text) {
    infButtonDOM.addEventListener('click', func.bind(null, text, project));
  }
  static clearInfoButton(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
}

class Components {
  constructor(){}
  detaca() {}
  attacha() {
  }
}
class Info extends Components{
  constructor() {
    super();
  }
  detach(text, project) {
    const exInfCard = project.nextElementSibling;
    exInfCard.remove();
    this.buttonDOM = project.querySelector('button:first-of-type');
    this.buttonDOM = DOMhandler.clearInfoButton(this.buttonDOM);
    DOMhandler.updateInfoBtn(
      this.buttonDOM,
      this.attach.bind(this),
      project,
      text
    );
  }
  attach(text, project) {
    const infoElement = document.createElement('div');
    infoElement.className = 'card';
    infoElement.innerHTML = `<h5>${text}</h5>`;
    project.parentNode.insertBefore(infoElement, project.nextSibling);
    this.buttonDOM = project.querySelector('button:first-of-type');
    this.buttonDOM = DOMhandler.clearInfoButton(this.buttonDOM);
    DOMhandler.updateInfoBtn(
      this.buttonDOM,
      this.detach.bind(this),
      project,
      text
    );
  }
}

class Project {
  constructor(id, switchFunction) {
    this.id = id;
    this.switchHandler = switchFunction;
    this.projectDom = document.getElementById(id);
    this.infoButtonDom = this.projectDom.querySelector('button');

    this.switchButtonDom = this.infoButtonDom.nextElementSibling;
    this.switchButtonActivate();
    this.moreInfoButtonActivate();
  }
  switchButtonActivate() {
    //burada butona evebt listener ekleyecek ve proje idsini bind edeceğim
    this.switchButtonDom.addEventListener(
      'click',
      this.switchHandler.bind(null, this.id)
    ); //buraya bulunduğu listeye gidip elementi kaldıracak bir fonksiyon gerek
  }
  infoHandler() {
    const text = this.projectDom.dataset.extraInfo;
    const info = new Info();
    info.attach(text, this.projectDom);
  }
  moreInfoButtonActivate() {
    this.infoButtonDom.addEventListener('click', this.infoHandler.bind(this));
  }
}

class ProjectList {
  projects = [];
  constructor(statusName, btnText) {
    this.buttonText = btnText;
    this.statusName = statusName;
    const listElements = document.querySelectorAll(
      `#${statusName}-projects li`
    );
    for (const element of listElements) {
      this.projects.push(
        new Project(element.id, this.switchHandler.bind(this))
      );
    }
  }

  switchHandler(id) {
    const index = this.projects.findIndex((obj) => obj.id === id);
    const projectItemElement = document.getElementById(id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMhandler.clearEventListeners(switchBtn);
    this.switchAddHandler(this.projects[index]);
    this.projects = this.projects.filter((obj) => obj.id != id);
  }
  switchAddBridge(switchAdd) {
    this.switchAddHandler = switchAdd;
  }
  switchAdd(projectClassInstance) {
    this.projects.push(projectClassInstance);
    const projectItem = document.getElementById(projectClassInstance.id);
    const listDomId = document.querySelector(`#${this.statusName}-projects ul`);
    DOMhandler.appendToDom(listDomId, projectItem);
    DOMhandler.updateDOM(
      projectItem,
      this.buttonText,
      this.switchHandler.bind(this)
    );
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active', 'Finish');
    const finishedProjectsList = new ProjectList('finished', 'Activate');
    activeProjectsList.switchAddBridge(
      finishedProjectsList.switchAdd.bind(finishedProjectsList)
    );
    finishedProjectsList.switchAddBridge(
      activeProjectsList.switchAdd.bind(activeProjectsList)
    );
  }
}

App.init();

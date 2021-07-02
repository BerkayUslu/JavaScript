const actvId = document.getElementById('active-projects').querySelector('ul');
const fnshId = document.getElementById('finished-projects').querySelector('ul');

const courseCardId = actvId.querySelector('#p1');
const grocCardId = actvId.querySelector('#p2');
const hotelCardId = fnshId.querySelector('#p3');

const courseInfoBtn = courseCardId.querySelector('button');
const courseToggleBtn = courseInfoBtn.nextElementSibling;
const grocInfoBtn = grocCardId.querySelector('button');
const grocToggleBtn = grocInfoBtn.nextElementSibling;
const hotelInfoBtn = hotelCardId.querySelector('button');
const hotelToggleBtn = hotelInfoBtn.nextElementSibling;

class Project {
  constructor(title, subText, moreInfo, status) {
    this.title = title;
    this.subText = subText;
    this.moreInfo = moreInfo;
    this.status = status;
  }
}

const projectList = {
  data: [],
  addData: () => {
    this.data = [
      Project(
        'Finish the Course',
        'Finish the course within the next two weeks.',
        'Got lifetime access, but would be nice to finish it soon!',
        0
      ),
      Project(
        'Buy Groceries',
        "Don't forget to pick up groceries today.",
        'Not really a business topic but still important.',
        0
      ),
      Project(
        'Book Hotel',
        "Academind conference takes place in December, don't forget to book a hotel.",
        'Super important conference! Fictional but still!',
        1
      ),
    ];
  },
};

const finActButtons = {
  toggleBtwActFin: (projectDom, buttonDom) => {
    if (buttonDom.textContent === 'Activate') {
      buttonDom.textContent = 'Finish';
      actvId.append(projectDom);
    } else {
      buttonDom.textContent = 'Activate';
      fnshId.append(projectDom);
    }
  },
  finActBtnEventLi: () => {
    courseToggleBtn.addEventListener(
      'click',
      finActButtons.toggleBtwActFin.bind(null, courseCardId, courseToggleBtn)
    );
    grocToggleBtn.addEventListener(
      'click',
      finActButtons.toggleBtwActFin.bind(null, grocCardId, grocToggleBtn)
    );
    hotelToggleBtn.addEventListener(
      'click',
      finActButtons.toggleBtwActFin.bind(null, hotelCardId, hotelToggleBtn)
    );
  },
};
const moreInfoButtons = {
  moreInf: (projectDom) => {
    alert(projectDom.dataset.extraInfo);
  },
  moreInfEvent: () => {
    courseInfoBtn.addEventListener(
      'click',
      moreInfoButtons.moreInf.bind(null, courseCardId)
    );
    grocInfoBtn.addEventListener(
      'click',
      moreInfoButtons.moreInf.bind(null, grocCardId)
    );
    hotelInfoBtn.addEventListener(
      'click',
      moreInfoButtons.moreInf.bind(null, hotelCardId)
    );
  },
};

finActButtons.finActBtnEventLi();
moreInfoButtons.moreInfEvent();

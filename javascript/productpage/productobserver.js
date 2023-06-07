export class observerP {
  constructor() {
    this.observers = [];
    this.element = null;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(newJoke) {
    this.observers.forEach(observer => observer.update(newJoke));
  }

  changeElement(newElement) {
    this.element = newElement;
    this.notifyObservers(newElement);
  }
}

export class JokeObserver {
  constructor(element) {
    this.element = element;
  }

  update(newJoke) {
    this.element.innerHTML = newJoke;
  }
}


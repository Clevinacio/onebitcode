import { Component } from "./Component.js";

export class FormComponent extends Component {
  constructor(parent, options) {
    super("form", parent, options);
  }

  addChildren(...children) {
    children.forEach((child) => {
      this.getlement().appendChild(child.getlement());
    });
  }
}

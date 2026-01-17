import { Component } from "./Component.js";

export class LabelComponent extends Component {
  constructor(text, parent, options) {
    super("label", parent, Object.assign({}, options, { textContent: text }));
  }
}

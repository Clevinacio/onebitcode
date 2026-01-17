import { Component } from "./Component.js";
import { FormComponent } from "./FormComponent.js";
import { InputComponent } from "./InputComponent.js";
import { LabelComponent } from "./LabelComponent.js";

const title = new Component("h1", "body", {
  textContent: "Olá, renderização dinâmica",
});

title.render();

title.tag = "h3";
title.build().render();

const form = new FormComponent("body");
form.render();

const label = new LabelComponent("Nome:", form, { htmlFor: "nameInput" });
const input = new InputComponent(form, { id: "nameInput", name: "name" });

form.addChildren(label);
form.addChildren(input);

form.addChildren(
  new Component("br"),
  new Component("br"),
  new LabelComponent("Data Nascimento:", form, { htmlFor: "birthdayInput" }),
  new InputComponent(form, {
    id: "birthdayInput",
    name: "birthday",
    type: "date",
  }),
);

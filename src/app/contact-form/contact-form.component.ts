import { Component } from "@angular/core";
import { ContactMethodsService } from "../contact-methods.service";

@Component({
  selector: "contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent {
  contactMethods: any;
  constructor(service: ContactMethodsService) {
    this.contactMethods = service.getContactMethods();
  }
  log = (receive) => {
    console.log(receive);
  };

  submit = (theForm) => {
    console.log("");
    console.log("NgForm Object:", theForm);
    console.log("NgForm > Value object:", theForm.value);
    console.log("value.firstName:", theForm.value.firstName);
    console.log("value.comment:", theForm.value.comment);
  };
}

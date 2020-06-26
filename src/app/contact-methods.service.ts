import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ContactMethodsService {
  getContactMethods = () => {
    return [
      { id: 1, name: "Email" },
      { id: 2, name: "Phone" },
      { id: 3, name: "Snail Mail" },
      { id: 4, name: "Just Drop By" },
    ];
  };
}

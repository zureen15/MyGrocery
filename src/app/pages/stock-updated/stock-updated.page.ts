import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-stock-updated",
  templateUrl: "./stock-updated.page.html",
  styleUrls: ["./stock-updated.page.scss"],
})
export class StockUpdatedPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  homeseller() {
    let navigationExtras = {
      queryParams: {
        special: "login-seller",
      },
    };
    this.router.navigate(["login-seller"]);
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-update-stock",
  templateUrl: "./update-stock.page.html",
  styleUrls: ["./update-stock.page.scss"],
})
export class UpdateStockPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  stockUpdated() {
    let navigationExtras = {
      queryParams: {
        special: "stockUpdated",
      },
    };
    this.router.navigate(["stock-updated"]);
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  PayPal,
  PayPalPayment,
  PayPalConfiguration,
} from "@ionic-native/paypal/ngx";

@Component({
  selector: "app-payment",
  templateUrl: "payment.page.html",
  styleUrls: ["payment.page.scss"],
})
export class PaymentPage implements OnInit {
  constructor(
    private payPal: PayPal,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.paymentAmount = this.route.snapshot.queryParamMap.get("total");
  }
  paymentAmount: string;
  currency: string = "MYR";
  currencyIcon: string = "RM";

  payWithPaypal() {
    this.payPal
      .init({
        PayPalEnvironmentProduction: "YOUR_PRODUCTION_CLIENT_ID",
        PayPalEnvironmentSandbox:
          "AQGP68l7s7oGmSE37H8dfJewflb0FzMQdCXW0wxHvmFOGtkssRE2d1L-Ri8U2jUvLGa73w0agpWpn0rK",
      })
      .then(
        () => {
          // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
          this.payPal
            .prepareToRender(
              "PayPalEnvironmentSandbox",
              new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
              })
            )
            .then(
              () => {
                let payment = new PayPalPayment(
                  this.paymentAmount,
                  this.currency,
                  "Description",
                  "sale"
                );
                this.payPal.renderSinglePaymentUI(payment).then(
                  (res) => {
                    console.log(res);
                    // Successfully paid
                  },
                  () => {
                    // Error or render dialog closed without being successful
                  }
                );
              },
              () => {
                // Error in configuration
              }
            );
        },
        () => {
          // Error in initialization, maybe PayPal isn't supported or something else
        }
      );
  }

  payWithCard() {
    let navigationExtras = {
      queryParams: {
        special: "cardpayment",
      },
    };
    this.router.navigate(["payment-card"]);
  }

  payWithCash() {}
}

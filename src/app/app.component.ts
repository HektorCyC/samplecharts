import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  dataValues1 = {
    Tablet: 40,
    Smartphone: 60
  };
  metaData1 = {
    title: "Earnings",
    subtitle: 200000
  };
  dataValues2 = {
    Tablet: 60,
    Smartphone: 40
  };
  metaData2 = {
    title: "Impressions",
    subtitle: 500000
  };
  dataValues3 = {
    Tablet: 80,
    Smartphone: 20
  };
  metaData3 = {
    title: "Visits",
    subtitle: 6000000
  };
}

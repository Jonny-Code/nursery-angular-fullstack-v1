import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  user: Object;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getHome().subscribe(
      (home: any) => {
        this.user = home.user;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}

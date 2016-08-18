import { MaterializeDirective } from "../../src/index";
import { Component } from "@angular/core"

@Component({
    selector: "sideNav",
    directives: [MaterializeDirective],
    styles: [`
      nav {
          height: 0px;
      }

      li.active {
        background-color: #ee6e73
      }
    `],
    template: `
      <nav>
        <ul id="slide-out" class="side-nav fixed">
          <li *ngFor="let routeName of routeNames" routerLinkActive="active"><a [routerLink]="[routeName]">{{routeName}}</a></li>
        </ul>
        <a materialize="sideNav" [materializeParams]="[{edge:'left'}]" href="#" data-activates="slide-out" class="button-collapse show-on-large"><i class="mdi-navigation-menu"></i></a>
      </nav>
    `
})
export class SideNav {
}

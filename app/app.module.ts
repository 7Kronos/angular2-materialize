import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

/* Samples imports  */
import { Buttons } from "./components/buttons";
import { Collapsible } from "./components/collapsible";
import { Dropdown } from "./components/dropdown";
import { Dialogs } from "./components/dialogs";
import { Tabs } from "./components/tabs";
//import { TabsRouting } from "./components/tabs-routing";
import { Forms } from "./components/forms";
import { SideNav } from "./components/side-nav";
import { DatePicker } from "./components/datepicker";
import { ModelBindings } from "./components/model-bindings/model-bindings";

/* MaterializeModule import */
import { MaterializeModule } from "../src/index";

/* App Root  */
import { App } from "./app";
import { routing } from "./app.routes";

@NgModule({
    declarations: [
        Buttons,
        Collapsible,
        Dropdown,
        Dialogs,
        Tabs,
        //TabsRouting,
        Forms,
        SideNav,
        ModelBindings,
        DatePicker
    ],
    imports: [
        RouterModule,
        MaterializeModule,
        routing
    ],
    bootstrap: [
        App
    ]
})
export class AppModule {}
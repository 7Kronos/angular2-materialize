import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [
    { path: "/buttons", component: Buttons },
    { path: "/collapsible", component: Collapsible },
    { path: "/dialogs", component: Dialogs },
    { path: "/dropdowns", component: Dropdown },
    { path: "/forms", component: Forms },
    { path: "/tabs/", component: Tabs },
    //{ path: "/tabs-routing/...", component: TabsRouting },
    { path: "/datepicker", component: DatePicker },
    { path: "/modelbindings", component: ModelBindings },
];

export const routing = RouterModule.forRoot(appRoutes);
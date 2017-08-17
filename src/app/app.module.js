"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var material_3 = require("@angular/material");
var material_4 = require("@angular/material");
var material_5 = require("@angular/material");
var forms_1 = require("@angular/forms"); // <-- NgModel lives 
var app_component_1 = require("./app.component");
var hero_detail_component_1 = require("./hero-detail.component");
var toolbar_component_1 = require("./toolbar.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, animations_1.BrowserAnimationsModule, material_1.MdToolbarModule, material_2.MdCardModule, material_3.MdGridListModule, material_4.MdListModule, material_5.MdInputModule],
        declarations: [app_component_1.AppComponent, hero_detail_component_1.HeroDetailComponent, toolbar_component_1.ToolbarMultirowExample],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <toolbar-multirow-example></toolbar-multirow-example>\n    <md-grid-list cols=\"2\" rowHeight=\"1:1\">\n      <md-grid-tile>\n        <md-card>\n          <md-card-title>My Heroes</md-card-title>\n          <md-list>\n            <md-list-item *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\n              <md-icon aria-label=\"Person_Pin\" class=\"material-icons\" md-list-icon>person_pin</md-icon>\n              <h3 md-line> {{hero.name}} </h3>\n              <p md-line>\n                <span> {{hero.id}} </span>\n              </p>\n            </md-list-item>\n          </md-list>\n        </md-card>\n      </md-grid-tile>\n      \n      <md-grid-tile>\n        <hero-detail [hero]=\"selectedHero\"></hero-detail>\n      </md-grid-tile>\n    </md-grid-list>",
        styles: ["\n    md-grid-list {\n      margin:1rem;\n    }\n\n    .selected {\n      background-color: #f5f5f5 !important;\n    }\n\n    md-list-item:hover {\n      background-color: #f5f5f5;\n    }\n    \n    md-list-item {\n      cursor: pointer;\n    }\n  "],
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
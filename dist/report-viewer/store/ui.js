"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsdi_1 = require("tsdi");
const mobx_1 = require("mobx");
const lodash_decorators_1 = require("lodash-decorators");
let StoreUi = class StoreUi {
    constructor() {
        this.menuVisible = true;
    }
    toggleMenu() {
        this.menuVisible = !this.menuVisible;
    }
};
__decorate([
    mobx_1.observable
], StoreUi.prototype, "menuVisible", void 0);
__decorate([
    lodash_decorators_1.bind, mobx_1.action
], StoreUi.prototype, "toggleMenu", null);
StoreUi = __decorate([
    tsdi_1.component
], StoreUi);
exports.StoreUi = StoreUi;
//# sourceMappingURL=ui.js.map
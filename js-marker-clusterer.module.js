'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AgmJsMarkerClustererModule = undefined;

var _core = require('@angular/core');

var _core2 = require('@agm/core');

var _markerCluster = require('./directives/marker-cluster');

var AgmJsMarkerClustererModule = function () {
    function AgmJsMarkerClustererModule() {}
    return AgmJsMarkerClustererModule;
}();
exports.AgmJsMarkerClustererModule = AgmJsMarkerClustererModule;

AgmJsMarkerClustererModule.decorators = [{ type: _core.NgModule, args: [{
        imports: [_core2.AgmCoreModule],
        declarations: [_markerCluster.AgmMarkerCluster],
        exports: [_markerCluster.AgmMarkerCluster]
    }] }];
/** @nocollapse */
AgmJsMarkerClustererModule.ctorParameters = function () {
    return [];
};
//# sourceMappingURL=js-marker-clusterer.module.js.map
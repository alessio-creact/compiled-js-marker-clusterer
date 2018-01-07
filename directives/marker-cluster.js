'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AgmMarkerCluster = undefined;

var _core = require('@angular/core');

var _clusterManager2 = require('../services/managers/cluster-manager');

var _core2 = require('@agm/core');

/**
 * AgmMarkerCluster clusters map marker if they are near together
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker-cluster>
 *        <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        </agm-marker>
 *        <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
 *        </agm-marker>
 *      </agm-marker-cluster>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarkerCluster = function () {
    function AgmMarkerCluster(_clusterManager) {
        this._clusterManager = _clusterManager;
    }
    /** @internal */
    AgmMarkerCluster.prototype.ngOnDestroy = function () {
        this._clusterManager.clearMarkers();
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnChanges = function (changes) {
        if (changes['gridSize']) {
            this._clusterManager.setGridSize(this);
        }
        if (changes['maxZoom']) {
            this._clusterManager.setMaxZoom(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['zoomOnClick']) {
            this._clusterManager.setZoomOnClick(this);
        }
        if (changes['averageCenter']) {
            this._clusterManager.setAverageCenter(this);
        }
        if (changes['minimumClusterSize']) {
            this._clusterManager.setMinimumClusterSize(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['imagePath']) {
            this._clusterManager.setImagePath(this);
        }
        if (changes['imageExtension']) {
            this._clusterManager.setImageExtension(this);
        }
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnInit = function () {
        this._clusterManager.init({
            gridSize: this.gridSize,
            maxZoom: this.maxZoom,
            zoomOnClick: this.zoomOnClick,
            averageCenter: this.averageCenter,
            minimumClusterSize: this.minimumClusterSize,
            styles: this.styles,
            imagePath: this.imagePath,
            imageExtension: this.imageExtension
        });
    };
    return AgmMarkerCluster;
}();
exports.AgmMarkerCluster = AgmMarkerCluster;

AgmMarkerCluster.decorators = [{ type: _core.Directive, args: [{
        selector: 'agm-marker-cluster',
        providers: [_clusterManager2.ClusterManager, { provide: _core2.MarkerManager, useExisting: _clusterManager2.ClusterManager }, _core2.InfoWindowManager]
    }] }];
/** @nocollapse */
AgmMarkerCluster.ctorParameters = function () {
    return [{ type: _clusterManager2.ClusterManager }];
};
AgmMarkerCluster.propDecorators = {
    'gridSize': [{ type: _core.Input }],
    'maxZoom': [{ type: _core.Input }],
    'zoomOnClick': [{ type: _core.Input }],
    'averageCenter': [{ type: _core.Input }],
    'minimumClusterSize': [{ type: _core.Input }],
    'styles': [{ type: _core.Input }],
    'imagePath': [{ type: _core.Input }],
    'imageExtension': [{ type: _core.Input }]
};
//# sourceMappingURL=marker-cluster.js.map
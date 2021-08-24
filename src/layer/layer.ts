import { BaseMapType, LayerGroup, Popup } from "src/@types";

export abstract class Layer<T extends L.Layer> {
    map: BaseMapType;
    layer: string;

    abstract popup: Popup;

    get mapLayer() {
        if (!this.layer) {
            return this.map.mapLayers[0];
        }
        return (
            this.map.mapLayers?.find(({ id }) => id === this.layer) ??
            this.map.mapLayers[0]
        );
    }

    abstract leafletInstance: T;
    abstract get group(): L.LayerGroup;

    onShow() {}
    show() {
        if (this.group) {
            this.group.addLayer(this.leafletInstance);
        }
        this.onShow();
    }
    onHide() {}
    hide() {
        this.group && this.group.removeLayer(this.leafletInstance);
    }

    checkAndAddToMap() {
        if (this.map.isLayerRendered(this.layer)) {
            console.log(
                "🚀 ~ file: layer.ts ~ line 36 ~ this.map.isLayerRendered(this.layer)",
                this.map.isLayerRendered(this.layer),
                this.layer
            );
            this.show();
        } else if (this.layer) {
            this.map.on(
                `layer-ready-for-features`,
                (layer: LayerGroup<L.TileLayer | L.ImageOverlay>) => {
                    if (layer === this.mapLayer) {
                        this.show();
                    }
                }
            );
        } else {
            console.log("🚀 ~ file: layer.ts ~ line 54 ~ first-layer-ready");
            this.map.on(
                "first-layer-ready",
                (layer: LayerGroup<L.TileLayer | L.ImageOverlay>) => {
                    this.layer = layer.id;
                    this.show();
                }
            );
        }
    }
    remove() {
        this.group && this.group.removeLayer(this.leafletInstance);
    }
}

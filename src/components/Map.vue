<template>
    <div id="map">
        <GmapMap :center="position" :zoom="zoom" style="width: 100%; height: 500px" @click="closeInfoWindow()">
            <GmapMarker
                v-for="(location, key) in locations"
                :key="key"
                :position="{
                    lat: location.latitude,
                    lng: location.longitude
                }"
                :clickable="true"
                :draggable="true"
                @click="showDetails(location)"
            />
            <GmapInfoWindow
                :position="position"
                v-if="showInfoWindow"
                @closeclick="closeInfoWindow()"
                :options="options"
            >
                <div class="info">
                    {{ location.name }}
                    <br />
                    <small>{{ location.capital }}</small>
                </div>
            </GmapInfoWindow>
        </GmapMap>
    </div>
</template>

<script>
export default {
    props: {
        locations: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            showInfoWindow: false,
            position: { lat: 52, lng: 2 },
            location: {},
            zoom: 4
        };
    },
    computed: {
        /**
         * Change information window position
         * on top of the marker,
         * instead of overlapping the marker.
         */
        options() {
            return {
                pixelOffset: {
                    width: 0,
                    height: -35
                }
            };
        }
    },
    methods: {
        /**
         * Show details of a location.
         * Set the position,
         * show info window,
         * zoom and set the location.
         */
        showDetails(location) {
            this.$set(this.position, "lat", location.latitude);
            this.$set(this.position, "lng", location.longitude);
            this.showInfoWindow = true;
            this.location = location;
            this.zoom = 5;
        },

        /**
         * Close information window
         * and zoom out.
         */
        closeInfoWindow() {
            this.showInfoWindow = false;
            this.zoom = 4;
        }
    }
};
</script>

<style scoped>
#map {
    width: 100%;
    height: 100%;
}

.info {
    text-align: center;
    font-weight: bold;
}
</style>

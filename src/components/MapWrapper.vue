<template>
    <div id="map">
        <GmapMap :center="position" :zoom="zoom" style="width: 100%; height: 500px" @click="showInfoWindow = false">
            <GmapMarker
                v-for="(location, key) in locations"
                :key="key"
                :position="{
                    lat: parseFloat(location.latitude),
                    lng: parseFloat(location.longitude)
                }"
                :clickable="true"
                :draggable="true"
                @click="showDetails(location)"
            />
            <GmapInfoWindow :position="position" v-if="showInfoWindow" @closeclick="showInfoWindow = false">
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
    props: ["locations"],
    data() {
        return {
            showInfoWindow: false,
            position: { lat: 52, lng: 2 },
            location: {},
            zoom: 4
        };
    },
    methods: {
        /**
         * Show details of a location.
         * Set the position,
         * show info window,
         * zoom and set the location.
         */
        showDetails(location) {
            this.$set(this.position, "lat", parseFloat(location.latitude));
            this.$set(this.position, "lng", parseFloat(location.longitude));
            this.showInfoWindow = true;
            this.location = location;
            this.zoom = 5;
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

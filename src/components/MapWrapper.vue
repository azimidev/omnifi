<template>
    <div>
        <GmapMap
            :center="position"
            :zoom="zoom"
            map-type-id="terrain"
            style="width: 100%; height: 500px"
            @click="showInfoWindow = false"
        >
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
                <div>
                    <h4>
                        {{ location.name }}
                        <br />
                        <small>{{ location.capital }}</small>
                    </h4>
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

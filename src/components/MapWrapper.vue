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
    }
};
</script>

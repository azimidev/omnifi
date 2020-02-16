<template>
    <div class="pins">
        <h2>Locations</h2>
        <transition name="fade">
            <h3 v-if="location">{{ location.name }} ({{ location.capital }})</h3>
        </transition>
        <ul class="locations">
            <li
                v-for="(item, key) in locations"
                :key="key"
                @click="showInfo(item)"
                class="pointer"
                :class="location.name === item.name ? 'highlight' : ''"
            >
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["locations"],
    data() {
        return {
            location: false
        };
    },
    methods: {
        /**
         * Show the location information.
         * Hide it after duration of default 1.5 seconds.
         * Use Vue Animation.
         */
        showInfo(location, duration = 1500) {
            this.location = location;
            setTimeout(() => {
                this.location = false;
            }, duration);
        }
    }
};
</script>

<style scoped>
.pointer {
    cursor: pointer;
}

.highlight {
    font-weight: bold;
    color: coral;
}

.pins {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.locations {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}

.locations li {
    width: 48%;
    margin: 3px;
}

@media only screen and (min-width: 768px) {
    .locations li {
        width: 24%;
    }
}
</style>

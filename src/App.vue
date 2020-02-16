<template>
    <div id="app">
        <Header />
        <Map :locations="locations" />
        <Locations :locations="locations" />
    </div>
</template>

<script>
import data from "./api/data.json";
import Header from "./components/Header";
import Locations from "./components/Locations";
import Map from "./components/Map";

/*
 * I wanted to use Axios to load the data from AWS.
 * However, because of CORS issue I downloaded the file,
 * and put it in api directory.
 *
 * I commented the Axios part below otherwise, you can see
 * how I would go about using Axios to fetch the data.
 */

/*
 * AXIOS PART - IGNORED DUE TO CORS ISSUE.
 */

// import omnifi from "./api/omnifi";

export default {
    name: "App",
    components: {
        Header,
        Locations,
        Map
    },
    data() {
        return {
            locations: []
        };
    },
    mounted() {
        this.locations = data;

        /*
         * AXIOS PART - IGNORED DUE TO CORS ISSUE.
         */

        // omnifi.get("/omnifi/techtests/locations.json").then(
        //     response => {
        //         if (response.data) {
        //             this.locations = response.data;
        //         } else {
        //             throw new Error("Error: could not load data");
        //         }
        //     },
        //     err => {
        //         throw new Error(err);
        //     }
        // );
    }
};
</script>

<style>
html,
body {
    font-family: Arial, Helvetica, sans-serif;
    color: gray;
    margin: 0;
    padding: 0;
}

h1,
h2,
h3 {
    margin: 0 0 12px 0;
}

h1 {
    color: lightseagreen;
}

h2 {
    color: tomato;
}

h3 {
    color: mediumpurple;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

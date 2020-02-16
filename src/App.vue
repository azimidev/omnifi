<template>
    <div id="app">
        <Header />
        <Locations :locations="locations" />
        <MapWrapper :locations="locations" />
    </div>
</template>

<script>
import data from "./api/data.json";
import Header from "./components/Header";
import Locations from "./components/Locations";
import MapWrapper from "./components/MapWrapper";

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
        MapWrapper
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

        // omnifi.get("/omnifi.json").then(
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
    color: #444;
    margin: 0;
    padding: 0;
}

h1,
h2,
h3 {
    margin: 0 0 12px 0;
}

h1 {
    color: #1e87b5;
}

h3 {
    color: #731eb5;
}
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    text-align: center;
}

.pins {
    padding: 0 16px 16px 16px;
}

ul#locations {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
}

ul#locations li {
    width: 48%;
    margin: 3px;
}

@media only screen and (min-width: 768px) {
    ul#locations li {
        width: 24%;
    }
}

#map {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>

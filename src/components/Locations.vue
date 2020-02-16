<template
    ><div clas="pins">
        <h3>Locations</h3>
        <ul id="locations">
            <li v-for="(location, key) in locations" :key="key">
                {{ location.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["locations"]
};
</script>

<template>
    <div class="control">
        Night Mode:
        <label class="checkbox">
            <input type="checkbox">
            Darkmode
        </label>
    </div>
</template>

<script>
    export default {
        name: "darkMode",
        methods: {
            light() {
                this.$store.dispatch('setLight');
            },
            dark() {
                this.$store.dispatch('setDark');
            }
        }
    }
</script>

<style scoped>

</style>
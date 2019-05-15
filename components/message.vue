<template>
<div>
    {{sender}}
    <div class="single-message">
        {{message}}
    </div>
</div>
</template>

<script>
    export default {
        name: "message",
        props: ['message','sender']
    }
</script>

<style scoped>
    .single-message{
        width: 90%;
        margin-left: 15px;
        margin-bottom: 15px;
        padding: 5px 10px;
        border-radius: 25px;
        border:1px solid #3273dc;
    }

</style>

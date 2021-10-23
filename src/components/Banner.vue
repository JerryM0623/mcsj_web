<template>
    <div class="banner">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>
.banner{
    width: 100%;
}
.banner img{
    width: 100%;
    height: 100%;
}
</style>
<template>
<div id="app">
    <!-- Your main app layout -->
    <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-4">
        <h1 class="text-2xl font-bold">BERESINDONG</h1>
        <!-- Navigation can go here -->
    </div>
    </header>
    
    <main class="container mx-auto px-4 py-8">
    <router-view></router-view> <!-- If using Vue Router -->
    <!-- Or use your component directly if not using router -->
    <profile-page v-if="currentPage === 'profile'" />
    </main>
    
    <footer class="bg-gray-100 py-8">
    <div class="container mx-auto px-4">
        <h2 class="text-xl font-bold mb-4">BERESINDONG</h2>
        <p class="text-gray-600">365 Railcenter Drive, Suite 4 - Charlottesville, CA, 12345</p>
        <p class="text-gray-600">(123) 456-7890</p>
    </div>
    </footer>
</div>
</template>

<script>
export default {
data() {
    return {
      currentPage: 'profile' // Change this based on your navigation
    }
}
}
</script>
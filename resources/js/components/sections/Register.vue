<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header with Berg Dong text -->
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900">BERG</h1>
        <h2 class="mt-2 text-2xl font-semibold text-gray-700">DONG</h2>
        <p class="mt-2 text-sm text-gray-600">Create your account</p>
      </div>
      
      <!-- Form Container -->
      <div class="mt-8 bg-white py-8 px-6 shadow rounded-lg">
        <form class="mt-8 space-y-6" @submit.prevent="register">
          <div class="rounded-md shadow-sm space-y-4">
            <!-- Username Field -->
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <input 
                id="username" 
                name="username" 
                type="text" 
                required
                v-model="form.username"
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your username"
              >
            </div>
            
            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required
                v-model="form.email"
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="your@email.com"
              >
            </div>
            
            <!-- Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required
                minlength="8"
                v-model="form.password"
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Minimum 8 characters"
              >
            </div>
          </div>

          <!-- Submit Button with Turkish "Defter" text -->
          <div>
            <button 
              type="submit" 
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              :disabled="isLoading"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg 
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              <span v-if="!isLoading">Daftar</span>
              <span v-else>
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    async register() {
      this.isLoading = true;
      try {
        // Replace with your actual API call
        // const response = await axios.post('/api/register', this.form);
        console.log('Registering with:', this.form);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Redirect or show success message
        // this.$router.push('/dashboard');
        alert('Registration successful!');
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>
<template>
  <div class="register mx-10">
    <header>&copy; myway</header>
    <div class="reg flex justify-center mt-8">
      <p class="text-2xl font-semibold">Register</p>
    </div>
    <main class="max-w-md mx-auto p-4 rounded">
      <form action="#" method="post">
        <div class="form-group mb-6">
          <label for="username" class="block mb-1">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="form-group mb-6">
          <label for="password" class="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="form-group mb-6">
          <label for="confirm-password" class="block mb-1"
            >Confirm Password:</label
          >
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <router-link to="/searchresults">
          <button
            class="w-full py-2 text-white border-none cursor-pointer rounded bg-blue-500 hover:bg-yellow-500"
          >
            Login
          </button>
        </router-link>
        <!-- <button
          type="submit"
          class="w-full py-2 text-white border-none cursor-pointer rounded bg-blue-500 hover:bg-yellow-500"
        >
          Register
        </button> -->
      </form>
      <div class="reg flex justify-center mt-8">
        Already have an account? <a href="" class="text-blue-500">Sign in</a>
      </div>
    </main>
  </div>
</template>

<script setup></script>

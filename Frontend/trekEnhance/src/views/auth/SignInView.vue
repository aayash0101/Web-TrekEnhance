<template>
  <div class="sign-in-container">
    <h1>Welcome Back</h1>
    <form class="sign-in-form" @submit.prevent="submitForm">
      <input type="email" v-model="form.email" placeholder="Email" required />

      <div class="password-field">
        <input type="password" v-model="form.password" placeholder="Password" required />
        <router-link to="/forgot-password" class="forgot-password-link">
          Forgot Password?
        </router-link>
      </div>

      <button type="submit">Login</button>

      <p class="signup-link">
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignInView',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
   mounted() {
    // This runs when the component is mounted
    axios.get('http://localhost:8080/api/treks')
      .then(response => {
        this.treks = response.data; // Save data to local variable
      })
      .catch(error => {
        console.error('Failed to fetch treks:', error);
      });
  },

  methods: {
    submitForm() {
      if (!this.form.email || !this.form.password) {
        alert("Please fill in all fields.");
        return;
      }
      console.log("Logging in with:", this.form);
      alert("Logged in successful!");
    }
  }
};
</script>

<style scoped>
.sign-in-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 2rem;
  background: #fefefe;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.sign-in-container h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.sign-in-form {
  display: flex;
  flex-direction: column;
}

.sign-in-form input {
  margin-bottom: 1rem;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.sign-in-form input:focus {
  border-color: #3498db;
  outline: none;
}

.password-field {
  display: flex;
  flex-direction: column;
  position: relative;
}

.forgot-password-link {
  align-self: flex-end;
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: #be5a2b;
  text-decoration: none;
  font-weight: 500;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

.sign-in-form button {
  background-color: #3498db;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sign-in-form button:hover {
  background-color: #2980b9;
}


</style>

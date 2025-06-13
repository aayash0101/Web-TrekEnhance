<template>
  <div class="sign-up-container">
    <h1>Create A New Account</h1>
    <form class="sign-up-form" @submit.prevent="submitForm">
      <input type="text" v-model="form.username" placeholder="Username" required />
      <input type="email" v-model="form.email" placeholder="Email" required />
      <input type="password" v-model="form.password" placeholder="Password" required />
      <input type="password" v-model="form.confirmPassword" placeholder="Confirm Password" required />

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    submitForm() {
      if (this.form.password !== this.form.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // You can send this.form to your backend API
      console.log("Form submitted:", this.form);
      alert("Signup successful!");
    }
  }
}
</script>

<style scoped>
.sign-up-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.sign-up-container h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.sign-up-form {
  display: flex;
  flex-direction: column;
}

.sign-up-form input {
  margin-bottom: 1rem;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.2s;
}

.sign-up-form input:focus {
  border-color: #2ecc71;
  outline: none;
}

.sign-up-form button {
  background-color: #2ecc71;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sign-up-form button:hover {
  background-color: #27ae60;
}
</style>

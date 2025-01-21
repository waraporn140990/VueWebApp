<template>
  <nav class="navbar">
    <div class="wrapper">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo" />
        </router-link>
      </div>

      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">MyCard</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  name: "MyBar",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
/* Import Font */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/* Navbar Styles */
.navbar {
  background-color: rgba(46, 40, 40, 0.8); /* เพิ่มความโปร่งแสง */
  color: #f2f2f2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 500;
  box-shadow: 0 2px 5cm rgba(0, 0, 0, 0.2); /* ทำให้มีเงาที่นุ่มนวล */
  backdrop-filter: blur(10px); /* เบลอพื้นหลัง */
}

.wrapper {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;

  justify-content: space-between;
  padding: 0 20px;
}

.wrapper .logo img {
  width: 120px;
  height: auto;
  transition: transform 0.3s ease;
}

.wrapper .logo img:hover {
  transform: scale(1.1); /* ขยายโลโก้เมื่อวางเมาส์ */
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links li {
  list-style: none;
}

.nav-links li a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-links li a:hover {
  background-color: #0066cc; /* เปลี่ยนสีพื้นหลังเมื่อ hover */
  color: white; /* เปลี่ยนสีข้อความเมื่อ hover */
}

.nav-links .mobile-item {
  display: none;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .wrapper {
    padding: 0 10px;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li a {
    font-size: 20px;
    padding: 12px;
    width: 100%;
    text-align: center;
  }

  .nav-links .mobile-item {
    display: block;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
  }
}
</style>

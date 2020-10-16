<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap');
@import './styles/variables';
@import './styles/mixins';

* {
  margin: 0;
  padding: 0;
}
body {
  background-color: $darkBackgroundColor;
}
h1 {
  font-family: $logoFont;
  color: #ffffff;
  font-size: 25px;
}
h2 {
  font-family: $textFont;
  color:$textColor;
  font-size: 20px;
}
h3 {
  font-family: $textFont;
  color:$textColor2;
  font-size: 16px;
}
p {
  font-family: $textFont;
  color: $textColor2;
}
th, td {
  font-size: 14px;
  color: $textColor2;
  font-family: $textFont;
}
input {
  outline: none;
  border: 1px solid $mainBorderColor;
  color: $textColor;
}
input:focus {
  outline: none;
  border: 1px solid #3675F4;
}
.btn {
  width: 100px;
  height: 30px;
  outline: none;
  border: none;
  cursor: pointer;
}
.btn-main {
  color: #ffffff;
  background-color: $mainBtnColor;
  border-radius: 15px;
}
.btn-secondary {
  color: $textColor;
  background-color: #ffffff;
  border-radius: 15px;
}
.btn-secondary:hover {
  background-color: #eeeeee;
}
.btn-danger {
  color: #ffffff;
  background-color: $alertTextColor;
  border-radius: 15px;
}
.btn-danger:hover {
  background-color: #df3b3b;
}
.alert-text {
  font-family: $textFont;
  color: $alertTextColor;
  font-size: 12px;
}
a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  border: 3px solid $mainBtnColor;
  border-radius: 25px;
  font-family: $linksFontFamily;
  font-size: $linksFontSize;
  padding: 6px 15px;
  
  &.router-link-exact-active {
    color: #ffffff;
    background-color: $mainBtnColor;
  }
}
a:hover {
  background-color: $mainBtnColor;
}

</style>

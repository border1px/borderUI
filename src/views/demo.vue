<template>
  <bo-layout>
    <template v-slot:navbar>
      <bo-navbar></bo-navbar>
    </template>
    <div>
      <p>我是匿名插槽 </p>
      <p>我是匿名插槽 </p>

    </div>
    <template v-slot:toolbar>
        任意内容
        <p>我是匿名插槽 </p>
    </template>
  </bo-layout>
</template>

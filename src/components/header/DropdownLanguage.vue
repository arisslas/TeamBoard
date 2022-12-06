<template>
     <div class="lang-menu">
      <img
        data-test="select-item"
        class="flag selected-lang"
        :src="this.DF.image"
        @click="open()"
      />
      <span v-if="showFlags" class="list">
        <img
          v-for="language in languages"
          :key="language.id"
          class="flag"
          data-test="language-item"
          :src="language.image"
          @click="changeLanguage(language)"
        />
      </span>
    </div> 

  </template>
  
  <script>
  import { i18n } from '@/i18n'
  export default {
    name: 'DropdownLanguage',
    data() {
      return {
        languages: {
          ES: {
            id: 'es',
            image: require(`@/assets/language-icons/spanish.png`)
          },
          EN: {
            id: 'en',
            image: require(`@/assets/language-icons/english.png`)
          },
        },
        showFlags: false,
        DF: {
          id: 'df',
          image: require(`@/assets/language-icons/default.png`)
        }
      }
    },
    methods: {

      changeLanguage(language) {
        this.DF.image = language.image
        this.showFlags = false
        i18n.locale = language.id
      },
      open() {
        this.showFlags = !this.showFlags
      },
    }
  }
  </script>
  
  <style>
  @media (max-width: 767px) {
    .lang-menu .list {
      right: 55px !important;
    }
  }
  
  .lang-menu {
    width: auto;
    margin-top: 2px;
    margin-right: 20px;
  }
  
  .lang-menu .selected-lang {
    position: relative;
    cursor: pointer;
  }
  
  .lang-menu .list {
    position: absolute;
    top: 90px;
    right: 300px;
    width: 58px;
    height: auto;
    padding: 10px;
    border: 1px solid rgb(96, 94, 94);
    border-radius: 5px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    background-color: rgb(96, 94, 94);
  }
  
  .lang-menu .list .flag {
    justify-content: space-around;
    margin: 3px;
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .lang-menu .list .flag:hover {
    transform: scale(1.2);
  }
  
  .lang-menu .list img:first-child,
  .lang-menu .list img:nth-child(2) {
    margin-bottom: 10px;
  }
  
  .flag {
    width: 40px;
    height: 40px;
  }
  </style>
  
<template>
  <div class="wrapper fadeInDown" id="fondo">
    <div id="formContent">
      <!-- Tabs Titles -->
      <h2 :class="[{ active: !showRegister }]" v-on:click="showLogIn()"> Acceder</h2>
      <h2 :class="[{ active: showRegister }]" v-on:click="changeForm()">Registrarse </h2>

      <!-- Icon -->
      <div class="fadeIn first" id="icono">
        <img :src="imageSrc" id='icon' alt="User Icon" />
      </div>

      <!-- Login Form -->
      <div>
        <form @submit.prevent="onSubmit" class="formulario">
          <div v-if="showRegister">
            <input id='name' type="text" placeholder="name" autocomplete="off" v-on:keyup='onKeyUp($event)' />
          </div>
          <input id='email' class="fadeIn first" type="text" placeholder="email" autocomplete="off"
            v-on:keyup='onKeyUp($event)' />
          <input id='password' class="fadeIn first" type="password" placeholder="password" v-on:focus='secret()'
            v-on:blur='nosecret()' />
          <div>
            <div id="boton">
              <input type="submit" class="fadeIn first"  value="send">
            </div>
          </div>
        </form>
      </div>

      <!-- Remind Passowrd 
            <div id="formFooter">
                <a class="underlineHover" href="#">he olvidado la contraseña</a>
            </div>-->

    </div>
  </div>

</template>
<script>
import router from '@/router'
import { createToast } from '@/components/Toast'
import loginService from '@/services/loginService'
export default {
  name: 'LoginModal',
  data() {
    return {
      imageSrc: require('@/assets/img/look/5.png'),
      mail: '',
      password: '',
      name: '',
      showRegister: false
    }
  },
  methods: {
    //animacion login
    secret() {
      let cont = 1;
      console.log(cont);
      const cubrirOjos = setInterval(() => {
        this.imageSrc = require('@/assets/img/secret/' + cont + '.png');
        if (cont < 6) {
          cont++;
        } else {
          clearInterval(cubrirOjos);
        }
      }, 60);
    },

    nosecret() {
      let cont = 6;
      const descubrirOjos = setInterval(() => {
        this.imageSrc = require('@/assets/img/secret/' + cont + '.png');
        if (cont > 1) {
          cont--;
        } else {
          clearInterval(descubrirOjos);
        }
      }, 60);
    },

    onKeyUp(event) {

      this.passwordLenght = (event.target).value.length;
      if (this.passwordLenght >= 0 && this.passwordLenght <= 2) {
        this.imageSrc = require('@/assets/img/look/1.png');
      } else if (this.passwordLenght >= 3 && this.passwordLenght <= 5) {
        this.imageSrc = require('@/assets/img/look/2.png');
      } else if (this.passwordLenght >= 6 && this.passwordLenght <= 8) {
        this.imageSrc = require('@/assets/img/look/3.png');
      } else if (this.passwordLenght >= 9 && this.passwordLenght <= 11) {
        this.imageSrc = require('@/assets/img/look/4.png');
      } else if (this.passwordLenght >= 12 && this.passwordLenght <= 13) {
        this.imageSrc = require('@/assets/img/look/5.png');
      } else if (this.passwordLenght >= 14 && this.passwordLenght <= 16) {
        this.imageSrc = require('@/assets/img/look/6.png');
      } else if (this.passwordLenght >= 17 && this.passwordLenght <= 19) {
        this.imageSrc = require('@/assets/img/look/7.png');
      } else if (this.passwordLenght >= 20 && this.passwordLenght <= 22) {
        this.imageSrc = require('@/assets/img/look/8.png');
      }
      else {
        this.imageSrc = require('@/assets/img/look/9.png');
      }

    },

    onSubmit(submitEvent) {
      this.mail = submitEvent.target.elements.email.value
      this.password = submitEvent.target.elements.password.value
      if(this.checkForm()){
      console.log(this.mail)
      console.log(this.password)
      this.showRegister ?
        (this.signUp(this.mail, this.password),
        this.name = submitEvent.target.elements.name.value) :
        this.signIn(this.mail, this.password)
     }
    },

    signIn(mail, password) {
      console.log('in')
      loginService.signIn(mail, password)
        .then((user) => {
          if(user.data)
          {router.push({ path: '/tasks' })}
          if(user.error){
            this.showErrorToast(''+user.error)
            console.log(user.error)
          }
         
        })
        .catch((error)=> {if(error){
          console.log(error)
        }});
    },

    signUp(mail, password) {
      console.log('up')
      loginService.signUp(mail, password)
        .then((resp) =>
        {
          this.updatePersonalData(resp.data.user.id, this.name),
          router.push({ path: '/tasks' })
        } )
    
    },

    changeForm() {
      this.showRegister = true
      console.log(this.showRegister)
    },

    showLogIn() {
      this.showRegister = false
      console.log(this.showRegister)
    },

    updatePersonalData(id, name) {
      loginService.updatePersonalData(id, name).then((data) => console.log(data))
    },

    checkForm(){
      console.log('*')
      if (this.mail && this.password) {
        console.log('to gucci')
        return true;
      }
      if (!this.mail) {
        this.showErrorToast('mail required')
      }
      if (!this.password) {
        this.showErrorToast('pass required.')
      }

    },
    showErrorToast(mensaje) {
      const toastError = createToast(mensaje)
      this.$toast.error(toastError)
    },
    
  }

}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

/* BASIC */

body {
  background-color: #656565;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}



h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}



/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

#icono {
  margin-top: 6%;
  margin-bottom: 6%;
  margin-left: 40%;
}

#boton {
  margin-top: 6%;
  margin-bottom: 6%;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #476b6b;
}


/* FORM TYPOGRAPHY*/

input[type=button],
input[type=submit],
input[type=reset] {
  background-color: #476b6b;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover,
input[type=submit]:hover,
input[type=reset]:hover {
  background-color: #476b6b;
}

input[type=button]:active,
input[type=submit]:active,
input[type=reset]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=password] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}


input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type=text]:placeholder {
  color: #cccccc;
}



/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}


/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}



/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width: 40%;
  border-radius: 100%;
}

* {
  box-sizing: border-box;
}
</style>
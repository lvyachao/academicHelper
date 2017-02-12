<template>
<nav>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo">Academic Helper</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a>BETA</a></li>
        </ul>
    </div>
  </nav>
<div class="app section no-pad-bot" id="index-banner">
  <div class="container">
    <br><br>
    <h1 class="header center orange-text">Please input url of the pdf</h1>

    <div class="row center">
      <form class="col s12 urlPdf">
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" v-model="inputUrl"></textarea>
            <label for="textarea1">URL</label>
<!--             <my-button :label="Submit" @click="addOne"></my-button>
 -->
            <button class="btn waves-effect waves-light red" v-on:click="submitPdf" name="action">Submit
            </button>           
          </div>

        </div>
      </form>
    </div>
    <br><br>

  </div>
</div>
</template>
<!-- 
<script>
// import {Session} from 'meteor/session';

// Session.setDefault("counter", 0);

// let labels = ['Click me!', 'Click me again!', 'Here! Click here!', 'Again! Again!',
// 'Don\'t click me! No, I\'m just kidding. You can.', 'You like that?',
// 'Can you stratch me in the back please?', 'You are soooo nice! Click!',
// 'Hmmmm...', 'You know, you are wasting time clicking me.',
// 'No really, you can click me as much as you want.', 'Click me to level up!'];

export default {
  data() {
    return {
      buttonLabel: 'Click me!',
      count: 0
    }
  },
  meteor: {
    data: {
      count() {
        return Session.get('counter');
      }
    }
  },
  methods: {
    submitPdf(e) {
      // Session.set('counter', this.count + 1);
      e.preventDefault();
      console.log("msq");
    }
  }
}
</script>

<style>
body {
/*  margin: 30px;
*/}

a {
  color: #40b883;
  text-decoration: none;
}

h1 {
  font-weight: normal;
}
</style>
 -->
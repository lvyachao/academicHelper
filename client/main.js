// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';

// Main app
// import App from '/imports/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    el: 'body',
    ready: function() {
      self = this;
      // PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js';
    },
    replace: false,
    // components: {
    //   App
    // },
    data:{
      inputUrl:''
    },
    methods:{
      submitPdf: function(e) {
      e.preventDefault();
      this.test();
      // this.getText(self.inputUrl).then(function (text) {
      //     alert('parse ' + text);
      //   }, function (reason) {
      //     console.error(reason);
      //   });
      },
      test: function(){
        console.log("sad");
      }
    }

  });
});

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
        Meteor.call('test', self.inputUrl, function(err,response) {
        if(err) {
          console.log("error");
          return;
        }
        console.log("sent");
        console.log(response);
        });
      },
      test: function(){
        console.log("sad");
      }
    }

  });
});

import { Meteor } from 'meteor/meteor';
const Fs = require('fs');
const Download = require('download');

Meteor.startup(() => {
  Meteor.methods({

	  test: function (url) {

		var base = process.env.PWD;
		var DOWNLOAD_DIR = base+'/private/downloaded';
		console.log(DOWNLOAD_DIR);
		Download(url, DOWNLOAD_DIR).then(() => {
	    	console.log('done!');
		});
		if(url==undefined || url.length<=0) {
	      throw new Meteor.Error(404, "Please enter your url");
		}
	    return "Welcome " + url;
	  }
	});
});

require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery'
	},
	shim: {
	}
});

if (!window.requireTestMode) {
	require(['app', 'jquery'], function (app, $) {
		'use strict';
		// use app here
		console.log(app);
		console.log('Running jQuery %s', $().jquery);
	});
}

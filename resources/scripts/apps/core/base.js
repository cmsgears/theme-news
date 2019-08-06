// == Application =========================

jQuery( document ).ready( function() {

	// Register App
	var app	= cmt.api.root.registerApplication( 'newsCore', 'cmt.api.Application', { basePath: ajaxUrl } );

	// Register Listeners
	cmt.api.utils.request.register( app, jQuery( '[cmt-app=newsCore]' ) );
});

// == App Namespace =======================

var news = news || {};

news.core = news.core || {};

// == Controller Namespace ================

news.core.controllers = news.core.controllers || {};

// == Service Namespace ===================

news.core.services = news.core.services || {};

// == Additional Methods ==================

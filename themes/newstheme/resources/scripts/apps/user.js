var user	= null;

jQuery(document).ready( function() {

	user		= new cmt.api.Application( { basePath: ajaxUrl } );

	var userAppControllers		= [];

	userAppControllers[ 'user' ] 	= 'UserController';

	jQuery( '[cmt-app=user]' ).cmtRequestProcessor({
		app: user,
		controllers: userAppControllers
	});
});

// FormController ----------------------------------------

// UserController --------------------------------------------

UserController	= function() {};

UserController.inherits( cmt.api.controllers.BaseController );

UserController.prototype.avatarActionPre = function( requestElement, response ) {
    alert('hello');
    return true;
};

UserController.prototype.avatarActionPost = function( success, requestElement, response ) {

	if( success ) {
	    alert('hello');
	   // requestElement.closest( '.post-action' ).css('display':'none');

	}
};

UserController.prototype.profileActionPost = function( success, requestElement, response ) {

	if( success ) {

		
	}
};

UserController.prototype.accountActionPost = function( success, requestElement, response ) {

	if( success ) {

	}
};

UserController.prototype.addressActionPost = function( success, requestElement, response ) {

	if( success ) {

	}
};

UserController.prototype.settingsActionPost = function( success, requestElement, response ) {

	if( success ) {

	}
};
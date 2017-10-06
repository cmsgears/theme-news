var mainApp	= null;

jQuery(document).ready( function() {

	mainApp		= new cmt.api.Application( { basePath: ajaxUrl } );

	var appControllers				= [];

	appControllers[ 'form' ] 			= 'FormController';
	appControllers[ 'attribute' ] 			= 'AttributeController';
	appControllers[ 'user' ] 			= 'UserController';
	appControllers[ 'post' ] 			= 'PostController';

	jQuery(  '[cmt-app=mainApp]').cmtRequestProcessor({
		app: mainApp,
		controllers: appControllers
	});
});

// FormController ----------------------------------------

// TagController --------------------------------------------

AttributeController	= function() {};

AttributeController.inherits( cmt.api.controllers.BaseController );


AttributeController.prototype.addAttributeActionPre = function( requestElement, response ) {
    
    return true;
};
AttributeController.prototype.addAttributeActionPost = function( success, requestElement, response ) {

    if( success ) {

	jQuery( "#popup-attribute" ).hide();
	addAttribute(response.data);
	initAttributeIndexing();
    }
};

PostController	= function() {};
PostController.inherits( cmt.api.controllers.BaseController );
PostController.prototype.deletePostActionPre = function( requestElement, response ) {

    var action	= requestElement.attr( 'action' );
    var id	= cmt.utils.data.getParameterByName( 'id', action );
    id		= parseInt( id );

    if( id > 0 ) {

	var result = confirm( 'Are you sure you want to delete this post ?' );

	if( result ) {

	    return true;
	}
    }

    return false;
};
PostController.prototype.deletePostActionPost = function( success, requestElement, response ) {

    if( success ) {
	requestElement.closest( '.post' ).remove();

    }
};



AttributeController.prototype.deleteAttributeActionPre = function( requestElement, response ) {

	var action	= requestElement.attr( 'action' );
	var id		= cmt.utils.data.getParameterByName( 'id', action );
	id			= parseInt( id );

	if( id > 0 ) {

		var result = confirm( 'Are you sure you want to delete this attribute ?' );

		if( result ) {

		    return true;
		}
	}

	return false;
};
AttributeController.prototype.deleteAttributeActionPost = function( success, requestElement, response ) {

	if( success ) {

		requestElement.closest( '.attribute' ).remove();

		initAttributeIndexing();
	}
};


UserController	= function() {};

UserController.prototype.settingsAttributeActionPre = function( requestElement, response ) {

    return true;
};

UserController.prototype.settingsAttributeActionPost = function( success, requestElement, response ) {

	if( success ) {

		requestElement.closest( '.attribute' ).remove();

		initAttributeIndexing();
	}
};
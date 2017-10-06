var main	= null;

jQuery( document ).ready( function() {

	// App
	main	= new cmt.api.Application( { basePath: ajaxUrl } );

	// Controllers
	var controllers	= [];

	controllers[ 'meta' ]		= 'MetaController';
	controllers[ 'notification' ]	= 'NotificationController';
	controllers[ 'gallery' ]	= 'GalleryController';
	controllers[ 'category' ]	= 'CategoryController';
	controllers[ 'tag' ]		= 'TagController';

	// Init App
	jQuery( '[cmt-app=main]' ).cmtRequestProcessor({
	   
		app: main,
		controllers: controllers
	});
});

// == Default Controller ==================

cmt.api.controllers.DefaultController.prototype.fileActionPost = function( success, requestElement, response ) {

    if( success ) {

	// Handle file uploads
    }
};

// == Meta Controller =====================

MetaController	= function() {};

MetaController.inherits( cmt.api.controllers.BaseController );

MetaController.prototype.addActionPost = function( success, requestElement, response ) {

	if( success ) {

		var source 		= document.getElementById( 'attributeTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var output 		= template( response.data );

		jQuery( '.wrap-attributes' ).append( output );

		var element		= jQuery( '.wrap-attributes' ).last();

		// Popups
		element.find( '.popup-trigger' ).click( function() {

			bindPopups( jQuery( this ) );
		});

		element.find( '.cscroller' ).mCustomScrollbar( { autoHideScrollbar: true } );

		requestElement.closest( '.popup' ).fadeOut( 'fast' );
	}
};

MetaController.prototype.updateActionPost = function( success, requestElement, response ) {

	if( success ) {

		var attrib	= jQuery( '#attribute-' + response.data.id );

		attrib.find( '.title' ).html( response.data.name );
		attrib.find( '.attribute-content .mCSB_container' ).html( response.data.value );

		requestElement.closest( '.popup' ).fadeOut( 'fast' );
	}
};

MetaController.prototype.deleteActionPost = function( success, requestElement, response ) {

	if( success ) {

		jQuery( '#attribute-' + response.data.id ).closest( '.col' ).remove();

		requestElement.closest( '.popup' ).fadeOut( 'fast' );
	}
};

// == Notification Controller =============

NotificationController	= function() {};

NotificationController.inherits( cmt.api.controllers.BaseController );

NotificationController.prototype.toggleReadActionPost = function( success, requestElement, response ) {

	if( success ) {

		cmt.utils.data.refreshGrid();
	}
};

NotificationController.prototype.trashActionPost = function( success, requestElement, response ) {

	if( success ) {

		cmt.utils.data.refreshGrid();
	}
};

NotificationController.prototype.deleteActionPost = function( success, requestElement, response ) {

	if( success ) {

		cmt.utils.data.refreshGrid();
	}
};

NotificationController.prototype.bulkActionPost = function( success, requestElement, response ) {

	if( success ) {

		cmt.utils.data.refreshGrid();
	}
};

// == Gallery Controller ==================

GalleryController	= function() {};

GalleryController.inherits( cmt.api.controllers.BaseController );

GalleryController.prototype.createItemActionPost = function( success, requestElement, response ) {

	if( success ) {

		var gallery			= requestElement.closest( '.box-gallery' );
		var itemUploader	= gallery.find( '.item-uploader' );

		itemUploader.find( '.post-action' ).fadeOut();
		itemUploader.find( '.preview' ).empty();
		itemUploader.find( '.preloader .preloader-bar' ).css( 'width', 0 );
		itemUploader.find( '.wrap-chooser' ).fadeIn();
		itemUploader.find( '.wrap-file' ).html( '<i class="cmti cmti-5x cmti-image"></i>' );

		var source 		= document.getElementById( 'galleryItemTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var data		= { item: response.data };
		var output 		= template( data );
		var itemsWrap	= gallery.find( '.wrap-items ul' );

		itemsWrap.append( output );

		itemsWrap.find( '[cmt-app=main]' ).cmtRequestProcessor({
			app: mainApp
		});
	}
};

GalleryController.prototype.deleteItemActionPost = function( success, requestElement, response ) {

	if( success ) {

		jQuery( '#frm-delete-item-' + response.data ).parent().remove();
	}
};

// == Tag Controller ======================

TagController	= function() {};

TagController.inherits( cmt.api.controllers.BaseController );

TagController.prototype.createActionPost = function( success, requestElement, response ) {

	if( success ) {

		var tags		= requestElement.closest( '.mapper-tag' ).find( '.wrap-tags' );

		var source 		= document.getElementById( 'tagTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var data		= { tags: response.data };
		var output 		= template( data );

		tags.html( output );

		main.registerElements( tags.find( '.tag' ) );
	}
};

TagController.prototype.deleteActionPost = function( success, requestElement, response ) {

	if( success ) {

		jQuery( '#frm-delete-tag-' + response.data ).parent().remove();
	}
};

// == Category Controller =================

CategoryController	= function() {};

CategoryController.inherits( cmt.api.controllers.BaseController );

CategoryController.prototype.deleteActionPost = function( success, requestElement, response ) {

	if( success ) {

		cmt.utils.data.refreshGrid();
	}
};

CategoryController.prototype.autoSearchActionPre = function( requestElement ) {

    var autoFill	= requestElement.closest( '.auto-fill' );
    var type 		= autoFill.find( 'input[name=type]' ).val();
    var keyword 	= autoFill.find( '.auto-fill-text' ).val();

    if( keyword.length <= 0 ) {

	var widget		= requestElement.parent();
	var itemList	= widget.find( '.auto-map .item-list' );

	itemList.slideUp();

	return false;
    }

    this.requestData	= 'type=' + type + '&name=' + keyword;

    return true;
};

CategoryController.prototype.autoSearchActionPost = function( success, requestElement, response, child ) {

	if( success ) {

		var data			= response.data;
		var listHtml		= '';
		var wrapItemList	= requestElement.find( '.wrap-auto-list' );
		var itemList		= requestElement.find( '.auto-list' );

		for( i = 0; i < data.length; i++ ) {

			var obj = data[ i ];

			listHtml += '<li data-id="' + obj.id + '">' + obj.name + '</li>';
		}

		if( listHtml.length == 0 ) {

			listHtml	= '<li>No matching results found</li>';

			itemList.html( listHtml );
		}
		else {

			itemList.html( listHtml );

			requestElement.find( '.auto-list li' ).click( function() {

				var autoFill	= requestElement.closest( '.auto-fill' );
				var wrapper		= requestElement.parent().find( '.wrap-field-auto' );
				var id			= jQuery( this ).attr( 'data-id' );
				var name		= jQuery( this ).html();

				autoFill.find( '.trigger-map-category input[name=categoryId]' ).val( id );

				autoFill.find( '.trigger-map-category .cmt-click' )[0].click();

				wrapItemList.slideUp();
			});
		}

		wrapItemList.slideDown();
	}
};

CategoryController.prototype.mapModelCategoryActionPre = function( requestElement ) {

	var categoryId	= requestElement.find( 'input[name=categoryId]' ).val();
	categoryId		= parseInt( categoryId );

	if( categoryId > 0 ) {

		return true;
	}

	return false;
};

CategoryController.prototype.mapModelCategoryActionPost = function( success, requestElement, response ) {

	if( success ) {

		var data			= response.data;
		var listHtml		= '';
		var wrapper			= requestElement.closest( '.wrap-categories' );
		var itemList		= wrapper.find( '.auto-mapped .item-list' );

		for( i = 0; i < data.length; i++ ) {

			var obj = data[ i ];

			listHtml += "<li><span class='value'>" + obj.name + "</span><i data-id='" + obj.id + "' class='cmti cmti-close-c  close cmt-click'></i></li>";
		}

		itemList.html( listHtml );

		main.registerElements( wrapper.find( '.auto-mapped' ) );
	}
};

CategoryController.prototype.deleteModelCategoryActionPre = function( requestElement ) {

	var categoryId	= this.requestTrigger.attr( 'data-id' );
	categoryId		= parseInt( categoryId );

	if( categoryId > 0 ) {

		requestElement.find( 'input[name=categoryId]').val( categoryId );

		return true;
	}

	return false;
};

CategoryController.prototype.deleteModelCategoryActionPost = function( success, requestElement, response ) {

	if( success ) {

		this.requestTrigger.parent().remove();
	}
};
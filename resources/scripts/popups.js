jQuery( document ).ready( function() {

	initPopups();
});

// == Popups ==============================

function initPopups() {

	// Popups
	jQuery( '.popup-trigger' ).click( function() {

		bindPopups( jQuery( this ) );
	});
}

function bindPopups( trigger ) {

	var selector = trigger.attr( 'popup' );

	showPopup( '#' + selector );

	jQuery( '#' + selector ).find( '.message' ).html( '' );

	switch( selector ) {

		// Popup Cases
	}
}

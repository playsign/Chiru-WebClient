// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {
    var ECAvatar, util;

    util = namespace.util;


    ECAvatar = namespace.ECAvatar = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties


    };

    namespace.storeComponent( 1, "EC_Avatar", ECAvatar );

    ECAvatar.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));

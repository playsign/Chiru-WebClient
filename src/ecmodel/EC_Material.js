// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    var ECMaterial, util;

    util = namespace.util;

    /**
     * ECMaterial constructor
     *
     * @constructor
     * @augments Component
     * @name ECMaterial
     * @type Function
     * @param {object} sceneMgr Pointer to scene manager.
     */

    ECMaterial = namespace.ECMaterial = function ( sceneMgr ) {
        //Inherit component properties
        namespace.Component.call( this, sceneMgr );


    };

    namespace.storeComponent( 31, "EC_Material", ECMaterial );

    ECMaterial.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));

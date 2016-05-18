var express = require( 'express' );
var router = express.Router();
var mongoose = require( 'mongoose' );
// MongoDB用ファイルを指定
var mongo = require( '../lib/mongo' );

// For Cross Origin
router.all( '/*', function ( req, res, next ) {
    res.contentType( 'json' );
    res.header( 'Access-Control-Allow-Origin', '*' );
    next();
} );

// GET find
router.get( '/', function ( req, res ) {
   mongo.find( 'todo_list', {}, {},
       function ( list ) {
            res.status(200).send( list );
        }
    );
} );

// GET find :type
router.get( '/:type', function ( req, res ) {
    mongo.find( 'todo_list', {
          type: req.params.type
        }, {},
        function ( list ) {
            res.send( list );
        }
    );
} );

// POST insert data
//router.post( '/', function ( req, res ) {
//    mongo.insert( 'mean', {
//            name: req.body.name,
//            description: req.body.description,
//            evaluation: req.body.evaluation,
//            picture: req.body.picture
//        }, {},
//        function ( result ) {
//            res.send( result );
//        }
//    );
//} );

// PUT update data
router.put( '/:type', function ( req, res ) {
    mongo.update( 'todo_list', {
          type: req.params.type
        }, {
          type: req.params.type,
          todos: req.body.todos
        }, {
          upsert: true
        },
        function ( result ) {
            res.send( result );
        }
    );
} );

// DELETE remove data
//router.delete( '/:id', function ( req, res ) {
//    mongo.remove( 'mean', {
//            _id: mongoose.Types.ObjectId( req.params.id )
//        }, {
//            justOne: false
//        },
//        function ( result ) {
//            res.send( result );
//        }
//    );
//} );

module.exports = router;

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {    
	   spinning_gallery: './js/spinning_gallery.js'
  	},
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].bundle.js"
    },
    resolve: {
    		extensions: ['','.js','.jsx']
    },
    
  
    module: {
        loaders: [
        		{
        			test: /\.js$/,
        			loader: 'babel-loader',
        			include: [
        				path.resolve(__dirname, "js")
        			],
        			query:{
        				presets: ["es2015", "react"]
        			}        		
        		},
        		{
        			test: /\.jsx$/,
        			loader: 'babel-loader',
        			query:{
        				presets: ["es2015", "react"]
        			}  
        		},
            { 
            		test: /\.css$/,
            		include: [
            			path.resolve(__dirname,'css')
            		],
            		loader: "style!css" 
            }
        ]
    }
};
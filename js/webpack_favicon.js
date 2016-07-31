'user strict'
import React from 'react';
import ReactDom from 'react-dom';
//#85a6d9
//#7797cb
var Plane = React.createClass({
	render: function(){
		var width = this.props.width;
		var height = this.props.height;
		var angleX = this.props.angleX == null ? '' : 'rotateX(' + this.props.angleX + 'deg)'; 
		var angleY = this.props.angleY == null ? '' : 'rotateY(' + this.props.angleY + 'deg)';
		var angleZ = this.props.angleZ == null ? '' : 'rotateZ(' + this.props.angleZ + 'deg)';
		var planeStyle = {
			width: width + 'px',
			height: height + 'px',
			position: 'absolute',
			top: '50%',
			left: '50%',
			opacity: '0.4',
			marginLeft: '-' + (width / 2) + 'px',
			marginTop: '-' + (height / 2) + 'px',
			transition: 'transform 1s',			
			transform: angleX + ' ' + angleY + ' ' + angleZ + ' translateZ(' + (width / 2) + 'px)',
			border: 'solid 1px #009ACD',
			background: 'radial-gradient(white 5%, #009ACD 95%)'
		};
		return (
			<div style={planeStyle}></div>	
		);
		
	}
});

var Box = React.createClass({
	 render: function(){
	 	var color = '#7797cb',
	 		width = 100,
	 		height = 100;
	 		
	 	var divStyle = {
	 		position: 'absolute',
		    top: '50%',
		    left: '50%',
		    transformStyle: 'preserve-3d',
		    transform: 'rotateX(-30deg)'
	 	}
	 	return(
	 		<div style={divStyle}>
	 			<Plane width={width} height={height} color={color} angleY={45}></Plane>
	 			<Plane width={width} height={height} color={color} angleY={135}></Plane>
	 			<Plane width={width} height={height} color={color} angleY={225}></Plane>
	 			<Plane width={width} height={height} color={color} angleY={315}></Plane>
	 			<Plane width={width} height={height} color={color} angleZ={45} angleX={90}></Plane>
	 			<Plane width={width} height={height} color={color} angleZ={45} angleX={270}></Plane>
	 		</div>
	 	)
	 }
});

var Wrapper = React.createClass({
	render: function(){
		var wrapperStyle = {
			perspective: '1100px',
			width: '100%',
			height: '200px',			
			position: 'relative',
			transformStyle: 'preserve-3d'
		};
		
		return (
			<div style={wrapperStyle}>
				<Box></Box>
			</div>
		);
	}
});

ReactDom.render(
	<Wrapper></Wrapper>,
	document.getElementById('content')
);

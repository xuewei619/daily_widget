'user strict'
import React from 'react';
import ReactDom from 'react-dom';

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
			border: 'solid 1px ' + this.props.color,
			background: this.props.background
		};
		return (
			<div style={planeStyle}></div>	
		);
		
	}
});

var Box = React.createClass({
	
	getInitialState: function(){
		return {
			angle: 0
		}
	},
	anti_clockwise: function(){
		var angle = this.state.angle + 360;
		this.setState({angle: angle});
	},	
	clockwise: function(){
		var angle = this.state.angle - 360;
		this.setState({angle: angle});
	},
	 render: function(){
	 	var color = this.props.color,
	 		width = this.props.width,
	 		height = this.props.height,
	 		background = this.props.background;
	 		
	 	var divStyle = {
	 		position: 'absolute',
		    top: '50%',
		    left: '50%',
		    transformStyle: 'preserve-3d',
		    transform: 'rotateX(-30deg) rotateY(' + this.state.angle + 'deg)',
		    transition: 'transform 1s'
	 	}
	 	return(
	 		<div style={divStyle}>
	 			<Plane width={width} height={height} color={color} background={background} angleY={45}></Plane>
	 			<Plane width={width} height={height} color={color} background={background} angleY={135}></Plane>
	 			<Plane width={width} height={height} color={color} background={background} angleY={225}></Plane>
	 			<Plane width={width} height={height} color={color} background={background} angleY={315}></Plane>
	 			<Plane width={width} height={height} color={color} background={background} angleZ={45} angleX={90}></Plane>
	 			<Plane width={width} height={height} color={color} background={background} angleZ={45} angleX={270}></Plane>
	 		</div>
	 	)
	 }
});

var Wrapper = React.createClass({
	
	handleClick: function(){
		this.refs.smallBox.anti_clockwise();
		this.refs.bigBox.clockwise();
	},	
	componentDidMount: function(){
		setInterval(function(){
			this.refs.smallBox.anti_clockwise();
			this.refs.bigBox.clockwise();
		}.bind(this),2000);
	},
	render: function(){
		var wrapperStyle = {
			perspective: '1100px',
			width: '100%',
			height: '200px',			
			position: 'relative',
			transformStyle: 'preserve-3d'
		};
		
		var smallBoxWidth = 50,
			smallBoxHeight = 50,
			smallBoxColor = '#000',
			smallBoxBack = '#000',
			bigBoxWidth = 100,
			bigBoxHeight = 100,
			bigBoxColor = '#7797cb',
			bigBoxBack = 'radial-gradient(white 5%, #7797cb 95%)';
		
		return (
			<div style={wrapperStyle} onClick={this.handleClick}>
				<Box ref={'smallBox'} width={smallBoxWidth} height={smallBoxHeight} color={smallBoxColor} background={smallBoxBack}></Box>
				<Box ref={'bigBox'} width={bigBoxWidth} height={bigBoxHeight} color={bigBoxColor} background={bigBoxBack}></Box>
			</div>
		);
	}
});

ReactDom.render(
	<Wrapper></Wrapper>,
	document.getElementById('content')
);

'use strict'
import React from 'react';
import ReactDOM from 'react-dom';

var Item = React.createClass({	
	handleClick: function(){
		this.props.spin();
	},
	render: function(){
		const itemStyle = {
			width: '100px',
			height: '100px',
			position: 'absolute',
			top: '50%',
			left: '50%',
			marginLeft: '-50px',
			marginTop: '-50px',
			transform: 'rotateY(' + this.props.angle + 'deg) translateZ(110px)' ,
			transition: 'transform 1s',
			backgroundColor: this.props.color,
			opacity: '0.4'
		};
		return (			
			<div style={itemStyle} onClick={this.handleClick}></div>
		);
	}
});

var randomColor = function(){
	var d = parseInt(Math.random() * 16777215);
	return d.toString(16);
}

var Wrapper = React.createClass({
	getInitialState: function(){
		let itemCount = this.props.count;
		let angle = parseInt(360 / itemCount);
		var itemsData = [];
		for(let i = 0;i < itemCount;i++){
			var data = {
				color: '#' + randomColor(),
				angle: angle * i
			}
			itemsData.push(data);
		}
		return {
			itemAngle: angle,
			itemsData: itemsData
		};
	},	
	spin: function(){			
		let itemsData = this.state.itemsData;
		let itemAngle = this.state.itemAngle;
		for(let i = 0; i < itemsData.length;i++){
			itemsData[i].angle -= itemAngle;			
		}		
		this.setState({
			itemAngle: itemAngle,
			itemsData: itemsData
		});						
	},
	render: function(){
		const style = {
			perspective: '400px',
			width: '100%',
			height: '200px',			
			position: 'relative',
			transformStyle: 'preserve-3d'
		};		
		
		var itemsData = this.state.itemsData;
		var items = [];
		for(let i = 0;i < itemsData.length;i++){
			let itemColor = itemsData[i].color;
			let itemAngle = itemsData[i].angle;
			let itemKey = i + '';
			items.push(<Item spin={this.spin} key = {itemKey} color = {itemColor} angle = {itemAngle}></Item>);
		}
		
		return(
			<div style={style} ref="wrapper">				
				{items}
			</div>
		);
	}
});




ReactDOM.render(	
		<Wrapper count="6"></Wrapper>,
	document.getElementById('content')
);





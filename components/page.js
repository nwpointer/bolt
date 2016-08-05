import React from 'react'

function flaten(p){
	var np = Object.assign({}, p);
	delete np.children;
	return np
}

const Page = function({title, ...props}){
	console.log(props.children)
	return(
	<html lang="en">
	<head>
		<meta charSet="UTF-8"/>
		<title>{title}</title>
		<link rel="stylesheet" href="./styles/main.css"/>
	</head>
	<body>
		{props.children}
		<script	src="assets/bundle.js"></script>
	</body>
	</html>
)}

export default Page

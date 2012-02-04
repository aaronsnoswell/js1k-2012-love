with(Math){
	with(a){
		f="fillRect",m="getImageData",d=[],g=[],h=[999,999,0,0],k=(new Date).getTime();
		c.width=500,c.height=400;
		
		function i(e,b,f,n){for(var l=0;l<e;l+=f)for(var m=0;m<b;m+=f)n(l,m,f)}
		z=function(){a.clearRect(0,0,c.width,c.height)};
		
		textBaseline="bottom",font="300pt arial",lineWidth=10;
	
		fillText("♥",100,350);
		var j=a[m](0,0,c.width,c.height);
		i(j.width,j.height,5,function(e,b){
			10<=j.data[4*(e+b*j.width)+3]&&g.push([e,b])
		});
	
		z();
	
		strokeText("♥",100,350);
		j=a[m](0,0,c.width,c.height);
		i(j.width,j.height,5,function(e,b){
			10<=j.data[4*(e+b*j.width)+3]&&(d.push([e,b]),
				e<h[0]&&(h[0]=e),
				e>h[2]&&(h[2]=e),
				b<h[1]&&(h[1]=b),
				b>h[3]&&(h[3]=b))
		});
		q=(h[0]+h[2])/2;
	
		(function o(){
			window.setTimeout(function(){
				k+=(new Date).getTime()-k;
				z();
				fillStyle="#f00";
				for(s in g) {
					var x=g[s][0],y=g[s][1];
					a[f](x-2.5+sin(k/500+y/80)*(x-q)+10,y-2.5,5,5)
				}
				fillStyle="#000";
				for(s in d) {
					var x=d[s][0],y=d[s][1];
					a[f](x-2.5+sin(k/500+y/80)*(x-q)+10,y-2.5,5,5)
				}
				o()
			},1/30)
		})()
	}
}
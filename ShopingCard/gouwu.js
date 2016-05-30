// JavaScript Document]
window.onload=function(){
	if(!document.getElementsByClassName){
		document.getElementsByClassName=function(cls){
		    var ret=[];
			var els=document.getElementsByTagName('*');
			for(var i=0,len=els.length;i<len;i++){
				if(els[i].className===cls||els[i].className.indexOf(cls>=0){
				   ret.push(els[i]);
				}
			}
		}
		}
	var cartTable=document.getElementById('cartTable');
	var tr=cartTable.children[1].rows;
	var checkInputs=document.getElementsByClassName('check');
	var checkAllInputs=document.getElementsByClassName('check-all')
}
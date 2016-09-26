// The MIT License (MIT)

// typer.js | Copyright (c) 2016 Ciobanu Stefan | http://grimworks.esy.es/

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var elementsAffected = 0;
var stopfilter = false;


function filterHidden(elements){
if(stopfilter == false){
		for (i=0; i<elements.length; i++) {
				 $(elements[i]).css('display','none');
				 
		}
}
stopfilter = true;	
	
}

function mimicInput(elem,speed,effect,start){

	
	
    filterHidden(elem);
    var selectedElement = elem[start]; 
	
	$(selectedElement).css('display','block')
	
	var inputText = $(selectedElement).html() || "";
	
	if(inputText.indexOf('<br>') > -1){
	var inputText_default = inputText.replace(/<br>/g, '/');
	}else{
	var inputText_default = inputText;
	}
	
	var typeSpeed = speed[start];  
	var CharIteration = 0;
	var ApplyEffect = effect[start];
	var NewChar;
	
	//fx variables
	var direction = 'up';
	var rotate = 0;
	
	
	$(selectedElement).html('');

		
			var typer = setInterval(function(){
				
			if(parseInt(CharIteration) < inputText_default.length +1)	{
				
            if(inputText_default[CharIteration] == '/' )
			{
				NewChar  =  '</br>';
			}
			else
			{   
			     if(ApplyEffect != 'none'){
					   if(inputText_default[CharIteration  - 1] == " "){
		     	           NewChar =  '<div id="'+CharIteration+'" style="display:none;width:auto;float:left;" class="typer-affected">&nbsp;'+inputText_default[CharIteration]+'</div>';
					   }else{
					      NewChar =  '<div id="'+CharIteration+'" style="display:none;width:auto;float:left;" class="typer-affected">'+inputText_default[CharIteration]+'</div>';
					   }
				 }
				 else 
				 {
					 NewChar =  inputText_default[CharIteration];
				 }
				
			}
			if(ApplyEffect != 'none'){
			$(selectedElement).append(NewChar.replace('undefined',''));
			}else{
			$(selectedElement).append(NewChar);
			}
           

			
					if(ApplyEffect == 'fade'){
						$('#'+CharIteration).toggle( "fade" );
					}
					else if(ApplyEffect == 'bounce'){
						$('#'+CharIteration).toggle( "bounce" );
					}
					else if(ApplyEffect == 'fold'){
						$('#'+CharIteration).toggle( "fold" );
					}
					else if(ApplyEffect == 'highlight'){
						$('#'+CharIteration).toggle( "highlight" );
					}
					else if(ApplyEffect == 'puff'){
						$('#'+CharIteration).toggle( "puff" );
					}
					else if(ApplyEffect == 'pulsate'){
						$('#'+CharIteration).toggle( "pulsate" );
					}
					else if(ApplyEffect == 'scale'){
						$('#'+CharIteration).toggle( "scale" );
					}
					else if(ApplyEffect == 'shake'){
						$('#'+CharIteration).toggle( "shake" );
					}
					else if(ApplyEffect == 'slide'){
						$('#'+CharIteration).toggle( "slide" );
					}
					else if(ApplyEffect == 'blind'){
						$('#'+CharIteration).toggle( "blind" );
					}
					else if(ApplyEffect == 'explode'){
						$('#'+CharIteration).toggle( "explode" );
					}
					else if(ApplyEffect == 'drop-up'){
						$('#'+CharIteration).css('margin-top','50px').css('display','block').css('opacity','0').animate({marginTop: 0,opacity:1
																	           }, 400, function() {
																		        // Animation complete.
																	            });
					}
					else if(ApplyEffect == 'drop-down'){
						$('#'+CharIteration).css('margin-top','-50px').css('display','block').css('opacity','0').animate({marginTop: 0,opacity:1
																	           }, 400, function() {
																		        // Animation complete.
																	            });
					}
					else if(ApplyEffect == 'drop-both'){
						
						
						if(direction == 'up'){
						$('#'+CharIteration).css('margin-top','-50px').css('display','block').css('opacity','0').animate({marginTop: 0,opacity:1
																	           }, 300, function() {
																		        direction = 'down';
																	            });
						}else{
						 $('#'+CharIteration).css('margin-top','50px').css('display','block').css('opacity','0').animate({marginTop: 0,opacity:1
																	           },300, function() {
																		        direction = 'up';
																	            });
						}
					}
					else if(ApplyEffect == 'zoom'){
						var curElem = $('#'+CharIteration).attr('id');
						$('#'+curElem).css('display','block').css('transition','transform 250ms ease-in-out').css('transform','scale(2)');
						
							
							setTimeout(function(){
							 
							  $('#'+curElem).css('transform','scale(1)');
							  
							}, 50);
					}
					
					else if(ApplyEffect == 'spin'){
						var curElem = $('#'+CharIteration).attr('id');
						$('#'+curElem).css('display','none').css('transition','transform 300ms ease-in-out').toggle( "fade" );
						
							
							setInterval(function(){
							 rotate  = rotate + 10;
							 rot(rotate);

							  
							}, 22);

							function rot(deg){
									var degree = deg;
									if(degree < 720){
									$('#'+curElem).css('transform','rotate('+degree+'deg)');
									}
									else{
									$('#'+curElem).css('transform','rotate(360deg)');
									}
						    }
					}
					


			CharIteration++;
					
			}
			else
			{
				
				clearInterval(typer);
				setTimeout(function(){ 
				
				$( ".typer-affected" ).each(function( index ) {
				   var content = $(this).html();
				  $(this).replaceWith(content).replace('&nbsp;',' ');
				});
				
				}, 1000);
				
				setTimeout(function(){ 
				
				if(elem.length > 1 && elementsAffected !=elem.length ){
				
				elementsAffected++;
				mimicInput(elem,speed,effect,elementsAffected);
				
				}
				
				},1000);
				
				
				
			}
			}, parseInt(typeSpeed));


}



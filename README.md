# typer.js
Emulates manual typing with the possibility to add effects 

NOTE !!! it will only work with text if you are applying the script to html content it will print out the content as text instead of html 

Good Example (no html tags): 
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

Bad Example (html tags included):

<p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</strong> </p>

<p>The bold text contains the &lt;strong&gt; tag and if you are to apply the script to the paragraph which contains the text above it will print out "< strong >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.&lt;/strong&gt; </p>

THE ONLY SUPPORTED HTML TAG IS &lt;br /&gt; !! if your text contains line breaking tag it will be ok .

How to install :

in your head tag or where you have all of your javascript links written on you page add :
<p>


&lt;script src="https://code.jquery.com/jquery-1.12.3.min.js" type="text/javascript"&gt; &lt;/script&gt; 
<br/>&lt;script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"&gt; &lt;/script&gt;

</p>

Now for the last part just add this :

<p>
$(window).bind("load", function() {
<br/><br/>
mimicInput(['#test'],['80'], ['none'],0);
<br/><br/>
});
</p>

To do :

<p>1. replace ['#test'] to your div's id or class (IT IS VERY IMPORTANT THAT YOU ADD #class or #id ). You can add as many elements as you want till it looks something like this : ['#test','#test2','.test3'].</p>
<p>2. replace ['80'] to your desired no. of milliseconds this represents the speed interval . in case you have EX :['#test','#test2','.test3'] be sure to add ['22','22','22'] (each element added needs to have it's own interval).</p>
<p>3. replace ['none'] with your desired effect . Once again if you have more that 1 element in the ['#test'] array make sure to add an animation to each of the elements something like ['none','none','none'] </p>

<p> TO CLEAR THINGS OUT I WILL SHOW YOU 2 WAYS OF USAGE <br /><br />
1. single element : mimicInput(['#test'],['80'], ['none'],0);<br />
2. multiple elements : mimicInput([ '#test','#test1', '#test2'],['80', '80', '80'], [ 'none','fade', 'bounce'],0);
</p>


CRITICAL THING TO KNOW !!!

<p style="color:red;">
mimicInput(['#test'],['80'], ['none'],0);  <==== the last variable in the function arguments "0" must be left as it is changing this will break the functionality
</p>

<p>EFFECTS AVAILABLE :<br/><br/>
fade ,bounce ,fold ,highlight ,puff ,pulsate ,scale ,shake ,slide ,blind ,explode ,drop-up ,drop-down ,drop-both ,zoom ,spin
</p>

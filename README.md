# typer.js
Emulates manual typing with the possibility to add effects 

NOTE !!! it will only work with text if you are applying the script to html content it will print out the content as text instead of html 

Good Example (no html tags): 
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

Bad Example (html tags included):

<p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</strong> </p>

<p>The bold text contains the &lt;strong&gt; tag and if you are to apply the script to the paragraph which contains the text above it will print out "< strong >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.&lt;/strong&gt; </p>

THE ONLY SUPPORTED HTML TAG IS &lt;br /&gt; !! if your text contains line breaking tags it will be ok .

How to install :

in your head tag or where you have all of your javascript links written on you page add :
<p>
<code>

&lt;script src="https://code.jquery.com/jquery-1.12.3.min.js" type="text/javascript"&gt;&lt;/script&gt; <br />
&lt;script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"&gt;&lt;/script&gt;

</code></p>





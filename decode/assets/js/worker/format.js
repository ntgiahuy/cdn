self.addEventListener('message',function(e){var source=e.data.source;try{self._window=self.window;self.window={};self.importScripts('/decode/assets/js/lib/js-beautify/beautify.min.js');source=self.window.js_beautify(source,{unescape_strings:true,jslint_happy:true});self.window=self._window;}catch(err){console.log(err);}
self.postMessage({result:source,highlight:false});try{self.importScripts('/decode/assets/js/lib/highlight-js/highlight.min.js');source=self.hljs.highlight('javascript',source).value;}catch(err){console.log(err);}
self.postMessage({result:source,highlight:true});});

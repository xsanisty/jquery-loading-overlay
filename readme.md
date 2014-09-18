###Overview

jQuery loading overlay is a simple helper function wrapped as jQuery plugin for displaying loading
indicator overlaid to the element where this plugin is initiated.

code sample below will clearly describe it

```javascript
$('#somediv').loader();
```

this will create an overlaid element with loading image on the top of ```#somediv```,
you can display it, configure it, and hide it

###Method

jQuery loading overlay has only two methods, ```show``` and ```hide``` which is responsible to display
or hide the loading overlay. When no method is passed, it will call ```show``` method implicitly.

####Show

As the method name describe what it does, show method will show loading indicator overlaid to the selected element

```javascript
//this will diplay the loadng overlay on the top of #selector element
$('#selector').loader('show');

//this will have same effect on the code above
$('#selector').loader();

```

####Hide

Hide method is used to hide (actually remove it :D ) the loading overlay from the selected element.

```javascript

//this will hide the loading overlay from the selected element
$('#selector').loader('hide');

```

###Configuration

As mentioned above, you can configure how the loading overlay will be displayed. The default configuration
is shown as below

```javascript
defaultConfig = {
    //opacity level of the overlaid div
    opacity     : 0.8,

    //image used for the loading indicator
    image       : 'image/loader.gif',

    //the z-index of the overlay element
    zIndex      : 5000,

    //the loading indicator image height, to calculate the vertical center
    imageHeight : 32,

    //text to be displayed under the loading indicator image
    text        : ''
};
```

You can pass the configuration option when invoking the ```show``` method

```javascript
$('#selector').loader({
    //your configuration here
});

or

$('#selector').loader('show', {
    //your configuration here
});
```

###Styling

For user who want advanced styling to control how the loading indicator is displayed, you can add
```.xsanisty-loading-overlay``` to your css

###License

This plugin is published under MIT license

```
The MIT License (MIT)

Copyright (c) 2014 Ikhsan Agustian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
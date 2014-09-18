###Overview

jQuery loading overlay is a simple helper function wrapped as jQuery plugin for displaying loading
indicator overlaid to the element where this plugin is initiated.

code sample below will clearly dercribe it

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

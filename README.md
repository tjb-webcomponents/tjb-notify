# tjb-notify

Simple, dismisseable notification message as WebComponent

## Example

https://tjb-webcomponents.github.io/tjb-notify/

## Add to project

You might want to use a Polyfill for WebComponent:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-lite.js"></script>
```

### Include via HTML

Include it:

```html
<script
  src="https://tjb-webcomponents.github.io/tjb-notify/tjb-notify.min.js"
  type="module"
></script>
```

### Include via JavaScript

```JavaScript
import 'https://tjb-webcomponents.github.io/tjb-notify/tjb-notify.min.js'
```

### Include via NPM

Console:

```bash
npm i -S tjb-notify
```

Then in your code:

```JavaScript
import 'tjb-notify';
```

## Useage

```html
<tjb-notify></tjb-notify>
```

### Methods

| method  | properties                  | example                                              | description                                                                |
| ------- | --------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| error   | - type (@String/@Node) <br> | `tjbNotify.error = html\`<div>My Error Node</div>\`` | displays the message in a box of respective collor with pulldown animation |
| success | - type (@String/@Node) <br> | `tjbNotify.success = 'My success Text`               | displays the message in a box of respective collor with pulldown animation |

## Styling

Default public values:

```css
:host {
  --background-error: #fa354c;
  --background-success: limegreen;
  --color-error: white;
  --color-success: white;

  --margin: -55px 0 20px -40px;
  --padding: 15px;
}
```

These can be overwritten easily by targetting the element. Example:

```css
tjb-notify {
  --background-error: darkred;
}
```

# Enjoy

[![Typewriter Gif](https://tjb-webcomponents.github.io/html-template-string/typewriter.gif)](http://thibaultjanbeyer.com/)

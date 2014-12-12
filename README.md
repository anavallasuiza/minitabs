# minitabs

## Install

Use the code from this repo or: ```bower install minitabs```. This plugin is requirejs compatible.

## Usage:

### Default HTML structure

(you can use your html structure as well, see below **Custom elements**)

```html
    <div class="tabs"> <!-- tabs -->
        <ul class="tab-index"> <!-- tabs index -->
            <li><a href="#content1">Content 1</a></li>
            <li><a href="#content2">Content 2</a></li>
        </ul>

        <section class="tab-content" id="content1"> <!-- tabs content -->
            Content 1
        </section>

        <section class="tab-content" id="content2"> <!-- tabs content -->
            Content 2
        </section>
    </div>
```

### Init

#### Default configuration:
```js
$('.tabs').tabs();
```

#### Custom elements:
```js
$('.tabs').tabs({
    indexSelector: '> ul a', // selector for the tabs index
    contentSelector: '> section' // selector for the tabs content
});
```
this example uses the actual default configuration, change the selectors to suit your needs.

### Destroy

```js
$('.tabs').destroy();
```

### Custom events
Two custom event listeners are attached to the __tabs content__ elements:

- show.tabs
- hide.tabs

Events example usage:

```js
$('#content1').on('show.tabs', function () {
    alert('This is triggered when #content1 tab is shown');
});

$('#contido2').on('hide.tabs', function () {
    alert('This is triggered when #content2 tab is hidden');
});
```
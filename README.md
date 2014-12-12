# simpletabs

Requirejs compatible.

## Default HTML structure, you can adapt your html structure, see below "Custom elements":

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

## Usage:

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
this example uses the default configuration.

### Destroy

```js
$('.tabs').destroy();
```

### Custom events
Two custom events are attached to the tabs content elements:

- show.tabs
- hide.tabs

```js
$('#content1').on('show.tabs', function () {
    alert('This is triggered when #content1 tab is shown');
});

$('#contido2').on('hide.tabs', function () {
    alert('This is triggered when #content2 tab is hidden');
});
```
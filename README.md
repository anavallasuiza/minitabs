# simpletabs

Requirejs compatible.

## Html structure:

```html
    <div class="tabs">
        <ul class="tab-index">
            <li><a href="#contido1">Contido 1</a></li>
            <li><a href="#contido2">Contido 2</a></li>
        </ul>

        <section class="tab-content" id="contido1">
            Contido 1
        </section>

        <section class="tab-content" id="contido2">
            Contido 2
        </section>
    </div>
```

## Usage:

### Init
```js
$('.tabs').tabs();
```

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
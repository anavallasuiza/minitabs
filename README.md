Tabs
====

Usa a seguinte estructura de html

```html
<div class="tabs">
    <ul class="tab-index">
        <li><a href="#contido1" class="active">Contido 1</a></li>
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

Uso do plugin:

```javascript
$('.tabs').tabs();

//Eventos ao mostrar/ocultar determinadas pestanas:
$('#contido1').on('tabShow', function () {
    alert('Contido 1 mostrouse');
});

$('#contido2').on('tabHide', function () {
    alert('Contido 2 ocultouse');
});
```
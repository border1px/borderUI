```js
document.body.onpaste = e => {
  let clipboardData = e.clipboardData || window.clipboardData;
  console.log('要粘贴的数据', clipboardData.getData('text));
}
```

::: tip 替换tip的标题
这里是内容。
:::

:tada:
:100:

### 常规用法
<div class="btn-inline">
  <bo-button type="primary" size="large" >Primary</bo-button>
  <bo-button type="warning" >Warning</bo-button>
  <bo-button type="danger" >Danger</bo-button>
  <bo-button color="#04BE02" >#04BE02</bo-button>
  <bo-button color="#EE30A7" size="small">#EE30A7</bo-button>
</div>

### 满屏
<div class="btn-block" style="width:320px">
  <bo-button auto>Primary</bo-button >
  <bo-button type="warning" auto>Warning</bo-button >
  <bo-button type="danger" auto>Danger</bo-button >
  <bo-button color="#04BE02" square auto>#04BE02</bo-button>
  <bo-button type="hollow" auto>hollow</bo-button>
  <bo-button color="#EE30A7" size="large" loading auto>Button</bo-button >
</div>
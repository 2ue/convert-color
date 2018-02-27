# convert-color
RGB和16进制色值的互相转换

# use it

## npm or yarn 安装

```shell
npm install convert-color
```

```javascript
import convertColor from 'convert-color';
const convert_color = new convertColor({});
convert_color.toRgb('#f30'); //rgb(255,51,0)
convert_color.toHex('rgb(255,51,0)'); //#f30
```

## 配置

引入`convert-color`后，允许传入一个配置项{ short: true }，来配置使用toHex时输出的16进制色值是否需要缩写, 默认是true

```javascript
import convertColor from 'convert-color';
const convert_color = new convertColor({ short: false });
convert_color.toRgb('#f30'); //rgb(255,51,0)
convert_color.toHex('rgb(255,51,0)'); //#ff3300
```
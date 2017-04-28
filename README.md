hexo-tag-snack
==============

Plugin for [Hexo](http://hexo.io) blog engine which allows you to embed into blog post code from [snack.expo.io](http://snack.expo.io).

## Installation
`npm i hexo-tag-snack --save`

## Usage
{% snack snack-id snack-platform snack-preview %}

## Example
Let's assume your embed code looks like the following:
`<div data-snack-id="r1WUzhlJW" data-snack-platform="ios" data-snack-preview="true" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.16);border-radius:4px;height:505px;width:100%"></div>
`

So your code should like this:

`{% snack r1WUzhlJW ios true %}`

## License
[MIT](https://tldrlegal.com/license/mit-license)




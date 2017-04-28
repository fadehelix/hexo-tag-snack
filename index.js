'use strict';

hexo.extend.tag.register('snack', function(args, content){
    var id = args[0];
    var platform = args[1];
    var preview = args[2];

    var outputHtml = '<div data-snack-id="' + id +  '" data-snack-platform="' + platform + '" data-snack-preview="' + preview +  '" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.16);border-radius:4px;height:505px;width:100%"></div>';
   var outputScript = '<script async src="https://snack.expo.io/embed.js"></script>';

    return outputHtml + outputScript;
},{
    async: true,
    ends: false
});


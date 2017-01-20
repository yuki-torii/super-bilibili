// this is the code which will be injected into a given page...

(function() {

  var bofqi = document.getElementsByClassName('bilibiliHtml5Player')[0]

  if (bofqi) {
    bofqi.style.position = 'fixed';
    bofqi.style.top = 0;
    bofqi.style.left = 0;
    bofqi.style.zIndex = 100000000;
    bofqi.style.width = '70%';
    bofqi.style.height = '100%';
  }

  var common = document.getElementsByClassName('common')[0]

  if (common) {
    common.style.position = 'fixed';
    common.style.top = 0;
    common.style.right = 0;
    common.style.zIndex = 100000001;
    common.style.width = '30%';
    common.style.height = '100%';
    common.style.background = '#FFFFFF';
    common.style.overflow = 'auto';
  }

  document.body.width = '100%';
  document.body.height = '100%';
  document.body.overflow = 'hide';

})();

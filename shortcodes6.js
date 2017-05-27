$(document)['ready'](function() {
    var _0xe93dx1 = ['divider', 'table', 'heading', 'row', 'icon', 'col', 'image', 'tooltip', 'youtube', 'num', 'code', 'accordion', 'content', 'item', 'quote', 'alert', 'success', 'warning', 'update', 'info', 'tab', 'button'];
    $('.post')['each'](function() {
        var _0xe93dx2 = $(this)['html']();
        _0xe93dx2 = _0xe93dx3(_0xe93dx2);
        if (_0xe93dx2 != '') {
            $(this)['html'](_0xe93dx2)
        };
    });
    $('.widget-content')['each'](function() {
        var _0xe93dx2 = $(this)['html']();
        _0xe93dx2 = _0xe93dx3(_0xe93dx2);
        if (_0xe93dx2 != '') {
            $(this)['html'](_0xe93dx2)
        };
    });
    $('.sidebar h2')['each'](function() {
        var _0xe93dx2 = $(this)['html']();
        _0xe93dx2 = _0xe93dx3(_0xe93dx2);
        if (_0xe93dx2 != '') {
            $(this)['html'](_0xe93dx2)
        };
    });
    $('.comment')['each'](function() {
        var _0xe93dx2 = $(this)['html']();
        _0xe93dx2 = _0xe93dx3(_0xe93dx2);
        if (_0xe93dx2 != '') {
            $(this)['html'](_0xe93dx2)
        };
    });

    function _0xe93dx3(_0xe93dx2) {
        var _0xe93dx4 = false;
        for (var _0xe93dx5 = 0; _0xe93dx5 < _0xe93dx1['length']; _0xe93dx5++) {
            var _0xe93dx6 = '$$' + _0xe93dx1[_0xe93dx5];
            var _0xe93dx7 = '<div class="shortcode sc-' + _0xe93dx1[_0xe93dx5] + '"';
            var _0xe93dx8 = '$$/' + _0xe93dx1[_0xe93dx5] + '$$';
            var _0xe93dx9 = '</div>';
            var _0xe93dxa = '/$$';
            var _0xe93dxb = '></div>';
            var _0xe93dxc = 0;
            var _0xe93dxd = 0;
            var _0xe93dxe = 0;
            for (j = 0; j < 300; j++) {
                _0xe93dxc = _0xe93dx2['indexOf'](_0xe93dx6, _0xe93dxc);
                var _0xe93dxf = true;
                var _0xe93dx10 = '';
                if (_0xe93dxc != -1) {
                    var _0xe93dx11 = _0xe93dx2['indexOf'](_0xe93dx8, _0xe93dxc);
                    var _0xe93dx12 = _0xe93dx2['indexOf'](_0xe93dxa, _0xe93dxc);
                    if ((_0xe93dx11 != -1 && _0xe93dx12 == -1) || (_0xe93dx11 != -1 && _0xe93dx12 != -1 && _0xe93dx11 < _0xe93dx12)) {
                        _0xe93dx10 = _0xe93dx2['substring'](_0xe93dxc, _0xe93dx11 + _0xe93dx8['length']);
                        _0xe93dx10 = _0xe93dx10['replace'](_0xe93dx8, _0xe93dx9);
                        _0xe93dxd = _0xe93dx11;
                        _0xe93dxe = _0xe93dx8['length'];
                    } else {
                        if ((_0xe93dx11 == -1 && _0xe93dx12 != -1) || (_0xe93dx11 != -1 && _0xe93dx12 != -1 && _0xe93dx11 > _0xe93dx12)) {
                            _0xe93dx10 = _0xe93dx2['substring'](_0xe93dxc, _0xe93dx12 + _0xe93dxa['length']);
                            _0xe93dx10 = _0xe93dx10['replace'](_0xe93dx8, _0xe93dxb);
                            _0xe93dxd = _0xe93dx12;
                            _0xe93dxe = _0xe93dxa['length'];
                        } else {
                            _0xe93dxf = false
                        }
                    };
                } else {
                    break
                };
                if (_0xe93dxf) {
                    _0xe93dx4 = true;
                    _0xe93dx10 = _0xe93dx10['replace'](_0xe93dx6, _0xe93dx7);
                    _0xe93dx10 = _0xe93dx10['replace']('$$', '>');
                    _0xe93dx2 = _0xe93dx2['substring'](0, _0xe93dxc) + _0xe93dx10 + _0xe93dx2['substring'](_0xe93dxd + _0xe93dxe);
                } else {};
                _0xe93dxc++;
            };
        };
        if (_0xe93dx4) {
            return _0xe93dx2
        };
        return '';
    }
    var _0xe93dx13 = 0;
    $('.sc-tab')['each'](function() {
        var _0xe93dx14 = '';
        var _0xe93dx15 = '';
        var _0xe93dx16 = 0;
        $(this)['find']('.sc-content')['each'](function() {
            var _0xe93dx17 = $(this)['attr']('title');
            var _0xe93dx18 = $(this)['attr']('icon');
            var _0xe93dx19 = '<i style="padding-right:5px;" class="fa ' + _0xe93dx18 + '"></i>';
            var _0xe93dx1a = $(this)['html']();
            if (_0xe93dx17 == null || _0xe93dx17 == '') {
                _0xe93dx17 = 'Tab'
            };
            if (_0xe93dx18 == null || _0xe93dx18 == '') {
                _0xe93dx18 = '';
                _0xe93dx19 = '';
            };
            if (_0xe93dx1a == null || _0xe93dx1a == '') {
                _0xe93dx1a = 'I Love MBT'
            };
            var _0xe93dx1b = '';
            var _0xe93dx1c = '';
            if (_0xe93dx16 == 0) {
                _0xe93dx1b = ' class="active"';
                _0xe93dx1c = ' style="display:block"';
            };
            _0xe93dx14 += '<li><a href="#tab' + _0xe93dx16 + '" ' + _0xe93dx1b + ' parent="tab_' + _0xe93dx13 + '">' + _0xe93dx19 + '' + _0xe93dx17 + '</a></li>';
            _0xe93dx15 += '<div id="tab' + _0xe93dx16 + '" class="tab tab_content" ' + _0xe93dx1c + '>' + _0xe93dx1a + '</div>';
            _0xe93dx16++;
        });
        _0xe93dx14 = '<ul class="tabset tabs">' + _0xe93dx14 + '</ul>';
        _0xe93dx15 = '<div class="tab-box tabs-container">' + _0xe93dx15 + '</div>';
        $(this)['html'](_0xe93dx14 + _0xe93dx15);
        $(this)['attr']('id', 'tab_' + _0xe93dx13);
        _0xe93dx13++;
    });
    (function(_0xe93dx1d) {
        _0xe93dx1d('.sc-tab .tabset li a')['click'](function() {
            var _0xe93dx1e = _0xe93dx1d(this)['attr']('href');
            var _0xe93dx1f = _0xe93dx1d(this)['attr']('parent');
            _0xe93dx1f = '#' + _0xe93dx1f;
            _0xe93dx1d(_0xe93dx1f + ' .tab_content')['hide']();
            _0xe93dx1d(_0xe93dx1f + ' .tabset li a')['removeClass']('active');
            _0xe93dx1d(this)['addClass']('active');
            _0xe93dx1d(_0xe93dx1f + ' ' + _0xe93dx1e)['fadeIn'](500);
            return false;
        })
    })(jQuery);
    var _0xe93dx20 = 0;
    $('.sc-accordion')['each'](function() {
        var _0xe93dx2 = '';
        $(this)['find']('.sc-item')['each'](function() {
            var _0xe93dx21 = $(this)['attr']('title');
            var _0xe93dx22 = $(this)['html']();
            if (_0xe93dx21 == null || _0xe93dx21 == '') {
                _0xe93dx21 = 'Tab Title'
            };
            if (_0xe93dx22 == null || _0xe93dx22 == '') {
                _0xe93dx22 = 'My accordion'
            };
            _0xe93dx21 = '<h3 class="toggle"><a href="#accord-' + _0xe93dx20 + '"><span class="anchor"><i class="fa fa-chevron-down"></i></span>' + _0xe93dx21 + '</a></h3>';
            _0xe93dx22 = '<div class="trigger">' + _0xe93dx22 + '</div>';
            _0xe93dx2 += _0xe93dx21 + _0xe93dx22;
        });
        $(this)['html'](_0xe93dx2);
        $(this)['attr']('id', 'accord-' + _0xe93dx20);
        _0xe93dx20++;
    });
    (function(_0xe93dx1d) {
        _0xe93dx1d('.sc-accordion .toggle a')['click'](function() {
            _a = _0xe93dx1d(this)['attr']('href');
            _0xe93dx1d(_a + ' > h3 span.anchor')['html']('<i class="fa fa-chevron-down"></i>');
            _0xe93dx1d(_a + ' > .trigger')['slideUp']();
            _cl = _0xe93dx1d(this)['attr']('class');
            if (_cl != '' && _cl != null) {
                if (_cl['indexOf']('active') != -1) {
                    _0xe93dx1d(this)['removeClass']('active');
                    return false;
                }
            };
            _0xe93dx1d(_a + ' .toggle a')['removeClass']('active');
            _0xe93dx1d(this)['parent']()['next']()['slideDown']();
            _0xe93dx1d(this)['children']()['html']('<i class="fa fa-chevron-up"></i>');
            _0xe93dx1d(this)['addClass']('active');
            return false;
        })
    })(jQuery);
    $('.sc-youtube')['each'](function() {
        var _0xe93dx40 = $(this)['attr']('src');
        var _0xe93dx2 = '<iframe frameborder="0" height="630" name="'+ _0xe93dx40 +'[DhtmlXQ_zoom]1.80.500[/DhtmlXQ_zoom]" scrolling="no" src="https://rawgit.com/n280681/cotuong/master/XQBase.htm" width="900"></iframe>';
        $(this)['replaceWith'](_0xe93dx2);
    });
});
$(document)['ready'](function() {
    $('.sc-top')['hide']();
    $(function() {
        $(window)['scroll'](function() {
            if ($(this)['scrollTop']() > 300) {
                $('.sc-top')['fadeIn']()
            } else {
                $('.sc-top')['fadeOut']()
            }
        });
        $('.sc-top')['click'](function() {
            $('body,html')['animate']({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});
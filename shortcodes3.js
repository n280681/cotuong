$(document)['ready'](function() {
    var _0xe93dx1 = ['divider', 'table', 'heading', 'row', 'icon', 'col', 'image', 'tooltip', 'facebook', 'dailymotion', 'youtube', 'soundcloud', 'num', 'code', 'accordion', 'content', 'item', 'quote', 'alert', 'success', 'warning', 'update', 'info', 'tab', 'button'];
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
            var _0xe93dx6 = '[' + _0xe93dx1[_0xe93dx5];
            var _0xe93dx7 = '<div class="shortcode sc-' + _0xe93dx1[_0xe93dx5] + '"';
            var _0xe93dx8 = '[/' + _0xe93dx1[_0xe93dx5] + ']';
            var _0xe93dx9 = '</div>';
            var _0xe93dxa = '/]';
            var _0xe93dxb = '></div>';
            var _0xe93dxc = 0;
            var _0xe93dxd = 0;
            var _0xe93dxe = 0;
            for (j = 0; j < 100; j++) {
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
                    _0xe93dx10 = _0xe93dx10['replace'](']', '>');
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
    $('.sc-table')['each'](function() {
        var _0xe93dx23 = '';
        var _0xe93dx24 = '';
        var _0xe93dx25 = '';
        var _0xe93dx26 = '';
        var _0xe93dx27 = '';
        var _0xe93dx28 = $(this)['attr']('color');
        if (_0xe93dx28 == null || _0xe93dx28 == '') {
            _0xe93dx28 = 'theme1'
        };
        _0xe93dx25 = '<table id="' + _0xe93dx28 + '"><tbody>';
        $(this)['find']('.sc-row')['each'](function() {
            _0xe93dx23 = '';
            _0xe93dx24 = '';
            $(this)['find']('.sc-col')['each'](function() {
                var _0xe93dx29 = $(this)['html']();
                if (_0xe93dx29 == null || _0xe93dx29 == '') {
                    _0xe93dx29 = ''
                };
                _0xe93dx24 += '<td>' + _0xe93dx29 + '</td>';
            });
            $(this)['find']('.sc-heading')['each'](function() {
                var _0xe93dx2a = $(this)['html']();
                if (_0xe93dx2a == null || _0xe93dx2a == '') {
                    _0xe93dx2a = ''
                };
                _0xe93dx23 += '<th>' + _0xe93dx2a + '</th>';
            });
            _0xe93dx25 += '<tr>';
            if (_0xe93dx24) {
                _0xe93dx25 += _0xe93dx24
            };
            if (_0xe93dx23) {
                _0xe93dx25 += _0xe93dx23
            };
            _0xe93dx25 += '</tr>';
        });
        _0xe93dx25 += '</tbody></table>';
        $(this)['html'](_0xe93dx25);
    });
    $('.sc-num')['each'](function() {
        var _0xe93dx2b = $(this)['attr']('size');
        var _0xe93dx2c = $(this)['html']();
        if (_0xe93dx2b == null || _0xe93dx2b == '') {
            _0xe93dx2b = ''
        };
        if (_0xe93dx2c == null || _0xe93dx2c == '') {
            _0xe93dx2c = '?'
        };
        var _0xe93dx2 = '<span class="sc-num ' + _0xe93dx2b + '"> ' + _0xe93dx2c + '</span>';
        $(this)['replaceWith'](_0xe93dx2);
    });
    $('.sc-soundcloud')['each'](function() {
        var _0xe93dx2d = $(this)['attr']('auto');
        var _0xe93dx2e = $(this)['attr']('src');
        var _0xe93dx2f = $(this)['attr']('color');
        var _0xe93dx30 = $(this)['attr']('width');
        var _0xe93dx31 = $(this)['attr']('height');
        var _0xe93dx32 = $(this)['attr']('visual');
        var _0xe93dx33 = $(this)['attr']('comments');
        var _0xe93dx34 = $(this)['attr']('user');
        var _0xe93dx35 = $(this)['attr']('playlist');
        if (_0xe93dx35 == null || _0xe93dx35 == '') {
            _0xe93dx35 = 'tracks'
        };
        if (_0xe93dx35 == 1) {
            _0xe93dx35 = 'users'
        };
        if (_0xe93dx34 == null || _0xe93dx34 == '') {
            _0xe93dx34 = 'true'
        };
        if (_0xe93dx33 == null || _0xe93dx33 == '') {
            _0xe93dx33 = 'false'
        };
        if (_0xe93dx2d == null || _0xe93dx2d == '') {
            _0xe93dx2d = 'false'
        };
        if (_0xe93dx32 == null || _0xe93dx32 == '') {
            _0xe93dx32 = 'false'
        };
        if (_0xe93dx2e == null || _0xe93dx2e == '') {
            _0xe93dx2e = '43852056'
        };
        if (_0xe93dx2f == null || _0xe93dx2f == '') {
            _0xe93dx2f = 'ff5500'
        };
        if (_0xe93dx30 == null || _0xe93dx30 == '') {
            _0xe93dx30 = '100%'
        };
        if (_0xe93dx31 == null || _0xe93dx31 == '') {
            _0xe93dx31 = '130'
        };
        var _0xe93dx2 = '<iframe width="' + _0xe93dx30 + '" height="' + _0xe93dx31 + '" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/' + _0xe93dx35 + '/' + _0xe93dx2e + '&amp;color=' + _0xe93dx2f + '&amp;auto_play=' + _0xe93dx2d + '&amp;hide_related=false&amp;show_comments=' + _0xe93dx33 + '&amp;show_user=' + _0xe93dx34 + '&amp;show_reposts=false&amp;visual=' + _0xe93dx32 + '"></iframe>';
        $(this)['replaceWith'](_0xe93dx2);
    });
    $('.sc-dailymotion')['each'](function() {
        var _0xe93dx36 = $(this)['attr']('highlight');
        var _0xe93dx37 = $(this)['attr']('background');
        var _0xe93dx38 = $(this)['attr']('color');
        var _0xe93dx32 = $(this)['attr']('src');
        var _0xe93dx30 = $(this)['attr']('width');
        var _0xe93dx31 = $(this)['attr']('height');
        var _0xe93dx39 = $(this)['attr']('info');
        var _0xe93dx3a = $(this)['attr']('logo');
        if (_0xe93dx36 == null || _0xe93dx36 == '') {
            _0xe93dx36 = '29b7ff'
        };
        if (_0xe93dx32 == null || _0xe93dx32 == '') {
            _0xe93dx32 = 'x1ezu5y'
        };
        if (_0xe93dx37 == null || _0xe93dx37 == '') {
            _0xe93dx37 = '000000'
        };
        if (_0xe93dx38 == null || _0xe93dx38 == '') {
            _0xe93dx38 = 'ffffff'
        };
        if (_0xe93dx30 == null || _0xe93dx30 == '') {
            _0xe93dx30 = '100%'
        };
        if (_0xe93dx31 == null || _0xe93dx31 == '') {
            _0xe93dx31 = '270'
        };
        if (_0xe93dx3a == null || _0xe93dx3a == '') {
            _0xe93dx3a = '1'
        };
        if (_0xe93dx39 == null || _0xe93dx39 == '') {
            _0xe93dx39 = '1'
        };
        var _0xe93dx2 = '<iframe frameborder="0" width="' + _0xe93dx30 + '" height="' + _0xe93dx31 + '" src="http://www.dailymotion.com/embed/video/' + _0xe93dx32 + '?logo=' + _0xe93dx3a + '&info=' + _0xe93dx39 + '&highlight=' + _0xe93dx36 + '&foreground=' + _0xe93dx38 + '&background=' + _0xe93dx37 + '" allowfullscreen></iframe>';
        $(this)['replaceWith'](_0xe93dx2);
    });
    $('.sc-facebook')['each'](function() {
        var _0xe93dx32 = $(this)['attr']('src');
        var _0xe93dx3b = $(this)['attr']('width');
        var _0xe93dx3c = $(this)['attr']('height');
        var _0xe93dx3d = $(this)['attr']('hide-cover');
        var _0xe93dx3e = $(this)['attr']('posts');
        var _0xe93dx3f = $(this)['attr']('faces');
        if (_0xe93dx32 == null || _0xe93dx32 == '') {
            _0xe93dx32 = 'bloggertricks'
        };
        if (_0xe93dx3b == null || _0xe93dx3b == '') {
            _0xe93dx3b = '280'
        };
        if (_0xe93dx3c == null || _0xe93dx3c == '') {
            _0xe93dx3c = '250'
        };
        if (_0xe93dx3d == null || _0xe93dx3d == '') {
            _0xe93dx3d = 'false'
        };
        if (_0xe93dx3e == null || _0xe93dx3e == '') {
            _0xe93dx3e = 'false'
        };
        if (_0xe93dx3f == null || _0xe93dx3f == '') {
            _0xe93dx3f = 'true'
        };
        var _0xe93dx2 = '<div class="fb-page" data-href="https://www.facebook.com/' + _0xe93dx32 + '" data-width="' + _0xe93dx3b + '" data-height="' + _0xe93dx3c + '" data-hide-cover="' + _0xe93dx3d + '" data-show-facepile="' + _0xe93dx3f + '" data-show-posts="' + _0xe93dx3e + '"></div>';
        $(this)['replaceWith'](_0xe93dx2);
    });
    $('.sc-alert, .sc-warning, .sc-update, .sc-success, .sc-info')['addClass']('sc-notification');
    $('.sc-notification')['each'](function() {
        var _0xe93dx17 = $(this)['attr']('headline');
        var _0xe93dx1a = $(this)['html']();
        if (_0xe93dx17 == null) {
            _0xe93dx17 = ''
        };
        if (_0xe93dx1a == null) {
            _0xe93dx1a = ''
        };
        if (_0xe93dx17 != '') {
            _0xe93dx17 = '<div class="headline">' + _0xe93dx17 + '</div>'
        };
        $(this)['html']('<div class="wrapper">' + _0xe93dx17 + _0xe93dx1a + '</div>');
    });
    $('.sc-youtube')['each'](function() {
        var _0xe93dx40 = $(this)['attr']('src');
        var _0xe93dx41 = $(this)['attr']('width');
        var _0xe93dx42 = $(this)['attr']('height');
        var _0xe93dx43 = $(this)['attr']('info');
        var _0xe93dx44 = $(this)['attr']('control');
        var _0xe93dx45 = $(this)['attr']('playlist');
        var _0xe93dx46 = $(this)['attr']('related');
        if (_0xe93dx40 == null || _0xe93dx40 == '') {
            _0xe93dx40 = 'Qy4yULSqBA0'
        };
        if (_0xe93dx41 == null || _0xe93dx41 == '') {
            _0xe93dx41 = '90%'
        };
        if (_0xe93dx42 == null || _0xe93dx42 == '') {
            _0xe93dx42 = '300'
        };
        if (_0xe93dx44 == null || _0xe93dx44 == '') {
            _0xe93dx44 = '1'
        };
        if (_0xe93dx43 == null || _0xe93dx43 == '') {
            _0xe93dx43 = '1'
        };
        if (_0xe93dx46 == null || _0xe93dx46 == '') {
            _0xe93dx46 = '0'
        };
        if (_0xe93dx45 == null || _0xe93dx45 == '') {
            _0xe93dx45 = ''
        };
        var _0xe93dx2 = '<iframe width="' + _0xe93dx41 + '" height="' + _0xe93dx42 + '" name="[DhtmlXQ]' + _0xe93dx40 + '[DhtmlXQ_zoom]1.80.500[/DhtmlXQ_zoom][/DhtmlXQ]" src="https://rawgit.com/n280681/cotuong/master/XQBase.htm" scrolling="no" frameborder="0" ></iframe>';
        $(this)['replaceWith'](_0xe93dx2);
    });
    $('.sc-code')['each'](function() {
        var _0xe93dx47 = $(this)['attr']('hl');
        var _0xe93dx48 = $(this)['html']();
        if (_0xe93dx47 == null || _0xe93dx47 == '') {
            _0xe93dx47 = ''
        };
        if (_0xe93dx48 == null || _0xe93dx48 == '') {
            _0xe93dx48 = 'Add some code here'
        };
        var _0xe93dx2 = '<pre class="brush:css, brush:html, brush:js, brush:php, brush:sql, brush:python, highlight: [' + _0xe93dx47 + ']"> ' + _0xe93dx48 + ' </pre>';
        $(this)['replaceWith'](_0xe93dx2);
    });
    $('.sc-button')['each'](function() {
        var _0xe93dx49 = $(this)['attr']('src');
        var _0xe93dx4a = $(this)['attr']('size');
        var _0xe93dx4b = $(this)['attr']('color');
        var _0xe93dx4c = $(this)['attr']('rel');
        var _0xe93dx1a = $(this)['html']();
        if (_0xe93dx49 == null || _0xe93dx49 == '') {
            _0xe93dx49 = '#'
        };
        if (_0xe93dx4a == null || _0xe93dx4a == '') {
            _0xe93dx4a = 'normal'
        };
        if (_0xe93dx4c == null || _0xe93dx4c == '') {
            _0xe93dx4c = ''
        };
        if (_0xe93dx4b == null || _0xe93dx4b == '') {
            _0xe93dx4b = 'white'
        };
        if (_0xe93dx1a == null || _0xe93dx1a == '') {
            _0xe93dx1a = 'Button'
        };
        var _0xe93dx2 = '<a rel="' + _0xe93dx4c + '" href="' + _0xe93dx49 + '" class="sc-button ' + _0xe93dx4b + ' ' + _0xe93dx4a + '">' + _0xe93dx1a + '</a>';
        $(this)['replaceWith'](_0xe93dx2);
    });
    $('.sc-image')['each'](function() {
        var _0xe93dx4d = $(this)['attr']('src');
        var _0xe93dx4e = $(this)['attr']('url');
        var _0xe93dx4c = $(this)['attr']('rel');
        var _0xe93dx4f = 'href="' + _0xe93dx4e + '"';
        var _0xe93dx50 = $(this)['attr']('width');
        var _0xe93dx51 = $(this)['attr']('height');
        if (_0xe93dx4d == null || _0xe93dx4d == '') {
            _0xe93dx4d = 'http://1.bp.blogspot.com/-ifaH6GTxW7o/VK42Av2CG9I/AAAAAAAAOXM/ksH3zD319_M/s1600/logo-mbt.png'
        };
        if (_0xe93dx50 == null || _0xe93dx50 == '') {
            _0xe93dx50 = ''
        };
        if (_0xe93dx4c == null || _0xe93dx4c == '') {
            _0xe93dx4c = ''
        };
        if (_0xe93dx4e == null || _0xe93dx4e == '') {
            _0xe93dx4f = '';
            _0xe93dx4e = '';
        };
        if (_0xe93dx51 == null || _0xe93dx51 == '') {
            _0xe93dx51 = ''
        };
        var _0xe93dx2 = '<br/><a ' + _0xe93dx4f + ' rel="' + _0xe93dx4c + '"><img width="' + _0xe93dx50 + '" height="' + _0xe93dx51 + '" src="' + _0xe93dx4d + '"/></a><br/>';
        $(this)['replaceWith'](_0xe93dx2);
    });
    $('.sc-divider')['each'](function() {
        var _0xe93dx52 = $(this)['attr']('color');
        var _0xe93dx53 = $(this)['html']();
        if (_0xe93dx52 == null || _0xe93dx52 == '') {
            _0xe93dx52 = 'fblack'
        };
        if (_0xe93dx53 == null || _0xe93dx53 == '') {
            _0xe93dx53 = ''
        };
        var _0xe93dx2 = '<div class="sc-divider"><span>' + _0xe93dx53 + '</span><hr class="' + _0xe93dx52 + '"><a class="sc-top" class="' + _0xe93dx52 + '" href="#">Top</a></hr></div><br/>';
        $(this)['replaceWith'](_0xe93dx2);
    });
    $('.sc-tooltip')['each'](function() {
        var _0xe93dx54 = $(this)['attr']('url');
        var _0xe93dx55 = $(this)['attr']('title');
        var _0xe93dx56 = $(this)['html']();
        if (_0xe93dx54 == null || _0xe93dx54 == '') {
            _0xe93dx54 = '#'
        };
        if (_0xe93dx55 == null || _0xe93dx55 == '') {
            _0xe93dx55 = 'Insert Link Title'
        };
        if (_0xe93dx56 == null || _0xe93dx56 == '') {
            _0xe93dx56 = 'Insert Tooltip Text'
        };
        var _0xe93dx2 = '<a href="' + _0xe93dx54 + '" class="tooltip">' + _0xe93dx55 + '<span><b></b>' + _0xe93dx56 + '</span></a>';
        $(this)['replaceWith'](_0xe93dx2);
    });
    $('.sc-icon')['each'](function() {
        var _0xe93dx54 = $(this)['attr']('name');
        var _0xe93dx55 = $(this)['attr']('animation');
        var _0xe93dx56 = $(this)['attr']('size');
        var _0xe93dx57 = $(this)['attr']('flip');
        var _0xe93dx58 = $(this)['attr']('rotate');
        var _0xe93dx59 = $(this)['attr']('fix');
        var _0xe93dx5a = $(this)['attr']('color');
        if (_0xe93dx54 == null || _0xe93dx54 == '') {
            _0xe93dx54 = 'question-circle'
        };
        if (_0xe93dx55 == null || _0xe93dx55 == '') {
            _0xe93dx55 = ''
        };
        if (_0xe93dx56 == null || _0xe93dx56 == '') {
            _0xe93dx56 = ''
        };
        if (_0xe93dx58 == null || _0xe93dx58 == '') {
            _0xe93dx58 = ''
        };
        if (_0xe93dx5a == null || _0xe93dx5a == '') {
            _0xe93dx5a = ''
        };
        if (_0xe93dx59 == null || _0xe93dx59 == '') {
            _0xe93dx59 = ''
        };
        if (_0xe93dx56 == null || _0xe93dx56 == '') {
            _0xe93dx56 = ''
        };
        var _0xe93dx2 = '<i style="color:' + _0xe93dx5a + '" class="fa fa-' + _0xe93dx54 + ' fa-' + _0xe93dx55 + ' fa-' + _0xe93dx59 + ' fa-rotate-' + _0xe93dx58 + ' fa-flip-' + _0xe93dx57 + ' fa-' + _0xe93dx56 + ' "></i>';
        $(this)['replaceWith'](_0xe93dx2);
    });
});
$(document)['ready'](function() {
    $('.sc-top')['hide']();
    $(function() {
        $(window)['scroll'](function() {
            if ($(this)['scrollTop']() > 100) {
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

let qe = [
    {
        'title' : 'I am the life of the party.',
        'image' : 'Party'
    },
    {
        'title' : 'I sympathize with others’ feelings.',
        'image' : 'Mood'
    },
    {
        'title' : 'I have a vivid imagination.',
        'image' : 'Creativity'
    },
    {
        'title' : 'I am relaxed most of the time.',
        'image' : 'Relaxed-Stressed'
    },
    {
        'title' : 'I hate to seem pushy.',
        'image' : 'Crowd-People'
    },
    {
        'title' : 'I am not interested in abstract ideas.',
        'image' : 'Complexity'
    },
    {
        'title' : 'I like to stand out in a crowd.',
        'image' : 'Crowd-People'
    },
    {
        'title' : 'I make a mess of things.',
        'image' : 'Order'
    },
    {
        'title' : 'I get along well with people I have just met.',
        'image' : 'Crowd-People'
    },
    {
        'title' : 'I have difficulty understanding abstract ideas.',
        'image' : 'Complexity'
    },
    {
        'title' : 'I like order.',
        'image' : 'Order'
    },
    {
        'title' : 'I can find the positive in what seems negative to others.',
        'image' : 'Order'
    },
    {
        'title' : 'I am not interested in other people’s problems.',
        'image' : 'Mood'
    },
    {
        'title' : 'I seldom feel blue.',
        'image' : 'Relaxed-Stressed'
    },
    {
        'title' : 'I often forget to put things back in their proper place.',
        'image' : 'Order'
    },
    {
        'title' : 'I work best when I am alone.',
        'image' : 'Crowd-People'
    },
    {
        'title' : 'I have frequent mood swings.',
        'image' : 'Relaxed-Stressed'
    },
    {
        'title' : 'I am not really interested in others.',
        'image' : 'Crowd-People'
    },
    {
        'title' : 'I feel others’ emotions.',
        'image' : 'Crowd-People'
    },
    {
        'title' : 'I get upset easily.',
        'image' : 'Relaxed-Stressed'
    },
    {
        'title' : 'I talk to a lot of different people at parties.',
        'image' : 'Party'
    },
    {
        'title' : 'I don’t talk a lot.',
        'image' : 'People'
    },
    {
        'title' : 'I must try to maintain harmony within my group.',
        'image' : 'Crowd-People'
    },
    {
        'title' : 'I finish what I start.',
        'image' : 'Order'
    },
    {
        'title' : 'I do not have a good imagination.',
        'image' : 'Creativity'
    },
    {
        'title' : 'I am not good at taking charge of a group.',
        'image' : 'Crowd-People'
    },
    {
        'title' : 'I get chores done right away.',
        'image' : 'Order'
    },
    {
        'title' : 'I keep in the background.',
        'image' : 'Crowd-People'
    },
    {
        'title' : 'I believe that I am better than others',
        'image' : 'Crowd-People'
    },
    {
        'title' : 'I become overwhelmed by events.',
        'image' : 'Relaxed-Stressed'
    }
]


let qeCount = 0;

const isMobile = () => {
    let isMobile = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) isMobile = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return isMobile
}

const getCursorXY = (e) => {
    let x = isMobile() ? e.touches[0].clientX : e.pageX;
    let y = isMobile() ? e.touches[0].clientY : e.pageY;
    return [x,y];
}

const joystick = () => {
    let element = $('.turn-around__control'),
        wrapper = $('.turn-around__button'),
        siteMain = $('.site-main');
    siteBody = $('body');
    toggle = 0;
    let offsetLeft = 0;
    let offsetTop = 0;


    let positionTop = -15;
    let positionBottom = 45;
    let positionContent = 50;

    wrapper_offset = wrapper.offset();

    let eventStart = isMobile() ? 'touchstart' : 'mousedown';
    let eventMove = isMobile() ? 'touchmove' : 'mousemove';
    let eventEnd = isMobile() ? 'touchend' : 'mouseup';

    $(document).on(eventStart,'.turn-around__control',function(e){
        $(this).addClass('is-fixed');
        $(this).addClass('is-active');
        toggle = 1;
    });

    $(document).on(eventMove,'.site-main',function(e){
        if(toggle === 1){
            let xy = getCursorXY(e);
            offsetLeft = (xy[0] - wrapper_offset.left) < (positionContent + positionTop) ? positionTop : (xy[0] - wrapper_offset.left) > (positionContent + positionBottom) ? positionBottom : xy[0] - wrapper_offset.left - positionContent;
            offsetTop = (xy[1] - wrapper_offset.top) < (positionContent + positionTop) ? positionTop : (xy[1] - wrapper_offset.top) > (positionContent + positionBottom) ? positionBottom :xy[1] - wrapper_offset.top - positionContent;

            element.css({
                top: offsetTop,
                left: offsetLeft
            })
            $('.turn-around').removeClass('turn-around--top');
            $('.turn-around').removeClass('turn-around--left');
            $('.turn-around').removeClass('turn-around--bottom');
            $('.turn-around').removeClass('turn-around--right');
            siteMain.removeClass('site-main--red');
            siteMain.removeClass('site-main--blue');
            siteMain.removeClass('site-main--yellow');
            siteMain.removeClass('site-main--main');
            siteBody.removeClass('site-main--active');
            element.removeClass('is-active--right');
            element.removeClass('is-active--top');
            element.removeClass('is-active--left');
            element.removeClass('is-active--bottom');
            if(offsetLeft == positionTop && offsetTop != positionTop && offsetTop != positionBottom){
                $('.turn-around').addClass('turn-around--left');
                element.addClass('is-active--left');
                siteMain.addClass('site-main--red');
                siteBody.addClass('site-main--active');
            }
            if(offsetLeft == positionBottom && offsetTop != positionTop && offsetTop != positionBottom){
                $('.turn-around').addClass('turn-around--right');
                element.addClass('is-active--right')
                siteMain.addClass('site-main--blue');
                siteBody.addClass('site-main--active');
            }
            if(offsetTop == positionTop && offsetLeft != positionTop && offsetLeft != positionBottom){
                $('.turn-around').addClass('turn-around--top');
                element.addClass('is-active--top')
                siteMain.addClass('site-main--main');
                siteBody.addClass('site-main--active');
            }
            if(offsetTop == positionBottom && offsetLeft != positionTop && offsetLeft != positionBottom){
                $('.turn-around').addClass('turn-around--bottom');
                element.addClass('is-active--bottom')
                siteMain.addClass('site-main--yellow');
                siteBody.addClass('site-main--active');
            }

        }
    });

    $(document).on(eventEnd,'.site-main',function(e){
        if(toggle === 1){
            $(this).removeClass('is-fixed');
            element.removeAttr('style');
            if(offsetLeft == positionTop && offsetTop != positionTop && offsetTop != positionBottom){
                nextRound();
            }
            if(offsetLeft == positionBottom && offsetTop != positionTop && offsetTop != positionBottom){
                nextRound();
            }
            if(offsetTop == positionTop && offsetLeft != positionTop && offsetLeft != positionBottom){
                nextRound();
            }
            if(offsetTop == positionBottom && offsetLeft != positionTop && offsetLeft != positionBottom){
                nextRound();
            }
            toggle = 0;
            siteMain.removeClass('site-main--red');
            siteMain.removeClass('site-main--blue');
            siteMain.removeClass('site-main--yellow');
            siteMain.removeClass('site-main--main');
            siteBody.removeClass('site-main--active');
            element.removeClass('is-active');
            element.removeClass('is-active--right');
            element.removeClass('is-active--top');
            element.removeClass('is-active--left');
            element.removeClass('is-active--bottom');
        }
    });
}

const nextQe = () => {
    $(document).on('click','.btn--collect',function(e){
        nextRound();
    });
}

const game_reload = () => {
    $(document).on('click','.btn--reset',function(e){
        location.reload();
    })
}

const nextRound = () => {
    $('.turn-around').removeClass('turn-around--top');
    $('.turn-around').removeClass('turn-around--left');
    $('.turn-around').removeClass('turn-around--bottom');
    $('.turn-around').removeClass('turn-around--right');
    if( qeCount + 1 <= qe.length){
        qeCount += 1;
        if(qeCount >= qe.length){
            setTimeout(function(e){
                $('#final').addClass('is-active');
            })
            return false;
        }
        $('.question-note').html(qe[qeCount].title);
        $('.site-head img').attr('src','assets/images/' + qe[qeCount].image.toLowerCase() + '.png');
        $('.site-line span').css({
            width: (100 / qe.length * (qeCount + 1)) + '%'
        })
        let html = qeCount < 9 ? '0' + (qeCount + 1) : (qeCount + 1);
        $('.site-data .first').html(html);
    }
}
jQuery(document).ready(function(e){
    joystick();
    $(window).resize(function() {
        joystick();
    });
    nextQe();
    game_reload();
    $('.site-data .last').html(qe.length);
    $('.question-note').html(qe[0].title);
    $('.site-head img').attr('src','assets/images/' + qe[0].image.toLowerCase() + '.png');
    $('.site-line span').css({
        width: (100 / qe.length * (qeCount + 1)) + '%'
    })
})
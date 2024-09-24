// base data
var point = 0,
    money = 0,
    step = 0,
    bandTime = 0,
    round = 0,
    roundPoint = 0,
    roundMoney = 0,
    roundTime = 0,
    roundData = [],
    maxRound = 0,
    roundDataPush = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


var bonus_visibility = false,
    bonus_insurance = false,
    bonus_insurance_coin = 0,
    bonus_insurance_count = 0,
    bonus_sprint = false,
    bonus_sprint_time = 10000,
    bonus_sprint_coin = 0,
    bonus_replay = false,
    bonus_replay_coin = 0,
    bonus_replay_data = [355, 176, 110, 400, 193],
    bonus_multiplayer = false,
    bonus_multiplayer_player = 'your';


let visibilityCountDownTime;


const roundDefault = () => {
    point = 0;
    money = 0;
    step = 0;
    bandTime = 0;
    round = 0;
    roundPoint = 0;
    roundMoney = 0;
    roundTime = 0;
    roundDataPush = [];
    maxRound = roundData.length;
}

const waterMelon = () => {
    const image = $('.water-melon__image .step');
    image.addClass('animation');
    setTimeout(function () {
        image.removeClass('animation');
    }, 100)
    if (point <= 5) {
        image.removeClass('active');
        $('.water-melon__image .step-' + point).addClass('active');
    }
    if (point > 5 && point < 10) {
        image.removeClass('active');
        $('.water-melon__image .step-5').addClass('active');
    }
    if (point >= 10 && point < 50) {
        image.removeClass('active');
        $('.water-melon__image .step-10').addClass('active');
    }
    if (point >= 50 && point < 100) {
        image.removeClass('active');
        $('.water-melon__image .step-11').addClass('active');
    }
    if (point >= 100 && point < 150) {
        image.removeClass('active');
        $('.water-melon__image .step-12').addClass('active');
    }
    if (point >= 150 && point < 200) {
        image.removeClass('active');
        $('.water-melon__image .step-13').addClass('active');
    }
    if (point >= 200 && point < 250) {
        image.removeClass('active');
        $('.water-melon__image .step-14').addClass('active');
    }
    if (point >= 250 && point < 300) {
        image.removeClass('active');
        $('.water-melon__image .step-15').addClass('active');
    }
    if (point >= 300 && point < 350) {
        image.removeClass('active');
        $('.water-melon__image .step-16').addClass('active');
    }
    if (point >= 350) {
        image.removeClass('active');
        $('.water-melon__image .step-17').addClass('active');
    }
}


const add_dot_to_string = (number) => {
    let checkNumberNegative = number < 0 ? -1 : 1;
    number = Math.round(number * checkNumberNegative);
    if(checkNumberNegative > 0){
        number = Number(number) < 100 ? Number(number) < 10 ? '00' + Number(number) : '0' + Number(number) : Number(number) ;
    }
    number = number.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
    let numberArray =  number.split('.'),
        dataReturn = '';
    numberArray.map( (v,i) => {
        if(i === numberArray.length - 1){
            dataReturn = dataReturn + '.' + v.toString();
        }
        else{
            dataReturn = dataReturn + v.toString();
        }
    })
    return checkNumberNegative  < 0 ? '-' + dataReturn : dataReturn;
}

const totalMoneyCountDown = (first, counter) => {
    let totalMoney = $('.total-money');
    totalMoney.stop();
    totalMoney.prop('Counter', first).animate({
        Counter: counter
    }, {
        duration: 300,
        easing: 'swing',
        step: function (now) {
            let totalPrice = parseInt(now / 100),
                totalUnit = Math.round((now / 100 - totalPrice) * 100);
            let dataPrice = totalPrice < 10 ? '0' + totalPrice : totalPrice >= 100 ? '00' : totalPrice,
                dataUnit = totalUnit < 10 ? '0' + totalUnit : totalUnit >= 100 ? '00' : totalUnit;
            $(this).find('.price').html(dataPrice)
            $(this).find('.unit').html(dataUnit)
        }
    });
}


// functions
const noScroll = () => {
    $('body,html').addClass('no-scroll');
}

const gameOver = () => {
    let roundMaxBands = roundData[round] ? roundData[round] : 500;

    if(bonus_insurance === true){
        roundMaxBands = roundMaxBands > 125 ? roundMaxBands : 125;
    }

    if (point > roundMaxBands) {
        $('#gameover').addClass('is-active');
        $('.bonus-warning').hide();
        bonusInsurance();
        if(visibilityCountDownTime){
            clearTimeout(visibilityCountDownTime);
        }
        if(bonus_sprint === true){
            if(sitv){
                clearInterval(sitv);
            }
        }

        return true;
    }
    return false;
}

const resetRound = () => {
    const image = $('.water-melon__image .step');
    totalMoneyCountDown(money, 0);
    point = 0;
    money = 0;
    step = 0;
    image.removeClass('active');
    $('.water-melon__image .step-0').addClass('active');

    if(sophiaTurnTimeOut) clearTimeout(sophiaTurnTimeOut);
    if(sophiaTurnTimeOutCollect) clearTimeout(sophiaTurnTimeOutCollect);
}

const nextRound = () => {
    let eleRound = $('#round'),
        roundTitle = $('#round-title');
    round += 1;
    let countRound = maxRound - (round + 1);
    eleRound.html(countRound);
    roundTitle.children('span').html(round < 9 ? '0' + (round + 1) : round + 1);

    if(sophiaTurnTimeOut) clearTimeout(sophiaTurnTimeOut);
    if(sophiaTurnTimeOutCollect) clearTimeout(sophiaTurnTimeOutCollect);
    // Push data
    pushRoundData();

    // Bonus
    bonusSprint();


    if(round <= 0) {
        roundDefault();
    }

}

const timeInterval = () => {
    setInterval(() => {
        bandTime += 100;
        roundTime += 100;
    }, 100)
}

const pushRoundData = () => {
    const pushData = {
        round: round,
        point: point,
        money: money,
        time: roundTime
    }
    roundDataPush.push(pushData);
    return pushData
}

const pushBandData = () => {
    const pushData = {
        round: round,
        point: point,
        money: money,
        time: bandTime
    }
    return pushData;
}

const bonusVisibility = () => {
    if (bonus_visibility === true) {
        if (point > roundData[round] - 50) {
            visibilityCountDownFunction();
            $('.bonus-warning').show();
            setTimeout(function (e) {
                $('.bonus-warning').hide();
            }, 2000);
        }
    }
}

const bonusDelegate = () => {
    let bonusMoney = getLastRoundMoney(5);
    countMoneycoin(bonusMoney);
}

const addDoublePrice = (number = 2) => {
    $('.bands__button.btn--bands').each(function (e) {
        let val = $(this).data('price') * number;
        val = val < 10 ? '00' + val.toString() : val < 100 ? '0' + val.toString() : val.toString();
        $(this).find('.bands__money span:not(.currency)').html(add_dot_to_string(val))
    });
}
const removeDoublePrice = () => {
    $('.bands__button.btn--bands').each(function (e) {
        let val = $(this).data('price');
        val = val < 10 ? '00' + val.toString() : val < 100 ? '0' + val.toString() : val.toString();
        $(this).find('.bands__money span:not(.currency)').html(add_dot_to_string(val))
    });
}

var sitv;

const bonusSprint = () => {
    let bonusCountdown = $('.bonus-countdown');
    if( round >= 30){
        bonus_sprint = false;
        bonusCountdown.hide();
        removeDoublePrice();
        if(sitv){
            clearInterval(sitv);
        }
    }
    if (bonus_sprint === true) {
        let time = bonus_sprint_time;
        bonusCountdown.show();
        if(sitv){
            clearInterval(sitv);
        }
        sitv = setInterval(function (e) {
            if( time < 3000){
                bonusCountdown.addClass('bonus-countdown--red');
            }
            else{
                bonusCountdown.removeClass('bonus-countdown--red');
            }
            if (time >= 100) {
                time -= 100;
                let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds = Math.floor((time % (1000 * 60)) / 10);
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '000' + seconds.toString() : seconds < 100 ? '00' + seconds.toString() : seconds < 1000 ? '0' + seconds.toString() : seconds.toString();
                bonusCountdown.find('.minute').html(minutes);
                bonusCountdown.find('.seconds').html(add_dot_to_string(seconds));
                addDoublePrice();
            } else {
                bonusCountdown.find('.minute').html('00');
                bonusCountdown.find('.seconds').html(add_dot_to_string('0000'));
                $('#gameovertime').addClass('is-active');
                clearInterval(sitv);
                return false;
            }

        }, 100)
    }
}

const bonusInsurance = () => {
    if (bonus_insurance === true && bonus_insurance_count < 5) {
        $('.bonus-insurance').show();
        let bonusMoney = Math.ceil(money / 100 * 20);
        money = bonusMoney;
        bonusMoney = bonusMoney < 100 ? '0' + bonusMoney.toString() : bonusMoney;
        $('.bonus-insurance__price span').text(add_dot_to_string(bonusMoney))
        bonus_insurance_count += 1;
    }
    else{
        $('.bonus-insurance').hide();
        bonus_insurance = false;
    }
}

const yourTurn = () => {
    $('.bonus-multiplayer').children('.play--one').addClass('is-active');
    $('.bonus-multiplayer').children('.play--two').removeClass('is-active');
    $('.bonus-multiplayer__title span').html('Your');
    bonus_multiplayer_player = 'your';
}

let sophiaTurnTimeOut;
let sophiaTurnTimeOutCollect;

const sophiaTurn = () => {
    $('body').css({
        'pointer-events': 'none'
    });
    $('.bonus-multiplayer').children('.play--one').removeClass('is-active');
    $('.bonus-multiplayer').children('.play--two').addClass('is-active');
    $('.bonus-multiplayer__title span').html('Sophia’s');

    let ran = Math.floor(Math.random() * 4) + 1;
    let ranCL = Math.floor(Math.random() * 4) + 1;

    let button = ranCL === 1 && point > 0 ? $('.btn--collect') : $('.btn--bands:nth-child(' + ran + ')');

    setTimeout(function(e){
        button.addClass('is-selected');
    },500);

    let button_bands = $('.bands__button'),
    button_game_over = $('#btn-game-over'),
    button_next_round = $('#btn-next-round');

    $('#btn-game-over').css({
        'pointer-events': 'none'
    });

    $('#btn-next-round').css({
        'pointer-events': 'none'
    });

    sophiaTurnTimeOut = setTimeout(function(e){
        button.trigger('click');
        button.removeClass('is-selected');
        if(ranCL === 1){
            sophiaTurnTimeOutCollect = setTimeout(function(e){
                // button_next_round.trigger('click');
                button_game_over.removeAttr('style');
                button_next_round.removeAttr('style');
                setTimeout(function(e){
                    $('body').removeAttr('style');
                },500)
                // yourTurn();
            },1000)
        }
        else{
            if( gameOver() ){
                $('#btn-game-over').css({
                    'pointer-events': 'none'
                })
                sophiaTurnTimeOutCollect = setTimeout(function(e){
                    // button_game_over.trigger('click');
                    button_game_over.removeAttr('style');
                    button_next_round.removeAttr('style');
                    setTimeout(function(e){
                        $('body').removeAttr('style');
                    },500)
                    // yourTurn();
                },1000)
            }
            else{
                sophiaTurnTimeOutCollect = setTimeout(function(e){
                    $('body').removeAttr('style');
                    button_next_round.removeAttr('style');
                    button_game_over.removeAttr('style');
                },500)
            }
        }
    },1500)
    bonus_multiplayer_player = 'soplia';
}

let bonusMultiplayer = () => {
    if (bonus_multiplayer === true && !gameOver()) {

        if(sophiaTurnTimeOut) clearTimeout(sophiaTurnTimeOut);
        if(sophiaTurnTimeOutCollect) clearTimeout(sophiaTurnTimeOutCollect);

        if(bonus_multiplayer_player === 'your'){
            sophiaTurn();
        }
        else{
            yourTurn();
        }
    }
}

let disableBonusMultiplayer = () => {
    if (round >= 25) {
        $('.bonus-multiplayer').addClass('is-hidden');
        bonus_multiplayer = false;
        removeDoublePrice();
    }
}

const reverseArrayObject = (a) => {
    let length = a.length;
    let f_data = [];
    for(let i = length - 1; i >= 0; i--){
        f_data.push(a[i]);
    }
    return f_data;
}

const getLastRoundMoney = (x) => {
    let dataRount = reverseArrayObject(roundDataPush);
    let bonusMoney = 0;
    for(let i = 0;i < x;i++){
        let v = dataRount[i];
        let v_money = v ? v.money : 0;
        bonusMoney = bonusMoney + v_money;
    }
    return bonusMoney;
}

const countMoneycoin = (coin) => {
    const eleCoin = $('#coin'),
        firstMoney = roundMoney;
    roundMoney += coin
    eleCoin.addClass('is-active');
    eleCoin.prop('Counter', firstMoney).animate({
        Counter: roundMoney
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).html(add_dot_to_string(now));
        }
    });
    setTimeout(function(e){
        eleCoin.removeClass('is-active');
    },1000)
}

const countRoundMelon = (melon) => {
    const eleCoin = $('#round');
    let countRound = Number(eleCoin.text());
    eleCoin.addClass('is-active');
    eleCoin.prop('Counter', countRound).animate({
        Counter: melon
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).html(Math.round(now));
        }
    });
    setTimeout(function(e){
        eleCoin.removeClass('is-active');
    },1000)
}

const closePopup = () => {
    $('.site-popup').removeClass('is-active');
}

// events functions
const bandsEvent = () => {
    $(document).on('click', '.btn--bands', function () {
        $('.btn--collect').removeClass('btn--disable');
        $('.btn--bands').removeClass('is-selected');
        const value = $(this).data('value'),
            price = $(this).data('price'),
            firstMoney = money;

        // data bands
        point += value;

        if (gameOver()) {
            return false;
        }
        else{
            money += Number(price);
        }


        // bonus
        bonusVisibility();
        if (bonus_sprint === true) {
            money += Number(price);
        }

        bonusMultiplayer();
        if (bonus_multiplayer === true) {
            money += Number(price) * 2;
        }

        totalMoneyCountDown(firstMoney, money)
        waterMelon();


        // Push data
        pushBandData();

        // Reset time band
        bandTime = 0;
    })
};

const roundCollectEvent = () => {
    let sitePopup =  $('#collect-round');
    $(document).on('click', '.btn--collect', function () {
        sitePopup.addClass('is-active');
        let countMoney = money;
        sitePopup.find('.data-point').html(add_dot_to_string(countMoney));
        if(visibilityCountDownTime){
            clearTimeout(visibilityCountDownTime);
        }
        if(bonus_sprint === true){
            if(sitv){
                clearInterval(sitv);
            }
        }

        if( bonus_visibility === true){
            let money_visibility = Math.round(money / 100 * 30);
            money = money - money_visibility;
            let ele_visibility = $('.bonus-visibility');
            let ele_visibility_price = $('.bonus-visibility__price span');
            ele_visibility.removeAttr('style');
            ele_visibility_price.html(add_dot_to_string(money_visibility));
        }
        else{
            let ele_visibility = $('.bonus-visibility');
            ele_visibility.hide();

        }
    })
    $(document).on('click', '.btn--collect-round', function () {

        sitePopup.removeClass('is-active')
        $('.btn--collect').addClass('btn--disable');

        if (round < maxRound -1) {

            if(round >= 0) {
                countMoneycoin(money)
            }

            nextRound();
            resetRound();
            if (round === 10) {
                bonusRoundTen();
            }

            if (round >= 15) {
                bonus_visibility = false;
            }


            if (round === 20) {
                bonusRoundTwenty();
            }
            disableBonusMultiplayer();
            if(bonus_multiplayer === true && bonus_multiplayer_player === 'your' && round <= 25){
                sophiaTurn();
            }else{
                yourTurn();
            }
        }
        else{
            gameFinal();
        }
        // Reset time round
        roundTime = 0;
    })

}

const gameFinal = () => {
    let final = $('#final');
    final.addClass('is-active');
    final.find('.final-popup__points .points').html('<sup>$</sup>' + add_dot_to_string(roundMoney));
    $('.btn--home').addClass('is-final');
}

const gameOverEvent = () => {
    $(document).on('click', '.btn--game-over', function (e) {
        $('.btn--collect').addClass('btn--disable');
        $('#gameover').removeClass('is-active');
        $('#gameovertime').removeClass('is-active');

        if (round < maxRound - 1) {
            if (bonus_insurance === true){
                countMoneycoin(money);
            }
            resetRound();
            nextRound();
            if (round === 10) {
                bonusRoundTen();
            }
            if (round === 20) {
                bonusRoundTwenty();
            }

            if (round >= 15) {
                bonus_visibility = false;
            }
            disableBonusMultiplayer();
            if(bonus_multiplayer === true && bonus_multiplayer_player === 'your' && round <= 25){
                sophiaTurn();
            }else{
                yourTurn();
            }
        }
        else{
            gameFinal();
        }
    })
}

const bonusRoundTen = () => {
    let sitePopup = $('#bonus-10');
    sitePopup.addClass('is-active');
    let ten_last_money = getLastRoundMoney(10);

    let bonus_money = getLastRoundMoney(5);
    bonus_money = bonus_money < 100 ? '0' + bonus_money.toString() : bonus_money;
    sitePopup.find('.delegate--price').html('+ $' + add_dot_to_string(bonus_money))

    bonus_insurance_coin = Math.round(ten_last_money / 10) < 500 ? 500 : Math.round( Math.round(ten_last_money / 10) / 100 ) * 100;

    sitePopup.find('.bonus-item[data-bonus="insurance"] .bonus-item__meta-text--red').html('-$' + add_dot_to_string(bonus_insurance_coin));

    // if (roundMoney < bonus_insurance_coin) {
    //     sitePopup.find('.bonus-item[data-bonus="insurance"]').addClass('bonus-item--disable');
    // }
}

const bonusRoundTwenty = () => {
    let sitePopup = $('#bonus-20');
    sitePopup.addClass('is-active');
    let tenLastMoney = getLastRoundMoney(10);

    bonus_sprint_coin = Math.round(tenLastMoney / 2);
    sitePopup.find('.bonus-item[data-bonus="sprint"] .bonus-item__meta-text--red').html('-$' + add_dot_to_string(bonus_sprint_coin));

    // if (roundMoney < bonus_sprint_coin) {
    //     sitePopup.find('.bonus-item[data-bonus="sprint"]').addClass('bonus-item--disable');
    // }

    // replay
    let bonus_fee = Math.round((getLastRoundMoney(20) / 20) * 0.75 * 5) ;
    bonus_replay_coin = bonus_fee;
    sitePopup.find('.bonus-item[data-bonus="replay"] .bonus-item__meta-text--red').html('-$' + add_dot_to_string(bonus_replay_coin));

    // if (roundMoney < bonus_replay_coin) {
    //     sitePopup.find('.bonus-item[data-bonus="replay"]').addClass('bonus-item--disable');
    // }
}

const visibilityCountDownFunction = () => {
    let timeCount = 5000;
    if(visibilityCountDownTime){
        clearInterval(visibilityCountDownTime);
    }
    visibilityCountDownTime = setInterval(function(e){
        if(timeCount <= 0){
            timeCount = 5000;
            $('.bonus-warning').show();
        }
        if(timeCount === 3000){
            $('.bonus-warning').hide();
        }
        timeCount -= 1000;
    },1000);
}

const bonusSelected = () => {
    $(document).on('click', '.bonus-item', function (e) {
        let ele = $(this),
            bonusData = ele.data('bonus'),
            bonusParent = ele.parents('.bonus'),
            label = ele.find('.bonus-item__footer .label'),
            button = ele.find('.bonus-item__footer .icon-btn');

        let svgSelect = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path fill="currentColor" d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z M225.019,372.44L112.914,260.336l42.422-42.422l71.646,71.646l143.833-130.752l40.371,44.385L225.019,372.44z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
            svgUnselect = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>	<g>	<path fill="currentColor" d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z M383.28,340.858l-42.422,42.422 L256,298.422l-84.858,84.858l-42.422-42.422L213.578,256l-84.858-84.858l42.422-42.422L256,213.578l84.858-84.858l42.422,42.422 L298.422,256L383.28,340.858z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

        if (ele.hasClass('is-selected')) {
            ele.removeClass('is-selected');
            label.text('select option');
            button.html(svgSelect);
            bonusParent.find('.btn--bonus').hide();
        } else {
            ele.addClass('is-selected');
            let sib = ele.siblings('.bonus-item');
            sib.removeClass('is-selected');
            sib.find('.bonus-item__footer .label').text('select option');
            sib.find('.bonus-item__footer .icon-btn').html(svgSelect);
            bonusParent.find('.btn--bonus').attr('data-bonus', bonusData);
            bonusParent.find('.btn--bonus').show();
            label.text('unselect option');
            button.html(svgUnselect);
        }
    });
}

const bonusSelectedComplate = () => {
    $(document).on('click', '.btn--bonus', function (e) {
        let value = $(this).data('bonus');
        if (value === 'delegate') {
            round += 5;
            let roundTitle = $('#round-title');
            roundTitle.children('span').html(round < 10 ? '0' + (round + 1) : round + 1);
            countRoundMelon(maxRound - round - 1);
            bonusDelegate();
        }
        if (value === 'visibility') {
            bonus_visibility = true;
        }
        if (value === 'insurance') {
            bonus_insurance = true;
            countMoneycoin((Number(bonus_insurance_coin) * -1))
        }
        if (value === 'sprint') {
            let dataRounds = roundDataPush;
            dataRounds.reverse();
            let time = 0;
            dataRounds.map( (v,i) => {
                if(i === 0){
                    return false;
                }
                time += v.time
            });
            let countTime = (time / 10) / 2
            bonus_sprint = true;
            bonus_sprint_time = countTime > 10000 ? 10000 : countTime < 5000 ? 5000 : countTime;
            bonusSprint();
            countMoneycoin(bonus_sprint_coin * -1);
        }

        if (value === 'replay' && roundMoney >= bonus_replay_coin) {
            bonus_replay = true;

            bonus_replay_data.map( v => {
                roundData.push(v);
            })
            maxRound = roundData.length;
            countRoundMelon(maxRound - round - 1);
            countMoneycoin(bonus_replay_coin * -1);

        }

        if (value === 'multiplayer') {
            addDoublePrice(3);
            bonus_multiplayer = true;
            $('.bonus-multiplayer').removeClass('is-hidden');
        }

        closePopup();
    });
}


const game_reload = () => {
    $(document).on('click','.btn--reset',function(e){
        location.reload();
    })
}

const clickClosePopup = () => {
    $(document).on('click', '.site-popup--close', function (e) {
        closePopup();
    });
}

const defaultRoundData = () => {

    for(let i = 1; i <= 30 ; i++){
        let random_data = getRndInteger(15,500);
        roundData.push(random_data);
    }
    maxRound = roundData.length;
    let eleRound = $('#round');
    eleRound.html(maxRound);
}

const init = function () {
    // Base data
    defaultRoundData();
    timeInterval();

    // Event
    bandsEvent();
    roundCollectEvent();
    gameOverEvent();

    // bonus
    bonusSelectedComplate();
    bonusSelected();
    clickClosePopup();
    game_reload();
}

// init function
jQuery(document).ready(function () {
    init();
});
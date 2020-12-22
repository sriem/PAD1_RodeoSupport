(function (window) {
    let appTemplate = `<div id="rodeo-helper-app-app">
    <p>F9 toggles visibility</p>

    <p>PPAFE1</p></br>
    <p>Head count:</p>
    <input type="text" id="AfeHeadCount" value="">
    <p>Buffer goal:</p>
    <input type="text" id="AfeBufferGoal" value=""></br>

    <p>PPSingleMedium</p></br>

    <p>Head count:</p>
    <input type="text" id="SingleMediumHeadCount" value="">
    <p>Buffer goal:</p>
    <input type="text" id="SingleMediumBufferGoal" value=""></br>

    <p>PPSingleNoSLAM</p></br>

    <p>Head count:</p>
    <input type="text" id="SingleNoSlamHeadCount" value="">
    <p>Buffer goal:</p>
    <input type="text" id="SingleNoSlamBufferGoal" value=""></br>
    
    <p>PPSingleNoSLAM2</p></br>

    <p>Head count:</p>
    <input type="text" id="SingleNoSlam2headCount" value="">
    <p>Buffer goal:</p>
    <input type="text" id="SingleNoSlam2bufferGoal" value=""></br>

    <p>PPSingleWrap</p></br>

    <p>Head count:</p>
    <input type="text" id="SingleWrapHeadCount" value="">
    <p>Buffer goal:</p>
    <input type="text" id="SingleWrapBufferGoal" value="">
</div>`;

    let githubApp = new Vue({
        data: {
            PPAFE1: {
                'headCount':'0',
                'bufferGoal':'0',
                'bufferTarget':'0'},
            PPSingleMedium: {
                'headCount':'0',
                'bufferGoal':'0',
                'bufferTarget':'0'},
            PPSingleNoSLAM: {
                'headCount':'0',
                'bufferGoal':'0',
                'bufferTarget':'0'},
            PPSingleNoSLAM2: {
                'headCount':'0',
                'bufferGoal':'0',
                'bufferTarget':'0'},
            PPSingleWrap: {
                'headCount':'0',
                'bufferGoal':'0',
                'bufferTarget':'0'},
        },
        methods: {
            calBufferTarget() {

                for (const i in this.data) {
                    let sum = Number(i.headCount) * Number(i.bufferGoal);
                    i.bufferTarget = sum;
                }
                this.data.PPAFE1.headCount
                
            }
        }
    });


    //--- Use jQuery to activate the dialog buttons.
        $("#submitBtn").click(function () {
    var targetCount = $("#targetCount").val();
    var headCount = $("#headCount").val();
    var avarage = parseInt(targetCount, 10) * parseInt(headCount, 10);

    $("#targetText").text("Target is: " + avarage);
});

$("#gmCloseDlgBtn").click(function () {
    $("#gmPopupContainer").hide();
});



    window.rodeoHelper = {
        isReady(successCallBack) {
            jq(document).ready(function(){
                successCallBack();
            });
        },
        appendToBody() {
            jq('body').append(appTemplate);
        },
        addStyle() {
            jq('head').append(`<style type="text/css"> #rodeo-helper-app-app div, #rodeo-helper-app-app span, #rodeo-helper-app-app p, #rodeo-helper-app-app h1, #rodeo-helper-app-app h2, #rodeo-helper-app-app h3, #rodeo-helper-app-app h4, #rodeo-helper-app-app a, #rodeo-helper-app-app img, #rodeo-helper-app-app b { color: #fff; font-family: HelveticaNeue, Helvetica, Arial, "Microsoft Yahei", sans-serif; font-size: 12px; box-sizing: border-box; text-align: left;position: fixed; top: 0; right: 0; margin: 1ex; padding: 1em; z-index: 6666; opacity: 0.9; border-radius: 25px; border: 2px solid #73AD21; padding: 20px; width: 500px; height: 350px; } </style>`);
        },
        startApp() {
            this.appendToBody();
            setTimeout(() => {
                githubApp.$mount('#github-info-app');
            }, 3000);
        }
    };
})(window);

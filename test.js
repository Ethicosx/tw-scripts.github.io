/*______________________________________________________________________________
********************************************************************************
WriterScriptIs : Salim Fadhil                                                  *
VersionScript  : 1.0                                                           *
DateWroteScript: 00-00-0000                                                    *
DateUpdateD    : 00-00-0000                                                    *
URL            : https://forum.tribalwars.ae/index.php?members/سيد-الاساطير.41653/ *
_______________________________________________________________________________*
(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)

||     _______ _________         _________ _______  _______  _______                ||     _______  _______  _       _________ _______       _______  _______  ______           _________ _           ||
||     (  ____ \\__   __/|\     /|\__   __/(  ____ \(  ___  )(  ____ \|\     /|     ||    (  ____ \(  ___  )( \      \__   __/(       )     (  ____ \(  ___  )(  __  \ |\     /|\__   __/( \          ||
||     | (    \/   ) (   | )   ( |   ) (   | (    \/| (   ) || (    \/( \   / )     ||    | (    \/| (   ) || (         ) (   | () () |     | (    \/| (   ) || (  \  )| )   ( |   ) (   | (          ||
||     | (__       | |   | (___) |   | |   | |      | |   | || (_____  \ (_) /      ||    | (_____ | (___) || |         | |   | || || |     | (__    | (___) || |   ) || (___) |   | |   | |          ||
||     |  __)      | |   |  ___  |   | |   | |      | |   | |(_____  )  ) _ (       ||    (_____  )|  ___  || |         | |   | |(_)| |     |  __)   |  ___  || |   | ||  ___  |   | |   | |          ||
||     | (         | |   | (   ) |   | |   | |      | |   | |      ) | / ( ) \      ||          ) || (   ) || |         | |   | |   | |     | (      | (   ) || |   ) || (   ) |   | |   | |          ||
||     | (____/\   | |   | )   ( |___) (___| (____/\| (___) |/\____) |( /   \ )     ||    /\____) || )   ( || (____/\___) (___| )   ( |     | )      | )   ( || (__/  )| )   ( |___) (___| (____/\    ||
||     (_______/   )_(   |/     \|\_______/(_______/(_______)\_______)|/     \|     ||    \_______)|/     \|(_______/\_______/|/     \|     |/       |/     \|(______/ |/     \|\_______/(_______/    ||

(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)*/

javascript:
    'use strict';
    var DevInfoObj = {
        Developer : 'Abu.Rajih',
        CopyRight : 'سيد الاساطير',
        Author : 'Salim Fadhil',
        TWAuthorProfile : 'https://forum.tribalwars.ae/index.php?members/سيد-الاساطير.41653/',
        VideoOfScriptYoutube : '',
        IG:'https://www.instagram.com/ethicosx/',
    };

    var ActiveWorldWithScriptObj = {
        TWWorld : window.location.hostname.split(".")[0],
        TWVersion : window.location.hostname.split(".")[2],
        AccountName: window.game_data.player.name,
    };

    var ScriptText = {
        ScriptName:'سكربت موازنة الموارد المطور',
        developerOfScript:'مبرمج السكربت : ',
        VersionInfo: 'النسخه',
        WorldInfo : 'العالم',
        UnitsInWorld: 'وحدات الأسهم',
        RunOnAccount : 'مشغل السكربت',
        UnitsCheck: '',
        Wood: 'https://dsae.innogamescdn.com/asset/62e187d5/graphic/holz.png',
        Stone: 'https://dsae.innogamescdn.com/asset/62e187d5/graphic/lehm.png',
        Iron: 'https://dsae.innogamescdn.com/asset/62e187d5/graphic/eisen.png',
        Resources : 'https://dsae.innogamescdn.com/asset/62e187d5/graphic/buildings/storage.png',
        Business:'https://dsae.innogamescdn.com/asset/09a28981/graphic//buildings/market.png',
        Cancel:'إلغاء',
        From: 'من',
        ExtraWood : 'خشب فائض',
        ExtraStone : 'طمي فائض',
        ExtraIron : 'حديد فائض',
        BusinessAvailable: 'التجار',
        To: 'إلى',
        WoodNeed: 'تحتاج خشب',
        StoneNeed: 'تحتاج طمي',
        IronNeed: 'تحتاج حديد',
        MaxStorage: 'سعة المخزن',
        Send : 'إرسال',
        village: 'القرية',
        DisapperStatus:'إخفاء',
        Settings:'الإعدادات',
        disc:'القرى التي تحتوي على موارد اقل من المحدد سيتم إعتبارها بحاجة للموارد',
        Dist:'المسافة',
    }


    if(window.game_data.units.length == 11){
        if(ActiveWorldWithScriptObj.TWVersion){
            ScriptText.UnitsCheck = "لا";
        }
    }else if(window.game_data.units.length == 13){
        ScriptText.UnitsCheck = "نعم";
    }
    else{
        ScriptText.UnitsCheck = "*_*";
    }
    function Settings(){
        if($("#options").css("display") === "none"){
            $("#options").show();
        }else{
            $("#options").hide();
        }
    }
    /* ---------------------------------{ GET DISTANCE FUNCTION }----------------------------------------------- */
    function GetDist(from, to, Return){
        let timeDist;
        $.get(`/game.php?village=${from}&screen=market&mode=call`,function(data){
            $(data).find("#village_list > tbody").each(function(i,e){
                timeDist = $.trim($(this).find(`tr[data-village="${to}"] > td:nth-child(2)`).text());
            });
            Return(timeDist);
        });
    }
    /* ---------------------------------{ GET DISTANCE FUNCTION }----------------------------------------------- */


    $("body").append(`
    <div id="BoxResources" class="popup_style ui-draggable" style="text-align:center; width: 70%; position: fixed; top: 10.5%; left: 15%; display: block;box-shadow:0 0 3px 1px black;">
    <div id="ClickToDrag" style=";text-align:center;background:#111; color:white;" class="popup_menu ui-draggable-handle"><a id="Settings" title='${ScriptText.Settings}' style="position:absolute;left:5px;background:black;color:red;border:5px solid black; box-shadow: 0 0 3px 1px black; border-radius: 5px;" href="#" onclick="Settings()" onmouseover="changeBorderforSettings(this)" onmouseout="defaultDesignforSettings(this)"><img width='14' height='14' src='https://dsae.innogamescdn.com/asset/09a28981/graphic/buildings/garage.png' /></a><span style="text-align:center;font-size: 18px;">${ScriptText.ScriptName}</span><a id="CloseBoxResources" style="background:black;color:red;border:5px solid black; box-shadow: 0 0 3px 1px black;" href="#" onclick="CloseBoxResources()" onmouseover="changeBorder(this)" onmouseout="defaultDesign(this)">X</a></div>
    <div class="popup_content" id="conPopUp" style="width:text-align:center !important;height: auto; overflow-y: auto;  display: flex; flex-wrap: wrap; justify-content: space-between;background: #232323 !important;">
    <div style="width:100%">
        <table align="center" style="text-align:center;width:100%" id="tableofdeveloper">
            <thead>
                <tr>
                    <th style="background:#011A15 !important;font-size:15px;" colspan="4">${ScriptText.developerOfScript} <a style='color:#f55;font-weight: bold;' href='#' >${DevInfoObj.CopyRight}</a></th>
                </tr>
                <tr>
                    <th>${ScriptText.VersionInfo}</th>
                    <th>${ScriptText.WorldInfo}</th>
                    <th>${ScriptText.UnitsInWorld}(<img src="https://dsen.innogamescdn.com/asset/62e187d5/graphic/unit/unit_archer.png" class="" data-title=""> & <img src="https://dsae.innogamescdn.com/asset/2e8dac1e/graphic/unit/unit_marcher.png" class="" data-title="">)</th>
                    <th>${ScriptText.RunOnAccount}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${ActiveWorldWithScriptObj.TWVersion}</td>
                    <td>${ActiveWorldWithScriptObj.TWWorld}</td>
                    <td>${ScriptText.UnitsCheck}</td>
                    <td>${ActiveWorldWithScriptObj.AccountName}</td>
                </tr>
            </tbody>
      </table>
    </div>

    <div id="options" style="background:#252525;width:49.5%;box-shadow: 0 0 3px 1px #aca;text-align:center;color: #aca !important;position: relative;right:28%;display:none;">
        <table align="center" style="text-align:center;width:100%" id="tableofdeveloper">
            <thead>
                <tr>
                    <th style="background:#011A15 !important;font-size:15px;" colspan="5">${ScriptText.Settings}</th>
                <tr>
                    <th style="background:#414A45 !important;font-size:15px;" colspan="5">${ScriptText.disc}</th>
                </tr>
                </tr>
                <tr>
                    <th><img src='${ScriptText.Wood}' title='خشب'></th>
                    <th><img src='${ScriptText.Stone}' title='طمي'></th>
                    <th><img src='${ScriptText.Iron}' title='حديد'></th>
                    <th><img src='${ScriptText.Resources}' title='مخازن'></th>
                    <th><img src='${ScriptText.Business}' title='تجار'></th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type='text' onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" placeholder="000000" maxlength="6" id="saved_wood" style="border:1px solid black;box-shadow: 0 0 3px 1px black;text-align:center;width:100%;font-weight:bold; height: 20px;font-size:12px;border-radius: 5px;" /></td>
                    <td><input type='text' onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" placeholder="000000" maxlength="6" id="saved_stone" style="border:1px solid black;box-shadow: 0 0 3px 1px black;text-align:center;width:100%;font-weight:bold; height: 20px;font-size:12px;border-radius: 5px;" /></td>
                    <td><input type='text' onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" placeholder="000000" maxlength="6" id="saved_iron" style="border:1px solid black;box-shadow: 0 0 3px 1px black;text-align:center;width:100%;font-weight:bold; height: 20px;font-size:12px;border-radius: 5px;" /></td>
                    <td><input type='text' onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" placeholder="000000" maxlength="6" id="saved_storage" style="border:1px solid black;box-shadow: 0 0 3px 1px black;text-align:center;width:100%;font-weight:bold; height: 20px;font-size:12px;border-radius: 5px;" /></td>
                    <td><input type='text' onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" placeholder="000" maxlength="3" id="saved_business" style="border:1px solid black;box-shadow: 0 0 3px 1px black;text-align:center;width:100%;font-weight:bold; height: 20px;font-size:12px;border-radius: 5px;" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input class="btn btn-confirm-yes" style="font-weight:bold;font-size: 15px !important;width:100%;" type='button' value='حفظ الإعدادات' /></td>
                    <td colspan="2"><input class="btn btn-confirm-no" style="font-weight:bold;font-size: 15px !important;width:100%;" type='button' value='إعادة ضبط' /></td>
                </tr>
            </tbody>
      </table>
    </div>


    <div style="width:100%;">
            <table id="PrepareToSendResources" style="width:100%;border: 1px solid black ;text-align:center;">
        <thead>
            <tr>
                <th>${ScriptText.Cancel}</th>
                <th>${ScriptText.From}</th>
                <th>${ScriptText.ExtraWood}</th>
                <th>${ScriptText.ExtraStone}</th>
                <th>${ScriptText.ExtraIron}</th>
                <th>${ScriptText.BusinessAvailable}</th>
                <th>${ScriptText.To}</th>
                <th>${ScriptText.WoodNeed}</th>
                <th>${ScriptText.StoneNeed}</th>
                <th>${ScriptText.IronNeed}</th>
                <th>${ScriptText.MaxStorage}</th>
                <th>${ScriptText.Dist}</th>
                <th>${ScriptText.Send}</th>
            </tr>
        </thead>
        <tbody id="ReadyToSend">

        </tbody>
    </table>
    </div>

    <div style="background:#252525;width:49.5%;box-shadow: 0 0 3px 1px #aca;text-align:center;color: #aca !important;">
      <h3>قرى مستقرة الموارد</h3>
        <table id="BestResources" style="width:100%;text-align:center;">
        <thead>
            <tr>
                <th>#</th>
                <th>${ScriptText.village}</th>
                <th><img src='${ScriptText.Wood}' title='خشب'></th>
                <th><img src='${ScriptText.Stone}' title='طمي'></th>
                <th><img src='${ScriptText.Iron}' title='حديد'></th>
                <th><img src='${ScriptText.Resources}' title='المجموع'></th>
                <th>تجار</th>
            </tr>
        </thead>
        <tbody id="BestVillageResources">

        </tbody>
    </table>
    </div>

    <div style="background:#262626;color:#ca5;width:49.5%;box-shadow: 0 0 0 1px #ca5;">
       <h3>قرى غير مستقرة الموارد</h3>
        <table id="BadResources" style="width:100%;text-align:center;">
        <thead>
            <tr>
                <th>#</th>
                <th>القرية</th>
                <th><img src='${ScriptText.Wood}' title='خشب'></th>
                <th><img src='${ScriptText.Stone}' title='طمي'></th>
                <th><img src='${ScriptText.Iron}' title='حديد'></th>
                <th><img src='${ScriptText.Resources}' title='المجموع'></th>
                <th>تجار</th>
            </tr>
        </thead>
        <tbody id="BadVillageResources">

        </tbody>
    </table>
    </div>


    </div>
    </div>
    <style>

    #BoxResources{
        width: 300px;
        height: 390px;
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    #BoxResources::-webkit-scrollbar {
        display: none;
    }

    #tableofdeveloper{
        background: #285249;
        color: #272727 !important;
    }

    #tableofdeveloper > thead > tr > th{
        background: #230636 !important;
    }

    #tableofdeveloper, #tableofdeveloper > thead > tr, #tableofdeveloper > thead > tr > th,  #tableofdeveloper > tbody > tr,   #tableofdeveloper > tbody > tr > td{
        border: 4px solid black;
        font-weight: bold;
        box-shadow: 0 0 5px 1px #bbb;
        color: white;
        text-align:center;
    }

    #conPopUp div{
        margin-bottom: 20px;
        text-align:center;
        box-shadow: 0 0 1px 1px #a33;
        border:2px solid #afa;
    }

    #BestResources,#BestResources > thead > tr, #BestResources > thead > tr > th, #BestResources > tbody > tr > td{
        text-align:center;
        border: 1px solid #aca;
        background: #282828 !important;
        color: #aca !important;
    }

    #BadResources,#BadResources > thead > tr, #BadResources > thead > tr > th, #BadResources > tbody > tr > td{
        text-align:center;
        border: 1px solid #ca5;
        background: #282828 !important;
        color: #ca5 !important;

    }

    #PrepareToSendResources,#PrepareToSendResources > thead > tr, #PrepareToSendResources > thead > tr > th, #PrepareToSendResources > tbody > tr > td{
        text-align:center;
        border: 1px solid black;
    }

    #Options,#PrepareToSendResources > thead > tr, #Options > thead > tr > th, #Options > tbody > tr > td{
        text-align:center;
        border: 1px solid black;
    }

    </style>
    `);


    function CloseBoxResources(){
        $("#BoxResources").remove();
    }

    function RemoveFunc(element) {
        var $row = $(element).closest('tr');
        var bestValue = $row.find('td:nth-child(2)').text();
        var badValue = $row.find('td:nth-child(8)').text();

        $('#BEST > td:nth-child(1) > input[value="' + bestValue + '"]').prop('checked', false);
        $('#BAD > td:nth-child(1) > input[value="' + badValue + '"]').prop('checked', false);

        $row.remove();
    }


    function changeBorderforSettings(thiselement){
        var obj = {
            background:'white',
            color:'black',
            border:'5px solid white',
            'box-shadow': '0 0 3px 1px white'
        };
        $(thiselement).css(obj);
    }

    function defaultDesignforSettings(thiselement){
        var obj = {
            background:'black',
            color:'white',
            border:'5px solid black',
            'box-shadow': '0 0 3px 1px black'
        };
        $(thiselement).css(obj);
    }


    function changeBorder(thiselement){
        var obj = {
            background:'red',
            color:'white',
            border:'5px solid red',
            'box-shadow': '0 0 3px 1px red'
        };
        $(thiselement).css(obj);
    }

    function defaultDesign(thiselement){
        var obj = {
            background:'black',
            color:'red',
            border:'5px solid black',
            'box-shadow': '0 0 3px 1px black'
        };
        $(thiselement).css(obj);
    }



    $("#BoxResources").draggable();


    $.get('/game.php?village='+window.game_data.village.id+'&screen=overview_villages&mode=prod', function(fetchData){
        $(fetchData).find("#production_table > tbody > tr").each(function(index, element){
            let village = $.trim($(this).find("td:nth-child(2) > span > span").html().split("</a>")[0]); // قرية
            let Wood = Number( $.trim($(this).find("td:nth-child(4)").text()).split(" ")[0].replace(/\./g, "")); // خشب
            let Stone = Number($.trim($(this).find("td:nth-child(4)").text()).split(" ")[1].replace(/\./g, "")); // طمي
            let Iron = Number($.trim($(this).find("td:nth-child(4)").text()).split(" ")[2].replace(/\./g, "")); // حديد
            let Storage = Number($.trim($(this).find("td:nth-child(5)").text())); // المخازن
            let Business = $.trim($(this).find("td:nth-child(6)").text()); // حالة التجار
            let village_id = $(this).find("td:nth-child(2) > span").attr("data-id"); // رقم الاي دي للقرية المحدده
            let BusinessExist = Number(Business.split("/")[0]); // عدد التجار المتاحين

            if(Wood > 4000 && Stone > 4000 && Iron > 4000){
                $("#BestVillageResources").append(`
            <tr id='BEST'>
                <td><input type='checkbox' value='${village_id}' class='selected_village' /></td>
                <td style="color:#fa5 !important; background: #fa5 !important;">${village}</td>
                <td id="Wood">${Wood}</td>
                <td id="Stone">${Stone}</td>
                <td id="Iron">${Iron}</td>
                <td id="Storage">${Storage}</td>
                <td>${Business}</td>
            </tr>

            <style>

            </style>
        `);
            }
            else{
                $("#BadVillageResources").append(`
            <tr id='BAD'>
                <td><input type='checkbox' value='${village_id}' class='selected_village' /></td>
                <td style="color:#aca !important;background: #aca !important;">${village}</td>
                <td id='Wood'>${Wood}</td>
                <td id='Stone'>${Stone}</td>
                <td id='Iron'>${Iron}</td>
                <td id="Storage">${Storage}</td>
                <td>${Business}</td>
            </tr>

            <style>

            </style>
        `);
            }




        });
        let best = 0; let bad = 0;
        $("#BadVillageResources > tr, #BestVillageResources > tr").each(function(index,element){
            window.increment_count = 0;
            window.tr_element = $(this);
            window.elementSelected = element;
            let from_village, to_village;
            let tr; let cancel; let from; let h_wood; let h_stone; let h_iron; let av_business; let to; let n_wood; let n_stone; let n_iron; let n_storage; let SendAction; let trAsVar;
            $(element).find(".selected_village").on("click", function(){
                if($(this).is(":checked")){
                    /*     HERE      */
                    if(element.id === "BEST"){
                        from_village = $(this).val();
                        tr = `<tr id='create_row_${best}' style='color:#eee; border:1px solid white;font-weight:bold;'>
                            <td id='cancel' style='border:1px solid white;'></td>
                            <td style='display:none;border:1px solid white;' id='from_village' data-id=''></td>
                            <td id='from' style='border:1px solid white;'></td>
                            <td id='h_wood' style='border:1px solid white;'></td>
                            <td id='h_stone' style='border:1px solid white;'></td>
                            <td id='h_iron' style='border:1px solid white;'></td>
                            <td id='av_business' style='border:1px solid white;'></td>
                            <td style='display:none;border:1px solid white;' id='to_village' data-id=''></td>
                            <td id='to' style='border:1px solid white;'></td>
                            <td id='n_wood' style='border:1px solid white;'></td>
                            <td id='n_stone' style='border:1px solid white;'></td>
                            <td id='n_iron' style='border:1px solid white;'></td>
                            <td id='n_storage' style='border:1px solid white;'></td>
                            <td id='Dist' style='border:1px solid white;'></td>
                            <td id='sendAction' style='border:1px solid white;'></td>
                            </tr>`;
                        $("#PrepareToSendResources").append(tr);
                        from = $(element).closest("tr").find("td:nth-child(2)").text();
                        h_wood = $(element).closest("tr").find("td:nth-child(3)").text();
                        h_stone = $(element).closest("tr").find("td:nth-child(4)").text();
                        h_iron = $(element).closest("tr").find("td:nth-child(5)").text();
                        av_business = $(element).closest("tr").find("td:nth-child(7)").text().split("/")[0];
                        let Row = $(`#create_row_${best}`);
                        $(Row).find("#from_village").text(from_village);
                        $(Row).find("#from_village").attr("data-id", `${from_village}`);
                        $(Row).find("#from").text(from);
                        $(Row).find("#h_wood").text(h_wood);
                        $(Row).find("#h_stone").text(h_stone);
                        $(Row).find("#h_iron").text(h_iron);
                        $(Row).find("#av_business").text(av_business);
                        best++;

                    }
                    else if(element.id === "BAD"){
                        if($(`tr[id^=create_row_]`).length < 1){
                            alert("لا توجد قرى محددة ذات كمية موارد تسمح لك بالموازنة, قم بإختيار قرية من قرة مستقرة الموارد اولا ثم قرية من قرى غير مستقرة الموارد.");
                            $(this).prop("checked", false);
                        }else{
                            to_village = $(this).val();
                            // alert("BAD ELSE: " + bad)
                            to = $(element).closest("tr").find("td:nth-child(2)").text();
                            n_wood = $(element).closest("tr").find("td:nth-child(3)").text();
                            n_stone = $(element).closest("tr").find("td:nth-child(4)").text();
                            n_iron = $(element).closest("tr").find("td:nth-child(5)").text();
                            n_storage = $(element).closest("tr").find("td:nth-child(6)").text();
                            let Row = $(`#create_row_${bad}`);
                            let from_prev_selected = $(Row).find("#from_village").text();
                            $(Row).find("#to_village").text(to_village);
                            $(Row).find("#to_village").attr("data-id", `${to_village}`);
                            $(Row).find("#to").text(to);
                            $(Row).find("#n_wood").text(n_wood);
                            $(Row).find("#n_stone").text(n_stone);
                            $(Row).find("#n_iron").text(n_iron);
                            $(Row).find("#Dist").text(`${GetDist(from_prev_selected,to_village, function(Return){ $(Row).find("#Dist").text(Return)})}`);
                            $(Row).find("#n_storage").text(n_storage);
                            $(Row).find("#cancel").html(`<a href='#' data-id='create_row_${bad}' from='${from_prev_selected}' to='${to_village}' id='CancelCommand' onclick='RemoveFunc(this)'><img src="https://dsae.innogamescdn.com/asset/708c3ff7/graphic/delete.png" alt="" class="cancel_link_icon"></a>`)
                            bad= bad+3;
                            console.log(bad);
                        }
                    }

                    if(best){
                        best= best + 1;
                        console.log("Row is completed create new one: "+best);
                    }

                    /*     HERE     */
                }
                else{
                    // unselected remove it from prepared
                    console.log($(element).html())
                }
            });

        });

        function removeDataRowBest(from, wood, stone, iron, storage, business){
            let tdMatchValuesToRemove = [from, wood, stone, iron, storage, business];
            $("#PrepareToSendResources tr").each(function(){
                $(this).find("td").each(function(){
                    if(tdMatchValuesToRemove.includes($.trim($(this).text()))){
                        $(this).text("");
                    }
                });
            });
        }

        function removeDataRowBad(to, wood, stone, iron, storage){
            let tdMatchValuesToRemove = [to, wood, stone, iron, storage];
            $("#PrepareToSendResources tr").each(function(){
                $(this).find("td").each(function(){
                    if(tdMatchValuesToRemove.includes($.trim($(this).text()))){
                        $(this).text("");
                    }
                });
            });
        }

        $("#BEST, #BAD").each(function(){$(this).find("#Wood").text($(this).find("#Wood").text().replace(/\d(?=(\d{3})+$)/g, "$&,"))});;
        $("#BEST, #BAD").each(function(){$(this).find("#Stone").text($(this).find("#Stone").text().replace(/\d(?=(\d{3})+$)/g, "$&,"))});
        $("#BEST, #BAD").each(function(){$(this).find("#Iron").text($(this).find("#Iron").text().replace(/\d(?=(\d{3})+$)/g, "$&,"))});
        $("#BEST, #BAD").each(function(){$(this).find("#Storage").text($(this).find("#Storage").text().replace(/\d(?=(\d{3})+$)/g, "$&,"))});

    });




/*(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)

||                                 bbbbbbbb                                                                                                                 ||
||                AAA              b::::::b                                      RRRRRRRRRRRRRRRRR                      jjjj   iiii hhhhhhh                 ||
||               A:::A             b::::::b                                      R::::::::::::::::R                    j::::j i::::ih:::::h                 ||
||              A:::::A            b::::::b                                      R::::::RRRRRR:::::R                    jjjj   iiii h:::::h                 ||
||             A:::::::A            b:::::b                                      RR:::::R     R:::::R                               h:::::h                 ||
||            A:::::::::A           b:::::bbbbbbbbb    uuuuuu    uuuuuu            R::::R     R:::::R  aaaaaaaaaaaaa  jjjjjjjiiiiiii h::::h hhhhh           ||
||           A:::::A:::::A          b::::::::::::::bb  u::::u    u::::u            R::::R     R:::::R  a::::::::::::a j:::::ji:::::i h::::hh:::::hhh        ||
||          A:::::A A:::::A         b::::::::::::::::b u::::u    u::::u            R::::RRRRRR:::::R   aaaaaaaaa:::::a j::::j i::::i h::::::::::::::hh      ||
||         A:::::A   A:::::A        b:::::bbbbb:::::::bu::::u    u::::u            R:::::::::::::RR             a::::a j::::j i::::i h:::::::hhh::::::h     ||
||        A:::::A     A:::::A       b:::::b    b::::::bu::::u    u::::u            R::::RRRRRR:::::R     aaaaaaa:::::a j::::j i::::i h::::::h   h::::::h    ||
||       A:::::AAAAAAAAA:::::A      b:::::b     b:::::bu::::u    u::::u            R::::R     R:::::R  aa::::::::::::a j::::j i::::i h:::::h     h:::::h    ||
||      A:::::::::::::::::::::A     b:::::b     b:::::bu::::u    u::::u            R::::R     R:::::R a::::aaaa::::::a j::::j i::::i h:::::h     h:::::h    ||
||     A:::::AAAAAAAAAAAAA:::::A    b:::::b     b:::::bu:::::uuuu:::::u            R::::R     R:::::Ra::::a    a:::::a j::::j i::::i h:::::h     h:::::h    ||
||    A:::::A             A:::::A   b:::::bbbbbb::::::bu:::::::::::::::uu        RR:::::R     R:::::Ra::::a    a:::::a j::::ji::::::ih:::::h     h:::::h    ||
||   A:::::A               A:::::A  b::::::::::::::::b  u:::::::::::::::u ...... R::::::R     R:::::Ra:::::aaaa::::::a j::::ji::::::ih:::::h     h:::::h    ||
||  A:::::A                 A:::::A b:::::::::::::::b    uu::::::::uu:::u .::::. R::::::R     R:::::R a::::::::::aa:::aj::::ji::::::ih:::::h     h:::::h    ||
|| AAAAAAA                   AAAAAAAbbbbbbbbbbbbbbbb       uuuuuuuu  uuuu ...... RRRRRRRR     RRRRRRR  aaaaaaaaaa  aaaaj::::jiiiiiiiihhhhhhh     hhhhhhh    ||
||                                                                                                                     j::::j                               ||
||                                                                                                           jjjj      j::::j                               ||
||                                                                                                          j::::jj   j:::::j                               ||
||                                                                                                          j::::::jjj::::::j                               ||
||                                                                                                           jj::::::::::::j                                ||
||                                                                                                             jjj::::::jjj                                 ||
||                                                                                                                jjjjjj                                    ||

(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)(>#<)*/
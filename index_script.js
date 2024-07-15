document.addEventListener("DOMContentLoaded", function () {
    checkDelayInputType();
    templateChange();
});

document.getElementById("button_new_tab").addEventListener("click", function () {
    openInNewTab();
});

document.getElementById("button_submit").addEventListener("click", function () {
    generateFromTemplate();
});

function generateFromTemplate() {
    let template_iframe = document.getElementById("template_iframe");
    let template_select = document.getElementById("template_select").value;

    if (template_select == "normal") {

        let input_time = document.getElementById("input_time").value;
        let input_train_number = document.getElementById("input_train_number").value;
        let input_destination = document.getElementById("input_destination").value;
        let input_via_stations = document.getElementById("input_via_stations").value;
        let input_operator = document.getElementById("input_operator").value;
        let input_info_bar = document.getElementById("input_info_bar").value;
        let input_info_bar_more = document.getElementById("input_info_bar_more").value;
        let input_delay = document.getElementById("input_delay").value;
        let input_colorbar = document.getElementById("input_colorbar").value
        let input_colorfont = document.getElementById("input_colorfont").value
        let input_delay_type = document.getElementById("delay_input_type").value;

        if (input_time == "" || input_train_number == "" || input_destination == "" || input_operator == "") {
            if (document.getElementById("flag_link").innerText == "🇬🇧") {
                alert("Uzupełnij wszystkie wymagane pola!");
            } else if (document.getElementById("flag_link").innerText == "🇵🇱") {
                alert("Fill in all required fields!");
            }
            return;
        }

        if (input_info_bar_more != "") {
            let temp_delay = input_info_bar.replaceAll("<min>", input_delay);
            input_info_bar = temp_delay + "  ***  " + input_info_bar_more;
        } else {
            input_info_bar = input_info_bar.replaceAll("<min>", input_delay);
        }

        if (input_delay_type == "bar") {
            input_delay = "";
        }

        let params = "?" + "time=" + input_time + "&train_number=" + input_train_number + "&destination=" + input_destination + "&via_stations=" + input_via_stations + "&operator=" + input_operator + "&info_bar=" + input_info_bar + "&delay=" + input_delay + "&colorbar=" + input_colorbar + "&colorfont=" + input_colorfont;

        params = encodeURI(params).replaceAll("#", "%23");
        template_iframe.setAttribute("src", "template_WAW_ZACH.html" + params);
        template_iframe.parentElement.style.display = "block";

    } else if (template_select == "termination") {
        let input_time_of_arrival = document.getElementById("input_time_of_arrival").value;
        let input_train_number = document.getElementById("input_train_number_termination").value;
        let input_starting_station = document.getElementById("input_starting_station").value;
        let input_info_bar = document.getElementById("input_info_bar").value;
        let input_info_bar_more = document.getElementById("input_info_bar_more").value;
        let input_delay = document.getElementById("input_delay").value;
        let input_colorbar = document.getElementById("input_colorbar").value
        let input_colorfont = document.getElementById("input_colorfont").value
        let input_delay_type = document.getElementById("delay_input_type").value;

        if (input_time_of_arrival == "" || input_train_number == "" || input_starting_station == "") {
            alert("Uzupełnij wszystkie wymagane pola!");
            return;
        }

        if (input_info_bar_more != "") {
            let temp_delay = input_info_bar.replaceAll("<min>", input_delay);
            input_info_bar = temp_delay + "  ***  " + input_info_bar_more;
        } else {
            input_info_bar = input_info_bar.replaceAll("<min>", input_delay);
        }

        if (input_delay_type == "bar") {
            input_delay = "";
        }

        let params = "?" + "time_of_arrival=" + input_time_of_arrival + "&train_number=" + input_train_number + "&starting_station=" + input_starting_station + "&info_bar=" + input_info_bar + "&delay=" + input_delay + "&colorbar=" + input_colorbar + "&colorfont=" + input_colorfont;

        params = encodeURI(params).replaceAll("#", "%23");
        template_iframe.setAttribute("src", "template_WAW_ZACH_termination.html" + params);
        template_iframe.parentElement.style.display = "block";
    }
}

function openInNewTab() {
    let template_iframe = document.getElementById("template_iframe");
    let src = template_iframe.getAttribute("src");

    window.open(src, "_blank");
}

document.getElementById("delay_input_type").addEventListener("change", function () {
    checkDelayInputType();
});

function checkDelayInputType() {
    let delay_input_type = document.getElementById("delay_input_type").value;
    let input_info_bar = document.getElementById("input_info_bar");
    let input_info_bar_more = document.getElementById("input_info_bar_more");
    let input_colorbar = document.getElementById("input_colorbar");
    let input_colorfont = document.getElementById("input_colorfont");
    let before_colorbar = '#2f353d';
    let before_colorfont = '#FFFFFF';

    if (delay_input_type == "bar") {
        input_info_bar.disabled = true;
        input_info_bar.value = "Opóźniony: <min> minut / Delayed: <min> minutes";
        input_info_bar_more.style.display = "block";
        before_colorbar = input_colorbar.value;
        before_colorfont = input_colorfont.value;
        input_colorbar.value = "#C01C28";
        input_colorfont.value = "#FFFFFF";
    } else {
        input_info_bar.disabled = false;
        input_info_bar.value = "";
        input_info_bar_more.style.display = "none";
        input_info_bar_more.value = "";
        input_colorbar.value = before_colorbar;
        input_colorfont.value = before_colorfont;
    }
}

function clearAllInputs() {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    document.getElementById("input_delay").value = "0";
    document.getElementById("delay_input_type").value = "delay_box";
    document.getElementById("input_colorbar").value = "#2f353d";
    document.getElementById("input_colorfont").value = "#FFFFFF";
    document.getElementById("template_iframe").parentElement.style.display = "none";
    checkDelayInputType();
}

document.getElementById("button_reset").addEventListener("click", function () {
    clearAllInputs();
});

function templateChange() {
    let template_select = document.getElementById("template_select").value;
    let template_iframe = document.getElementById("template_iframe");
    let template_box = document.getElementById("template_box");
    let input_fields_normal = document.getElementById("input_fields_normal");
    let input_fields_termination = document.getElementById("input_fields_termination");

    if (template_select == "normal") {
        template_iframe.setAttribute("src", "template_WAW_ZACH.html");
        input_fields_normal.style.display = "block";
        input_fields_termination.style.display = "none";
        template_box.style.display = "none";
    } else if (template_select == "termination") {
        template_iframe.setAttribute("src", "template_WAW_ZACH_termination.html");
        input_fields_normal.style.display = "none";
        input_fields_termination.style.display = "block";
        template_box.style.display = "none";
    }
}

document.getElementById("template_select").addEventListener("change", function () {
    templateChange();
});
document.getElementById("button_new_tab").addEventListener("click", function() {
    openInNewTab();
});

document.getElementById("button_submit").addEventListener("click", function() {
    generateFromTemplate();
});

function generateFromTemplate() {
    let template_iframe = document.getElementById("template_iframe");

    let input_time = document.getElementById("input_time").value;
    let input_train_number = document.getElementById("input_train_number").value;
    let input_destination = document.getElementById("input_destination").value;
    let input_via_stations = document.getElementById("input_via_stations").value;
    let input_operator = document.getElementById("input_operator").value;
    let input_info_bar = document.getElementById("input_info_bar").value;

    let params = "?" + "time=" + input_time + "&train_number=" + input_train_number + "&destination=" + input_destination + "&via_stations=" + input_via_stations + "&operator=" + input_operator + "&info_bar=" + input_info_bar;

    template_iframe.setAttribute("src", "template_WAW_ZACH.html" + params);
}

function openInNewTab() {
    let template_iframe = document.getElementById("template_iframe");
    let src = template_iframe.getAttribute("src");

    window.open(src, "_blank");
}
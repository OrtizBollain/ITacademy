function Timeout() { setTimeout(followSelect, 5000) }

function followSelect() {
    $(".typewriter>h3").innerHtml = "Please select a rocket.";
}

$(document).ready(Timeout);
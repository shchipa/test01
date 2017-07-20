jQuery(document).ready(function ($) {
    $(".submit").click(function() {
        $("td[id]").parent().detach();
            var urls = $(".urls").val().split('\n');

            for (var url in urls) {
                $("#input").append("<tr><td>" + urls[url] + "</td><td id=" + url + ">preload...</td></tr>");
                //$("#"+url).css({"border":"2px solid green"});

                $.ajax({
                    url: "/back.php",
                    method: "POST",
                    data: {"urles": urls[url], "id": url},
                    dataType: "json",
                    success: function (data, textStatus, xhr) {
                        //alert(data.id);
                        $("#" + data.id).text("Title: " + data.title + " | код: " + xhr.status + " (" + textStatus + ")");
                    }
                })
            }
    })
})

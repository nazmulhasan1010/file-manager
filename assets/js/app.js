$(function () {
    $('.search-icon').click(function () {
        $('.search').toggleClass('collapse');
    })

    let $folders = $('.files .folder span:not(.file span)');
    foldersIcon();

    function foldersIcon(ch = false) {
        $folders.each(function (i, item) {
            let icon = $(item).parent('.folder').hasClass('opened') ? 'bx-folder-open' : 'bx-folder';
            if (ch) {
                $(item).children('i').remove();
            }
            $(item).prepend(`<i class="bx ${icon}" ></i>`)

        })
    }

    $($folders).click(function () {
        $(this).parent('.folder').toggleClass('opened').children('span i');
        $(this).siblings('.folder-items').toggleClass('closed');
        foldersIcon(true)
    })
})
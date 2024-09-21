$(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $('.search-icon').click(function () {
        $('.search').toggleClass('collapse');
    })

    let $folders = $('.files .folder span:not(.file span)');
    foldersIcon();

    function foldersIcon(ch = false) {
        $folders.each(function (i, item) {
            let icon = ($(item).parent('.folder').hasClass('opened') ? 'bx-folder-open' : 'bx-folder');
            let opener = ($(item).parent('.folder').hasClass('opened') ? 'bx-chevron-down' : 'bx-chevron-right');
            if (ch) {
                $(item).children('i').remove();
                $(item).parent().children('i').remove();
            }
            $(item).prepend(`<i class="bx ${icon}" ></i>`)
            if ($(item).parent().children('.folder-items').length > 0) {
                $(item).parent().prepend(`<i class='opener bx ${opener}'></i>`)
            }else{
                $(item).parent().css('margin-left','26px')
            }
        })
    }

    $($folders).dblclick(opener)
    $(document).on('click', '.opener', opener)

    function opener() {
        $(this).parent('.folder').toggleClass('opened');
        $(this).siblings('.folder-items').toggleClass('closed');
        foldersIcon(true)
    }
})
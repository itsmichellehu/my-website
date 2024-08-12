import $ from 'jquery';

export function initializeHideVideoControls() {
    $('video:not(#exclude-video-jquery)').on('mouseenter', function () {
        this.setAttribute("controls", "controls");
    }).on('mouseleave', function () {
        this.removeAttribute("controls");
    });
}
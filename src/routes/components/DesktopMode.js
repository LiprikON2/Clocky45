export default function toggleDesktopMode() {
    // Toggle style-mobile.css
    document.styleSheets[1].disabled = !document.styleSheets[1].disabled
    document.querySelector('.mobile').style.display = document.styleSheets[1].disabled === true ? "unset" : "none"
    // document.querySelector('.page-container').style.zoom = "0.5"
}

function pushTracking(type, event) {
    console.log(type);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        value: type,
        event: event
    });
}

function vid1_a() {
    pushTracking("General Play Video Click", "Site Interactions");
}
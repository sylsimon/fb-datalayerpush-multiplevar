//references: https://developers.facebook.com/docs/analytics/send_data/events | https://developers.facebook.com/docs/facebook-pixel/implementation/dynamic-ads | https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking

//required parameters for DYNAMIC ADS ONLY
function pushTracking(VALUEOFBASKET, TYPE, SKU, QTY) {
    console.log(TYPE);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        currency: 'MYR',
        value: VALUEOFBASKET, //interger or float
        content_type: TYPE, //string
        contents: [{ //array of JSON objects, id and quantity are required fields
                id: SKU, //array of intergers or strings (e.g. ['ABC123', 'XYZ789'])
                quantity: QTY
            },
            {
                id: SKU,
                quantity: QTY
            }
        ]
    });
}

function vid1_a() {
    pushTracking("General Play Video Click", "Site Interactions");
}
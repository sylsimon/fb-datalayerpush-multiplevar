//references: https://developers.facebook.com/docs/analytics/send_data/events | https://developers.facebook.com/docs/facebook-pixel/implementation/dynamic-ads | https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking
//Capitalised variables are dynamic variables to be included

//required parameters for DYNAMIC ADS ONLY - these parameters will be pushed to the datalayer to be used for other tags
function pushDynamicAdsTracking(VALUEOFBASKET, TYPE, SKU, QTY) {
    console.log(TYPE);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        currency: 'MYR',
        value: VALUEOFBASKET, //integer or float
        content_ids: [SKU, SKU], //Product IDs associated with the event, such as SKUs (e.g. ['ABC123', 'XYZ789']). Can be an array.
        content_type: TYPE, //string
        contents: [{ //array of JSON objects, id and quantity are required fields
                id: SKU, //array of integers or strings (e.g. ['ABC123', 'XYZ789'])
                quantity: QTY //integer or float
            },
            {
                id: SKU,
                quantity: QTY
            }
        ]
    });
}

//example of an add to cart function that is fired on the website
function addToCart() {
    fbq('track', 'AddToCart') {
        currency: 'MYR',
        value: VALUEOFBASKET, //integer or float
        content_ids: [SKU, SKU], //Product IDs associated with the event, such as SKUs (e.g. ['ABC123', 'XYZ789']). Can be an array.
        content_type: TYPE, //string
        contents: [{ //array of JSON objects, id and quantity are required fields
                id: SKU, //array of integers or strings (e.g. ['ABC123', 'XYZ789'])
                quantity: QTY //integer or float
            },
            {
                id: SKU,
                quantity: QTY
            }
        ]

    }
}

//parameters for all FB Ads tracking, e.g. View Content, Initiate Checkout, Add Payment Method, etc)
function pushFBAdsTracking(VALUEOFBASKETORITEM, SKU, TYPE, CATEGORY, NOOFITEMSINBASKET, QTY) {
    console.log(TYPE);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        currency: 'MYR',
        value: VALUEOFBASKETORITEM, //integer or float
        content_ids: [SKU, SKU], //Product IDs associated with the event, such as SKUs (e.g. ['ABC123', 'XYZ789']). Can be an array.
        content_type: TYPE, //string
        content_category: CATEGORY, //string : Category of the page/product.
        num_items: NOOFITEMSINBASKET, //integer: The number of items when checkout was initiated.
        contents: [{ //array of JSON objects, id and quantity are required fields
                id: SKU, //array of integers or strings (e.g. ['ABC123', 'XYZ789'])
                quantity: QTY //integer or float
            },
            {
                id: SKU,
                quantity: QTY
            }
        ]
    });
}
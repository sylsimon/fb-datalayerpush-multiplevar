
// REFERENCES

// https://developers.facebook.com/docs/analytics/send_data/events
// https://developers.facebook.com/docs/facebook-pixel/implementation/dynamic-ads
// https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking


var transaction_id = 


//BARE MINIMUM - required parameters for Facebook DYNAMIC ADS 
function dynamicAdsPush(fbEventName, googleEventName, currencyXYZ, basketValue, discountValue, transactionID, fbArrayOfSKUs, googleArrayOfSKUs) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'fbParameterObject': {
            value: basketValue,         // interger or float of the total basket value
            currency: currencyXYZ,      // 3-letter currrency code as a string 'MYR' or 'USD' etc
            content_type: 'product',    // required parameter
            content_ids: fbArrayOfSKUs    // product IDs (or SKU's) associated with the event stored in an array e.g. ['ABC123', 'XYZ789']
        },
        'googleParameterObject': {
            value: basketValue,         // interger or float of the total basket value
            discount: discountValue,    // interger or float of the total discount
            transaction_id: transactionID,
            currency: currencyXYZ,
            items: googleArrayOfSKUs,   // product IDs (or SKU's) and google business vertical stored in an array+objects e.g. [{'id':'ABC123', 'quantity':5, 'price':12, 'google_business_vertical': 'retail'},{'id':'ABC321', 'quantity':2, 'price':7, 'google_business_vertical': 'retail'}]
            aw_merchant_id: 147157546,
            aw_feed_country: 'MY',
            aw_feed_language: 'EN',
            event: googleEventName    
        },
        'fbEventName': fbEventName,
        'googleEventName': googleEventName,
        'event': fbEventName
    });
    console.log(fbEventName," Event with dynamic product parameters pushed successfully to the dataLayer for both Google and Facebook");
}
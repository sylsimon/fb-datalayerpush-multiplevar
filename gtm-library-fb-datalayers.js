// REFERENCES

// https://developers.facebook.com/docs/analytics/send_data/events
// https://developers.facebook.com/docs/facebook-pixel/implementation/dynamic-ads
// https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking


//BARE MINIMUM - required parameters for Facebook DYNAMIC ADS 
function fbDynamicAdsPush(eventName, currencyXYZ, basketValue, arrayOfSKUs) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'fbParameterObject': {
            value: basketValue,         // interger or float of the total basket value
            currency: currencyXYZ,      // 3-letter currrency code as a string 'MYR' or 'USD' etc
            content_type: 'product',    // required parameter
            content_ids: arrayOfSKUs    // product IDs (or SKU's) associated with the event stored in an array e.g. ['ABC123', 'XYZ789']
        },
        'event': eventName
    });
    console.log("event:",eventName, "with dynamic product parameters pushed successfully to the dataLayer");
}
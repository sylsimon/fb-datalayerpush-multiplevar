//EXAMPLE call to attach to AddToCart action on website
dynamicAdsPush(
    'AddToCart',                                // Facebook: manual: ViewContent, AddToCart, InitiateCheckout, AddPaymentInfo, AddToWishlist, CompleteRegistration, Purchase, Search
    'add_to_cart',                              // Google: manual: view_search_results, view_item_list, view_item, add_to_cart, purchase
    'MYR',                                      // populated dynamically: 3-letter currrency code as a string 'MYR' or 'USD' etc
    210.40,                                     // populated dynamically: interger or float of the total basket value
    ['11234', '11112', '10982'],                // populated dynamically: product IDs (or SKU's) associated with the event stored in an array
    [{                                          
        'id':'11234', 
        'google_business_vertical': 'retail'
    },                                          
    {
        'id':'11112',                           // product IDs (or SKU's) and google business vertical stored in an array+objects
        'google_business_vertical': 'retail'
    },
    {
        'id':'10982', 
        'google_business_vertical': 'retail'
    }]
);

//EXAMPLE call to attach to Purchase action on website
dynamicAdsPush(
    'Purchase',                                 // Facebook: manual: ViewContent, AddToCart, InitiateCheckout, AddPaymentInfo, AddToWishlist, CompleteRegistration, Purchase, Search
    'purchase',                                 // Google: manual: view_search_results, view_item_list, view_item, add_to_cart, purchase
    'MYR',                                      // populated dynamically: 3-letter currrency code as a string 'MYR' or 'USD' etc
    210.40,                                     // populated dynamically: interger or float of the total basket value
    ['11234', '11112', '10982'],                // populated dynamically: product IDs (or SKU's) associated with the event stored in an array
    [{                                          
        'id':'11234', 
        'google_business_vertical': 'retail'
    },                                          
    {
        'id':'11112',                           // product IDs (or SKU's) and google business vertical stored in an array+objects
        'google_business_vertical': 'retail'
    },
    {
        'id':'10982', 
        'google_business_vertical': 'retail'
    }]
);
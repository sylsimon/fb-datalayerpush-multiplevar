//EXAMPLE call to attach to AddToCart action on website
fbDynamicAdsPush(
    'AddToCart',                    // populated manually: typed as string matching FB's documentation
    'MYR',                          // populated dynamically: 3-letter currrency code as a string 'MYR' or 'USD' etc
    210.40,                         // populated dynamically: interger or float of the total basket value
    ['11234', '11112', '10982']     // populated dynamically: product IDs (or SKU's) associated with the event stored in an array
);

//EXAMPLE call to attach to Purchase action on website
fbDynamicAdsPush(
    'Purchase',                    // populated manually: typed as string matching FB's documentation
    'MYR',                          // populated dynamically: 3-letter currrency code as a string 'MYR' or 'USD' etc
    210.40,                         // populated dynamically: interger or float of the total basket value
    ['11234', '11112', '10982']     // populated dynamically: product IDs (or SKU's) associated with the event stored in an array
);
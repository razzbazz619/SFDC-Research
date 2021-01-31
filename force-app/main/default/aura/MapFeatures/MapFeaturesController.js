({
    init: function (cmp, event, helper) {
        cmp.set('v.mapMarkers', [
            {
                location: {
                    City: 'Jind',
                    State: 'Haryana',
                    PostalCode : '126102',   
                    Country : 'India'
                }
            },
            {
                location: {
                    City: 'Gurgaon',
                    State: 'Haryana',
                    PostalCode : '122011'
                }
            },            
            {
                location: {
                    City: 'Patiala',
                    State: 'Punjab',  
                    Country : 'India'
                }
            },            
            {
                location: {
                    City: 'Delhi', 
                    Country : 'India'
                }
            },
            {
                location: {                    
                    Latitude: '26.912434',
                    Longitude: '75.787270'
                }
            }
        ]);
        
        cmp.set('v.markersTitle', 'Places I have lived for more than 1 year');
        cmp.set('v.showFooter', true);
    }
})
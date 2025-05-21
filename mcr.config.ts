const coverageOptions = {
    // logging: 'debug',

    reports: [
        ['v8'],
        ['console-details']
    ],

    entryFilter: {
        '**/node_modules/**': false,
        '**/src/**': true
    }

};

export default coverageOptions;

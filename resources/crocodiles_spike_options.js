export default function options() {
    let options = {
        stages: [
            { duration: '30s', target: 50 },
            { duration: '1m', target: 100 },
            { duration: '30s', target: 50 },
            { duration: '1m', target: 100 },
            { duration: '30s', target: 50 },
            { duration: '1m', target: 100 },
            { duration: '30s', target: 0 },
        ],
        cloud: {
            projectID: 3707525,
            name: 'Spike Test',
        }
    };
    return options;
}



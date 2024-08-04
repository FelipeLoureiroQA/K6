export default function options() {
    let options = {
        vus: 20,
        stages: [
            { duration: '10s', target: 5 },
            { duration: '10s', target: 5 },
            { duration: '40s', target: 20 },
            { duration: '40s', target: 20 },
            { duration: '10s', target: 0 },
        ],
        thresholds: {
            checks: ['rate>0.95'],
            http_req_duration: ['p(95) < 250'],
            http_req_failed: ['rate < 0.01']
        },
        cloud: {
            projectID: 3707525,
            name: 'Stress Test',
        }

    };
    return options;
}


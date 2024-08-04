export default function options() {
    let options = {
        vus: 50,
        stages: [
            { duration: '1m', target: 25 },
            { duration: '2m', target: 50 },
            { duration: '1m', target: 0 }
        ],
        thresholds: {
            checks: ['rate > 0.95'],
            http_req_duration: ['p(95) < 250'],
            http_req_failed: ['rate < 0.01']
        },
        cloud: {
            projectID: 3707525,
            name: 'Performance Test',
        }
    };
    return options;
}
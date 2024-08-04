export default function options() {
    let options = {
        vus: 10,
        duration: '10s',
        thresholds: {
            checks: ['rate > 0.99']
        },
        cloud: {
            projectID: 3707525,
            name: 'Smoke Test',
        }
    };
    return options;
}


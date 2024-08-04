
## K6

- Aplicando conhecimentos sobre testes não funcionais: smoke, performance, spike e stress testing. 

### Tipos de testes realizados

- Smoke testing: pra verificar funcionamento geral antes de iniciar testes de maior duração;
- Load testing ou teste de carga: Verificar funcionamento do sistema se com a quantidade de clientes for x por um determinado tempo pode ser segundos, minutos ou horas;
- Performance testing: avalia velocidade, estabilidade e capacidade de resposta; 
- Stress testing ou teste de estresse: Avalia estabilidade e capacidade do sistema além do seu limite;
- Spike testing ou teste de pico: verifica falhas e comportamentos diante de picos simuntaneos de acessos.

### Sobre o ambiente utilizado 
- Realizei os testes no ambiente local com docker, banco de dados e toda uma infraestrutura fonecida pelo próprio K6, movi pra uma pasta tudo pra não me atrapalhar mas você pode deixar fora também que funciona testei aqui, pra saber como instalar e configurar: `https://github.com/grafana/test-api.k6.io`

1. Se precisar subira maquina novamente: `docker compose up`
2. Se precisar derrubar a maquina: `docker compose stop`
3. Se quiser ver os containers `docker compose ps`

### Como execultar os testes com uma url base especifica?

- Comandos para rodar localmente:

1. Smoke: `k6 run -e BASE_URL=http://localhost:8000/public/crocodiles/ tests/smoke/crocodiles_smoke.js`
2. Performance:`k6 run -e BASE_URL=http://localhost:8000/public/crocodiles/ tests/performance/crocodiles_performance.js`
3. Spike: `k6 run -e BASE_URL=http://localhost:8000/public/crocodiles/ tests/spike/crocodiles_spike.js`
4. Stress: `k6 run -e BASE_URL=http://localhost:8000/public/crocodiles/ tests/stress/crocodiles_stress.js`

- Comando para rodar em cloud:
1. Smoke: `k6 cloud -e BASE_URL=https://test-api.k6.io/public/crocodiles/ tests/smoke/crocodiles_smoke.js`
2. Performance:`k6 cloud -e BASE_URL=https://test-api.k6.io/public/crocodiles/ tests/performance/crocodiles_performance.js`
3. Spike: `k6 cloud -e BASE_URL=https://test-api.k6.io/public/crocodiles/ tests/spike/crocodiles_spike.js`
4. Stress: `k6 cloud -e BASE_URL=https://test-api.k6.io/public/crocodiles/ tests/stress/crocodiles_stress.js`

Observação: Ai se você rodou local em cloud e viu os gráficos meio estranhos já que é uma ambiente de teste da pra rodar de outros jeito também localmente e apenas visualizar os relatórios em cloud assim:

1. Smoke: `k6 run --out cloud -e BASE_URL=http://localhost:8000/public/crocodiles/ tests/smoke/crocodiles_smoke.js`
2. Performance:`k6 run --out cloud -e BASE_URL=https://test-api.k6.io/public/crocodiles/ tests/performance/crocodiles_performance.js`
3. Spike: `k6 run --out cloud -e BASE_URL=https://test-api.k6.io/public/crocodiles/ tests/spike/crocodiles_spike.js`
4. Stress: `k6 run --out cloud -e BASE_URL=https://test-api.k6.io/public/crocodiles/ tests/stress/crocodiles_stress.js`
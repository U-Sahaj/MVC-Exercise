import bankingServiceRouter from "./BankingServiceRouter";

test('has routes', () => {
  const routes = [
    { path: '/accounts', method: 'post' },
    { path: '/accounts/:owner/deposit', method: 'post' },
    // { path: '/:accountNumber/withdraw', method: 'post' },
    // { path: '/:accountNumber/transactions', method: 'get' },
    // { path: '/:accountNumber/balance', method: 'get' },
    // { path: '/high-value', method: 'get' },
  ]

  routes.forEach((route) => {
    const match = bankingServiceRouter.stack.find(
      (s) => s.route.path === route.path && s.route.methods[route.method]
    );
    expect(match).toBeTruthy();
  });
})
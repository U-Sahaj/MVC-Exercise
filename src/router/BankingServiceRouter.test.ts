import bankingServiceRouter from "./BankingServiceRouter";

describe('BankingServiceRouter', () => {
  test('has routes', () => {
    const routes = [
      { path: '/accounts', method: 'post' },
      { path: '/accounts/:owner/deposit', method: 'post' },
      { path: '/accounts/:owner/withdraw', method: 'post' },
      { path: '/accounts/:owner/transactions', method: 'get' },
      { path: '/accounts/:owner/balance', method: 'get' },
      { path: '/accounts/high-value', method: 'get' },
    ]
    routes.forEach((route) => {
      const match = bankingServiceRouter.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      );
      expect(match).toBeTruthy();
    });
  })
})

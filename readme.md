# HyperBridge

`HyperBridge` — предназначен для вызова API методов hyper из приложения которое запущено в iframe.

## Использование

   ```javascript
   import HyperBridge from './bridge.js';

   const bridge = new HyperBridge();
   ```

   - **Получить информацию о пользователе**:

     ```javascript
     const userInfo = await bridge.getUserInfo();
     console.log('User Info:', userInfo);
     ```

   - **Получить список призов**:

     ```javascript
     const perks = await bridge.getAvailablePerks();
     console.log('Available Perks:', perks);
     ```

   - **Собрать приз**:

     ```javascript
     const result = await bridge.activatePerk('example-uid');
     console.log('Activate Perk Result:', result);
     ```


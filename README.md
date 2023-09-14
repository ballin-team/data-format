<p align="center">
  data-format
</p>
<p align="center">The best and performative way to convert styles like: snake_case, camelCase</p>

## **Table of Contents**

* [Getting Started](#-getting-started)

---

## 🧗 **Getting Started**

   ```typescript
    import { camelToSnake, snakeToCamel } from '@ballin-team/data-format';

    const convertToSnake = camelToSnake({ camelKey: 'value' }); // { camel_key: 'value' }
    const convertedToCamel = snakeToCamel({ snake_key: 'value' }); // { snakeKey: 'value' }
    const longAndrepeatedKeys = snakeToCamel({ snake_key: 'value', ... }, true); // { snakeKey: 'value', ... }
   ```

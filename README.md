<p align="center">
  data-format
</p>
<p align="center">The best and performative way to convert styles like: snake_case, camelCase</p>


[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ballin-team_data-format&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ballin-team_data-format)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ballin-team_data-format&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ballin-team_data-format)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ballin-team_data-format&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=ballin-team_data-format)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ballin-team_data-format&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=ballin-team_data-format)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ballin-team_data-format&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ballin-team_data-format)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=ballin-team_data-format&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=ballin-team_data-format)

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

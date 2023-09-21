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

* [Introduction](#Introduction)
* [Getting Started](#-getting-started)

---

## **Introduction**
Hey everyone!

If you are in troubles to maintain the object style in your application it's library is perfect for you.
The data-format give to you methods to convert data style, like: from camelCase to snake_case and from snake_case to camelCase.

## 🧗 **Getting Started**

### From camelCase to snake_case
   ```typescript
    import { camelToSnake } from '@ballin-team/data-format';

    const user = { id: 1, firstName: 'John', lastName: 'Cena'};
    const snakeObject = camelToSnake(user);
    console.log(snakeObject); // { id: 1, first_name: 'John', last_name: 'Cena'}
   ```

### From snake_case to camelCase
   ```typescript
    import { snakeToCamel } from '@ballin-team/data-format';

    const user = { id: 2, first_name: 'Rey', last_name: 'Mysterio'};
    const camelObject = snakeToCamel(user);
    console.log(camelObject); // { id: 2, firstName: 'Rey', lastName: 'Mysterio'}
   ```
### From camelCase to flatcase
   ```typescript
    import { camelToflat } from '@ballin-team/data-format';

    const user = { id: 3, firstName: 'Undertaker', lastName: null };
    const flatObject = camelToflat(user);
    console.log(flatObject); // { id: 2, firstname: 'Undertaker', lastname: null }
   ```
### For repetitive key names
For huge data with repetitive key names you can pass the argument useCache as true to avoid convert the same key many times.
   ```typescript
    import { snakeToCamel } from '@ballin-team/data-format';

    const users = [
      { id: 1, first_name: 'John', last_name: 'Cena'},
      { id: 2, first_name: 'Rey', last_name: 'Mysterio'},
      ...,
    ];
    
    const hugeAndRepeatedKeys = snakeToCamel(users, true); // [{ id: 1, firstName: 'John', lastName: 'Cena'}, { id: 2, firstName: 'Rey', lastName: 'Mysterio'}, ...]
   ```

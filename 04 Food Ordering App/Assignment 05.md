## What is the difference between `Named export`, `Default export`, and `*` as export ?

1.`Named export` - It is allow to export multiple values from the same module, we can export them individually and as well import them as well.

```Javascript
// ModuleA
export const name = "Harshil";
export function fullName() {
    return "Harshil Suthar"
};

// ModuleB
import { name } from './ModuleA';
import { fullName } from './ModuleA';
```

2. `Default export` - It will allow to export one whole module at a time, we can import whole module. It is generally useful to import components in react.

```Javascript
// ModuleA
export default function fullName() {
    return "Harshil Suthar"
}

// ModuleB
import fullName from './ModuleA';
```

3. `* as export`

- It will allow to export whole module which has multiple properties or function, and it will consider as the object or property in another module. we can access any property with `.` notation.

```Javascript
// ModuleA
export const name = "Harshil";
export function fullName() {
    return "Harshil Suthar"
};

// ModuleB
import * as ModuleA from './ModuleA';
```

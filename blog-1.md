##### Why is `any` a "Type Safety Hole", and why is `unknown` the safer choice for handling unpredictable data? (Type Narrowing Explained)

TypeScript এ any এবং unknown দুটোই flexible type, কিন্তু any unsafe আর unknown safe।

``` 
// any (unsafe)

let data: any = "hello";


data.toUpperCase(); // OK
data.push(1);       // runtime error possible
```

```

// unknown (safe) আগে check করতে হয়
let data: unknown = "hello";

 data.toUpperCase(); // error
```

```
// Type Narrowing
if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```
##### Conclusion
* any = unsafe
* unknown = safe + type checking required

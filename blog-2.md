### How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? (DRY Principle in TypeScript)

**Pick এবং Omit ব্যবহার করে আমরা interface reuse করতে পারি এবং duplicate code avoid করতে পারি।**
```
// Example Interface
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
// Pick --> only selected fields
type PublicUser = Pick<User, "id" | "name" | "email">;

// Omit --> password remove করা
type SafeUser = Omit<User, "password">;
```

### Benefit (DRY)

- No duplication  
- Single source of truth  
- Easy maintenance  

### Conclusion

`Pick` and `Omit` code clean রাখে এবং DRY principle follow করে।
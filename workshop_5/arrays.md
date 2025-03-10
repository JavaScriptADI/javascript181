Here is a step-by-step, hand-drawn style visualization of the code provided, in a single text file with indices:

**1. Initial ****************`numbers`**************** Array**

```sql
+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 |
+---+---+---+---+---+
| 1 | 2 | 3 | 4 | 5 |
+---+---+---+---+---+
```

**2. After `numbers.push(6)`**

```sql
+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 |
+---+---+---+---+---+---+
| 1 | 2 | 3 | 4 | 5 | 6 |
+---+---+---+---+---+---+
                      ↑
               Added this element
```

**3. After `numbers[0] = 10`**

```sql
+---+----+---+---+---+---+
| 0 | 1  | 2 | 3 | 4 | 5 |
+---+----+---+---+---+---+
| 10| 2  | 3 | 4 | 5 | 6 |
+---+----+---+---+---+---+
  ↑
Changed 1 to 10
```

**4. After `numbers.pop()`**

```sql
+---+----+---+---+---+---+
| 0 | 1  | 2 | 3 | 4 | 5 |
+---+----+---+---+---+---+
| 10| 2  | 3 | 4 | 5 | 6 |
+---+----+---+---+---+---+
                       ↑
              Removed this element
+---+----+---+---+---+
| 0 | 1  | 2 | 3 | 4 |
+---+----+---+---+---+
| 10| 2  | 3 | 4 | 5 |
+---+----+---+---+---+
```

**5. Initial ****************`fruits`**************** Array**

```sql
+--------+--------+--------+
| 0      | 1      | 2      |
+--------+--------+--------+
| apple  | banana | cherry |
+--------+--------+--------+
```

**6. After `fruits.unshift("date")`**

```sql
+------+--------+--------+--------+
| 0    | 1      | 2      | 3      |
+------+--------+--------+--------+
| date | apple  | banana | cherry |
+------+--------+--------+--------+
  ↑
Added at the beginning
```

**7. After `fruits[1] = "blueberry"`**

```sql
+-------+-----------+-----------+--------+
| 0     | 1         | 2         | 3      |
+-------+-----------+-----------+--------+
| date  | blueberry | banana    | cherry |
+-------+-----------+-----------+--------+
              ↑
    Changed "apple" to "blueberry"
```

**8. After `fruits.shift()`**

```sql
+-------+-----------+-----------+--------+
| 0     | 1         | 2         | 3      |
+-------+-----------+-----------+--------+
| date  | blueberry | banana    | cherry |
+-------+-----------+-----------+--------+
  ↑
Removed this element

+-----------+-----------+--------+
| 0         | 1         | 2      |
+-----------+-----------+--------+
| blueberry | banana    | cherry |
+-----------+-----------+--------+
```

**9. Initial `emptyArray`**

```
[]
```

**10. After adding elements with `.push()`**

```sql
+---+---+---+
| 0 | 1 | 2 |
+---+---+---+
| 1 | 2 | 3 |
+---+---+---+
```

**11. After `emptyArray.splice(1, 1)`**

```sql
+---+---+---+
| 0 | 1 | 2 |
+---+---+---+
| 1 | 2 | 3 |
+---+---+---+
      ↑
Removed element at index 1

+---+---+
| 0 | 1 |
+---+---+
| 1 | 3 |
+---+---+
```

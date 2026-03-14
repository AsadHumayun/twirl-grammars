## Grammar
- do not match `@@` in the @ rule (escaping @ symbol)
- match all of the Scala keywords (import, if, else, match, case, this, etc)
- make `@(...)` register `...` as scala source;
    - same as above but for `@{...}`;
    - same for `@expr` where `expr` is a single expression;
	  - make it so `@obj.prop` matches `obj.prop` as a single unit for backspace etc;
- tests...
- do we make @ work in strings?
  - if not, then it must still work in s-strings/f-strings

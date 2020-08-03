TypeScript React Hello World Demo
=================================

我忘了之前是在什么情况下得出了一个结论：当useEffect中的某个dependency为undefined的时候（比如是从props中得到，而该dependency的值为optional且未赋值），
会导致useEffect总是被调用。不过在这个demo里试了一下，发现不存在这种情况，当时可能是别的原因弄错了。

```
npm install
npm run demo
```

It will open page on browser automatically.

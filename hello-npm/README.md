# Hello npm

## bin

> [doc: package.json bin](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#bin)

step 1: 在 package.json 配置

```json
// package.json
"bin": {
  "hello-npm-hi": "./bin/hello-npm-hi.js"
}
```

step 2: 脚本文件的格式

```js
#!/usr/bin/env node
```

step 3: link 这个 package

```bash
// npm link
npm ln
```

step 4: unlink 这个 package

```bash
npm unlink --location=global [packageName]
```

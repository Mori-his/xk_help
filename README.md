React/Sass

### 填过的坑

1. 一编译就自动运行了eslint

因为我在webpack.config.js里面写了

```
preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: `${__dirname}/src`,
        exclude: /bundle\.js$/
      }
    ]
```

2. 开发环境下因为模版编译到dist下导致react组建内的img的src引用一直有错




# webpack

[webpack中文指南](https://www.webpackjs.com/guides/)

webpack的中文文档，感觉很糟糕：
1. 上下不连贯，目录结构弄得一团糟。
比如在[生成环境构建](https://www.webpackjs.com/guides/production/)这个章节里面将配置文件拆分成多个文件，在[代码分离](https://www.webpackjs.com/guides/code-splitting/)这个章节又变回去了，弄得人很头疼。
我真的不觉得文档的每个章节都由不同的人来制作是个好主意，这样上下文会很让人头疼。
2. webpack的插件更新使用方式，但文档没有更新。
比如在[管理输出](https://www.webpackjs.com/guides/output-management/#%E6%B8%85%E7%90%86-dist-%E6%96%87%E4%BB%B6%E5%A4%B9)这个章节里的`clean-webpack-plugin(^3.0.0)`插件已经不再使用该方式引用和使用，但文档中依然使用旧的方式，导致出现错误并无法继续运行。还有[代码分离](https://www.webpackjs.com/guides/code-splitting/#%E9%98%B2%E6%AD%A2%E9%87%8D%E5%A4%8D-prevent-duplication-)中`CommonsChunkPlugin`插件已经更换了使用方式：由原来的`new webpack.optimize.CommonsChunkPlugin`变更为???。
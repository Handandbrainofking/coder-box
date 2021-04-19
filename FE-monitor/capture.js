
const sourceMap = require('source-map');
const SourceMapConsumer = sourceMap.SourceMapConsumer;
const Stacktracey = require('stacktracey');

const errorStack = '...'; // 错误信息
const sourceMapFileContent = '...'; // sourcemap文件内容

const tracey = new Stacktracey(errorStack); // 解析错误信息
const sourceMapContent = JSON.parse(sourceMapFileContent);
const consumer = await new SourceMapConsumer(sourceMapContent);

for (const frame of tracey) { // 这里的frame就是stack中的一行所解析出来的内容
    // originalPosition不仅仅是行列信息，还有错误发生的文件 originalPosition.source
    const originalPosition = consumer.originalPositionFor({
        line: frame.line,
        column: frame.column,
    });

    // 错误所对应的源码
    const sourceContent = consumer.sourceContentFor(originalPosition.source);
    console.log(sourceContent);
}
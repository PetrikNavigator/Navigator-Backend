const path = require('path');

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: {
      main: options.entry,
      seed: path.resolve(__dirname, 'prisma/seed.ts'),
    },
    output: {
      ...options.output,
      filename: '[name].js',
    },
    resolve: {
      ...options.resolve,
      extensionAlias: {
        ...(options.resolve && options.resolve.extensionAlias),
        '.js': ['.ts', '.js'],
      },
    },
    optimization: {
      ...options.optimization,
      splitChunks: false,
      runtimeChunk: false,
    },
    plugins: [
      ...(options.plugins || []),
      new webpack.IgnorePlugin({
        checkResource(resource) {
          const optional = [
            '@nestjs/microservices',
            '@nestjs/microservices/microservices-module',
            '@nestjs/websockets/socket-module',
            '@nestjs/platform-fastify',
            'cache-manager',
            'ioredis',
          ];
          if (!optional.includes(resource)) return false;
          try {
            require.resolve(resource);
            return false;
          } catch {
            return true;
          }
        },
      }),
    ],
  };
};
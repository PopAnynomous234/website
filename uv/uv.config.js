self.__uv$config = {
    prefix: '/uv/service/', // This fixes the 'Max Scope' error from before
    bare: 'https://legendary-doodle-4j5jj5r566qrhqx79-8080.app.github.dev/v3/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};

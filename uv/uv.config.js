self.__uv$config = {
    prefix: '/uv/service/', // This fixes the 'Max Scope' error from before
    bare: 'https://3sow4six3pqlu5t4qgyximuyrm0nlegb.lambda-url.us-east-2.on.aws/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};

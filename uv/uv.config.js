self.__uv$config = {
    prefix: 'uv/service/',
    bare: 'https://3sow4six3pqlu5t4qgyximuyrm0nlegb.lambda-url.us-east-2.on.aws/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    
    // Using relative paths (no leading slash or "/s/")
    handler: '/uv/uv.handler.js', 
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};

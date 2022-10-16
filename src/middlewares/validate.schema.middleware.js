function validateSchema(schema, body, res, next) {
    const validation = schema.validate(body, {abortEarly: false});

    if(validation.error) {
        const errors = validation.error.details.map((error) => error.message).join(" & ");
		return res.status(422).send({message: errors});
    };
    
    res.locals.Body = body;
    next();

};

export {validateSchema};


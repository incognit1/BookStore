const compose = (...funcs) => (View) => {
    return funcs.reduceRight((value, fn) => fn(value), View)
};

export default compose;
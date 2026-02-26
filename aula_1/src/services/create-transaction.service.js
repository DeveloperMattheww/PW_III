async function createTransactionService(data){
    const {value, type, title} = data;

    console.log(`
        Transaction Info:
            Value: ${value},
            Type: ${type},
            Title: ${title}
        `);
}

export { createTransactionService };
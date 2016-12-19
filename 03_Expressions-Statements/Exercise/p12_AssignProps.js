function assignProps([p1, v1, p2, v2, p3, v3]) {
    let obj = {};
    obj[p1] = v1;
    obj[p2] = v2;
    obj[p3] = v3;
    console.log(obj)
}

assignProps(['name', 'Pesho', 'age', '23', 'gender', 'male']);
//Fake data
const products = [
    { id: 1, name: "Product A", },
    { id: 2, name: "Product B", },
    { id: 3, name: "Product C", },
];

//List product
export const list = (req, res) => {
    res.json(products);
};
//Get a product
export const get = (req, res) => {
    const result = products.find(item => item.id === +req.params.id);
    res.json(result);
};
//Create product
export const create = (req, res) => {
    products.push(req.body);
    res.json(products);
};
//Update product
export const update = (req, res) => {
    const newProducts = products.map(item => item.id === +req.params.id ? req.body : item);
    res.json(newProducts);
};
//Remove product
export const remove = (req, res) => {
    const newProducts = products.filter(item => item.id !== +req.params.id);
    res.json(newProducts);
};
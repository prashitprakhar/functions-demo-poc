function tableRouter(context, req) {
    const res = context.res;
    const id = context.bindingData.id;
 
    switch (req.method) {
        case 'GET':
            if (id) {
                getOneItem(req, res, id);
            } else {
                getAllItems(req, res);
            }
            break;
 
        case 'POST':
            insertItem(req, res);
            break;
 
        case 'PATCH':
            patchItem(req, res, id);
            break;
 
        case 'PUT':
            replaceItem(req, res, id);
            break;
 
        case 'DELETE':
            deleteItem(req, res, id);
            break;
 
        default:
            res.status(405).json({ error: "Operation not supported", message: `Method ${req.method} not supported`})
    }
}
 
function getOneItem(req, res, id) {
    res.status(200).json({ id: id, message: "getOne" });
}
 
function getAllItems(req, res) {
    res.status(200).json({ query: req.query, message: "getAll" });
}
 
function insertItem(req, res) {
    res.status(200).json({ body: req.body, message: "insert"});
}
 
function patchItem(req, res, id) {
    res.status(405).json({ error: "Not Supported", message: "PATCH operations are not supported" });
}
 
function replaceItem(req, res, id) {
    res.status(200).json({ body: req.body, id: id, message: "replace" });
}
 
function deleteItem(req, res, id) {
    res.status(200).json({ id: id, message: "delete" });
}
 
module.exports = tableRouter;






/* module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
          /*   body: "Hi " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};  */
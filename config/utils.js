export const Resolve = (Request,Response) => Request
    .then(data => Response(data))
    .catch(err => Response(err))
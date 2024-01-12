export const config = ({APPNAME,DESCRIPTION,AUTHOR}) => ({
    APPNAME,
    DESCRIPTION,
    AUTHOR
})
export const Resolve = (Request, Response) => Request
    .then(data => Response.json(data))
    .catch(err => Response.json(err))
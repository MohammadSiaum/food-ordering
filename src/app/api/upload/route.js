import uniqid from 'uniqid';

export async function POST(req) {
    const data = await req.formData();
    if(data.get('file')) {
        // upload the file here..
        const file = data.get('file');
        console.log(data.get('file'));

        const ext = file.name.split('.').slice(-1)[0];
        const newFileName = uniqid() + '.' + ext;
        console.log(newFileName);
        
    }
    return Response.json(true);
}
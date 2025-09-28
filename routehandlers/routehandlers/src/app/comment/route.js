import { NextRequest } from 'next/server';
import data from './data';



export async function GET(request){ // Params for ?query=value
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');  
    let filteredComments = data;
    if(query){
        filteredComments = data.filter(c => c.content.toLowerCase().includes(query.toLowerCase()));
    }
    return new Response(JSON.stringify(filteredComments),{
        headers:{
            'Content-Type':'application/json',
        }
    },{status:200});
}

export async function POST(request){
    const comment = await request.json();
    const id = data.length ? Math.max(...data.map(c=> c.id))+1 : 1;
    const newComment = {id, ...comment};
    data.push(newComment);
    return new Response(JSON.stringify(newComment),{
        headers:{
            'Content-Type':'application/json'
        }
    },{status:201}); // So we here are using 'new' because we are creating a new response object and using 201(POST) status code to indicate that a new resource has been created successfully.
}

export async function DELETE(request){
    const id = await request.json();
    const index = data.findIndex(c => c.id === id.id);
    if(index === -1){
        return new Response(JSON.stringify({message:"No comment found"}),{status:404}); // 204 means No Content, but we'll use 404(Not Found) as it is more appropriate.
    }
    data.splice(index,1); // splice method is used to remove an element from an array in JavaScript.
    return new Response(JSON.stringify({message:"Comment deleted successfully"}),{status:200});
}


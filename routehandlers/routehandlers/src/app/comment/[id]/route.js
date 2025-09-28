import data from '../data'

export async function GET(request, {params}){
    const {id} = await params;
    const index = data.findIndex(c => c.id === parseInt(id));
    if(index === -1){
        return new Response( JSON.stringify({message:"Comment not found"}), {status:404})
    }
    return Response.json(data[index], {status:200});
}

//Difference between PUT and PATCH
//PUT is used to update the entire resource, while PATCH is used to update a part of the resource.
export async function PATCH(request, {params}){
    const {id} = await params;
    const index = data.findIndex(c=>c.id === parseInt(id));
    if(index === -1){
        return new Response(JSON.stringify({message:"Comment not found"}), {status:404});
    }
    const updatedComment = await request.json();
    const {content} = updatedComment;
    console.log(data[index], content);
    data[index].content = content || data[index].content;

    return new Response(JSON.stringify(data[index]), {status:200});
}

export async function DELETE(request,{params}){
    const {id} = await params;
    const index = data.findIndex(c => c.id === parseInt(id));
    if(index === -1){
        return new Response(JSON.stringify({message:"No comment found"}),{status:404}); // 204 means No Content, but we'll use 404(Not Found) as it is more appropriate.
    }
    data.splice(index,1); // splice method is used to remove an element from an array in JavaScript.
    return new Response(JSON.stringify({message:"Comment deleted successfully"}),{status:200});
}
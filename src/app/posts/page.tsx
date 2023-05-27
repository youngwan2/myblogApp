import PostsNav from "@/components/postsNav";
import { Props, getAllPost } from "../../../blog/data/data"

export default async function postsPage(){

    const getPostData:Props[] = await getAllPost()    
    // console.log(getPostData)
    return (
        <div>
            <PostsNav getPostData ={getPostData} />
        </div>
    )
}
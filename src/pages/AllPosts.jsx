import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { PostCard, Container } from '../component'

function AllPosts() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        }) 
    }, [])


      if (posts.length === 0) {
            return (
                <div className="w-full py-8 mt-4 text-center">
                    <Container>
                        <div className="flex flex-wrap">
                            <div className="p-2 w-full">
                                <h1 className="text-2xl font-bold hover:text-gray-500">
                                  "There are no post yet"
                                </h1>
                            </div>
                        </div>
                    </Container>
                </div>
            ) 
        }

    return (
        <div className='w-full py-8'>
        {/* {useEffect(()=>{console.log("i am in ALLPOST")},[])} */}
        <Container>
            <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 md:w-1/4 w-full'>
                <PostCard {...post} />
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts

import React, {useEffect,useState} from 'react'
import { Container, PostCard} from '../component'
import appwriteService from '../appwrite/config'
import { useSelector } from 'react-redux'

function Home() {

    const [posts,setPosts] = useState([])

    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        }) 
    }, [])

    const authstatus = useSelector((state)=>state.auth.status)

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                               { authstatus ? "There are no post yet" : "Login to read post"} 
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        ) 
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 md:w-1/4 w-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home

import React from 'react'
import './RecommendedVideos.css'
import Video from './Video'
function RecommendedVideos() {
    const data_from_api = [
        {
            "title":"Title 1",
            "views":"2M",
            "timestamp":"4 days ago",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwniapyAQHeutpsdEAQOENjwxCuKykSS9gwIgsIhf6Q=s88-c-k-c0x00ffffff-no-rj",
            "channel":"Munawar Farique",
            "image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        },
        {
            "title":"Title 1",
            "views":"2M",
            "timestamp":"4 days ago",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwniapyAQHeutpsdEAQOENjwxCuKykSS9gwIgsIhf6Q=s88-c-k-c0x00ffffff-no-rj",
            "channel":"Munawar Farique",
            "image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",

        },
        {
            "title":"Title 2",
            "views":"2M",
            "timestamp":"4 days ago",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwniapyAQHeutpsdEAQOENjwxCuKykSS9gwIgsIhf6Q=s88-c-k-c0x00ffffff-no-rj",
            "channel":"Munawar Farique",
            "image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        },
        {
            "title":"Title 3",
            "views":"2M",
            "timestamp":"4 days ago",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwniapyAQHeutpsdEAQOENjwxCuKykSS9gwIgsIhf6Q=s88-c-k-c0x00ffffff-no-rj",
            "channel":"Munawar Farique",
            "image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        },
        {
            "title":"Title 4",
            "views":"2M",
            "timestamp":"4 days ago",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwniapyAQHeutpsdEAQOENjwxCuKykSS9gwIgsIhf6Q=s88-c-k-c0x00ffffff-no-rj",
            "channel":"Munawar Farique",
            "image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        },
        {
            "title":"Title 5",
            "views":"2M",
            "timestamp":"4 days ago",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwniapyAQHeutpsdEAQOENjwxCuKykSS9gwIgsIhf6Q=s88-c-k-c0x00ffffff-no-rj",
            "channel":"Munawar Farique",
            "image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        },
    ]
    return (
        <div className="recommendedvideos">
            <div className="recommendedvideos_videos">
                {data_from_api.map((video,i)=>(
            <Video
                    title={video.title}
                    views={video.views}
                    timestamp={video.timestamp}
                    channelImage={video.channelImage}
                    channel={video.channel}
                    image={video.image}
                />
                ))}
            </div>
        </div>
    )
}

export default RecommendedVideos

export const typeDefs = `#graphql
type creator{
    isCreator: Boolean
}
type Channellogo{
    channelLogo: String
    email: String
}
type courseName{
    courseNames: String
}

type videoUrl{
    allVideoUrls: String
    allThumbnailUrls: String
    allVideoTitles: String
    allEmail: String
    uploadAt: String
    videoId: String
    views:String
    channelLogo:String
    channelName:String
}
type url{
    videoURl: String
    videoTitle:String
    videoDescription: String
    channelLogo:String
    channelName:String
    channelId:String
    creatorEmail:String
    videoViews:String
    videoPublishedAt:String
    videoTags:[String]


}
type features{
    haveInPlaylist: Boolean
    isSubsCribed: Boolean
    hasInHistory: Boolean
    haveInMyVideos: Boolean
    haveInWatchLater: Boolean
    isLiked: Boolean
    dislikedVideos: Boolean
    subscribedchannel: Boolean
}
type search{
    videoTitle: String
    videoDescription: String
    videoTags: [String]
    searchHistory:[String]
}
type searchQuery{
    videoUrl: String
    videoID: String
    videoDescription: String
    videoTags :[String]
    videoTitle: String
    channelName: String
    channelLogo: String
    videoPublishedAt: String
    videoViews: String
    videoThumbnail: String
}
`;
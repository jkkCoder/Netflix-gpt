export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const BACKGROUND_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const USER_AVATAR = "https://scontent.fmaa11-1.fna.fbcdn.net/v/t39.30808-6/363371400_1658949361286369_3285400467360636141_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ea0Wr5DlvVEAX8hjOFH&_nc_ht=scontent.fmaa11-1.fna&oh=00_AfARWY2GG8gzIzYviMpcG5Amc3-NTWiBcxmzRfm2PbVO_w&oe=6500F68B"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/"

export const SUPPORTED_LANGUAGES = [
    {identifier: "en", name: "English"},
    {identifier: "hindi", name: "Hindi"},
    {identifier: "spanish", name: "Spanish"}
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
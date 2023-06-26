export const userTransformer = (userData) => {
    return{
        username: userData.username,
        email: userData.email,
        name: userData.name,
        profileImage: userData.profileImage,
    }
}
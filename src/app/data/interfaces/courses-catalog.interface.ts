export interface ICategory {
    id: number
    title: string
}
export interface ICourse {
    id: number
    title: string
    level: string
    author: number,
    author_name: string,
    author_image: string
    category: {
        id: number
        title: string
    },
    price: string
    students_coun: number
    rating: string,
    comments_count: number
}

export interface ICategoryLink {
    title: string
    path: string
}
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
export interface IResCourse{
    pages:number,
    page:number,
    results: ICourse[]
}

export interface ICategoryLink {
    title: string
    path: string
}

export interface ICoursesDrop{
    title: string
}

export interface ICoursesFiltr{
    price:{min:number, max:number}
    order:string
    category:string
    level:string
}

export interface ICategory {
    id: number
    title: string
}

export interface ICatalogCourse {
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
export interface IResCourse {
    pages: number,
    page: number,
    results: ICatalogCourse[]
}

export interface ICategoryLink {
    title: string
    path: string
}

export interface ICoursesDrop {
    title: string
}

export interface ICoursesFiltr {
    price: { min: number, max: number }
    order: string
    category: string
    level: string
}

export interface ICourseItem {
    skills: string | null
    level: string | null
    order: string | null
}
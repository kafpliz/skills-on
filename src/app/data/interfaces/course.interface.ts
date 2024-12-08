export interface ICourse {
    id: number,
    title: string,
    author: number,
    author_name: string,
    author_image: string,
    price: number,
    students_count: number,
    description: string,
    level: string,
    created: string,
    lessons: [
        {
            course: number,
            title: string,
            draft: boolean,
            contents: [
                {
                    content_type: string,
                    item_data: string,
                    order: number
                }
            ],
            comments: [
                {
                    id: number,
                    author_name: string,
                    author_image: string,
                    body: string,
                    created: string,
                    lesson: number,
                    reply_comments: [
                        {
                            id: number,
                            author_name: string,
                            author_image: string,
                            body: string,
                            created: string,
                            lesson: number,
                            reply_comments: string,
                            quote_text: string,
                            is_note: boolean
                        }
                    ],
                    quote_text: string,
                    is_note: boolean
                }
            ]
        }
    ],
    comments: [
        {
            id: number,
            author_name: string,
            author_image: string,
            rating: number,
            body: string,
            created: string,
            course: number
        }
    ]
}
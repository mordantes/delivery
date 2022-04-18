import { Request, Response } from "express"


export interface ApiResponse {
	reviews: HashedReview[]
	total: number
}


export interface Review {
	author : string
	body: string
	icon: string
	rated: string
	answers: Answer[]
}

interface HashedReview extends Review{
	authorHash : string
	answerHash : string
}

interface Answer{
	body: string
	createdAt: string
	statusId: string
}


export interface RouteProps {
	req: Request
	res: Response
}
export interface ScrapeResult {
	 finded : number
}


export interface QueryParams {
	take : string
	offset: string
	filter: string | undefined
	orderBy : 'rated' | 'icon' | 'author'
	dir : -1 | 1

}

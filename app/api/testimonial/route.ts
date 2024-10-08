import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/app/lib/prisma";
import {getServerSession} from "next-auth";

export async function GET(req: Request, res: Response){
    try {
        const result = await prisma.testimonials.findMany()
        
        const response = {
            status: 200,
            data: result,
        }
    
        return Response.json(response)

    } catch (error: any) {
        return Response.json({ status: 500, message: error.message, result: error });
    }

}

export async function POST(req: Request){
    const res = await req.json()
    const { name, message, featured, job} = res

    if (featured) {
        await prisma.testimonials.updateMany({
            data: {
                featured: false
            }
        })
    }

    const result = await prisma.testimonials.create({
        data: {
            name,
            job,
            message,
            featured
        }
    })

    return Response.json({
        status: 200,
        message: "Success!",
        result
    })
}

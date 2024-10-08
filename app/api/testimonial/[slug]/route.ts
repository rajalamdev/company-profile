import { prisma } from "@/app/lib/prisma" 
import { getServerSession } from "next-auth"

export async function GET(req: Request, { params }: any ){
    const slug = String(params.slug)
    const session = await getServerSession()
    if (!session?.user) return new Response('Error', {status: 401})
    try {
        const result = await prisma.testimonials.findFirst({
            where: {
                id: slug
            }
        })
        
        const response = {
            status: 200,
            data: result,
        }
    
        return Response.json(response)

    } catch (error: any) {
        return Response.json({ status: 500, message: error.message, result: error });
    }
}

export async function DELETE(req: Request, { params }: any ){
    const slug = String(params.slug)
    const result = await prisma.testimonials.delete({
        where: {
            id: slug
        },
    })
    // return res.json(result)
    return Response.json({
        message: "Success",
        result
    })
}

export async function PUT(req: Request, { params }: any ){
    const res = await req.json()
    const slug = String(params.slug)
    const { name, message, featured, job} = res

    if (featured) {
        await prisma.testimonials.updateMany({
            data: {
                featured: false
            }
        })
    }

    const result = await prisma.testimonials.update({
        where: {
            id: slug
        },
        data: {
            name,
            message,
            featured,
            job
        }
    })
    // return res.json(result)
    return Response.json({
        message: "Success",
        result
    })
}
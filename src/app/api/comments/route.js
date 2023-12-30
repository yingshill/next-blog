import { NextResponse } from "next/server"
import prisma from '@/utils/connect'

/* GET ALL COMMENTS FOR A POST */

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");

    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug })
            },
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(comments, { status: 200 }));
    } catch(err) {
        console.log(err)
        return new NextResponse(JSON.stringify({
            message: "Something went wrong",
            status: 500
        }))
    }
}
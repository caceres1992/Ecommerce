import clientPromise from '@/lib/db';
import { NextResponse, NextRequest } from 'next/server';
export const GET = async () => {

    try {
        const client = await clientPromise;
        const db = client.db('ecommerce')

        const products = await db
        .collection('products')
        .find({})
        .toArray()
    return NextResponse.json({products}, { status: 200 });
        
    } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
    }

    
    
 
};
  
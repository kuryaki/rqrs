import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { headers, method, url } = request;
    console.log({ method, url, headers });
    console.log('host', headers.get('HOST'));
    if(headers.get('HOST')?.split('.').length === 3){
        const subdomain = headers.get('HOST')?.split('.')[0];
        return NextResponse.redirect(`${url}/b/${subdomain}`);
    } else {
        const subdomain = [0]
        return NextResponse.redirect(`${url}/home`);
    }
}

export async function POST(request: Request) {
    const { headers, method, url } = request;
    console.log({ method, url, headers })
    return NextResponse.json({ ok: 1, body: await request.text() })
}

export async function PUT(request: Request) {
    const { headers, method, url } = request;
    console.log({ method, url, headers })
    return NextResponse.json({ ok: 1, body: await request.text() })
}


export async function PATCH(request: Request) {
    const { headers, method, url } = request;
    console.log({ method, url, headers })
    return NextResponse.json({ ok: 1, body: await request.text() })
}

export async function DELETE(request: Request) {
    const { headers, method, url } = request;
    console.log({ method, url, headers })
    return NextResponse.json({ ok: 1, body: await request.text() })
}

export async function HEAD(request: Request) {
    const { headers, method, url } = request;
    console.log({ method, url, headers })
    return NextResponse.json({ ok: 1, body: await request.text() })
}

export async function OPTIONS(request: Request) {
    const { headers, method, url } = request;
    console.log({ method, url, headers })
    return NextResponse.json({ ok: 1, body: await request.text() })
}



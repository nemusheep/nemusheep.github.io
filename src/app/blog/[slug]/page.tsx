import '@/app/globals.css';

export default function Post({ params }: { params: { slug: string } }){
    return (
        <div className='App-blog'>
            <p>Post: {params.slug}</p>
        </div>
    );
}
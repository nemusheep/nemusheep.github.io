import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/App.css';

function Blog() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>blog - ひつじの寝床</title>
            </Helmet>
            <div className='App-about'>
                <h1>
                    ぶ
                </h1>
                <p>なんか書く</p>
                <p>なに書こうかな</p>
                <p>なにも書くことない</p>
            </div>
        </HelmetProvider>
    );
}

export default Blog;
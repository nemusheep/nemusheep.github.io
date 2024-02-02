import { Helmet } from "react-helmet-async";

function OgpSettings({ title, description, url, image }) {
    return (
        <Helmet>
            <title>{ title }</title>
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ "https://nemusheep.github.io" + url } />
            <meta property="og:title" content={ title } />
            <meta property="og:description" content={ description } />
            <meta property="og:site_name" content="ひつじの寝床" />
            <meta property="og:image" content={ "https://nemusheep.github.io" + image } />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content={ "https://nemusheep.github.io" + image } />
            <meta name="twitter:description" content={ description } />
            <meta name="twitter:creator" content="@mesheep_sleep" />
        </Helmet>
    );
}

export default OgpSettings;
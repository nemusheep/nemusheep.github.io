import styles from "../../page.module.css";

export default function Post({ params }: { params: { slug: string } }){
    return (
        <div className={styles.main}>
            <p>Post: {params.slug}</p>
        </div>
    );
}
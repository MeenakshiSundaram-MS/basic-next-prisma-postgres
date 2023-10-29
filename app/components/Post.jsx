import DeletePostButton from "./DeletePostButton"

export const Posts = ({author, title, content, id}) => {
    return(
        <div className="border mt-4 h-full border-white rounded-xl p-4">
            <h3>{author}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
            <DeletePostButton postId={id} />
        </div>
    )
}
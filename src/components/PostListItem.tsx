import { Link } from 'react-router-dom';
import { BlogPostResp } from '../types/types';
import Tags from './Tags';
import { useGetMinReadTime } from '../hooks/useGetMinReadTime';

type PostListItemProp = {
  blogItem: BlogPostResp;
};

const PostListItem = ({ blogItem }: PostListItemProp) => {
  const { _id, date, tags, title, body } = blogItem;

  return (
    <section className="border-b border-grey-lighter py-8">
      <Tags tags={tags} />

      <Link
        to={`/post/${_id}`}
        className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">
        {title}
      </Link>

      <div className="flex items-center pt-4">
        <p className="pr-2 font-body font-light text-primary dark:text-white">
          {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <span className="font-body text-grey dark:text-white">//</span>

        <p className="pl-2 font-body font-light text-primary dark:text-white">{useGetMinReadTime(body.length)}</p>
      </div>
    </section>
  );
};

export default PostListItem;

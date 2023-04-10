import { useGetMinReadTime } from '../hooks/useGetMinReadTime';
import { BlogPostResp } from '../types/types';
import Share from './Share';
import Dompurify from 'dompurify';
import Tags from './Tags';
import CommentList from './CommentList';

type BlogPostContentsProp = {
  blogPost: BlogPostResp;
};

const BlogPostContents = ({ blogPost }: BlogPostContentsProp) => {
  const { body, title, comments, date, tags } = blogPost;

  return (
    <>
      {/* tags and title */}
      <article className="pt-16 lg:pt-20 border-b border-grey-lighter pb-8 sm:pb-12">
        <Tags tags={tags} />

        <h2 className="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>

        <div className="flex items-center pt-4">
          <p className="pr-2 font-body font-light text-primary dark:text-white">
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <span className="font-body text-grey dark:text-white">//</span>

          <p className="pl-2 font-body font-light text-primary dark:text-white">{useGetMinReadTime(body.length)}</p>
        </div>
      </article>

      {/* contents */}
      <article
        className="prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12"
        dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(body) }}
      />

      <Share />

      <CommentList comments={comments} />
    </>
  );
};

export default BlogPostContents;

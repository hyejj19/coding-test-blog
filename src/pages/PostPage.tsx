import Footer from '../components/Footer';
import Header from '../components/Header';
import { useLocation } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import LoadingSpinner from '../components/LoadingSpinner';
import { BlogPostResp } from '../types/types';
import BlogPostContents from '../components/BlogPostContents';
import AutoScrollButton from '../components/AutoScrollButton';

const PostPage = () => {
  const id = useLocation().pathname.split('/')[2];

  const { data: blogPost, isLoading, isError } = useFetch<BlogPostResp>({ method: 'getBlogPost', id });

  return (
    <main>
      <Header />
      <AutoScrollButton />
      <section className="container mx-auto">
        {isLoading && (
          <div className="pt-8 py-10 min-h-[800px] flex justify-center items-center">
            <LoadingSpinner />
          </div>
        )}

        {isError && <div className="pt-8 py-10">블로그 데이터 로드에 실패하였습니다.</div>}

        {blogPost && <BlogPostContents blogPost={blogPost} />}
      </section>
      <Footer />
    </main>
  );
};

export default PostPage;

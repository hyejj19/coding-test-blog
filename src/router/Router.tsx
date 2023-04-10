import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import BlogPage from '../pages/BlogPage';
import PostPage from '../pages/PostPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

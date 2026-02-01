import React from 'react';
import './Review.css';

const Review = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Optimizing',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
      title: 'Foremost 14 Tech Stacks in Software Building.',
      date: 'March 16, 2023',
      comments: 2
    },
    {
      id: 2,
      category: 'Meeting',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      title: 'Foremost 14 Tech Stacks in Software Building.',
      date: 'March 16, 2023',
      comments: 2
    },
    {
      id: 3,
      category: 'Optimizing',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
      title: 'Foremost 14 Tech Stacks in Software Building.',
      date: 'March 16, 2023',
      comments: 2
    }
  ];

  return (
    <div className="review-container">
      <div className="review-header">
        <div className="review-badge">Blog & News</div>
        <h1 className="review-title">Our Latest Findings</h1>
      </div>

      <div className="review-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="review-card">
            <div className="review-card-image">
              <img src={post.image} alt={post.title} />
              <span className="review-category">{post.category}</span>
            </div>
            <div className="review-card-content">
              <h3 className="review-card-title">{post.title}</h3>
              <div className="review-card-footer">
                <div className="review-card-meta">
                  <span className="review-date">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 2H12V1C12 0.734784 11.8946 0.48043 11.7071 0.292893C11.5196 0.105357 11.2652 0 11 0C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.48043 10 0.734784 10 1V2H6V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H13C13.7956 16 14.5587 15.6839 15.1213 15.1213C15.6839 14.5587 16 13.7956 16 13V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2ZM14 13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V8H14V13ZM14 6H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H4V5C4 5.26522 4.10536 5.51957 4.29289 5.70711C4.48043 5.89464 4.73478 6 5 6C5.26522 6 5.51957 5.89464 5.70711 5.70711C5.89464 5.51957 6 5.26522 6 5V4H10V5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6C11.2652 6 11.5196 5.89464 11.7071 5.70711C11.8946 5.51957 12 5.26522 12 5V4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5V6Z" fill="currentColor"/>
                    </svg>
                    {post.date}
                  </span>
                  <span className="review-comments">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H4V15C4 15.1857 4.05171 15.3678 4.14935 15.5257C4.24699 15.6837 4.38668 15.8111 4.55279 15.8944C4.7189 15.9778 4.90484 16.0137 5.08981 15.9982C5.27477 15.9827 5.45143 15.9164 5.6 15.807L10.25 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0ZM14 10H10C9.81434 10 9.63237 10.0517 9.47447 10.1494C9.31658 10.2471 9.18899 10.387 9.106 10.553L6 13.2V11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10H2V2H14V10Z" fill="currentColor"/>
                    </svg>
                    {post.comments} Comments
                  </span>
                </div>
                <button className="review-share-btn" aria-label="Share">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 10C12.3672 10 11.7852 10.2148 11.3125 10.5664L5.55469 7.375C5.60156 7.12891 5.625 6.875 5.625 6.625C5.625 6.375 5.60156 6.12109 5.55469 5.875L11.3125 2.68359C11.7852 3.03516 12.3672 3.25 13 3.25C14.5156 3.25 15.75 2.01562 15.75 0.5C15.75 -1.01562 14.5156 -2.25 13 -2.25C11.4844 -2.25 10.25 -1.01562 10.25 0.5C10.25 0.75 10.2734 1.00391 10.3203 1.25L4.5625 4.44141C4.08984 4.08984 3.50781 3.875 2.875 3.875C1.35938 3.875 0.125 5.10938 0.125 6.625C0.125 8.14062 1.35938 9.375 2.875 9.375C3.50781 9.375 4.08984 9.16016 4.5625 8.80859L10.3203 12C10.2734 12.2461 10.25 12.5 10.25 12.75C10.25 14.2656 11.4844 15.5 13 15.5C14.5156 15.5 15.75 14.2656 15.75 12.75C15.75 11.2344 14.5156 10 13 10Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
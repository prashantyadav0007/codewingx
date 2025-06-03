import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Articles', 'Guides', 'Resources'];
  
  const blogPosts = [
    {
      id: 1,
      title: "7 best online brokers for stocks & cryptos",
      description: "Mattis nunc sed blandit libero volutpat sed cras ornare arcu a diam sollicitudin tempor id eu mattis vulputate enim nulla",
      author: "John Carter",
      role: "CEO and Founder",
      date: "August 9, 2023",
      readTime: "7 min read",
      category: "Articles",
      featured: true,
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "What is an Initial Public Offering (IPO)?",
      description: "Understanding the basics of IPOs and how they work in the stock market",
      date: "August 9, 2023",
      readTime: "7 min read",
      category: "Articles",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Stock trading: A guide for beginners",
      description: "Learn the fundamentals of stock trading with this comprehensive beginner's guide",
      date: "August 9, 2023",
      readTime: "7 min read",
      category: "Guides",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "7 best online brokers for stocks & cryptos",
      description: "Comprehensive analysis of top online brokers for cryptocurrency and stock trading",
      date: "August 9, 2023",
      readTime: "7 min read",
      category: "Resources",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Is cryptocurrency a good investment?",
      description: "Exploring the pros and cons of cryptocurrency investments in today's market",
      date: "August 9, 2023",
      readTime: "7 min read",
      category: "Articles",
      image: "/api/placeholder/400/300"
    }
  ];

  const filteredPosts = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="testimonials-container">
      {/* Header Section */}
      <div className="testimonials-header">
        <h1>Blog & Resources</h1>
        <p>Mattis nunc sed blandit libero volutpat sed cras ornare arcu a diam sollicitudin tempor id eu mattis vulputate enim nulla dolor sit amet.</p>
        
        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <div className="newsletter-input-container">
            <input 
              type="email" 
              placeholder="Enter email address to subscribe"
              className="newsletter-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {featuredPost && (
        <div className="featured-article">
          <div className="featured-content">
            <div className="featured-meta">
              <span className="featured-date">
                <Calendar size={14} />
                {featuredPost.date}
              </span>
              <span className="featured-read-time">
                <Clock size={14} />
                {featuredPost.readTime}
              </span>
            </div>
            
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.description}</p>
            
            <div className="author-info">
              <div className="author-avatar">
                <img src="/api/placeholder/40/40" alt={featuredPost.author} />
              </div>
              <div className="author-details">
                <h4>{featuredPost.author}</h4>
                <span>{featuredPost.role}</span>
              </div>
            </div>
          </div>
          
          <div className="featured-visual">
            <div className="crypto-icons">
              <div className="bitcoin-icon">₿</div>
              <div className="resources-badge">
                <Star size={16} />
                Resources
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Latest Articles Section */}
      <div className="latest-articles">
        <h2>Latest articles</h2>
        
        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="articles-grid">
          {filteredPosts.slice(1).map(post => (
            <div key={post.id} className="article-card">
              <div className="article-image">
                <div className="article-category-badge">
                  {post.category}
                </div>
                <div className="article-visual-content">
                  {post.category === 'Articles' && (
                    <div className="geometric-pattern"></div>
                  )}
                  {post.category === 'Guides' && (
                    <div className="chart-pattern">
                      <div className="candlestick-chart">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="candlestick" style={{height: `${Math.random() * 60 + 20}px`}}></div>
                        ))}
                      </div>
                    </div>
                  )}
                  {post.category === 'Resources' && (
                    <div className="crypto-symbols">
                      <div className="eth-symbol">Ξ</div>
                      <div className="btc-symbol">₿</div>
                      <div className="ltc-symbol">Ł</div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="article-content">
                <h3>{post.title}</h3>
                <div className="article-meta">
                  <span className="article-date">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="article-read-time">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <button className="read-more-btn">
                  Read more
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
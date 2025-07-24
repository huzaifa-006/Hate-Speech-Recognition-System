import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthContext from '../context/AuthContext';
import pic1 from "../assets/a.jpg"
import pic2 from "../assets/a1.jpg"
import pic3 from "../assets/a2.jpg"
import "./Home.css";

const Home = () => {
    const { user } = useContext(AuthContext);

    // Replace local images with Unsplash URLs for hero section
    const heroImages = [
      {
        url: pic1,
        heading: "AI That Understands Words—Not Just Flags Them",
        message: "Our AI analyzes chat messages in real time to flag hate speech and protect your community.",
        button: { text: "See Features", scrollTo: "features" }
      },
      {
        url: pic2,
        heading: "Spotting Harmful Words Before They Spread",
        message: "See how our system highlights and detects toxic language using advanced NLP techniques.",
        button: { text: "See Testimonials", scrollTo: "testimonials" }
      },
      {
        url: pic3,
        heading: "Empowering Moderators, Protecting Communities",
        message: "Moderators can easily flag and review hate speech, keeping online spaces safe and inclusive.",
        button: { text: "Join the Mission", scrollTo: "cta" }
      }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />

            {/* Carousel Section */}
            <div id="carouselExample" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    {heroImages.map((img, idx) => (
                      <div className={`carousel-item${idx === 0 ? " active" : ""}`} key={img.url}>
                        <img
                          src={img.url}
                          className="d-block w-100"
                          alt={img.heading}
                          style={{ height: '600px', objectFit: 'cover' }}
                        />
                        <div className="container">
                          <div className="carousel-caption">
                            <h1>{img.heading}</h1>
                            <p className="opacity-75">{img.message}</p>
                            <p>
                              <button
                                className="btn btn-lg btn-primary"
                                onClick={() => document.getElementById(img.button.scrollTo).scrollIntoView({ behavior: 'smooth' })}
                              >
                                {img.button.text}
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Hero Section */}
            <motion.section
                id="hero"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="py-5 text-center homepage-hero"
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">Welcome to Hate Speech Detection AI</h1>
                    <p className="lead">
                        Revolutionizing social media with AI-powered real-time hate speech detection and actionable insights.
                    </p>
                    <div className="mt-4 d-flex justify-content-center">
                        {user ? (
                            <>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="me-2"
                                >
                                    <Link to="/dashboard" className="btn btn-light btn-lg">
                                        Go to Dashboard
                                    </Link>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button
                                        className="btn btn-outline-light btn-lg"
                                        onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        See Features
                                    </button>
                                </motion.div>
                            </>
                        ) : (
                            <>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="me-2"
                                >
                                    <Link to="/register" className="btn btn-light btn-lg">
                                        Get Started
                                    </Link>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link to="/login" className="btn btn-outline-light btn-lg">
                                        Learn More
                                    </Link>
                                </motion.div>
                            </>
                        )}
                    </div>
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                id="features"
                className="py-5 homepage-features"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="container">
                    <h2 className="text-center mb-4">Why Choose Hate Speech Detection?</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="bi bi-emoji-heart-eyes display-2 text-primary"></i>
                            <h4>Real-Time Detection</h4>
                            <p>
                                Detect harmful language instantly across posts, comments, and messages.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="bi bi-chat-dots display-2 text-primary"></i>
                            <h4>Generative AI Insights</h4>
                            <p>
                                Understand the context and sentiment behind flagged content.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="bi bi-cloud display-2 text-primary"></i>
                            <h4>Cloud-Based Platform</h4>
                            <p>
                                Access our detection system from anywhere, anytime, with scalable cloud infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                id="testimonials"
                className="py-5 homepage-testimonials"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="container">
                    <h2 className="text-center mb-4">What Users Say</h2>
                    <div className="row">
                        <motion.div
                            className="col-md-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">
                                        "This tool has helped us reduce online toxicity significantly!"
                                    </p>
                                    <p className="text-muted">- Sarah</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-md-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">
                                        "It flagged harmful comments I missed, making our community safer."
                                    </p>
                                    <p className="text-muted">- John, Moderator</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-md-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">
                                        "The AI is spot-on with its analysis, and the insights are super helpful."
                                    </p>
                                    <p className="text-muted">- Emily, Content Creator</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
                id="cta"
                className="py-5 homepage-cta text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <div className="container">
                    <h2 className="mb-4">Join the Fight Against Hate Speech</h2>
                    <p className="lead mb-4">
                        Protect your online communities and foster healthier conversations with our AI-powered solution.
                    </p>
                    {user ? (
                        <Link to="/detection" className="btn btn-light btn-lg">
                            Start Detection
                        </Link>
                    ) : (
                        <Link to="/register" className="btn btn-light btn-lg">
                            Sign Up Now
                        </Link>
                    )}
                </div>
            </motion.section>

            {/* Footer Section */}
            <Footer />
        </motion.div>
    );
};

export default Home;

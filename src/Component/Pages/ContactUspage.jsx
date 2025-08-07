import React from 'react'

export default function ContactUspage() {
    return (
        <>
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <div className="bg-light rounded p-5 mb-5">
                                    <h4 className="text-primary mb-4">Get in Touch</h4>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="contact-add-item">
                                                <div className="contact-icon text-primary mb-4">
                                                    <i className="fas fa-map-marker-alt fa-2x"></i>
                                                </div>
                                                <div>
                                                    <h4>Address</h4>
                                                    <p className="mb-0">123 Street New York.USA</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-add-item">
                                                <div className="contact-icon text-primary mb-4">
                                                    <i className="fas fa-envelope fa-2x"></i>
                                                </div>
                                                <div>
                                                    <h4>Mail Us</h4>
                                                    <p className="mb-0">info@example.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-add-item">
                                                <div className="contact-icon text-primary mb-4">
                                                    <i className="fa fa-phone-alt fa-2x"></i>
                                                </div>
                                                <div>
                                                    <h4>Telephone</h4>
                                                    <p className="mb-0">(+012) 3456 7890</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-add-item">
                                                <div className="contact-icon text-primary mb-4">
                                                    <i className="fab fa-firefox-browser fa-2x"></i>
                                                </div>
                                                <div>
                                                    <h4>Yoursite@ex.com</h4>
                                                    <p className="mb-0">(+012) 3456 7890</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-5 rounded h-100 wow fadeInUp" data-wow-delay="0.2s">
                                    <h4 className="text-primary">Send Your Message</h4>
                                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className="text-primary fw-bold" href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                    <form>
                                        <div className="row g-4">
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                                                    <label for="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                                                    <label for="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating">
                                                    <input type="phone" className="form-control border-0" id="phone" placeholder="Phone" />
                                                    <label for="phone">Your Phone</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control border-0" id="project" placeholder="Project" />
                                                    <label for="project">Your Project</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                                                    <label for="subject">Subject</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: "160px"}}></textarea>
                                                    <label for="message">Message</label>
                                                </div>

                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="rounded h-100">
                            <iframe class="gmap_iframe w-100" style={{height:"100%"}} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=a-43 noida sector 16&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

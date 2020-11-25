import React from 'react'

const FooterForm = () => {
    return (
        <section className="footer-form d-flex pb-5">
            <main className="container px-4 align-self-end">
                <div className="row w-100 m-0 d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h3>Subscribe to Our Newsletter</h3>
                        <p className="text-muted">Don't miss any updates of our new Course and all the astonishing offers.</p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <input type="email" placeholder="Email address" className="email-field" />
                            <input type="submit" value="Subscribe" className="submit-btn" />
                        </form>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default FooterForm;
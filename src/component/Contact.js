import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

function Contact() {
  return (
    <div className="bg-primary-dark py-12">
      <div className="mx-[7%] flex flex-col">
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="text-cream text-3xl font-bold border-b-4 border-orange p-2">
            CONNECT WITH ME!
          </h1>
          <p className="py-4 text-center text-white">
            Here are some of my experiences in technical fields, especially Web
            Development and in other fields.
          </p>
        </div>
        <div className="flex flex-col gap-5 ml-4 my-4">
          <div className="flex items-center gap-4">
            <div className="w-8">
              <svg
                role="img"
                fill="#f45325"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Gmail</title>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </div>
            <p className="text-white text-sm hover:text-orange hover:tracking-wide transition-all ease-in-out">
              juanfarrel0404@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8">
              <svg
                role="img"
                fill="#f45325"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>
            <p className="text-white text-sm hover:text-orange hover:tracking-wide transition-all ease-in-out">
              <a href="https://github.com/juanfarrel">juanfarrel</a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8">
              <svg
                role="img"
                fill="#f45325"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <p className="text-white text-sm hover:text-orange hover:tracking-wide transition-all ease-in-out">
              <a href="https://www.linkedin.com/in/aloysiusjuanfarrellumentut/">
                Aloysius Juan Farrel Lumentut
              </a>
            </p>
          </div>
        </div>
        <div>
          <div className="w-full">
            <h1 className="text-cream font-semibold text-center text-xl mt-8 mb-4">
              CONTACT ME
            </h1>
            <Formik
              initialValues={{ email: "", name: "", message: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert("Message submitted!");
                  setSubmitting(false);
                  values.email = ''
                  values.name = ''
                  values.message = ''
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-2 w-full">
                    <p className="text-orange">Email</p>
                    <Field className="p-1 px-2 text-md outline-none" type="email" name="email" />
                    <ErrorMessage className="text-sand" name="email" component="div" />
                    <p className="text-orange">Name</p>
                    <Field className="p-1 px-2 text-md outline-none" type="text" name="name"/>
                    <p className="text-orange">Message</p>
                    <Field className="p-1 px-2 text-md outline-none" as="textarea" name="message" />
                  
                  <button className="p-2 bg-orange my-4 font-semibold" type="submit" disabled={isSubmitting}>
                    Send
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

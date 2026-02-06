import Link from "../components/Link"

export default function Page() {
  return (
    <main className="bg-f-blue text-white min-h-screen">
      <div className="container mx-auto">
        <section className="flex flex-wrap content-center min-h-screen">
          <div className="lg:w-6/12 w-10/12 m-auto">
            <header>
              <h1 className="text-4xl mb-5 text-left">
                Hello! <span className="hello">👋</span>
              </h1>
            </header>

            <p className="text-2xl mb-5">
              I&apos;m Fredrik Forsmo, full-stack developer and open-sourcerer
              from Stockholm, Sweden 🇸🇪
            </p>

            <p className="text-2xl">
              You can find me on{" "}
              <Link to="https://github.com/frozzare">GitHub</Link>,{" "}
              <Link to="https://twitter.com/frozzare">Twitter</Link> or{" "}
              <Link to="https://www.linkedin.com/in/frozzare/">LinkedIn</Link>.
              {" "}Feel free to contact me on social media or send me an email at{" "}
              <Link to="mailto:hello@frozzare.com">hello@frozzare.com</Link>.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

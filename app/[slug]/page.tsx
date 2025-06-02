import Share from "@/components/blog-detail/Share";
import Tags from "@/components/blog-detail/Tags";
import BlogCard from "@/components/blog/BlogCard";

const Page = () => {
  return (
    <article className="lg:w-2/3 lg:pr-8">
      {/* <!-- Article Header --> */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Understanding Modern Web Development Frameworks
        </h1>

        {/* <!-- Article Meta --> */}
        <div className="flex flex-wrap items-center text-gray-600 mb-6">
          <div className="flex items-center mr-6 mb-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Author"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span>
              By{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                John Doe
              </a>
            </span>
          </div>
          <div className="flex items-center mr-6 mb-2">
            <i className="far fa-calendar mr-2"></i>
            <span>June 2, 2025</span>
          </div>
          <div className="flex items-center mr-6 mb-2">
            <i className="far fa-clock mr-2"></i>
            <span>5 min read</span>
          </div>
          <div className="flex items-center mb-2">
            <i className="far fa-comment mr-2"></i>
            <span>24 Comments</span>
          </div>
        </div>

        {/* <!-- Social Share --> */}
        <Share></Share>
      </header>

      {/* <!-- Article Content --> */}
      <div className="prose max-w-none text-gray-800 mb-10">
        <p className="mb-4 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <p className="mb-4 leading-relaxed">
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          The Evolution of Web Frameworks
        </h2>

        <p className="mb-4 leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-8 text-gray-700">
          The best way to predict the future is to invent it. The future is not
          laid out on a track. It is something that we can decide, and to the
          extent that we do not violate any known laws of the universe, we can
          probably make it work the way that we want to.
        </blockquote>

        <p className="mb-4 leading-relaxed">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">
          Modern Approaches to Front-end Development
        </h3>

        <p className="mb-4 leading-relaxed">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur.
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Component-Based Architecture</li>
          <li className="mb-2">State Management Solutions</li>
          <li className="mb-2">
            Server-Side Rendering vs. Client-Side Rendering
          </li>
          <li className="mb-2">Performance Optimization Techniques</li>
        </ul>

        <p className="mb-4 leading-relaxed">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* <!-- Tags --> */}
      <div className="mb-10">
        <Tags></Tags>
      </div>

      {/* <!-- Related Posts --> */}
      <section>
        <h3 className="text-2xl font-bold mb-6">You Might Also Like</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Related Post 1 --> */}
          <BlogCard></BlogCard>
        </div>
      </section>
    </article>
  );
};

export default Page;

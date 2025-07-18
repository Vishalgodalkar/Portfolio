type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col mt-14">
        <h4 className="text-4xl font-semibold text-black dark:text-white text-center font-outfit">
          connect with me on{" "}
          <span className="underline decoration-blue-600">socials.</span>
        </h4>

        <div className="flex flex-wrap gap-6 justify-center font-outfit text-xl font-extralight text-gray-500 mt-14">
          {[
            { name: "LinkedIn", href: "https://www.linkedin.com/in/vishal-godalkar-a42543245/?originalSubdomain=in" },
            { name: "GitHub", href: "https://github.com/Vishalgodalkar" },
            {
              name: "WhatsApp",
              href: "https://wa.me/917888049161",
            },
            {
              name: "Mail",
              href: "mailto:vishalgodalkar1@gmail.com",
            },
          ].map((social, index) => (
            <p
              key={index}
              className="hover:text-black dark:hover:text-gray-300 duration-200"
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.name.toLowerCase()}
              </a>
              <span className="inline-flex">
                <svg
                  className="with-icon_icon__MHUeb"
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  style={{ color: "currentColor", width: "14px", height: "14px" }}
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </span>
            </p>
          ))}
        </div>

        <h5 className="mt-28">
          <p className="text-xl font-md font-outfit text-gray-900 dark:text-gray-200 md:ml-5">
            or drop a mail at{" "}
            <a href="mailto:vishalgodalkar1@gmail.com" className="cursor-pointer">
              <span className="link link-underline link-underline-black">
                {" "}
                vishalgodalkar1@gmail.com
              </span>
            </a>
            <span className="inline-flex dark:text-white text-black">
              <svg
                className="with-icon_icon__MHUeb"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
                width="24"
                style={{
                  width: "15px",
                  height: "14px",
                }}
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </p>
        </h5>
      </div>

      <div className="text-sm bottom-20 md:bottom-10 items-center justify-center absolute flex font-outfit text-gray-500">
        <p>
          website designed and developed by{" "}
          <span className="text-blue-500">
            <a
              target="_blank"
              href="https://linkedin.com/in/vishal-godalkar"
              rel="noreferrer"
            >
              Vishal Godalkar
            </a>
          </span>
        </p>
        <span className="inline-flex text-blue-500">
          <svg
            className="with-icon_icon__MHUeb"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
            style={{ color: "currentColor", width: "14px", height: "14px" }}
          >
            <path d="M7 17L17 7"></path>
            <path d="M7 7h10v10"></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

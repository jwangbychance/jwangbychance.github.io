import Modal from "react-modal";
import ReactPlayer from "react-player";

interface ProjectProps {
  title: string;
  content: string;
  tech: string;
  src: string;
  showModal: boolean;
  toggleModal: () => void;
  link?: string;
}

const Project = ({
  title,
  content,
  tech,
  src,
  showModal,
  toggleModal,
  link,
}: ProjectProps) => {
  const isImage = /\.(png|jpe?g|webp|gif|svg)$/i.test(src);

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={toggleModal}
      contentLabel={`${title} project details`}
      overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#d3b6ff]/70 bg-white p-5 shadow-2xl outline-none sm:p-8"
    >
      <button
        type="button"
        onClick={toggleModal}
        aria-label="Close project details"
        className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#8b3dff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff]"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="pr-10">
        <h2 className="text-xl font-bold leading-tight text-[#8b3dff] sm:text-2xl">
          {title}
        </h2>

        <p className="mt-5 text-sm font-medium leading-6 text-gray-600 sm:text-base">
          <span className="font-semibold text-gray-900">Technologies:</span>{" "}
          {tech}
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
          {content}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block break-all text-sm font-medium text-[#8b3dff] underline underline-offset-4 hover:text-[#7300e6] sm:text-base"
          >
            Visit project
          </a>
        )}
      </div>

      <div className="mt-7 overflow-hidden rounded-xl bg-gray-50">
        {isImage ? (
          <img
            src={src}
            alt={`${title} preview`}
            className="mx-auto h-auto max-h-[60vh] w-full object-contain"
          />
        ) : (
          <div className="relative aspect-video w-full">
            <ReactPlayer
              url={src}
              controls
              width="100%"
              height="100%"
              style={{ position: "absolute", inset: 0 }}
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Project;

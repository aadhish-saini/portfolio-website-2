import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FiCode } from "react-icons/fi";

interface Props {
  image?: string;
  alt?: string;
  link?: string;
  title?: string;
  category?: string;
}

const WorkImage = ({ image, alt, link, title }: Props) => {
  const [imgError, setImgError] = useState(false);

  // Normalize image path if /work_images/ is passed instead of /images/work_images/
  const resolvedImage = image?.startsWith("/work_images/")
    ? image.replace("/work_images/", "/images/work_images/")
    : image;

  const isPlaceholder = !resolvedImage || imgError;

  return (
    <div className="work-image">
      <div className="work-image-in" data-cursor="disable">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
            title="View GitHub Repository"
            aria-label={`View ${title || "project"} on GitHub`}
            data-cursor="disable"
          >
            <MdArrowOutward />
          </a>
        )}

        {!isPlaceholder ? (
          <img
            src={resolvedImage}
            alt={alt || `${title || "Project"} preview`}
            onError={() => setImgError(true)}
            className="work-image-static"
            loading="lazy"
          />
        ) : (
          <div className="work-image-placeholder">
            <div className="work-placeholder-bg"></div>
            <div className="work-placeholder-content">
              <div className="work-placeholder-icon">
                <FiCode />
              </div>
              <span className="work-placeholder-title">
                {title || "Project Preview"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkImage;



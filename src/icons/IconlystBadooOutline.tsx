import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBadooOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 6.052a5.32 5.32 0 0 1 4.3-1.995c2.454.055 4.498 1.756 5.19 3.971.438 1.4.26 2.89-.093 4.157-.627 2.242-2.036 4.174-3.735 5.544-1.693 1.365-3.733 2.22-5.663 2.22s-3.97-.855-5.664-2.22c-1.699-1.37-3.108-3.301-3.734-5.544-.354-1.267-.531-2.758-.094-4.156.696-2.226 2.755-3.934 5.224-3.973a5.3 5.3 0 0 1 4.27 1.996m-.684 1.733a3.81 3.81 0 0 0-3.553-2.23h-.006c-1.774.028-3.3 1.265-3.818 2.921-.316 1.01-.208 2.177.107 3.305.531 1.902 1.741 3.579 3.231 4.78 1.496 1.207 3.215 1.887 4.722 1.887s3.225-.68 4.721-1.887c1.49-1.201 2.7-2.878 3.232-4.78.315-1.128.423-2.295.107-3.305-.517-1.655-2.043-2.891-3.816-2.92h-.034a3.82 3.82 0 0 0-3.528 2.23.75.75 0 0 1-1.365-.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.855 10.358a.75.75 0 0 1 .842.646A3.39 3.39 0 0 0 12 13.95a3.39 3.39 0 0 0 3.305-2.946.75.75 0 1 1 1.487.195 4.89 4.89 0 0 1-4.782 4.25h-.02A4.89 4.89 0 0 1 7.21 11.2a.75.75 0 0 1 .645-.841"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBadooOutline;

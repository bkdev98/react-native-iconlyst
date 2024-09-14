import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHealthClipboardOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.184 3.75c-.767 0-1.467.433-1.81 1.119l-.671-.336.672.334a1.2 1.2 0 0 1-1.07.663h-.17a.584.584 0 0 0 0 1.17h6.229a.585.585 0 0 0 0-1.17h-.17c-.455 0-.866-.258-1.069-.66V4.87a2.02 2.02 0 0 0-1.81-1.119zm-3.062.28a3.52 3.52 0 0 1 3.062-1.78h.13c1.271 0 2.438.684 3.062 1.78a2.085 2.085 0 0 1-.012 4.17h-6.23a2.085 2.085 0 0 1-.012-4.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.534 5.91a.75.75 0 0 1-.576.89c-1.26.27-2.077 1.31-2.077 2.888v7.599c0 .93.288 1.665.748 2.159.454.488 1.13.802 2.035.802h7.163c.904 0 1.583-.315 2.04-.803.461-.495.751-1.229.751-2.158V9.688c0-1.578-.817-2.618-2.076-2.888a.75.75 0 0 1 .313-1.467c2.068.443 3.263 2.196 3.263 4.355v7.599c0 1.242-.391 2.364-1.155 3.182-.77.823-1.861 1.279-3.136 1.279H8.664c-1.276 0-2.366-.456-3.133-1.28-.762-.819-1.15-1.94-1.15-3.181V9.688c0-2.159 1.195-3.912 3.263-4.355a.75.75 0 0 1 .89.577m3.715 4.065a.75.75 0 0 1 .75.75v3.204a.75.75 0 0 1-1.5 0v-3.204a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.385 17.21a.75.75 0 0 1 .75-.75h6.229a.75.75 0 0 1 0 1.5h-6.23a.75.75 0 0 1-.75-.75M9.898 12.328a.75.75 0 0 1 .75-.75h3.204a.75.75 0 0 1 0 1.5h-3.204a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHealthClipboardOutline;

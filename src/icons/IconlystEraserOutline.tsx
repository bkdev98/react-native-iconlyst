import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEraserOutline = ({
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
      d="M2.5 20.084a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.239 4.082a3.127 3.127 0 0 1 4.422 0l3.447 3.447a3.127 3.127 0 0 1 0 4.422l-8.552 8.552a.75.75 0 0 1-1.06-1.06l8.55-8.552a1.627 1.627 0 0 0 0-2.301l-3.445-3.447a1.627 1.627 0 0 0-2.301 0L4.53 13.91a1.815 1.815 0 0 0 0 2.566l3.026 3.026a.75.75 0 0 1-1.06 1.06L3.47 17.537a3.314 3.314 0 0 1 0-4.687z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.788 8.532a.75.75 0 0 1 1.06 0l6.809 6.81a.75.75 0 1 1-1.061 1.06l-6.808-6.81a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEraserOutline;

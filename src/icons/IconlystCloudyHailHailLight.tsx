import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudyHailHailLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.356 15.561c.3 0 .698-.058 1.1-.22a2.72 2.72 0 0 0 1.599-2.483c0-1.707-1.205-2.708-2.696-2.722 0-1.073-.843-3.219-3.22-3.219s-3.218 2.146-3.218 3.22c-1.492.013-2.697 1.014-2.697 2.72 0 1.104.657 2.055 1.601 2.481a3 3 0 0 0 1.094.223h.538"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.475 14.353H6.52a3.9 3.9 0 0 1-1.407-.287 3.5 3.5 0 0 1-2.06-3.19c0-2.195 1.551-3.483 3.47-3.5 0-1.38 1.082-4.141 4.14-4.141 2.71 0 3.868 2.169 4.097 3.623M11.497 19.893l.009.01M3.055 16.43l.008.01M13.76 17.808l1.299-.75v-1.5l-1.299-.75-1.3.75v1.5zM6.801 20.449l1.299-.75v-1.5l-1.299-.75-1.3.75v1.5zM19.755 20.765l1.3-.75v-1.5l-1.3-.75-1.299.75v1.5z"
    />
  </Svg>
);
export default IconlystCloudyHailHailLight;

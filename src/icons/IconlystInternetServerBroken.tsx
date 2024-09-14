import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInternetServerBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.767 9.233a6.233 6.233 0 1 1 1.43 3.97"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3c-1.282 0-2.32 2.79-2.32 6.233s1.039 6.232 2.32 6.232 2.32-2.79 2.32-6.232c0-.852-.063-1.664-.178-2.404M18.233 9.232H5.768"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.596 19.403a1.597 1.597 0 1 1-3.194 0 1.597 1.597 0 0 1 3.194 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.202 19.402h-4.628m-3.155 0H5.801M12 17.802v-2.337"
    />
  </Svg>
);
export default IconlystInternetServerBroken;

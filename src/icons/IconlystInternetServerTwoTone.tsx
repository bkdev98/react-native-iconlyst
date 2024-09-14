import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInternetServerTwoTone = ({
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
      d="M18.733 9.233a6.233 6.233 0 1 0-12.465 0 6.233 6.233 0 0 0 12.465 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.82 9.233C14.82 5.79 13.782 3 12.5 3c-1.282 0-2.32 2.79-2.32 6.233s1.039 6.232 2.32 6.232 2.32-2.79 2.32-6.232"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.733 9.232H6.268"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.096 19.403a1.597 1.597 0 1 1-3.194 0 1.597 1.597 0 0 1 3.194 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.702 19.403h-4.628m-3.155 0H6.301M12.5 17.802v-2.337"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystInternetServerTwoTone;

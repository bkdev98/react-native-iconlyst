import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudAddBulk = ({
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
      d="M18.008 8.689a.21.21 0 0 1-.183-.177C17.54 6.68 16.073 3.77 12.502 3.77s-5.04 2.91-5.325 4.742a.21.21 0 0 1-.183.177c-2.36.289-3.958 2.098-3.958 4.584a4.64 4.64 0 0 0 2.741 4.221 5.1 5.1 0 0 0 1.668.367c.14.007.236-.13.202-.265a2.4 2.4 0 0 1-.075-.579c0-1.303.999-2.37 2.273-2.485a.23.23 0 0 0 .204-.205 2.496 2.496 0 0 1 4.972 0c.01.108.097.195.205.204a2.497 2.497 0 0 1 2.272 2.486q-.002.3-.074.579c-.034.134.063.272.202.264a5.2 5.2 0 0 0 1.622-.37 4.64 4.64 0 0 0 2.716-4.217c0-2.486-1.597-4.295-3.956-4.584"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.998 16.266h-1.713v-1.711a.75.75 0 0 0-1.5 0v1.71h-1.713a.75.75 0 0 0 0 1.5h1.713v1.716a.75.75 0 0 0 1.5 0v-1.715h1.713a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudAddBulk;

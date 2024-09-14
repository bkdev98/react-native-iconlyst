import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleFiBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.325 8.727h7.931c.184 0 .277-.234.158-.374a3.82 3.82 0 0 1-.916-2.486c0-.945.342-1.813.916-2.487.119-.14.026-.373-.158-.373h-7.93c-1.58 0-2.87 1.29-2.87 2.86 0 1.58 1.29 2.86 2.87 2.86M17.681 10.45a2.865 2.865 0 0 0-2.863 2.86v5.84a2.865 2.865 0 0 0 2.863 2.862 2.864 2.864 0 0 0 2.861-2.861v-5.84a2.863 2.863 0 0 0-2.861-2.86M10.37 10.45H6.32a2.864 2.864 0 0 0-2.862 2.86v5.84a2.865 2.865 0 0 0 2.862 2.862 2.865 2.865 0 0 0 2.863-2.861v-2.98h1.187a2.864 2.864 0 0 0 2.862-2.86 2.864 2.864 0 0 0-2.862-2.86M17.685 8.727c1.57 0 2.86-1.28 2.86-2.86 0-1.57-1.29-2.86-2.86-2.86-1.58 0-2.87 1.29-2.87 2.86 0 1.58 1.29 2.86 2.87 2.86"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleFiBold;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoldTypeBulk = ({
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
      d="M16.218 2.5H7.783C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.283 5.53h8.434c3.16 0 5.283-2.223 5.283-5.53V8.03c0-3.307-2.123-5.53-5.282-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.938 15.76a2.7 2.7 0 0 1-1.995.88H9.654a.75.75 0 0 1-.75-.75V8.111a.75.75 0 0 1 .75-.75h2.507c1.423 0 2.637 1.067 2.767 2.43a2.7 2.7 0 0 1-.56 1.9c.69.436 1.178 1.156 1.257 1.99a2.71 2.71 0 0 1-.687 2.078m-4.534-.62v-2.39h2.455c.657 0 1.216.471 1.272 1.071a1.19 1.19 0 0 1-1.188 1.32zm3.031-5.21a1.2 1.2 0 0 1-1.19 1.32h-1.842V8.86h1.757c.657 0 1.217.47 1.275 1.07"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoldTypeBulk;

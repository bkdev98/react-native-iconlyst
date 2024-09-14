import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserInformationBold = ({
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
      d="M17.633 11.569h-2.667a.82.82 0 1 1 0-1.641h2.667a.82.82 0 1 1 0 1.64m0 3.193h-2.667a.82.82 0 1 1 0-1.641h2.667a.82.82 0 1 1 0 1.64m0 3.409h-1.768a.82.82 0 1 1 0-1.641h1.768a.82.82 0 1 1 0 1.64M13.25 7.05l-1.075.5-1.025-.5v-2.9c0-.1.1-.3.3-.3h1.5a.34.34 0 0 1 .261.159.27.27 0 0 1 .04.14zm-.682 11.026-6.18.008a.36.36 0 0 1-.36-.36c0-1.305 1.067-2.623 3.45-2.623s3.45 1.314 3.45 2.616a.36.36 0 0 1-.36.359m-3.09-8.56a2.24 2.24 0 0 1 2.238 2.238 2.24 2.24 0 0 1-2.239 2.239 2.24 2.24 0 0 1-2.238-2.24 2.24 2.24 0 0 1 2.238-2.237M16.65 4.95h-2v-.8c0-1-.8-1.7-1.7-1.8h-1.6c-1 0-1.8.8-1.8 1.8v.8h-1.9c-2.8 0-4.7 2-4.7 4.9v6.9c0 2.9 1.9 4.9 4.7 4.9h9c2.8 0 4.7-2 4.7-4.9v-7.2c-.1-2.8-2-4.6-4.7-4.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserInformationBold;

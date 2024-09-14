import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExpressionlessBulk = ({
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
      d="M16.716 2.5H8.282C5.123 2.5 3 4.721 3 8.026v7.948C3 19.28 5.123 21.5 8.282 21.5h8.433c3.161 0 5.285-2.22 5.285-5.526V8.026C22 4.721 19.877 2.5 16.716 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.067 10.074h-1.784a.75.75 0 0 1 0-1.5h1.784a.75.75 0 0 1 0 1.5M15.4 15.631H9.6a.75.75 0 0 1 0-1.5h5.8a.75.75 0 0 1 0 1.5M8.181 9.324a.75.75 0 0 1 .75-.75h1.784a.75.75 0 1 1 0 1.5H8.931a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExpressionlessBulk;

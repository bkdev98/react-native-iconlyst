import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShareOutline = ({
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
      d="M18.38 3.75a1.95 1.95 0 1 0 0 3.899 1.95 1.95 0 0 0 0-3.899M14.93 5.7a3.45 3.45 0 1 1 6.9-.001 3.45 3.45 0 0 1-6.9.001m-7.35 4.35a1.95 1.95 0 1 0 0 3.898 1.95 1.95 0 0 0 0-3.898M4.13 12a3.45 3.45 0 1 1 6.9-.001 3.45 3.45 0 0 1-6.9 0m14.25 4.35a1.95 1.95 0 1 0 0 3.899 1.95 1.95 0 0 0 0-3.899m-3.45 1.95a3.45 3.45 0 1 1 6.9-.001 3.45 3.45 0 0 1-6.9.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.697 6.68a.75.75 0 0 1-.27 1.027l-6.139 3.581a.75.75 0 0 1-.756-1.296l6.139-3.581a.75.75 0 0 1 1.026.27m-7.434 6.3a.75.75 0 0 1 1.026-.27l6.147 3.583a.75.75 0 0 1-.755 1.296l-6.147-3.583a.75.75 0 0 1-.27-1.025"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShareOutline;

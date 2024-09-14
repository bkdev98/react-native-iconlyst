import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleFiOutline = ({
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
      d="M17.365 4.25H6.637a1.48 1.48 0 1 0 0 2.962h10.728a1.48 1.48 0 0 0 0-2.962M6.637 2.75h10.728a2.98 2.98 0 1 1 0 5.961H6.637a2.98 2.98 0 1 1 0-5.96"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.363 4.25a1.48 1.48 0 1 0 0 2.962 1.48 1.48 0 0 0 0-2.962m-2.981 1.48a2.98 2.98 0 1 1 5.962.001 2.98 2.98 0 0 1-5.962 0M17.363 11.273a1.48 1.48 0 0 0-1.481 1.481v5.515a1.48 1.48 0 1 0 2.961 0v-5.515a1.48 1.48 0 0 0-1.48-1.48m-2.981 1.481a2.98 2.98 0 1 1 5.961 0v5.515a2.98 2.98 0 1 1-5.961 0zM3.654 12.754a2.98 2.98 0 0 1 2.981-2.98h3.824a2.98 2.98 0 1 1 0 5.961H6.635a2.98 2.98 0 0 1-2.98-2.98m2.981-1.48a1.48 1.48 0 0 0 0 2.96h3.824a1.48 1.48 0 1 0 0-2.96z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.635 11.273a1.48 1.48 0 0 0-1.48 1.481v5.515a1.48 1.48 0 1 0 2.96 0v-5.515a1.48 1.48 0 0 0-1.48-1.48m-2.98 1.481a2.98 2.98 0 1 1 5.96 0v5.515a2.98 2.98 0 1 1-5.96 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleFiOutline;

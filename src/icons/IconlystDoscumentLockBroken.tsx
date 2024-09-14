import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoscumentLockBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.93 21.324h4.289a3.813 3.813 0 0 0 3.658-3.835V9.324a2.05 2.05 0 0 0-.572-1.42l-3.791-3.949a2.05 2.05 0 0 0-1.479-.63H8.384a3.75 3.75 0 0 0-3.761 3.657V17.49a3.753 3.753 0 0 0 3.67 3.834h.498"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.525 17.209h-2.736c-.75 0-1.358-.608-1.358-1.358v-1.536c0-.75.608-1.358 1.358-1.358h2.736c.75 0 1.359.608 1.359 1.358v1.536c0 .75-.61 1.358-1.36 1.358"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.79 12.984v-1.011a1.634 1.634 0 0 0-3.266-.008v1.018M14.519 6.28a2.56 2.56 0 0 0 2.554 2.56h2.739"
    />
  </Svg>
);
export default IconlystDoscumentLockBroken;

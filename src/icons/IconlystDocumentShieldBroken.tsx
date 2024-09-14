import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentShieldBroken = ({
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
      d="M11.834 16.95s2.49-.753 2.49-2.831c0-2.08.09-2.012-.11-2.214s-2.053-.846-2.38-.846-2.181.646-2.381.846-.11.134-.11 2.214c0 2.078 2.49 2.832 2.49 2.832"
      clipRule="evenodd"
    />
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
      d="M14.519 6.281a2.56 2.56 0 0 0 2.554 2.561h2.739"
    />
  </Svg>
);
export default IconlystDocumentShieldBroken;

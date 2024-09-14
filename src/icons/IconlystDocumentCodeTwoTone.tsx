import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentCodeTwoTone = ({
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
      d="M14.286 3c.558 0 1.092.228 1.478.63l3.792 3.95c.366.381.571.89.571 1.42v8.165A3.81 3.81 0 0 1 16.47 21l-7.926-.001a3.753 3.753 0 0 1-3.67-3.834V6.657A3.747 3.747 0 0 1 8.634 3z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.769 3.063v2.892a2.56 2.56 0 0 0 2.554 2.561h2.738"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.463 12.238 2.137 2.138-2.17 2.17M11.129 10.227 8.99 12.364l2.17 2.17"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocumentCodeTwoTone;

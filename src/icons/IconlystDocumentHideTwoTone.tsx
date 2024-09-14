import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentHideTwoTone = ({
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
      d="M19.374 18.55c.176-.43.265-.901.265-1.39V8.996c0-.167-.02-.324-.07-.48a1.96 1.96 0 0 0-.508-.941l-3.783-3.94c-.392-.4-.92-.636-1.479-.636H8.155a3.78 3.78 0 0 0-2.93 1.391"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.28 3.066v2.891a2.557 2.557 0 0 0 2.551 2.558h2.737M3.98 3.145 21.02 20.193"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.565 20.998H8.137a3.713 3.713 0 0 1-3.742-3.694V8.098"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocumentHideTwoTone;

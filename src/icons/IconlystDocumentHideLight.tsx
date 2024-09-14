import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentHideLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.874 18.55c.176-.43.265-.901.265-1.39V8.996c0-.167-.02-.324-.07-.48a1.96 1.96 0 0 0-.508-.941l-3.783-3.94c-.392-.4-.92-.636-1.479-.636H7.655a3.78 3.78 0 0 0-2.93 1.391"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.781 3.066v2.891a2.557 2.557 0 0 0 2.551 2.558h2.737M3.48 3.145 20.52 20.193M16.065 20.998H7.637a3.713 3.713 0 0 1-3.742-3.694V8.098"
    />
  </Svg>
);
export default IconlystDocumentHideLight;

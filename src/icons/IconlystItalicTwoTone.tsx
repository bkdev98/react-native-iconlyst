import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystItalicTwoTone = ({
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
      d="M8.283 3.766h8.435c2.948 0 4.782 2.08 4.782 5.026v7.947c0 2.945-1.834 5.027-4.783 5.027H8.283c-2.948 0-4.783-2.082-4.783-5.027V8.792c0-2.946 1.844-5.026 4.783-5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.335 16.847h1.75m-1.75 0h-1.75m1.75 0 2.332-8.163m0 0h1.748m-1.748 0h-1.75"
    />
  </Svg>
);
export default IconlystItalicTwoTone;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel4Light = ({
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
      d="M15.77 9.763c0 3.611 1.171 6.538 2.615 6.538S21 13.374 21 9.763c0-3.61-1.171-6.538-2.615-6.538s-2.616 2.928-2.616 6.538"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.385 16.3H5.615C4.17 16.3 3 13.375 3 9.764s1.17-6.538 2.614-6.538h12.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.54 8.641a4.2 4.2 0 0 0 0 2.26M21 10.161v10.506c-.704-.223-.948-.726-2.025-.726-1.386 0-1.386.833-2.778.833s-1.393-.833-2.779-.833c-1.392 0-1.392.833-2.785.833-1.386 0-1.386-.833-2.778-.833-1.107 0-1.336.525-2.068.74V16.3"
    />
  </Svg>
);
export default IconlystTowel4Light;

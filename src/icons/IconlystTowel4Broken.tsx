import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel4Broken = ({
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
      d="M15.77 9.763c0 3.61 1.17 6.537 2.615 6.537C19.828 16.3 21 13.374 21 9.763s-1.172-6.538-2.615-6.538-2.616 2.927-2.616 6.538"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.385 16.3H5.615C4.17 16.3 3 13.374 3 9.763s1.17-6.538 2.614-6.538h3.193M12 3.225h6.385M18.54 8.64a4.2 4.2 0 0 0 0 2.26M13.418 19.94c-1.392 0-1.392.833-2.785.833-1.386 0-1.386-.832-2.778-.832-1.107 0-1.336.524-2.068.74V16.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.16v10.506c-.704-.223-.948-.726-2.025-.726-1.385 0-1.385.833-2.778.833"
    />
  </Svg>
);
export default IconlystTowel4Broken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallingBoldsharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m20.628 10.634.083.746 1.491-.168-.084-.745a8.67 8.67 0 0 0-7.702-7.694l-.746-.083-.165 1.491.745.083a7.18 7.18 0 0 1 6.378 6.37"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.097 10.705.144.736 1.472-.287-.143-.735a5.155 5.155 0 0 0-4.093-4.094l-.736-.143-.287 1.472.736.143a3.66 3.66 0 0 1 2.907 2.907M13.852 16.234c-.52-.18-2.015-.784-3.382-2.15a8.2 8.2 0 0 1-1.975-3.195l1.699-2.951-3.698-5.08-.391.23c-1.582.928-2.742 2.088-3.651 3.65l-.06.16c-.513 2.745 1.058 6.789 3.907 10.065 3.09 3.553 7.102 5.555 11.084 5.555q.27 0 .54-.012l.119-.005.103-.06c1.602-.896 2.767-2.06 3.663-3.662l.215-.385-5.228-3.855z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallingBoldsharp;
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftSquareLoadLight = ({
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
      d="m13.402 15.375-3.391-3.377 3.391-3.377M13.982 21h-3.963M3.027 16.915c.312 2.233 1.795 3.802 4.047 4.066M16.893 20.98c2.252-.263 3.724-1.832 4.036-4.065M21 13.98v-3.962M13.982 3H10.02M3 13.98v-3.962M3.027 7.095c.312-2.233 1.795-3.813 4.047-4.076M16.893 3.019c2.252.263 3.724 1.843 4.036 4.076"
    />
  </Svg>
);
export default IconlystLeftSquareLoadLight;

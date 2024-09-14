import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel2Light = ({
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
      d="M15.77 9.81c0 3.611 1.171 6.538 2.615 6.538S21 13.42 21 9.81c0-3.61-1.171-6.538-2.615-6.538S15.769 6.2 15.769 9.81"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.385 16.348H5.615C4.17 16.348 3 13.42 3 9.81 3 6.2 4.17 3.272 5.614 3.272h12.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.54 8.688a4.2 4.2 0 0 0 0 2.26M11.62 11.487h-1.132m5.368 0H14.13m-9.6 0H3.087m4.849 0H6.844M21 10.208v10.506l-15.213.014v-4.382"
    />
  </Svg>
);
export default IconlystTowel2Light;

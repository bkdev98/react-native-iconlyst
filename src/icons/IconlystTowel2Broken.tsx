import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel2Broken = ({
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
      d="M15.77 9.81c0 3.61 1.17 6.537 2.615 6.537 1.443 0 2.615-2.926 2.615-6.537S19.828 3.27 18.385 3.27 15.769 6.2 15.769 9.81"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.385 16.347H5.615C4.17 16.347 3 13.421 3 9.81S4.17 3.27 5.614 3.27h3.193M12 3.271h6.385M18.54 8.688a4.2 4.2 0 0 0 0 2.26M11.62 11.488h-1.132m5.368 0H14.13m-9.6 0H3.087m4.849 0H6.844"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.207v10.506l-7.607.007M5.787 16.348v4.38l3.803-.003"
    />
  </Svg>
);
export default IconlystTowel2Broken;

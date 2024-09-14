import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasEmailBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.474 13.103-5.452 3.49a1.89 1.89 0 0 1-2.043 0l-5.452-3.49"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.541 13.622-.009-7.59a2.37 2.37 0 0 0-2.367-2.358H8.828A2.367 2.367 0 0 0 6.461 6.04v1.895M6.46 13.623v-2.624"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.464 5.828C4.354 6.301 3 8.27 3 10.616v6.048c0 2.706 1.798 4.902 4.477 4.893h1.281M10.826 10.017l-1.174 2.032h4.694l-1.173-2.032h1.173M9.254 10.017l2.745-3.443 1.11 1.336M12.068 12.05v1.827M17.518 5.828C19.638 6.301 21 8.27 21 10.616v6.048c0 2.706-1.807 4.902-4.485 4.893h-4.52"
    />
  </Svg>
);
export default IconlystChristmasEmailBroken;

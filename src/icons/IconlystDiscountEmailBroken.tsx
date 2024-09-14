import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountEmailBroken = ({
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
      d="m18.474 12.322-5.452 3.49a1.89 1.89 0 0 1-2.043 0l-5.452-3.49"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.541 12.63-.009-6.598a2.37 2.37 0 0 0-2.367-2.358H8.828A2.367 2.367 0 0 0 6.461 6.04v1.647M6.46 12.63v-2.516"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.518 5.828C19.638 6.301 21 8.27 21 10.616v6.048c0 2.706-1.807 4.902-4.485 4.893h-4.52M14.04 7.139l-3.923 3.922M14.035 11.047l.007.006M10.111 7.139h.006M6.464 5.828C4.354 6.301 3 8.27 3 10.616v6.048c0 2.706 1.798 4.902 4.477 4.893h1.698"
    />
  </Svg>
);
export default IconlystDiscountEmailBroken;

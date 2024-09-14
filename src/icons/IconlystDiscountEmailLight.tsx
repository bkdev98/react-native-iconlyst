import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountEmailLight = ({
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
      d="M6.46 12.63V6.041a2.367 2.367 0 0 1 2.368-2.367h6.337a2.37 2.37 0 0 1 2.367 2.358l.01 6.598"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.518 5.828C19.638 6.301 21 8.27 21 10.616v6.048c0 2.706-1.807 4.902-4.485 4.893H7.477C4.798 21.566 3 19.37 3 16.664v-6.048C3 8.27 4.353 6.301 6.464 5.828M14.04 7.139l-3.923 3.922M14.035 11.047l.007.006M10.111 7.139h.006"
    />
  </Svg>
);
export default IconlystDiscountEmailLight;

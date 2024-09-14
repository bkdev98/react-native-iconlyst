import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesPlusBroken = ({
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
      d="M6.142 6.356c-2.75 2.76-3.345 6.848-1.804 10.192.129.321.626 1.203.96 1.784.189.33.17.736-.05 1.047s-.497.707-.714 1.033c-.388.583.024 1.363.722 1.362h.542c2.374-.001 5.85-.003 6.678 0a8.97 8.97 0 0 0 6.92-3.219c2.722-3.228 2.807-8.071.194-11.387A8.99 8.99 0 0 0 8.924 4.456M15.075 12.742H9.922m2.577 2.592v-5.18"
    />
  </Svg>
);
export default IconlystMessagesPlusBroken;

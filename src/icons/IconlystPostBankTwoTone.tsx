import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPostBankTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.499 21V10.425a2.3 2.3 0 0 0-.912-1.8l-6.233-4.977a3.01 3.01 0 0 0-3.736 0L4.412 8.63a2.3 2.3 0 0 0-.912 1.806v10.564"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.53 12.598h3.938c1.376 0 2.233.972 2.233 2.347v3.709c0 1.374-.857 2.346-2.233 2.346h-3.937c-1.377 0-2.232-.972-2.232-2.346v-3.71c0-1.374.86-2.346 2.232-2.346M11.342 15.945h2.314"
    />
  </Svg>
);
export default IconlystPostBankTwoTone;

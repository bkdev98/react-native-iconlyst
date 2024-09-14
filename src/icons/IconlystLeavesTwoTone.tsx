import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeavesTwoTone = ({
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
      d="M17.668 17.348c-1.632 1.781-4.537 3.168-8.262 1.018-3.724-2.15-3.975-5.36-3.248-7.664.749-2.37 2.673-4.265 4.836-5.396C14.307 3.574 17.577 3.042 18.278 3c.314.628 1.489 3.726 1.645 7.46.102 2.44-.577 5.054-2.255 6.887"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.575 9.416 7.887 21"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLeavesTwoTone;

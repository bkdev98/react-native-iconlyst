import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockBrokencurved = ({
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
      d="M16.81 9.345v-2.15a4.561 4.561 0 0 0-9.12-.02v2.17M12.25 14.098v2.22"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.843 20.997c2.985-.656 4.067-2.42 4.067-5.96 0-4.703-1.91-6.271-7.66-6.271-5.74 0-7.66 1.568-7.66 6.27 0 4.705 1.92 6.273 7.66 6.273"
    />
  </Svg>
);
export default IconlystLockBrokencurved;

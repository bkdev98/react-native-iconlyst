import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeBoldsharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.5 17.107H13v-4.909h-1.5zm.75-15.101L1.126 11.538l.977 1.139 1.74-1.491v10.808H20.66V11.188l1.737 1.489.977-1.139z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeBoldsharp;

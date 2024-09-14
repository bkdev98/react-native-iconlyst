import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraAiTwoTone = ({
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
      d="M21 12.06v3.697a4.106 4.106 0 0 1-4.106 4.106H7.106A4.106 4.106 0 0 1 3 15.757v-5.643a3.06 3.06 0 0 1 3.062-3.058c.491-.02.955-.229 1.295-.584.182-.202.476-.698.742-1.182a2.23 2.23 0 0 1 1.954-1.153h3.912"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.902 11.278a3.093 3.093 0 1 0 5.497 1.727"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.404 9.336.101-.274a3.76 3.76 0 0 1 2.222-2.225l.273-.1-.273-.102a3.76 3.76 0 0 1-2.222-2.225l-.1-.273-.102.273a3.76 3.76 0 0 1-2.221 2.225l-.273.101.273.101a3.76 3.76 0 0 1 2.221 2.225zM13.094 10.578a1.77 1.77 0 0 1 1.176-1.179 1.77 1.77 0 0 1-1.176-1.178 1.77 1.77 0 0 1-1.177 1.178 1.77 1.77 0 0 1 1.177 1.179"
    />
  </Svg>
);
export default IconlystCameraAiTwoTone;

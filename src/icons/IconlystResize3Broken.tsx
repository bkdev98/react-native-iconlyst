import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize3Broken = ({
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
      d="M8.7 5.29H6.56a1.5 1.5 0 0 0-1.5 1.5v2.139M15.357 19.249h2.14a1.5 1.5 0 0 0 1.5-1.5v-2.14M18.144 9.25h.853M15.003 5.663V8.77a.2.2 0 0 0 .34.142l3.654-3.623M5.914 15.29H5.06M9.055 18.874v-3.107a.2.2 0 0 0-.341-.142L5.06 19.248"
    />
  </Svg>
);
export default IconlystResize3Broken;

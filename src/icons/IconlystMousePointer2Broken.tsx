import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMousePointer2Broken = ({
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
      d="m11.888 7.225-5.45-2.15c-.854-.335-1.7.509-1.362 1.363l4.297 10.899c.352.892 1.617.885 1.958-.011l1.486-3.901c.107-.28.328-.501.608-.607l3.901-1.487c.896-.341.903-1.606.011-1.957l-2.725-1.075M13.118 13.117 19 19"
    />
  </Svg>
);
export default IconlystMousePointer2Broken;

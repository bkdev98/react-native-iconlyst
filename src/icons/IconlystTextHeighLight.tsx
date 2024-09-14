import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextHeighLight = ({
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
      d="M10.04 4.621v13.295m-2.883 0h5.894M19.468 11.766l2.032 2.032m-2.032-2.032-2.032 2.032m2.032-2.032v9.144m0 0-2.032-2.032m2.032 2.032 2.032-2.032M3.5 6.964V4.621h13.21v2.343"
    />
  </Svg>
);
export default IconlystTextHeighLight;

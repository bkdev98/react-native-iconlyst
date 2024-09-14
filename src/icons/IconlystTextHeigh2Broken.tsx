import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextHeigh2Broken = ({
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
      d="M3.25 3.857h6.541m0 0h6.668m-6.668 0v3.324M9.791 10.504v6.647M19.218 10.998l2.032 2.032m-2.032-2.032-2.032 2.032m2.032-2.032v9.145m0 0-2.032-2.032m2.032 2.032 2.032-2.032"
    />
  </Svg>
);
export default IconlystTextHeigh2Broken;

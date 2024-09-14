import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreenSize2Broken = ({
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
      d="M21.084 15.414v2.511A3.075 3.075 0 0 1 18.009 21h-2.51M3.084 15.414v2.511A3.075 3.075 0 0 0 6.16 21h2.51M3.084 8.587V6.076A3.075 3.075 0 0 1 6.16 3h2.51M21.084 8.587V6.076A3.075 3.075 0 0 0 18.008 3h-2.51"
    />
  </Svg>
);
export default IconlystScreenSize2Broken;

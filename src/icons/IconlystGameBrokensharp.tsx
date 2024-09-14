import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameBrokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M8.893 12.767v3.648M10.753 14.59H7.03M15.24 12.878h-.103M17.006 16.36h-.104M7.828 3.535c0 .72.597 1.306 1.333 1.306h1.03c1.134.004 2.054.905 2.06 2.018v.707M20.174 20.144a6.917 6.917 0 0 0-4.161-12.441H8.487a6.917 6.917 0 0 0 0 13.832h7.525"
    />
  </Svg>
);
export default IconlystGameBrokensharp;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareBrokensharp = ({
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
      d="m8.187 12.886 4.996-4.996 3.8 3.801L6.82 21.854l-3.797-.003-.003-3.798 2.778-2.778M12.264 12.617l-1.746-1.746M21.48 7.76v14.094h-8.536M3.02 12.05V3.355h18.46"
    />
  </Svg>
);
export default IconlystEditSquareBrokensharp;

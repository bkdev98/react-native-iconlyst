import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleSlidesLight = ({
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
      d="M14.238 3.094v3.462a1.5 1.5 0 0 0 1.5 1.5H19.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.8 21a2 2 0 0 1-2-2V5a2 2 0 0 1 1.999-2h7.047c.53 0 1.036.21 1.411.586l3.357 3.357c.375.375.586.879.586 1.409v10.65a2 2 0 0 1-2 1.998z"
    />
    <Rect
      width={8.054}
      height={6.634}
      x={7.973}
      y={11.031}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={1}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.973 15.336h8.054"
    />
  </Svg>
);
export default IconlystGoogleSlidesLight;

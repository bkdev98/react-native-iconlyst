import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFrameLight = ({
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
      d="M10.5 3h-6A1.5 1.5 0 0 0 3 4.5v6l.75 1.5v6.75a1.5 1.5 0 0 0 1.5 1.5H12l1.5.75h6a1.5 1.5 0 0 0 1.5-1.5v-6l-.75-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H12z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.438 8.438h7.124v7.124H8.439z"
    />
  </Svg>
);
export default IconlystFrameLight;

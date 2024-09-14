import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTorusLight = ({
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
      d="M11.501 3a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5H9.165a1.5 1.5 0 0 1-1.5-1.5V8.333H4.5a1.5 1.5 0 0 1-1.5-1.5V4.5A1.5 1.5 0 0 1 4.5 3zM20.972 5.681a2.652 2.652 0 1 1-5.304 0 2.652 2.652 0 0 1 5.304 0"
    />
  </Svg>
);
export default IconlystTorusLight;

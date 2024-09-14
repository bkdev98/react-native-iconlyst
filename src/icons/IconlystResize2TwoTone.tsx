import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize2TwoTone = ({
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
      d="m9.177 19.243-2.673.006a1 1 0 0 1-1.002-1.003l.006-2.672M5.998 18.75l3.504-3.504"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.51 8.929-.006-2.673a1 1 0 0 1 1.002-1.002l2.673.006M19.491 15.574l.006 2.673a1 1 0 0 1-1.002 1.002l-2.673-.006"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.821 5.26 2.674-.006a1 1 0 0 1 1.002 1.002l-.007 2.672M19 5.75l-3.504 3.504"
    />
  </Svg>
);
export default IconlystResize2TwoTone;

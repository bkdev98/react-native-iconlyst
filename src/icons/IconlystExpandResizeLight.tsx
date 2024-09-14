import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExpandResizeLight = ({
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
      d="m8.677 18.992-2.673.005a1 1 0 0 1-1.002-1.002l.006-2.672M5.498 18.5l3.504-3.504M6.01 9.679l-.006-2.673a1 1 0 0 1 1.002-1.002l2.673.006M17.991 14.324l.006 2.673a1 1 0 0 1-1.002 1.002l-2.673-.006M15.32 5.01l2.674-.006a1 1 0 0 1 1.002 1.002l-.007 2.672M18.5 5.5l-3.504 3.504"
    />
  </Svg>
);
export default IconlystExpandResizeLight;

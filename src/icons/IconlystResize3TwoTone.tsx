import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize3TwoTone = ({
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
      d="m5.825 15.252 2.673-.006a1 1 0 0 1 1.003 1.002l-.007 2.673M19.173 9.243 16.5 9.25a1 1 0 0 1-1.002-1.002l.006-2.673"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.51 8.925-.006-2.673A1 1 0 0 1 6.506 5.25l2.673.006M19.491 15.57l.006 2.673a1 1 0 0 1-1.002 1.002l-2.673-.006"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.94 8.81 3.56-3.56M8.999 15.749 5.5 19.247"
    />
  </Svg>
);
export default IconlystResize3TwoTone;

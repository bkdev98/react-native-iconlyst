import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPagekitTwoTone = ({
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
      d="M20.5 14.722a2 2 0 0 1-2 2H8.278a1 1 0 0 1-1-1V9.278a2 2 0 0 1 2-2h5.444a2 2 0 0 1 2 2v1.666a2 2 0 0 1-2 2h-2.666a1 1 0 0 0-1 1v2.778"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.5 14.722V5.5a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h3.556a2 2 0 0 0 2-2v-1.778"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPagekitTwoTone;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeat1TwoTone = ({
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
      d="M10.769 6.637h5.119c1.542 0 2.947.629 3.965 1.647a5.57 5.57 0 0 1 1.647 3.965 5.57 5.57 0 0 1-1.311 3.598"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.268 15.238 2.622 2.622-2.622 2.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.889 17.863H9.11a5.6 5.6 0 0 1-3.965-1.647A5.58 5.58 0 0 1 3.5 12.25M6.516 9.26V4.017L4.418 5.065"
    />
  </Svg>
);
export default IconlystRepeat1TwoTone;

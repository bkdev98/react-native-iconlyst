import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallFootball2Light = ({
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
      d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.723 6.72 1.378 3.333-3.058 2.765M9 3.5l3 2 3-2M9.727 20.663l-1.015-3.46-4.116-.237M14.387 20.663l1.015-3.46 4.116-.237M19.3 6.72l-1.378 3.333 3.058 2.765M12 9l-3 2 1 4h4l1-4z"
    />
  </Svg>
);
export default IconlystBallFootball2Light;

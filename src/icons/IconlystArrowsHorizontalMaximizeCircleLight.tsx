import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsHorizontalMaximizeCircleLight = ({
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
      d="M14.778 9.778 17 12m0 0-2.222 2.222M17 12h-3.889M9.222 9.778 7 12m0 0 2.222 2.222M7 12h3.889M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
  </Svg>
);
export default IconlystArrowsHorizontalMaximizeCircleLight;

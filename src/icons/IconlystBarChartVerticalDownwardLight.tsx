import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartVerticalDownwardLight = ({
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
      d="M19.643 20.406c1.025 0 1.857-.831 1.857-1.857v-3.56a1.857 1.857 0 1 0-3.715 0v3.56c0 1.026.832 1.857 1.858 1.857M5.357 20.406c1.026 0 1.857-.83 1.857-1.857V5.689a1.858 1.858 0 1 0-3.714 0v12.86c0 1.026.832 1.857 1.857 1.857M12.5 20.404c1.025 0 1.857-.831 1.857-1.857V11.26a1.858 1.858 0 1 0-3.714 0v7.286c0 1.026.831 1.857 1.857 1.857"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartVerticalDownwardLight;

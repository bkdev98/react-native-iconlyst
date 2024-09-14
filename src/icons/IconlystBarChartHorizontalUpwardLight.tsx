import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartHorizontalUpwardLight = ({
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
      d="M4.212 19.26c0 1.026.831 1.858 1.858 1.858h3.558a1.857 1.857 0 1 0 0-3.714H6.07a1.857 1.857 0 0 0-1.858 1.857M4.212 4.975c0 1.026.83 1.858 1.857 1.858h12.86a1.858 1.858 0 1 0 0-3.715H6.07a1.857 1.857 0 0 0-1.857 1.857M4.214 12.118c0 1.025.831 1.857 1.858 1.857h7.285a1.858 1.858 0 1 0 0-3.714H6.072a1.857 1.857 0 0 0-1.858 1.857"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartHorizontalUpwardLight;

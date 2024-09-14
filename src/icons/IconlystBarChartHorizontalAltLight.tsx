import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartHorizontalAltLight = ({
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
      d="M4.213 4.976c0 1.025.83 1.857 1.857 1.857h8.335a1.858 1.858 0 0 0 0-3.714H6.07a1.857 1.857 0 0 0-1.857 1.857M4.212 19.261c0-1.025.83-1.857 1.857-1.857h12.862a1.858 1.858 0 1 1 0 3.715H6.069a1.857 1.857 0 0 1-1.857-1.858M4.21 12.119c0 1.025.832 1.857 1.858 1.857h3.56a1.857 1.857 0 1 0 0-3.715h-3.56a1.857 1.857 0 0 0-1.857 1.858"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartHorizontalAltLight;

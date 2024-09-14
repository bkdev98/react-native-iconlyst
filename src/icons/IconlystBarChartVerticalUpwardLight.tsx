import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartVerticalUpwardLight = ({
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
      d="M5.357 20.406A1.857 1.857 0 0 1 3.5 18.55v-3.56a1.857 1.857 0 1 1 3.715 0v3.56a1.857 1.857 0 0 1-1.858 1.857M19.643 20.407a1.857 1.857 0 0 1-1.858-1.858V5.688a1.858 1.858 0 1 1 3.715 0v12.861a1.857 1.857 0 0 1-1.857 1.858M12.5 20.404a1.857 1.857 0 0 1-1.857-1.857v-7.285a1.858 1.858 0 1 1 3.714 0v7.285a1.857 1.857 0 0 1-1.857 1.857"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartVerticalUpwardLight;

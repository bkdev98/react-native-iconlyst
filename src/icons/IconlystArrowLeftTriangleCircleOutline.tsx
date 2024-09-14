import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftTriangleCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.06 8.343a.75.75 0 0 1 .387.657v2.25h4.619a.75.75 0 0 1 0 1.5h-4.62V15a.75.75 0 0 1-1.149.634l-4.762-3a.75.75 0 0 1 0-1.27l4.762-3a.75.75 0 0 1 .762-.021m-1.113 3.622v1.676l-2.605-1.642 2.605-1.64z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowLeftTriangleCircleOutline;

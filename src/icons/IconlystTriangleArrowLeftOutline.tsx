import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangleArrowLeftOutline = ({
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
      d="M5.25 12a.75.75 0 0 0 .372.648l12 7A.75.75 0 0 0 18.75 19V5a.75.75 0 0 0-1.128-.648l-12 7A.75.75 0 0 0 5.25 12m12-5.694v11.388L7.488 12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangleArrowLeftOutline;

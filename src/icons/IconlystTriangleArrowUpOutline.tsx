import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangleArrowUpOutline = ({
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
      d="M12 5.25a.75.75 0 0 1 .648.372l7 12A.75.75 0 0 1 19 18.75H5a.75.75 0 0 1-.648-1.128l7-12A.75.75 0 0 1 12 5.25m-5.694 12h11.388L12 7.488z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangleArrowUpOutline;

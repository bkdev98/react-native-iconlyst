import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWiseOutline = ({
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
      d="M7.03 3.25h11.618a.75.75 0 0 1 .69 1.042l-6.757 16a.75.75 0 1 1-1.381-.584L17.517 4.75H8.5l1.889 2.606a.75.75 0 0 1-.12 1.01L7.38 10.842h3.945a.75.75 0 0 1 0 1.5H5.353a.75.75 0 0 1-.488-1.32l3.904-3.345L6.423 4.44a.75.75 0 0 1 .607-1.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWiseOutline;

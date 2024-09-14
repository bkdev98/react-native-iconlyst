import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCornerRightDownOutline = ({
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
      d="M10.608 15.026a.75.75 0 0 1 1.061 0l2.913 2.913 2.912-2.913a.75.75 0 1 1 1.061 1.061l-3.443 3.443a.75.75 0 0 1-1.06 0l-3.444-3.443a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.225 5a.75.75 0 0 1 .75-.75h2.98a6.376 6.376 0 0 1 6.377 6.376v8.176a.75.75 0 0 1-1.5 0v-8.176A4.876 4.876 0 0 0 8.956 5.75H5.975a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCornerRightDownOutline;

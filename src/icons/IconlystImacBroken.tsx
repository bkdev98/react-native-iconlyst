import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImacBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 3.22h5.994A3.007 3.007 0 0 1 21.5 6.228v7.5a3.007 3.007 0 0 1-3.006 3.008H6.507A3.01 3.01 0 0 1 3.5 13.728v-7.5A3.007 3.007 0 0 1 6.507 3.22h2.021"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.597 16.734 1.606 2.818a.845.845 0 0 1-.735 1.257H9.536a.844.844 0 0 1-.737-1.266l1.625-2.809M3.5 12.676h14.676"
    />
  </Svg>
);
export default IconlystImacBroken;
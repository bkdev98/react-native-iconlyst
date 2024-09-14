import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExpandLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.619 4.62c.972 0 1.76.789 1.76 1.761v4.98a1.76 1.76 0 0 1-3.521 0V8.143h-3.22a1.76 1.76 0 1 1 0-3.522zM6.381 10.877c.973 0 1.76.789 1.76 1.761v3.22h3.22a1.76 1.76 0 0 1 0 3.522h-4.98a1.76 1.76 0 0 1-1.76-1.761v-4.98c0-.973.787-1.762 1.76-1.762"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExpandLight;

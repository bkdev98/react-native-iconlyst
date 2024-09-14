import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLightcurved = ({
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
      d="M11.275 2.714a8.561 8.561 0 1 1 0 17.122 8.561 8.561 0 0 1 0-17.122M19.899 18.488a1.411 1.411 0 1 1-.001 2.822 1.411 1.411 0 0 1 .001-2.822"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLightcurved;

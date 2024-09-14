import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsetLight = ({
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
      d="M20.392 16.583H3.838M16.604 20.522H7.625M17.617 3a3.76 3.76 0 0 0 2.5 2.5 3.76 3.76 0 0 0-2.5 2.5 3.76 3.76 0 0 0-2.5-2.5 3.76 3.76 0 0 0 2.5-2.5M20.117 12.793v.006M5.354 3.41a2.25 2.25 0 0 0 1.5 1.5 2.25 2.25 0 0 0-1.5 1.5 2.25 2.25 0 0 0-1.5-1.5 2.25 2.25 0 0 0 1.5-1.5M11.248 16.56c.822-2.597 2.256-3.87 4.882-4.602-2.867-.8-4.23-2.244-5-5-.8 2.866-2.244 4.23-5 5 2.725.76 4.093 2.103 4.882 4.602"
    />
  </Svg>
);
export default IconlystStarsetLight;

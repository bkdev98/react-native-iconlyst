import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSparklingLight = ({
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
      d="M21.114 12.072a8.98 8.98 0 0 0-5.776 5.777 8.98 8.98 0 0 0-5.775-5.777 8.99 8.99 0 0 0 5.775-5.776 8.99 8.99 0 0 0 5.776 5.776M8.983 5.569a3.13 3.13 0 0 0-2.015 2.015A3.13 3.13 0 0 0 4.953 5.57a3.13 3.13 0 0 0 2.015-2.015 3.13 3.13 0 0 0 2.015 2.015M9.093 17.456a4.65 4.65 0 0 0-2.99 2.99 4.65 4.65 0 0 0-2.989-2.99 4.65 4.65 0 0 0 2.99-2.989 4.65 4.65 0 0 0 2.989 2.99"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSparklingLight;

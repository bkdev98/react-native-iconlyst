import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscoveryOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.36 2c5.714 0 10.362 4.648 10.362 10.361S18.074 22.722 12.36 22.722 2 18.074 2 12.361 6.648 2 12.36 2m0 1.5c-4.885 0-8.86 3.976-8.86 8.861s3.975 8.861 8.86 8.861c4.887 0 8.862-3.975 8.862-8.861 0-4.885-3.975-8.861-8.861-8.861m3.872 4.99a.75.75 0 0 1 .185.754l-1.592 5.089a.75.75 0 0 1-.492.492l-5.089 1.593a.76.76 0 0 1-.755-.185.75.75 0 0 1-.185-.754l1.593-5.09a.75.75 0 0 1 .491-.491l5.09-1.593a.75.75 0 0 1 .754.185m-1.674 1.674-3.347 1.048-1.047 3.347 3.346-1.048z"
    />
  </Svg>
);
export default IconlystDiscoveryOutline;

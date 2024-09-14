import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInternetServerBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12 4.046c-.398 0-1.317 1.569-1.453 4.462h2.906C13.317 5.615 12.398 4.046 12 4.046M13.453 9.922h-2.906c.135 2.892 1.054 4.46 1.452 4.46.399 0 1.317-1.568 1.454-4.46" />
      <Path d="M12.839 16.775c3.803-.42 6.77-3.648 6.77-7.56 0-4.197-3.414-7.61-7.61-7.61s-7.608 3.413-7.608 7.61c0 3.973 3.06 7.238 6.948 7.576zM6.124 9.92h2.998c.133 3.024 1.114 5.876 2.877 5.876s2.745-2.852 2.877-5.876h2.998a.706.706 0 1 0 0-1.414h-2.998c-.133-3.024-1.115-5.875-2.878-5.875S9.256 5.483 9.124 8.507H6.125a.708.708 0 0 0 0 1.414" />
      <Path d="M12 4.046c-.398 0-1.317 1.569-1.453 4.462h2.906C13.317 5.615 12.398 4.046 12 4.046m0 10.337c.398 0 1.316-1.57 1.453-4.461h-2.906c.135 2.892 1.054 4.46 1.452 4.46" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.288 19.293h-3.98a2.29 2.29 0 0 0-1.47-1.47v-1.049l-1.5.016v1.032c-.7.23-1.24.77-1.47 1.471h-3.98a.75.75 0 0 0 0 1.5h3.98a2.31 2.31 0 0 0 2.22 1.6 2.31 2.31 0 0 0 2.22-1.6h3.98a.75.75 0 0 0 0-1.5m-7.05.75c0 .485.366.85.85.85s.85-.365.85-.85a.83.83 0 0 0-.85-.85.83.83 0 0 0-.85.85"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInternetServerBulk;

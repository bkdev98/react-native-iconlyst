import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystW3Outline = ({
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
      d="M2.794 5.185a.75.75 0 0 1 .927.515l3.483 12.188a.75.75 0 1 1-1.443.412L2.28 6.112a.75.75 0 0 1 .515-.927M8.018 5.185a.75.75 0 0 1 .927.515l2.744 9.605 2.618-9.596a.75.75 0 1 1 1.447.395L12.43 18.292a.75.75 0 0 1-1.445.008L7.503 6.112a.75.75 0 0 1 .515-.927"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.794 5.185a.75.75 0 0 1 .927.515l2.745 9.605L8.31 8.543a.75.75 0 0 1 1.447.395l-2.55 9.354a.75.75 0 0 1-1.446.008L2.28 6.112a.75.75 0 0 1 .515-.927M14.28 5.906a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 .654 1.116l-2.475 4.433c1.537.557 2.57 2.185 2.57 3.968 0 2.205-1.579 4.171-3.734 4.171s-3.736-1.966-3.736-4.17a.75.75 0 0 1 1.5 0c0 1.574 1.094 2.67 2.236 2.67 1.141 0 2.235-1.096 2.235-2.67 0-1.575-1.094-2.672-2.235-2.672a.75.75 0 0 1-.655-1.116l2.362-4.23h-4.693a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystW3Outline;

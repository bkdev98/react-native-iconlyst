import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarRefreshBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.242 15.622v.42a.75.75 0 0 0 1.5 0v-.42h.053a2.156 2.156 0 0 0 0-4.311H11.19a.657.657 0 0 1-.654-.66c0-.358.293-.649.654-.649h2.61a.75.75 0 0 0 0-1.5h-1.057v-.441a.75.75 0 0 0-1.5 0v.441h-.053a2.154 2.154 0 1 0 0 4.309h1.606c.361 0 .655.292.655.651 0 .364-.294.66-.655.66h-2.609a.75.75 0 0 0 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.75 6.743a.75.75 0 0 0-.457-.62L18.588 4.99a.748.748 0 0 0-1.04.674l-.069 2.98a.751.751 0 0 0 1.166.642l.683-.455c1.294 2.936.757 6.511-1.616 8.902a8.04 8.04 0 0 1-7.106 2.24.75.75 0 0 0-.264 1.477 9.521 9.521 0 0 0 8.434-2.66c2.88-2.9 3.485-7.273 1.816-10.8l.827-.552a.75.75 0 0 0 .331-.695M6.132 14.805a.75.75 0 0 0-.778.033l-.682.455C3.38 12.357 3.915 8.78 6.287 6.39a8.04 8.04 0 0 1 7.106-2.24.747.747 0 0 0 .87-.607.75.75 0 0 0-.606-.87 9.53 9.53 0 0 0-8.434 2.66C2.344 8.235 1.74 12.608 3.408 16.134l-.828.552a.75.75 0 0 0 .126 1.316l2.705 1.132a.748.748 0 0 0 1.04-.674l.07-2.98a.75.75 0 0 0-.389-.675"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarRefreshBold;

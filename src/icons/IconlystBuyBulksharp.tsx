import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyBulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m6.395 6.302-.3-3.06h-3.9v1.5h2.54l1.28 12.7h14.82l1.47-11.14z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.825 11.712h4.17v-1.5h-4.17zM6.58 20.553a1.275 1.275 0 1 1 2.545.001 1.275 1.275 0 0 1-2.545-.001M17.447 20.553a1.275 1.275 0 1 1 2.55.001 1.275 1.275 0 0 1-2.55-.001"
    />
  </Svg>
);
export default IconlystBuyBulksharp;

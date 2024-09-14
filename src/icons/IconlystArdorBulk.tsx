import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArdorBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m12.31 4.344-9.167 15.66a.47.47 0 0 0 .405.706h4.417a.47.47 0 0 0 .406-.233l6.983-12a.47.47 0 0 0-.005-.48l-2.234-3.66a.47.47 0 0 0-.805.007"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.054 11.244-2.847 2.074a.47.47 0 0 0-.101.656l4.845 6.593a.47.47 0 0 0 .378.192h3.545c.37 0 .595-.41.395-.722l-5.544-8.667a.47.47 0 0 0-.671-.126M11.14 19.594l2.815-1.9a.47.47 0 0 0 .112-.671l-1.041-1.38a.47.47 0 0 0-.787.06l-1.773 3.279c-.233.431.269.886.675.611"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArdorBulk;

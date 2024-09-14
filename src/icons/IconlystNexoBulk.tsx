import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNexoBulk = ({
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
      d="M21.713 5.738 17.859 3.3a.62.62 0 0 0-.66 0l-2.828 1.796a.617.617 0 0 0 0 1.042l3.172 2.012c.34.216.546.589.546.992v6.053a.56.56 0 0 1-.291.492.58.58 0 0 1-.57-.011l-8.25-5.253a.618.618 0 0 0-.948.52v3.614c0 .21.106.405.283.519l4.186 2.7 4.702 2.936a.62.62 0 0 0 .657-.002l3.854-2.438A.62.62 0 0 0 22 17.75V6.259a.62.62 0 0 0-.288-.521"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.449 15.846a1.17 1.17 0 0 1-.537-.987V8.803c0-.202.111-.392.29-.48a.57.57 0 0 1 .57.011l8.25 5.242a.617.617 0 0 0 .948-.52v-3.6a.62.62 0 0 0-.286-.522L7.8 3.301a.62.62 0 0 0-.66 0L3.287 5.737A.61.61 0 0 0 3 6.26V17.75c0 .212.108.41.287.522l3.824 2.415a.62.62 0 0 0 .685-.017l2.659-1.874a.617.617 0 0 0-.021-1.023z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNexoBulk;

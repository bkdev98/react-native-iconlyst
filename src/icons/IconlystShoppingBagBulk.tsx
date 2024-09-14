import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagBulk = ({
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
      d="M7.39 6.995c-2.56 0-4.64 2.08-4.64 4.63v5.37c0 2.55 2.08 4.63 4.64 4.63h9.22c1.28 0 2.44-.52 3.28-1.36s1.36-2 1.36-3.27v-5.37c0-2.55-2.08-4.63-4.64-4.63z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.923 13.256H8.077a.75.75 0 0 1 0-1.5h7.846a.75.75 0 0 1 0 1.5M9.075 6.795c0-1.61 1.31-2.92 2.92-2.92h.01c.78 0 1.51.31 2.06.86.56.56.86 1.29.86 2.07v.19h1.5v-.18c0-1.19-.46-2.3-1.29-3.14-.84-.83-1.95-1.3-3.13-1.3h-.01c-2.43 0-4.42 1.98-4.42 4.42v.2h1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagBulk;

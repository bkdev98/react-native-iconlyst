import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletconnectBulk = ({
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
      d="M16.717 2.505H8.282C5.122 2.505 3 4.727 3 8.035v7.939c0 3.308 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m15.28 15.535 2.25-2.25a.75.75 0 1 0-1.06-1.061l-1.72 1.72-1.72-1.72a.75.75 0 0 0-1.06 0l-1.72 1.72-1.72-1.72a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l1.72-1.72 1.72 1.72a.75.75 0 0 0 1.06 0M12.504 8.244a5.3 5.3 0 0 0-3.72 1.55.75.75 0 0 0 1.063 1.059 3.78 3.78 0 0 1 2.657-1.11c.985 0 1.953.405 2.655 1.11a.75.75 0 0 0 1.063-1.058 5.28 5.28 0 0 0-3.718-1.551"
    />
  </Svg>
);
export default IconlystWalletconnectBulk;

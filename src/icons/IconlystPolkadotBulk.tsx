import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolkadotBulk = ({
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
      d="M16.717 2.5H8.282C5.123 2.5 3 4.723 3 8.03v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.492 15c1.098-.016 2.145-.42 2.946-1.212a4.17 4.17 0 0 0 1.254-2.979 4.2 4.2 0 0 0-4.192-4.2 4.2 4.2 0 0 0-4.193 4.2c0 .407.056.795.173 1.184a.75.75 0 0 0 1.437-.428A2.7 2.7 0 0 1 12.5 8.11a2.7 2.7 0 0 1 2.692 2.7c0 .717-.287 1.396-.809 1.913a2.76 2.76 0 0 1-1.874.777 3.6 3.6 0 0 0-.798.098l.588-2.687a.749.749 0 1 0-1.465-.32l-1.29 5.888a.75.75 0 0 0 1.465.322l.232-1.058c.006-.019.02-.034.024-.053.03-.116.23-.69 1.197-.69zM13.031 17.39h.01a.746.746 0 0 0 .745-.75.755.755 0 0 0-.755-.75.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystPolkadotBulk;

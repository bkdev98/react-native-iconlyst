import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForefingerBulk = ({
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
      d="M18.573 19.669c1.761-1.761 2.75-5.351 1.745-8.063-.87-2.35-3.699-2.554-6.046-2.724q-.52-.036-.998-.08l-.07-4.565a1.765 1.765 0 0 0-3.528.028v10.431a.677.677 0 0 1-1.014.56l-1.294-.748a2.058 2.058 0 0 0-3.04 1.336c-.166.75.098 1.53.71 1.997 1.068.815 2.856 2.091 4.562 2.905v.001c2.67 1.276 6.955.94 8.973-1.078"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystForefingerBulk;

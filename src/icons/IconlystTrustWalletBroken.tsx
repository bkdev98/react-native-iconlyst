import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrustWalletBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.682 8.323c-.554 0-2.49.087-4.177-1.323-1.692 1.41-3.628 1.323-4.167 1.323.114 8.019 1.042 6.43 4.167 8.677 3.125-2.248 4.054-.658 4.177-8.677"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.499 21H8.282C5.334 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.343 3 8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-.375"
    />
  </Svg>
);
export default IconlystTrustWalletBroken;

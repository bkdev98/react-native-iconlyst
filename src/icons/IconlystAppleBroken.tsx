import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleBroken = ({
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
      d="M6 13.41a5.3 5.3 0 0 1 .83-3.222 3.83 3.83 0 0 1 5.06-1.42 2.16 2.16 0 0 0 1.937.03 6 6 0 0 1 1.496-.465 3.82 3.82 0 0 1 3.607 1.314c.188.209.142.325-.075.492a3.62 3.62 0 0 0-1.44 3.762 3.55 3.55 0 0 0 1.79 2.446c.36.215.358.21.22.606a9.7 9.7 0 0 1-1.835 3.074 2.233 2.233 0 0 1-3.015.624 3.53 3.53 0 0 0-3.125.058 2.034 2.034 0 0 1-2.664-.507 10.1 10.1 0 0 1-2.154-3.499"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.772 6.98c-.25-2.098 1.194-3.852 3.278-3.98.413 2.172-1.06 3.946-3.268 3.98z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAppleBroken;

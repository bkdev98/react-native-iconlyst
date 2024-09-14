import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationForwardBroken = ({
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
      d="M6.218 17.951c-1.325 1.178-.25 3.352 1.49 3.013l4.21-.818h.664l4.21.818c1.74.339 2.815-1.835 1.49-3.013l-4.44-3.946a2.397 2.397 0 0 0-3.185 0l-2.22 1.973M9.57 5.053 12.248 3l2.678 2.053M12.248 9.592V3"
    />
  </Svg>
);
export default IconlystNavigationForwardBroken;

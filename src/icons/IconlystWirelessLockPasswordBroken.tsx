import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessLockPasswordBroken = ({
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
      d="M12.038 19.96 3.386 9.675a1.45 1.45 0 0 1 .096-1.965c2.708-2.68 6.096-3.892 9.42-3.638M19.765 10.883l.97-1.214a1.453 1.453 0 0 0-.119-1.936 13 13 0 0 0-3.88-2.686M16.036 19.959h2.56c.702 0 1.27-.57 1.27-1.27V17.25c0-.701-.568-1.27-1.27-1.27h-2.56c-.701 0-1.27.569-1.27 1.27v1.437c0 .702.569 1.27 1.27 1.27"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.845 16.006v-.946a1.529 1.529 0 0 0-3.056-.007v.953"
    />
  </Svg>
);
export default IconlystWirelessLockPasswordBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRackBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20.913h6.56c1.43 0 2.44-.894 2.44-2.32v-2.18c0-1.432-1.01-2.321-2.44-2.321H5.44c-1.43 0-2.44.89-2.44 2.32v2.18c0 1.431 1.01 2.321 2.44 2.321h3.28M16.285 20.906v-4.263M6.588 17.504h.974M12 3.086H5.44C4.01 3.086 3 3.98 3 5.406v2.18c0 1.431 1.01 2.321 2.44 2.321h13.12c1.43 0 2.44-.89 2.44-2.32v-2.18c0-1.43-1.01-2.321-2.44-2.321h-3.28M16.285 9.907V6.002M6.588 6.496h.974"
    />
  </Svg>
);
export default IconlystServerRackBroken;

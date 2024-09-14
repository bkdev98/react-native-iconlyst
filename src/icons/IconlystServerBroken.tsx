import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerBroken = ({
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
      d="M12 20.888h6.56c1.43 0 2.44-.89 2.44-2.32v-2.181c0-1.43-1.01-2.32-2.44-2.32H5.44c-1.43 0-2.44.894-2.44 2.32v2.18c0 1.43 1.01 2.32 2.44 2.32h3.28M12 3.111H5.44c-1.43 0-2.44.89-2.44 2.32v2.181c0 1.43 1.01 2.32 2.44 2.32h13.12c1.43 0 2.44-.89 2.44-2.32v-2.18c0-1.427-1.01-2.32-2.44-2.32h-3.28M11.247 6.523H6.69M6.691 17.477h4.556"
    />
  </Svg>
);
export default IconlystServerBroken;

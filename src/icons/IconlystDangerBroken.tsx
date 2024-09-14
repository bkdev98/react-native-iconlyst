import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerBroken = ({
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
      d="M12.006 20.437h7.191c1.582 0 2.575-1.71 1.79-3.084L13.8 4.788c-.79-1.383-2.785-1.384-3.577-.001L3.025 17.352c-.786 1.374.206 3.085 1.79 3.085H7.5M12.002 13.415v-3.1M11.995 16.5h.01"
    />
  </Svg>
);
export default IconlystDangerBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystModemBulk = ({
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
      d="M18.543 11.885H5.553c-1.66 0-3.01 1.35-3.01 3.01v1.61c0 1.66 1.35 3 3.01 3h12.99c1.65 0 3-1.34 3-3v-1.61a3.01 3.01 0 0 0-3-3.01"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.483 5.244v6.64h-1.5v-6.64a.749.749 0 1 1 1.5 0M12.793 9.144v2.74h-1.5v-2.74a.749.749 0 1 1 1.5 0M8.113 5.244v6.64h-1.5v-6.64a.749.749 0 1 1 1.5 0M9.353 16.443h.51a.749.749 0 1 0 0-1.5h-.51c-.42 0-.75.34-.75.75 0 .42.33.75.75.75M6.293 16.443h.51a.749.749 0 1 0 0-1.5h-.51a.749.749 0 1 0 0 1.5"
    />
  </Svg>
);
export default IconlystModemBulk;

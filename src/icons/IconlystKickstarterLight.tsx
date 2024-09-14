import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKickstarterLight = ({
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
      d="M5.333 6.4v11.2c0 1.325 1.12 2.4 2.5 2.4s2.5-1.075 2.5-2.4v-3.812l3.785 5.188c.792 1.086 2.351 1.35 3.482.59s1.406-2.257.614-3.343L15.134 12l3.08-4.223c.792-1.086.517-2.582-.614-3.343-1.131-.76-2.69-.496-3.482.59l-3.784 5.188V6.4c0-1.325-1.12-2.4-2.5-2.4-1.382 0-2.501 1.075-2.501 2.4"
    />
  </Svg>
);
export default IconlystKickstarterLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftHandBroken = ({
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
      d="M14.813 20.388a6.779 6.779 0 0 0 3.962-6.099v-3.563a1.23 1.23 0 0 0-1.228-1.23 2.15 2.15 0 0 0-2.152 2.151v.074M5.225 14.29A6.77 6.77 0 0 0 12 21M8.615 7.324A1.72 1.72 0 0 0 6.92 5.629c-.922 0-1.695.782-1.696 1.694v3.34"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.39 14.109.004-7.91a1.7 1.7 0 0 0-1.695-1.695 1.694 1.694 0 0 0-1.695 1.694M12.001 7.903V4.695a1.695 1.695 0 0 0-3.39-.001l.001 7.151M12.002 11.845v-1.462"
    />
  </Svg>
);
export default IconlystLeftHandBroken;

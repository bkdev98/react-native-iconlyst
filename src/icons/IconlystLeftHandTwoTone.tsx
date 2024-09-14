import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftHandTwoTone = ({
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
      d="M9.114 7.324c0-.921-.782-1.695-1.694-1.695-.922 0-1.695.782-1.696 1.694v6.965M19.275 14.29l.002-3.564c0-.68-.55-1.23-1.23-1.23a2.15 2.15 0 0 0-2.152 2.152v.074"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.724 14.29a6.776 6.776 0 0 0 13.55 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.891 14.109.003-7.91a1.695 1.695 0 0 0-3.39 0M12.502 11.846v-7.15a1.695 1.695 0 1 0-3.39-.002v7.151"
    />
  </Svg>
);
export default IconlystLeftHandTwoTone;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftHandLight = ({
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
      d="M8.614 7.324c0-.921-.782-1.695-1.694-1.695-.922 0-1.695.782-1.696 1.694v6.965a6.776 6.776 0 0 0 13.55 0l.002-3.563c0-.68-.55-1.23-1.229-1.23a2.15 2.15 0 0 0-2.152 2.151v.074"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.391 14.109.003-7.91a1.695 1.695 0 0 0-3.39 0M12.002 11.846v-7.15a1.695 1.695 0 1 0-3.39-.002v7.151"
    />
  </Svg>
);
export default IconlystLeftHandLight;

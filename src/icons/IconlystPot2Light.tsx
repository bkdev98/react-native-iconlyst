import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot2Light = ({
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
      d="M8.63 20.2c-2.361 0-3.83-1.666-3.83-4.024v-3.743c0-3.977 3.224-7.064 7.2-7.064s7.2 3.087 7.2 7.064l.012 3.743c0 2.358-1.47 4.024-3.83 4.024zM12.094 3.8V5.37M3 11.339h18"
    />
  </Svg>
);
export default IconlystPot2Light;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSecurityTwoTone = ({
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
      d="M3.5 8.47V6.891A3.89 3.89 0 0 1 7.393 3h1.29M3.5 15.531v1.577A3.89 3.89 0 0 0 7.393 21H8.65M21.5 15.531v1.577A3.89 3.89 0 0 1 17.608 21h-1.29M21.5 8.47V6.891A3.89 3.89 0 0 0 17.607 3H16.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.794 10.684v-1.08a2.294 2.294 0 0 0-4.588-.011v1.09M11.11 16.642h2.78c.823 0 1.234 0 1.552-.153.317-.152.572-.408.724-.724.153-.318.153-.73.153-1.552v-1.099c0-.822 0-1.234-.152-1.55a1.55 1.55 0 0 0-.725-.726c-.318-.152-.729-.152-1.552-.152h-2.78c-.822 0-1.234 0-1.551.152a1.55 1.55 0 0 0-.725.725c-.152.317-.152.729-.152 1.551v1.1c0 .822 0 1.233.152 1.55s.408.573.725.725.729.153 1.551.153"
    />
  </Svg>
);
export default IconlystScanSecurityTwoTone;

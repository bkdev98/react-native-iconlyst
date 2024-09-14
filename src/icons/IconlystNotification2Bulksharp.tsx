import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification2Bulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M9.803 18.83a2.473 2.473 0 0 0 2.448 2.184A2.474 2.474 0 0 0 14.7 18.83H16.2c-.154 2.054-1.858 3.684-3.95 3.684s-3.796-1.63-3.95-3.684zM13 3.404v-1.64h-1.5v1.64z"
    />
    <Path
      fill={props.color}
      d="m9.802 18.83-.002-.025h4.902l-.002.025h1.5l.002-.025h4.952l-.54-.784a8.77 8.77 0 0 1-1.556-4.997v-2.793c0-3.501-2.656-6.39-6.057-6.766v-.061h-1.5v.061c-3.403.375-6.06 3.265-6.06 6.766v2.793a8.76 8.76 0 0 1-1.555 4.997l-.54.784H8.3l.001.025z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNotification2Bulksharp;

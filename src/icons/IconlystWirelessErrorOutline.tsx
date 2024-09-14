import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessErrorOutline = ({
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
      d="M12.301 11.851a.753.753 0 0 1-.75-.75v-2.95a.75.75 0 0 1 1.5 0v2.95c0 .41-.336.75-.75.75M12.301 14.891a.746.746 0 0 1-.75-.75v-.01c0-.41.336-.75.75-.75s.75.34.75.75v.01c0 .42-.336.75-.75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.623 19.541-7.56-8.99a2.2 2.2 0 0 1 .142-2.98c5.246-5.19 12.943-5.19 18.188 0 .81.8.884 2.1.142 2.98l-7.56 8.99a2.19 2.19 0 0 1-3.352 0M4.21 9.591l7.561 8.99a.7.7 0 0 0 1.055 0l7.56-8.99a.703.703 0 0 0-.048-.95c-4.661-4.62-11.417-4.62-16.078 0a.703.703 0 0 0-.05.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessErrorOutline;

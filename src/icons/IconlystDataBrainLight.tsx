import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDataBrainLight = ({
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
      d="M12 6.402V5.355A2.25 2.25 0 0 0 9.76 3.1a2.246 2.246 0 0 0-2.234 2.103 2.9 2.9 0 0 0-.868-.134 2.893 2.893 0 0 0-2.883 2.903c0 .728.265 1.392.705 1.902A2.16 2.16 0 0 0 3 11.93c0 .965.628 1.782 1.494 2.06a2.9 2.9 0 0 0-.719 1.918 2.893 2.893 0 0 0 2.883 2.903c.3 0 .59-.046.862-.132a2.247 2.247 0 0 0 2.24 2.22c1.237 0 2.24-1.009 2.24-2.254V17.63"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 18.645a2.25 2.25 0 0 0 2.24 2.255 2.246 2.246 0 0 0 2.234-2.103c.274.087.566.134.867.134 1.593 0 2.884-1.3 2.884-2.903 0-.728-.265-1.392-.705-1.902A2.16 2.16 0 0 0 21 12.07c0-.965-.628-1.782-1.494-2.06.448-.512.719-1.183.719-1.918a2.893 2.893 0 0 0-2.884-2.903c-.3 0-.59.046-.861.132a2.247 2.247 0 0 0-2.24-2.22A2.25 2.25 0 0 0 12 5.355M9.348 14.618h2.362m2.608 0h.334m0-5.235h-2.638m-2.32 0h-.346M8.294 12h7.412"
    />
  </Svg>
);
export default IconlystDataBrainLight;

import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrainChipTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.5 7.972V5.355A2.25 2.25 0 0 0 10.26 3.1a2.246 2.246 0 0 0-2.234 2.103 2.9 2.9 0 0 0-.868-.134 2.893 2.893 0 0 0-2.883 2.903c0 .728.265 1.392.705 1.902A2.16 2.16 0 0 0 3.5 11.93c0 .965.628 1.782 1.494 2.06a2.9 2.9 0 0 0-.719 1.918 2.893 2.893 0 0 0 2.883 2.903c.3 0 .59-.046.862-.132a2.247 2.247 0 0 0 2.24 2.22c1.237 0 2.24-1.009 2.24-2.254v-2.736" />
      <Path d="M12.5 18.645a2.25 2.25 0 0 0 2.24 2.255 2.246 2.246 0 0 0 2.234-2.103c.274.087.566.134.867.134 1.593 0 2.884-1.3 2.884-2.903 0-.728-.265-1.392-.705-1.902a2.16 2.16 0 0 0 1.48-2.056c0-.965-.628-1.782-1.494-2.06.448-.512.719-1.183.719-1.918a2.893 2.893 0 0 0-2.884-2.903c-.3 0-.59.046-.861.132a2.247 2.247 0 0 0-2.24-2.22 2.25 2.25 0 0 0-2.24 2.255" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.695 8.092h3.61c1.261 0 2.047.89 2.047 2.15v3.402c0 1.26-.786 2.151-2.048 2.151h-3.609c-1.262 0-2.047-.89-2.047-2.15v-3.402c0-1.26.79-2.151 2.047-2.151M16.369 10.248h1.355M16.369 13.752h1.355M7.293 10.248h1.355M7.293 13.752h1.355"
    />
  </Svg>
);
export default IconlystBrainChipTwoTone;

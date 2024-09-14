import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainCheckTwoTone = ({
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
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M8.725 19.315c.99.52 1.298 2.186 1.298 2.186M10.769 17.195c-.238.862-.198 1.686-1.109 1.886l-2.784.628c-.652.137-1.235-.189-1.338-.874l-.31-2.644a.83.83 0 0 0-.517-.618l-.928-.358a.75.75 0 0 1-.334-1.175c.712-.957 1.718-2.521 1.414-3.899-.57-2.583.531-4.527 2.414-6.115 1.467-1.237 3.248-1.564 5.125-1.523 1.146.026 2.295.228 3.356.623M19.604 12.863c-1.456 2.605-2.128 5.568-.885 8.402" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.125 7.444 1.634 1.637 3.366-3.368"
    />
  </Svg>
);
export default IconlystAiBrainCheckTwoTone;

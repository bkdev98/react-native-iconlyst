import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCropBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M10.704 4.695h3.963a.75.75 0 0 0 0-1.5h-3.963a.75.75 0 0 0 0 1.5M3.686 15.677a.75.75 0 0 0 .75-.75v-3.962a.75.75 0 0 0-1.5 0v3.962c0 .414.336.75.75.75M21.686 10.215a.75.75 0 0 0-.75.75v3.962a.75.75 0 0 0 1.5 0v-3.962a.75.75 0 0 0-.75-.75M7.846 21.182c-1.853-.215-3.12-1.496-3.39-3.425a.75.75 0 0 0-1.486.208c.365 2.608 2.167 4.412 4.702 4.707a.75.75 0 0 0 .174-1.49M21.719 17.119a.756.756 0 0 0-.847.639c-.273 1.957-1.506 3.206-3.381 3.424a.752.752 0 0 0 .174 1.49c2.53-.295 4.328-2.098 4.694-4.706a.75.75 0 0 0-.64-.847M14.668 21.195h-3.963a.75.75 0 0 0 0 1.5h3.963a.75.75 0 0 0 0-1.5M3.61 8.784a.75.75 0 0 0 .847-.639c.27-1.934 1.537-3.217 3.388-3.434a.75.75 0 0 0 .66-.833.754.754 0 0 0-.834-.657c-2.534.296-4.335 2.104-4.702 4.716-.056.41.23.79.64.847M17.491 4.71c1.874.22 3.106 1.471 3.381 3.435a.75.75 0 0 0 1.486-.208c-.366-2.614-2.164-4.42-4.693-4.717a.75.75 0 0 0-.174 1.49" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.07 17.033a1 1 0 1 0 0-2h-5.68a.79.79 0 0 1-.79-.791v-5.68a1 1 0 1 0-2 0v.302h-.3a1 1 0 0 0 0 2h.3v3.377a2.794 2.794 0 0 0 2.79 2.791h3.377v.3a1 1 0 0 0 2 0v-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.092 8.864a1 1 0 1 0 0 2h1.884c.436 0 .79.353.79.79v1.915a1 1 0 1 0 2 0v-1.916a2.793 2.793 0 0 0-2.79-2.79z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCropBulk;

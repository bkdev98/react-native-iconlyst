import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasGiftBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M16.873 6.953H7.128c-2.385 0-3.987 1.756-3.987 4.37v6.117c0 2.615 1.601 4.371 3.986 4.371h9.746c2.385 0 3.986-1.756 3.986-4.37v-6.119c0-2.613-1.6-4.369-3.986-4.369"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.97 13.966a.75.75 0 0 0-1.025-.274l-1.196.69V13a.75.75 0 0 0-1.5 0v1.38l-1.194-.69a.75.75 0 0 0-.75 1.298l1.196.691-1.196.69a.75.75 0 0 0 .75 1.3l1.194-.69v1.378a.75.75 0 0 0 1.5 0v-1.38l1.196.69a.75.75 0 0 0 1.024-.273.75.75 0 0 0-.274-1.026l-1.195-.69 1.195-.69a.75.75 0 0 0 .274-1.024M15.601 6.916h-2.606c.372-1.047 1.172-2.642 2.606-2.642.689 0 1.251.593 1.251 1.323 0 .727-.562 1.319-1.251 1.319m-8.457-1.32c0-.73.562-1.322 1.253-1.322 1.448 0 2.244 1.595 2.61 2.642h-2.61c-.691 0-1.253-.592-1.253-1.32m8.457-2.822c-1.854 0-2.968 1.37-3.603 2.639-.633-1.27-1.747-2.64-3.601-2.64-1.518 0-2.753 1.267-2.753 2.824 0 1.554 1.235 2.819 2.753 2.819h2.064l-1.314 1.98a.749.749 0 0 0 .624 1.165.75.75 0 0 0 .626-.335l1.36-2.051c.395.894 1.073 1.91 2.202 2.338a.748.748 0 0 0 .967-.436.75.75 0 0 0-.435-.967c-.689-.26-1.15-1.01-1.429-1.694h2.539c1.517 0 2.751-1.265 2.751-2.82 0-1.556-1.234-2.822-2.751-2.822"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasGiftBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarGiftBulk = ({
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
      d="M16.873 7.015H7.128c-2.385 0-3.987 1.756-3.987 4.37v6.117c0 2.615 1.601 4.371 3.986 4.371h9.746c2.385 0 3.986-1.756 3.986-4.37v-6.119c0-2.613-1.6-4.369-3.986-4.369"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.703 15.249a3.34 3.34 0 0 1-2.224-2.225c-.13-.421-.828-.421-.957 0a3.34 3.34 0 0 1-2.223 2.225.5.5 0 0 0 0 .957 3.34 3.34 0 0 1 2.223 2.224.5.5 0 0 0 .957 0 3.34 3.34 0 0 1 2.224-2.224.5.5 0 0 0 0-.957M15.601 6.98h-2.606c.372-1.046 1.172-2.641 2.606-2.641.689 0 1.251.593 1.251 1.322 0 .727-.562 1.32-1.251 1.32M7.144 5.66c0-.728.562-1.321 1.253-1.321 1.448 0 2.244 1.595 2.61 2.642h-2.61c-.691 0-1.253-.593-1.253-1.32m8.457-2.821c-1.854 0-2.968 1.37-3.603 2.639-.633-1.27-1.747-2.64-3.601-2.64-1.518 0-2.753 1.267-2.753 2.823 0 1.554 1.235 2.82 2.753 2.82h2.144l-1.412 2.343a.75.75 0 1 0 1.285.773l1.341-2.224c.392.968 1.064 2.065 2.182 2.53a.75.75 0 0 0 .576-1.385c-.74-.308-1.219-1.232-1.495-2.037h2.583c1.517 0 2.751-1.266 2.751-2.82 0-1.556-1.234-2.822-2.751-2.822"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarGiftBulk;

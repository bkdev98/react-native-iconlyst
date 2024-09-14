import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongBadgeLight = ({
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
      d="M17.366 3.691c.752-.36 1.622.19 1.622 1.024v14.568a1.133 1.133 0 0 1-1.623 1.024l-.71-.34a1.68 1.68 0 0 0-1.36-.04l-2.023.823a3.36 3.36 0 0 1-2.543 0l-2.018-.824a1.68 1.68 0 0 0-1.36.04l-.715.343a1.134 1.134 0 0 1-1.623-1.024V4.717a1.133 1.133 0 0 1 1.623-1.024l.71.34c.427.205.921.22 1.36.04l2.022-.823a3.37 3.37 0 0 1 2.543 0l2.018.824c.439.179.933.165 1.36-.04z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.98 13.886a1.883 1.883 0 1 1-3.767 0 1.883 1.883 0 0 1 3.766 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.979 13.885V8.232s.489 1.274 1.805 1.542"
    />
  </Svg>
);
export default IconlystSongBadgeLight;

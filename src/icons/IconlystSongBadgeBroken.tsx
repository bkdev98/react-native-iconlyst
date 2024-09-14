import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongBadgeBroken = ({
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
      d="M19.238 11.999V4.715a1.133 1.133 0 0 0-1.622-1.024l-.716.343a1.68 1.68 0 0 1-1.36.04L13.52 3.25a3.37 3.37 0 0 0-2.543 0l-2.022.824a1.68 1.68 0 0 1-1.36-.04l-.71-.34a1.133 1.133 0 0 0-1.623 1.023v14.568a1.134 1.134 0 0 0 1.623 1.024l.715-.343a1.68 1.68 0 0 1 1.36-.04l2.018.824a3.36 3.36 0 0 0 2.543 0l2.022-.824a1.68 1.68 0 0 1 1.36.04l.71.34a1.133 1.133 0 0 0 1.624-1.023v-3.642"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.463 13.886a1.884 1.884 0 1 0 1.884-1.884"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.229 13.885V8.232s.489 1.274 1.805 1.542"
    />
  </Svg>
);
export default IconlystSongBadgeBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerEmojiBroken = ({
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
      d="M3 8.026C3 5.081 4.835 3 7.782 3h8.435C19.167 3 21 5.08 21 8.026v5.893c0 .625-.241 1.226-.674 1.676l-4.475 4.66a2.42 2.42 0 0 1-1.745.745H7.782C4.844 21 3 18.92 3 15.974v-4.64"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.676 20.928v-3.414a3.02 3.02 0 0 1 3.014-3.022M8.668 14.102c.722.94 1.787 1.527 2.968 1.527.418 0 .821-.073 1.2-.21M8.697 8.59v.065m.26-.05a.26.26 0 1 1-.523 0 .26.26 0 0 1 .522 0M15.343 8.59v.065m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .522 0"
    />
  </Svg>
);
export default IconlystStickerEmojiBroken;

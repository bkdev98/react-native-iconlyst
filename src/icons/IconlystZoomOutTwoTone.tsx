import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomOutTwoTone = ({
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
      d="M6.942 5.379v1.98h1.942M5.464 10.766V8.785H3.522M6.942 7.36l1.942-1.981M5.464 8.785l-1.942 1.98"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.054 11.602c.905 2.441.015 5.671-1.57 7.256-1.816 1.817-5.673 2.12-8.076.971-1.535-.733-3.144-1.88-4.107-2.614a1.77 1.77 0 0 1-.638-1.798A1.854 1.854 0 0 1 9.4 14.214l1.164.673a.61.61 0 0 0 .913-.527V4.994a1.588 1.588 0 0 1 3.176-.024l.063 4.108c2.223.213 5.441.098 6.34 2.524"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystZoomOutTwoTone;
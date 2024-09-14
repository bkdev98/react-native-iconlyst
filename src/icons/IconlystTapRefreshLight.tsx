import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRefreshLight = ({
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
      d="M20.638 11.645c.905 2.441.015 5.671-1.57 7.256-1.816 1.817-5.673 2.119-8.076.971-1.535-.733-3.144-1.88-4.107-2.614a1.77 1.77 0 0 1-.638-1.798 1.853 1.853 0 0 1 2.736-1.203l1.164.673a.608.608 0 0 0 .913-.527V5.037a1.588 1.588 0 0 1 3.176-.024l.063 4.108c2.223.213 5.44.098 6.34 2.524M3.312 7.584A2.512 2.512 0 1 0 4.606 5.84"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.388 6.637 4.31 5.559l1.057-1.056"
    />
  </Svg>
);
export default IconlystTapRefreshLight;

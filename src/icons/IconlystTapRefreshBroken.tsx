import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRefreshBroken = ({
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
      d="M15.73 20.411c-1.665.298-3.504.114-4.872-.539-1.535-.733-3.144-1.88-4.107-2.614a1.77 1.77 0 0 1-.638-1.798 1.854 1.854 0 0 1 2.736-1.203l1.164.673a.61.61 0 0 0 .913-.527V5.037a1.588 1.588 0 0 1 3.176-.024l.063 4.108c2.223.213 5.441.098 6.34 2.524.904 2.441.014 5.671-1.57 7.256M3.178 7.583a2.514 2.514 0 0 0 4.243 2.255A2.513 2.513 0 0 0 4.473 5.84"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.255 6.638 4.177 5.56l1.057-1.056"
    />
  </Svg>
);
export default IconlystTapRefreshBroken;

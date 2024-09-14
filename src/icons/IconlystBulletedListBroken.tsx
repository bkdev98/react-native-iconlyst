import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBulletedListBroken = ({
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
      d="M8.25 11.994h12M14.25 17.994h6m-12 0h3M8.25 5.994h6m3 0h3M4.261 5.981v.064m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .522 0M4.261 12.112v.064m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .522 0M4.261 17.981v.064m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .522 0"
    />
  </Svg>
);
export default IconlystBulletedListBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBulletedListTwoTone = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 18.762h12M8.5 12.762h12M8.5 6.762h12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.511 6.747v.064m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .522 0M4.511 12.876v.064m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .522 0M4.511 18.747v.064m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .522 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBulletedListTwoTone;

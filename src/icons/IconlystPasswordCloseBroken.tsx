import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordCloseBroken = ({
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
      d="M9.949 17.299H7.922c-2.881 0-4.672-2.033-4.672-4.91V8.427c0-2.877 1.8-4.911 4.672-4.911h.843M20.835 10.614V8.427c0-2.877-1.793-4.911-4.673-4.911h-4.12M17.421 13.475a3.83 3.83 0 1 1-2.941 1.376M18.5 16.22l-2.16 2.16m2.16-.001-2.16-2.16M12.043 10.36v-.064m-.26.05a.261.261 0 0 1 .522 0 .26.26 0 0 1-.26.26.26.26 0 0 1-.262-.26M15.947 10.36v-.064m-.26.05a.26.26 0 1 1 0 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.136 10.36v-.064m-.259.05a.261.261 0 0 1 .522 0 .26.26 0 0 1-.261.26.26.26 0 0 1-.261-.26"
    />
  </Svg>
);
export default IconlystPasswordCloseBroken;

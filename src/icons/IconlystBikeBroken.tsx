import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBikeBroken = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.145 12.46a3.145 3.145 0 1 1-2.26.957M17.854 18.75a3.145 3.145 0 1 0 0-6.29 3.145 3.145 0 0 0 0 6.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.07 9.835a5.52 5.52 0 0 0-4.52 2.34l-1.904 2.72M17.639 14.894l-2.672-8.886 1.98-.758M9.29 7.334H6.646M9.452 10.802 7.72 7.334"
    />
  </Svg>
);
export default IconlystBikeBroken;

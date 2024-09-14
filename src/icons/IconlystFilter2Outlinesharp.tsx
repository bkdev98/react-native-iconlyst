import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Outlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 3.76H22v4.762l-6.75 6.886v5.042l-6 2.345v-7.387L2.5 8.522zM4 5.26V7.91l6.75 6.887v5.802l3-1.172v-4.63l6.75-6.887V5.261z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilter2Outlinesharp;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapMoodsTwoTone = ({
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
      d="M16.312 10.383A5.195 5.195 0 0 1 21.5 15.58a5.193 5.193 0 0 1-5.19 5.19 5.195 5.195 0 0 1-5.198-5.19M8.697 13.624a5.196 5.196 0 1 0 0-10.393 5.196 5.196 0 0 0 0 10.393"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.257 6.863v-.058m2.934 0v.058M7.24 9.555a1.78 1.78 0 0 0 1.459.725 1.78 1.78 0 0 0 1.458-.725M14.867 14.009v-.048m2.934.044v-.04M14.85 17.424a1.78 1.78 0 0 1 1.46-.725 1.78 1.78 0 0 1 1.457.725"
    />
  </Svg>
);
export default IconlystSwapMoodsTwoTone;

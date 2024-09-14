import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleDownBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M6.156 14.144A1.142 1.142 0 1 1 7.88 12.64L12 17.368l4.121-4.727a1.144 1.144 0 0 1 1.723 1.503l-4.983 5.714a1.142 1.142 0 0 1-1.722 0z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M6.156 6.144a1.142 1.142 0 0 1 .877-1.894h10.012v.001a1.144 1.144 0 0 1 .799 1.892l-4.983 5.715a1.142 1.142 0 0 1-1.722 0z"
    />
  </Svg>
);
export default IconlystDoubleDownBulk;

import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEuroBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M10.384 12.817a4.7 4.7 0 0 1 .001-1.52H8.374a7 7 0 0 0 0 1.52zM11.211 9.297c1.017-1.448 2.683-2.282 4.499-2.23.517.041 1.016-.408 1.037-.962a1 1 0 0 0-.961-1.037 7.25 7.25 0 0 0-6.592 3.66c-.104.184-.187.377-.273.57zM15.71 17.058c-1.822.04-3.483-.79-4.5-2.24H8.921l.01.023c.083.186.165.372.266.551a7.24 7.24 0 0 0 6.589 3.664 1 1 0 0 0 .961-1.037c-.021-.553-.52-1.012-1.037-.96" />
    </G>
    <Path
      fill={props.color}
      d="M15.248 14.817H8.252a1 1 0 1 1 0-2h6.996a1 1 0 1 1 0 2M15.248 11.297H8.252a1 1 0 1 1 0-2h6.9959999999999996a1 1 0 1 1 0 2"
    />
  </Svg>
);
export default IconlystEuroBulk;

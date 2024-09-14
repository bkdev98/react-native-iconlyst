import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="translate(3.5 2)"
    >
      <Path d="M.74 8.391a7.678 7.678 0 0 1 15.356.052v.087c-.053 2.757-1.592 5.305-3.479 7.296a20.2 20.2 0 0 1-3.59 2.957.93.93 0 0 1-1.218 0 19.8 19.8 0 0 1-5.052-4.73A9.83 9.83 0 0 1 .739 8.416z" />
      <Circle cx={8.417} cy={8.539} r={2.461} opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystLocationTwoTone;

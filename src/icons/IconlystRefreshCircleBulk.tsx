import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshCircleBulk = ({
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
      fillRule="evenodd"
      d="M12 5.5c5.607 0 10 2.416 10 5.5 0 2.59-3.103 4.705-7.42 5.316v-2.015C17.868 13.785 20 12.332 20 11c0-1.655-3.285-3.5-8-3.5S4 9.345 4 11c0 1.022 1.302 2.118 3.317 2.793a1 1 0 1 1-.634 1.896C3.751 14.708 2 12.955 2 11c0-3.084 4.393-5.5 10-5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m14.592 14.275.003-1.149v-.002a1.06 1.06 0 0 0-1.81-.75l-2.164 2.165c-.229.195-.38.474-.38.796l.002.015-.001.006c0 .272.104.543.31.75l2.22 2.22a1.062 1.062 0 0 0 1.81-.747l.004-1.183z"
    />
  </Svg>
);
export default IconlystRefreshCircleBulk;

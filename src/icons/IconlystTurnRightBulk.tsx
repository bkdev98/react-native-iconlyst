import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnRightBulk = ({
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
      d="M15.209 9.506v1.796a1 1 0 0 0 1.594.805l3.791-2.796c.017-.014.024-.036.041-.05a1 1 0 0 0 .195-.23c.022-.036.052-.065.07-.104.06-.129.1-.269.1-.421a1 1 0 0 0-.1-.422c-.018-.038-.048-.067-.07-.104a1 1 0 0 0-.195-.23c-.017-.014-.024-.036-.041-.049l-3.791-2.797a1.001 1.001 0 0 0-1.594.805v3.797"
    />
    <Path
      fill={props.color}
      d="M17.58 19.792H9.143A6.15 6.15 0 0 1 3 13.648a6.15 6.15 0 0 1 6.143-6.142h6.066v2H9.143A4.147 4.147 0 0 0 5 13.648a4.15 4.15 0 0 0 4.143 4.144h8.437a1 1 0 0 1 0 2"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTurnRightBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnRightLineBulk = ({
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
      d="M11.492 9.764H9.958A3.96 3.96 0 0 0 6 13.722a3.963 3.963 0 0 0 3.958 3.959H19a1 1 0 1 1 0 2H9.958A5.965 5.965 0 0 1 4 13.72a5.965 5.965 0 0 1 5.958-5.957h1.534z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.492 11.568V5.975a1.001 1.001 0 0 1 1.593-.805l3.791 2.797a.1.1 0 0 1 .021.024q.009.014.02.025a1 1 0 0 1 .195.23q.015.023.032.044.022.028.039.06c.06.129.1.27.1.422s-.04.292-.1.42a.3.3 0 0 1-.041.063l-.03.042a1 1 0 0 1-.194.23q-.013.011-.021.025t-.02.025l-3.791 2.796a1 1 0 0 1-1.594-.805M18 6.713a1 1 0 1 1 2 0v4.663a1 1 0 1 1-2 0z"
    />
  </Svg>
);
export default IconlystTurnRightLineBulk;

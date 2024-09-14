import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnFrontBold = ({
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
      d="M16.382 15.324a2.71 2.71 0 0 0-2.707 2.706 2.71 2.71 0 0 0 2.707 2.706 2.71 2.71 0 0 0 2.706-2.706 2.71 2.71 0 0 0-2.706-2.706"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.214 6.23-3.091-2.274a.999.999 0 0 0-1.593.805v1.275h-3.165c-3.851 0-6.985 3.134-6.985 6.986 0 3.853 3.134 6.987 6.985 6.987a1 1 0 1 0 0-2A4.99 4.99 0 0 1 6.38 13.02a4.99 4.99 0 0 1 4.985-4.985h3.165V9.31a1.001 1.001 0 0 0 1.592.806l3.092-2.275a.998.998 0 0 0 0-1.611"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnFrontBold;

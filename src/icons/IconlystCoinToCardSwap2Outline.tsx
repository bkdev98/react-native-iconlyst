import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinToCardSwap2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.72 7.034a.75.75 0 0 1 1.061 0l.829.828.828-.828a.75.75 0 0 1 1.06 1.06L5.14 9.455a.75.75 0 0 1-1.06 0l-1.36-1.36a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.004 4.148a2.646 2.646 0 0 0-2.647 2.647v2.05a.75.75 0 1 1-1.5 0v-2.05a4.146 4.146 0 0 1 4.147-4.147.75.75 0 1 1 0 1.5M19.36 14.583a.75.75 0 0 1 1.06 0l1.359 1.359a.75.75 0 1 1-1.06 1.06l-.83-.828-.827.828A.75.75 0 0 1 18 15.942z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.89 14.441a.75.75 0 0 1 .75.75v2.051a4.146 4.146 0 0 1-4.146 4.147.75.75 0 1 1 0-1.5 2.646 2.646 0 0 0 2.647-2.647v-2.05a.75.75 0 0 1 .75-.75M3.24 13.194c.503-.539 1.21-.827 2.01-.827h5.077c.801 0 1.508.288 2.01.828.497.534.738 1.253.738 2.023v3.322c0 .77-.241 1.489-.738 2.022-.502.54-1.209.828-2.01.828H5.249c-.8 0-1.508-.288-2.01-.828-.497-.533-.739-1.252-.739-2.022v-3.322c0-.771.243-1.49.74-2.024m1.098 1.023c-.196.21-.338.541-.338 1.001v3.322c0 .46.142.791.336 1 .19.203.482.35.913.35h5.078c.431 0 .724-.147.912-.35.195-.209.336-.54.336-1v-3.322c0-.46-.141-.792-.336-1.001-.188-.203-.481-.35-.912-.35H5.249c-.428 0-.722.147-.911.35"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 15.787a.75.75 0 0 1 .75-.75h9.075a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M12.568 7.16a4.55 4.55 0 1 1 9.1 0 4.55 4.55 0 0 1-9.1 0m4.55-3.05a3.05 3.05 0 1 0-.001 6.098 3.05 3.05 0 0 0 .001-6.099"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinToCardSwap2Outline;

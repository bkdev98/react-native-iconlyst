import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletChargeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.666 8.957V7.43c0-.894-.727-1.621-1.62-1.621h-.642V3a.75.75 0 0 0-1.5 0v2.809H11.32V3a.75.75 0 0 0-1.5 0v2.809h-.639c-.894 0-1.62.727-1.62 1.621v1.744c0 1.561.662 3.059 1.818 4.11a5.47 5.47 0 0 0 2.982 1.376v2.931c.01 1.547 1.293 2.811 2.867 2.818h1.056c.341 0 .618.265.618.591a.75.75 0 0 0 1.5 0c0-1.153-.95-2.091-2.118-2.091h-1.053c-.75-.003-1.366-.598-1.37-1.322V14.66c2.708-.369 4.805-2.823 4.805-5.703M9.724 17.52H7.36l.898-1.617a.75.75 0 1 0-1.312-.728l-1.517 2.73a.75.75 0 0 0 .656 1.114H8.45l-.898 1.616a.75.75 0 1 0 1.312.728l1.517-2.73a.748.748 0 0 0-.656-1.114"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerOutletChargeBold;

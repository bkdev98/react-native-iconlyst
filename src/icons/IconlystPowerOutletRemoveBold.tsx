import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletRemoveBold = ({
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
      d="M18.7 8.957V7.43c0-.894-.728-1.621-1.622-1.621h-.64V3a.75.75 0 0 0-1.5 0v2.809h-3.583V3a.75.75 0 0 0-1.5 0v2.809h-.641c-.894 0-1.621.727-1.621 1.621v1.744c0 1.561.663 3.06 1.818 4.11a5.48 5.48 0 0 0 2.985 1.376v2.931c.008 1.547 1.292 2.811 2.867 2.818h1.056c.34 0 .618.265.618.591a.75.75 0 0 0 1.5 0c0-1.153-.95-2.091-2.118-2.091h-1.053c-.752-.003-1.366-.598-1.37-1.322V14.66c2.708-.37 4.804-2.824 4.804-5.703M10.114 16.941a.75.75 0 0 0-1.06 0l-1.237 1.235-1.237-1.235a.751.751 0 0 0-1.06 1.061l1.236 1.234L5.52 20.47a.751.751 0 0 0 1.06 1.062l1.237-1.235 1.236 1.235a.751.751 0 0 0 1.061-1.062l-1.236-1.233 1.236-1.234a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerOutletRemoveBold;

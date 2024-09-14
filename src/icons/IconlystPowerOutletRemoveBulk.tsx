import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletRemoveBulk = ({
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
      d="M11.32 5.809V3a.75.75 0 0 0-1.5 0v2.809zM16.404 5.809V3a.75.75 0 0 0-1.5 0v2.809zM13.861 14.667h-1.5v2.924c.01 1.547 1.293 2.811 2.867 2.818h1.056c.341 0 .618.265.618.591a.75.75 0 0 0 1.5 0c0-1.153-.95-2.09-2.118-2.09h-1.053c-.75-.004-1.366-.599-1.37-1.323zM9.053 16.941a.751.751 0 0 1 1.061 1.061l-1.236 1.234 1.236 1.233a.751.751 0 0 1-1.061 1.062l-1.236-1.235-1.237 1.235a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.062l1.236-1.233-1.236-1.234a.751.751 0 0 1 1.06-1.06l1.237 1.234z"
    />
    <Path
      fill={props.color}
      d="M18.666 7.43v1.527c0 2.88-2.097 5.334-4.805 5.703v.006h-1.5v-.006a5.47 5.47 0 0 1-2.982-1.376 5.57 5.57 0 0 1-1.819-4.11V7.43c0-.894.727-1.62 1.621-1.62h7.864c.894 0 1.621.726 1.621 1.62"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPowerOutletRemoveBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare6Bulk = ({
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
      d="M18.651 11.25a1 1 0 0 0-1 1v1.89c0 .828-.323 1.608-.909 2.194a3.08 3.08 0 0 1-2.195.91h-6.78l1.294-1.289a1.001 1.001 0 0 0-1.412-1.417l-3.007 2.997c-.025.024-.035.058-.057.085-.06.074-.12.148-.159.237a1 1 0 0 0-.078.385v.002c0 .045.02.083.026.126.011.087.018.176.052.257q.078.186.22.327l3.002 3.002a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-1.298-1.298h6.783a5.08 5.08 0 0 0 3.61-1.495 5.08 5.08 0 0 0 1.494-3.609v-1.89a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.349 13.25a1 1 0 0 0 1-1v-1.9c0-.817.33-1.617.91-2.195a3.08 3.08 0 0 1 2.194-.909h6.785l-1.291 1.291a.999.999 0 1 0 1.414 1.414l2.997-2.997q.14-.141.217-.327c.035-.086.044-.177.054-.268.005-.039.023-.073.023-.113 0-.059-.024-.11-.034-.167-.012-.07-.015-.144-.043-.21a1 1 0 0 0-.223-.335l-2.991-2.99a.999.999 0 1 0-1.414 1.413l1.289 1.29H9.453a5.07 5.07 0 0 0-3.61 1.494 5.14 5.14 0 0 0-1.494 3.61v1.898a1 1 0 0 0 1 1"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplaySquare6Bulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWaterEnergyLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.76 5.36C12.395 3.88 11.228 3 11.228 3S4.4 8.147 4.502 14.465v.007c-.07 3.597 3.395 6.57 6.726 6.528 2.674.034 5.435-1.875 6.385-4.49"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.897 14.064v.004c-.038 1.93 1.822 3.334 3.609 3.312M13.657 11.485l1.682-4.106a.26.26 0 0 1 .246-.171h2.255c.18 0 .307.178.247.349l-.998 2.34c-.06.17.066.349.247.349h2.13c.224 0 .344.265.196.434l-4.044 4.615c-.182.208-.52.028-.449-.24l.77-2.89a.26.26 0 0 0-.252-.329h-1.785a.26.26 0 0 1-.245-.351"
    />
  </Svg>
);
export default IconlystWaterEnergyLight;

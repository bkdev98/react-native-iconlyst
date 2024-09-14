import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashElectricOutline = ({
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
      d="M6.892 3.887a3.14 3.14 0 0 0-3.143 3.142v1.577a.75.75 0 1 1-1.5 0V7.029a4.64 4.64 0 0 1 4.643-4.642h1.29a.75.75 0 0 1 0 1.5zM2.999 14.918a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142h1.257a.75.75 0 0 1 0 1.5H6.892a4.64 4.64 0 0 1-4.643-4.642v-1.577a.75.75 0 0 1 .75-.75M21 14.918a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.643 4.642h-1.29a.75.75 0 1 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75M15.099 3.137a.75.75 0 0 1 .75-.75h1.257a4.64 4.64 0 0 1 4.643 4.642v1.577a.75.75 0 0 1-1.5 0V7.029a3.14 3.14 0 0 0-3.143-3.142h-1.257a.75.75 0 0 1-.75-.75M10.973 7.98l-1.66 4.052h1.49c.7 0 1.208.662 1.028 1.338l-.443 1.661 2.985-3.406H12.78a1.064 1.064 0 0 1-.986-1.462l.93-2.183zm-1.285-.82c.158-.409.552-.68.992-.68h2.706a1.064 1.064 0 0 1 .985 1.462l-.93 2.183h1.894c.914 0 1.402 1.076.8 1.764l-4.85 5.537c-.742.846-2.118.112-1.828-.975l.778-2.92H8.662a1.064 1.064 0 0 1-.988-1.455z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashElectricOutline;

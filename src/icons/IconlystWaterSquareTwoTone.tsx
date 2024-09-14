import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWaterSquareTwoTone = ({
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
      d="M7.896 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H7.896c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.114 5.081 4.957 3 7.896 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.518 12.44s1.731 1.597 1.705 3.199v.002c.018.912-.86 1.576-1.706 1.565-.844.011-1.723-.653-1.705-1.565v-.002c-.026-1.602 1.706-3.198 1.706-3.198M8.266 7.675s1.731 1.596 1.705 3.198v.002c.018.912-.86 1.576-1.705 1.566-.845.01-1.724-.654-1.706-1.566v-.002c-.026-1.602 1.706-3.198 1.706-3.198M15.963 6.794s1.732 1.596 1.706 3.198v.002c.017.912-.861 1.576-1.706 1.565-.845.011-1.724-.653-1.706-1.565v-.002c-.026-1.602 1.706-3.198 1.706-3.198"
    />
  </Svg>
);
export default IconlystWaterSquareTwoTone;

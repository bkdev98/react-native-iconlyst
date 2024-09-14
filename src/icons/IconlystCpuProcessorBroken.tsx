import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorBroken = ({
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
      d="M5.035 9.684V8.3c0-2.437 1.52-3.763 3.956-3.763h3.511M14.96 4.537h1.053c2.443 0 3.956 1.326 3.95 3.763v1.24M15.402 19.465h.603c2.443 0 3.957-1.333 3.957-3.77v-3.697M12.498 19.465H8.991c-2.435 0-3.956-1.357-3.956-3.832v-3.508M16.549 4.537V3m-4.05 1.537V3m-4.05 1.537V3M8.45 19.463V21m4.049-1.537V21m4.05-1.537V21M5.037 7.95H3.5m1.537 4.049H3.5m1.537 4.05H3.5M19.963 16.049H21.5m-1.537-4.05H21.5m-1.537-4.05H21.5M10.829 8.445c-1.16 0-1.886.632-1.886 1.793v3.495c0 1.179.725 1.825 1.886 1.825h3.341c1.165 0 1.886-.636 1.886-1.796v-3.524c.004-1.161-.718-1.793-1.882-1.793"
    />
  </Svg>
);
export default IconlystCpuProcessorBroken;

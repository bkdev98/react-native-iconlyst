import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.668 4.981q-.008.011-.006.007l-.04.066c-.203.285-.528.945-.287 2.166.248 1.251 1.096 3.119 3.343 5.746a.75.75 0 0 1-1.14.975C3.2 11.207 2.18 9.11 1.865 7.511c-.318-1.612.087-2.683.518-3.303.156-.249.8-1.158 1.739-1.817.514-.361 1.164-.682 1.909-.737.769-.056 1.561.177 2.315.794l.002.002c1.242 1.024 2 1.875 2.402 2.645.426.816.436 1.518.253 2.152a5 5 0 0 1-.313.778l-.07.143c-.082.171-.152.316-.214.47-.139.35-.199.673-.073 1.101a.75.75 0 0 1-1.44.422c-.246-.84-.103-1.517.12-2.077.083-.212.184-.419.27-.594l.055-.115c.102-.211.176-.38.224-.545.08-.279.098-.582-.142-1.042-.264-.506-.842-1.204-2.026-2.18-.476-.39-.894-.484-1.253-.458-.383.028-.775.2-1.157.468-.379.266-.707.6-.95.885-.213.25-.339.438-.365.478M11.045 12.19a.75.75 0 0 1 1.06-.02c1.183 1.14 1.913 1.424 2.373 1.463.438.038.763-.12 1.295-.377l.107-.051c.57-.274 1.34-.61 2.349-.297.936.29 1.948 1.102 3.213 2.638l.002.001c.619.756.854 1.55.798 2.32-.054.746-.376 1.397-.738 1.91-.659.935-1.565 1.575-1.817 1.733-.7.496-1.962.932-3.897.376-1.918-.553-4.493-2.077-7.916-5.457a.75.75 0 0 1 1.054-1.067c3.338 3.297 5.7 4.628 7.277 5.082 1.539.443 2.325.052 2.626-.167a1 1 0 0 1 .079-.05c.037-.025.228-.151.482-.367.286-.242.62-.569.886-.947.269-.38.44-.772.468-1.155.026-.359-.068-.779-.462-1.26-1.223-1.483-2-2.003-2.5-2.158-.428-.133-.741-.03-1.254.216l-.14.069c-.482.238-1.171.577-2.04.502-.964-.082-2.004-.643-3.285-1.877a.75.75 0 0 1-.02-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.03 2.866a.75.75 0 0 1 0 1.06l-18.5 18.5a.75.75 0 0 1-1.06-1.06l18.5-18.5a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallSilentOutlinecurved;

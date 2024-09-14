import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDualShockControllerBulk = ({
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
      d="M21.497 14.8c.002-.072-.147-7.347-3.305-8.997l-.027-.014-.11-.049c-.67-.309-2.45-1.128-4.467.131-1.43.891-1.82.808-3.184-.005-2.075-1.236-3.731-.465-4.44-.136l-.155.073c-3.137 1.64-3.307 8.923-3.306 8.974-.018.736-.071 2.978 1.845 3.758.5.184 1 .275 1.477.275.72 0 1.39-.207 1.94-.616.359-.266.562-.542.74-.785.232-.316.45-.614 1.066-.968 1.034-.597 3.949-.51 4.865.003.518.29.746.585 1.009.926.21.273.43.556.79.825.916.678 2.16.803 3.434.334 1.903-.775 1.847-3.016 1.828-3.729"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.697 11.242a.742.742 0 1 0 1.484 0 .742.742 0 0 0-1.484 0m-1.455 1.454a.743.743 0 1 0 1.485 0 .743.743 0 0 0-1.485 0m-1.454-1.454a.742.742 0 1 0 1.484 0 .742.742 0 0 0-1.484 0m2.939-1.455a.743.743 0 1 0-1.485.001.743.743 0 0 0 1.485-.001M5.819 11.242c0 1.206.945 2.15 2.15 2.15 1.207 0 2.15-.944 2.15-2.15s-.943-2.15-2.15-2.15a2.127 2.127 0 0 0-2.15 2.15m1.5.001c0-.382.267-.65.65-.65s.65.268.65.65c0 .383-.267.65-.65.65a.62.62 0 0 1-.65-.65"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDualShockControllerBulk;

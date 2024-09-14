import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDualShockControllerBold = ({
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
      d="M7.97 10.594a.62.62 0 0 0-.65.65c0 .383.266.65.65.65.382 0 .65-.267.65-.65a.62.62 0 0 0-.65-.65"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.439 11.984a.742.742 0 1 1 0-1.484.742.742 0 0 1 0 1.484m-1.455 1.455a.743.743 0 1 1 .001-1.485.743.743 0 0 1-.001 1.485m-1.454-1.455a.742.742 0 1 1 0-1.484.742.742 0 0 1 0 1.484m1.454-2.939a.743.743 0 1 1 0 1.486.743.743 0 0 1 0-1.486M7.97 13.392a2.127 2.127 0 0 1-2.151-2.15c0-1.206.945-2.15 2.15-2.15 1.207 0 2.15.944 2.15 2.15s-.943 2.15-2.15 2.15M21.497 14.8c.002-.072-.147-7.347-3.305-8.997l-.027-.014-.11-.049c-.67-.309-2.45-1.128-4.467.131-1.43.891-1.82.808-3.184-.005-2.075-1.236-3.731-.465-4.44-.136l-.155.073c-3.137 1.64-3.307 8.923-3.306 8.974-.018.736-.071 2.978 1.845 3.758.5.184 1 .275 1.477.275.72 0 1.39-.207 1.94-.616.359-.266.562-.542.74-.785.232-.316.45-.614 1.066-.968 1.034-.597 3.949-.51 4.865.003.518.29.746.585 1.009.926.21.273.43.556.79.825.916.678 2.16.803 3.434.334 1.903-.775 1.847-3.016 1.828-3.729"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDualShockControllerBold;

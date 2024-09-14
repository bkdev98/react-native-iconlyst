import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalShieldBulk = ({
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
      d="M19.356 5.137C18.652 4.431 13.026 2.5 12 2.5S5.348 4.431 4.644 5.137c-.56.562-.553.996-.509 3.398.018.974.042 2.3.042 4.135 0 6.407 7.601 8.785 7.678 8.808a.5.5 0 0 0 .291 0c.076-.023 7.678-2.401 7.678-8.808 0-1.827.024-3.149.041-4.121.043-2.414.051-2.849-.509-3.412"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.05 12.28c0 .69-.561 1.25-1.25 1.25h-.674v.67c0 .69-.56 1.25-1.25 1.25h-1.75a1.25 1.25 0 0 1-1.248-1.25v-.67h-.675a1.25 1.25 0 0 1-1.25-1.25v-1.75c0-.689.562-1.25 1.25-1.25h.675V8.6c0-.684.56-1.24 1.249-1.24h1.75c.689 0 1.249.556 1.249 1.24v.68h.675c.688 0 1.249.561 1.249 1.25zm-3.424-3.42v1.17c0 .414.336.75.75.75h1.174v1.25h-1.174a.75.75 0 0 0-.75.75v1.17h-1.248v-1.17a.75.75 0 0 0-.75-.75H9.454v-1.25h1.174a.75.75 0 0 0 .75-.75V8.86z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHospitalShieldBulk;

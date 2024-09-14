import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialCircleBold = ({
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
      d="M17.678 13.383a3.03 3.03 0 0 1-2.013 2.826.75.75 0 0 1-.506-1.412 1.535 1.535 0 0 0 1.019-1.43v-2.145a.75.75 0 0 1 1.5 0zm-4.169 2.87h-1.241a.75.75 0 0 1 0-1.5h1.241a.75.75 0 0 1 0 1.5m-2.479-2.63a2.355 2.355 0 0 1-4.709 0v-.89a.75.75 0 0 1 1.5 0v.89c0 .469.383.85.854.85a.854.854 0 0 0 .855-.85v-5a.75.75 0 0 1 1.5 0zm.488-5a.75.75 0 0 1 1.5 0v3.68c0 .285.234.518.523.518h.205a.52.52 0 0 0 .524-.518v-.982a.75.75 0 0 1 1.5 0v.982a2.023 2.023 0 0 1-2.024 2.018h-.205a2.023 2.023 0 0 1-2.023-2.018zM12 2.563c-5.238 0-9.5 4.26-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRialCircleBold;

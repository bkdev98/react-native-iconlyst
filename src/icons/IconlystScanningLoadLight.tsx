import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanningLoadLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 16.152v1.577a3.893 3.893 0 0 1-3.894 3.892h-1.289M2.999 16.152v1.577a3.893 3.893 0 0 0 3.893 3.892h1.257M2.999 9.09V7.513a3.89 3.89 0 0 1 3.893-3.892h1.289M21 9.09V7.513a3.89 3.89 0 0 0-3.892-3.892H15.85M14.505 15.462a3.788 3.788 0 0 1-6.293-2.841M9.493 9.779a3.788 3.788 0 0 1 6.294 2.841"
    />
  </Svg>
);
export default IconlystScanningLoadLight;

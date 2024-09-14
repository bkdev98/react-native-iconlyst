import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorWebcamVideoOutline = ({
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
      fill={props.color}
      d="M17.22 17.55H7.276a4.785 4.785 0 0 1-4.779-4.78V7.314a4.784 4.784 0 0 1 4.779-4.779h1.671a.75.75 0 1 1 0 1.5H7.281a3.28 3.28 0 0 0-3.279 3.28v5.455a3.283 3.283 0 0 0 3.28 3.28h9.941a3.283 3.283 0 0 0 3.28-3.28v-1.273a.75.75 0 1 1 1.5 0v1.277a4.785 4.785 0 0 1-4.784 4.775"
    />
    <Path
      fill={props.color}
      d="M16.676 10.22h-2.977a2.563 2.563 0 0 1-2.631-2.727v-2.23a2.56 2.56 0 0 1 2.63-2.727h2.978a2.564 2.564 0 0 1 2.632 2.727v2.23a2.564 2.564 0 0 1-2.632 2.727m-2.977-6.184a1.086 1.086 0 0 0-1.131 1.227v2.23a1.093 1.093 0 0 0 1.13 1.227h2.978a1.094 1.094 0 0 0 1.132-1.227v-2.23a1.092 1.092 0 0 0-1.132-1.227z"
    />
    <Path
      fill={props.color}
      d="M20.613 9.167c-.32 0-.628-.112-.875-.315l-1.656-1.36a.75.75 0 0 1-.047-1.114.756.756 0 0 1 .052-1.115l1.656-1.365A1.382 1.382 0 0 1 22 4.968l-.007 2.82a1.38 1.38 0 0 1-1.38 1.376zm-1.528-2.789 1.442 1.185-.024-2.346zM17.193 21.465H7.305a.75.75 0 0 1 0-1.5h9.888a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M9.495 21.466a.75.75 0 0 1-.741-.87l.637-3.917a.75.75 0 1 1 1.48.24l-.637 3.917a.75.75 0 0 1-.74.63M15.002 21.465a.75.75 0 0 1-.74-.629l-.638-3.917a.748.748 0 0 1 .914-.869.75.75 0 0 1 .566.628l.639 3.917a.752.752 0 0 1-.742.87"
    />
  </Svg>
);
export default IconlystMonitorWebcamVideoOutline;

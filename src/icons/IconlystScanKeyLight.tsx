import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanKeyLight = ({
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
      d="M3 9.09V7.513a3.89 3.89 0 0 1 3.893-3.892h1.29M3 16.152v1.578a3.89 3.89 0 0 0 3.893 3.891H8.15M21 16.152v1.578a3.89 3.89 0 0 1-3.892 3.891h-1.29M9.146 12.42l3.732-3.734a4 4 0 0 1-.105-.875 4.108 4.108 0 1 1 2.844 3.91l-.846.844h-.982v1.499h-1.523v.974a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.499-.5v-2.266a.5.5 0 0 1 .146-.353"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.025 7.852a1.066 1.066 0 0 0-1.093-1.251"
    />
  </Svg>
);
export default IconlystScanKeyLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanKeyTwoTone = ({
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
      d="M3 9.09V7.513a3.89 3.89 0 0 1 3.893-3.892h1.29M3 16.152v1.578a3.89 3.89 0 0 0 3.893 3.891H8.15M21 16.152v1.578a3.89 3.89 0 0 1-3.892 3.891h-1.29M21 9.09V7.513a3.89 3.89 0 0 0-3.893-3.892H15.85M9.957 10.624l.01.01"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.94 14.985-3.153-3.152a3.4 3.4 0 0 0 .09-.74 3.47 3.47 0 1 0-2.402 3.303l.714.713h.83v1.265h1.286v.823c0 .233.188.421.421.421h1.915a.42.42 0 0 0 .422-.421v-1.914a.42.42 0 0 0-.123-.298"
    />
  </Svg>
);
export default IconlystScanKeyTwoTone;

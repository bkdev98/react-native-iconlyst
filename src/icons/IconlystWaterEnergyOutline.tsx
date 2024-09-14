import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWaterEnergyOutline = ({
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
      d="M11.66 21.75c-1.87 0-3.85-.86-5.29-2.32-1.39-1.4-2.14-3.17-2.1-4.98C4.16 7.85 11 2.62 11.3 2.4c.27-.2.63-.2.9 0 .05.04 1.24.94 2.63 2.45.28.3.26.78-.04 1.06s-.78.26-1.06-.04c-.8-.87-1.53-1.52-1.98-1.9-1.48 1.25-6.06 5.55-5.98 10.48-.03 1.43.56 2.82 1.67 3.93 1.18 1.19 2.81 1.85 4.3 1.88h.06c2.4 0 4.8-1.71 5.63-4a.75.75 0 1 1 1.41.51c-1.03 2.85-4.05 4.98-7.03 4.98h-.15"
    />
    <Path
      fill={props.color}
      d="M11.981 18.13c-1.17 0-2.36-.5-3.19-1.34-.75-.76-1.15-1.73-1.13-2.74 0-.41.34-.74.75-.74s.74.33.74.75c-.01.79.37 1.35.7 1.68.56.57 1.41.88 2.15.89.43-.03.75.33.76.74 0 .41-.33.75-.74.76h-.05zM15.94 16.14c-.17 0-.33-.04-.49-.13-.41-.23-.61-.7-.49-1.15l.6-2.27h-1.15c-.33 0-.64-.16-.83-.43s-.24-.62-.13-.93c0-.01 0-.02.01-.03l1.68-4.1c.14-.37.52-.64.94-.64h2.25c.33 0 .63.16.82.43s.24.61.13.92l-.72 1.69h1.39c.4 0 .76.23.92.59s.1.78-.16 1.08l-4.05 4.62c-.2.22-.48.34-.76.34zm-.8-5.05h1.06c.32 0 .61.15.81.4.19.25.25.57.17.87l-.23.87L18.9 11h-1.05a1.015 1.015 0 0 1-.96-1.35l.72-1.69h-1.19zm1.41-3.44v.02z"
    />
  </Svg>
);
export default IconlystWaterEnergyOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReelsBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21h4.007c2.792 0 4.543-1.977 4.543-4.775v-8.45C20.8 4.979 19.058 3 16.257 3H8.245C5.444 3 3.7 4.978 3.7 7.776v8.45C3.7 19.022 5.444 21 8.244 21h.943"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.761 11.468c-.85-.336-1.561.082-1.665.92a16.4 16.4 0 0 0 0 3.518c.114.87.897 1.24 1.665.916a8.8 8.8 0 0 0 2.63-1.65c.656-.594.672-1.437 0-2.054M3.707 7.477h17.086M9.273 7.476V3m5.954 4.476V3"
    />
  </Svg>
);
export default IconlystReelsBroken;

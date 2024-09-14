import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaCloseLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.595 4.79 1.246-1.244C19.006 2.38 21 3.206 21 4.854V19.15a1.85 1.85 0 0 1-1.85 1.85H4.854c-1.65 0-2.475-1.993-1.309-3.159l1.464-1.465M13.173 12.663l-4.48-4.48m0 4.48 4.48-4.48"
    />
  </Svg>
);
export default IconlystAntenaCloseLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRCodeBroken = ({
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
      d="M7.899 3.24a1.85 1.85 0 0 1 1.85 1.85v3.05A1.85 1.85 0 0 1 7.9 9.99H4.85A1.85 1.85 0 0 1 3 8.14V5.09a1.85 1.85 0 0 1 1.85-1.85M6.375 6.615v.012M6.375 17.866v.011M7.899 21.24a1.85 1.85 0 0 0 1.85-1.85v-3.05a1.85 1.85 0 0 0-1.85-1.85H4.85A1.85 1.85 0 0 0 3 16.34v3.05a1.85 1.85 0 0 0 1.85 1.85M21 19.39a1.85 1.85 0 0 1-1.851 1.85H16.1a1.85 1.85 0 0 1-1.851-1.85v-3.05a1.85 1.85 0 0 1 1.85-1.85h3.049a1.85 1.85 0 0 1 1.85 1.85M17.625 17.865v-.011M14.25 3.24v.012M21 6.615V4.711c0-.812-.659-1.47-1.47-1.47h-1.905M21 9.99h-3.375M17.625 6.615h-1.904c-.812 0-1.471.659-1.471 1.47V9.99"
    />
  </Svg>
);
export default IconlystQRCodeBroken;

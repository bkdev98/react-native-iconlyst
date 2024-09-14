import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWindLight = ({
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
      d="M12.106 19.469c-1.81-.631-3.482-.68-4.758-.55M19.311 19.469s-1.337.558-3.327.605M4.312 13.315s3.275-1.37 7.204 0c1.107.385 2.162.554 3.107.597M3.055 16.934s1.937-1.397 5.378-1.036"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.76 16.645c1.648.35 3.466.259 4.926-.326a4.04 4.04 0 0 0 2.369-3.68c0-2.529-1.786-4.013-3.996-4.033 0-1.59-1.248-4.77-4.77-4.77s-4.77 3.18-4.77 4.77c-1.28.012-2.419.515-3.15 1.43"
    />
  </Svg>
);
export default IconlystCloudWindLight;

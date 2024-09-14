import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingOfficeTwoTone = ({
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
      d="M15.97 9h4.669c.735 0 1.332.597 1.332 1.331v9.338c0 .735-.597 1.331-1.332 1.331H5.302a1.33 1.33 0 0 1-1.331-1.331V7.228c0-.735.595-1.331 1.33-1.331h4.67V4.33c0-.735.595-1.331 1.331-1.331h3.337c.735 0 1.331.596 1.331 1.331zm0 0v12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.968 16.95.002.01M7.968 9.695l.002.01M7.968 13.363l.002.01M11.97 16.95l.003.01M11.97 9.695l.003.01M11.97 13.363l.003.01M18.965 16.95l.002.01M18.965 13.363l.002.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBuildingOfficeTwoTone;

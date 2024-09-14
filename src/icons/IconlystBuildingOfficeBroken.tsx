import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingOfficeBroken = ({
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
      d="m14.782 16.208.002.01m-4.128-.01.002.01M14.782 12.299l.002.01m-4.128-.01.002.01M14.782 8.303l.002.01m-4.128-.01.002.01M4.125 21h17.191M19.914 18.23V5.168A2.17 2.17 0 0 0 17.745 3H7.698a2.17 2.17 0 0 0-2.17 2.168v3.958M5.527 13.082v7.916"
    />
  </Svg>
);
export default IconlystBuildingOfficeBroken;

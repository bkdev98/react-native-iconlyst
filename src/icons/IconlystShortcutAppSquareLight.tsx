import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShortcutAppSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.762 11.021-3.817 2.723a1.63 1.63 0 0 1-1.89 0L7.238 11.02a.81.81 0 0 1 0-1.32l3.817-2.723a1.63 1.63 0 0 1 1.89 0l3.817 2.723a.81.81 0 0 1 0 1.32"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.762 14.299-3.817 2.722a1.63 1.63 0 0 1-1.89 0L7.238 14.3a.81.81 0 0 1 0-1.32l3.817-2.724a1.63 1.63 0 0 1 1.89 0l3.817 2.723a.81.81 0 0 1 0 1.32"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShortcutAppSquareLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSquareBroken = ({
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
      d="M11.999 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21h-.704"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.726 10.64a1.36 1.36 0 0 0-1.36-1.359h-1.772V12h1.772a1.36 1.36 0 0 0 1.36-1.36M16.726 13.36a1.36 1.36 0 0 0-1.36-1.36h-1.772v2.719h1.772a1.36 1.36 0 0 0 1.36-1.36M8.384 14.684H7.277V9.29h1.107a2.697 2.697 0 0 1 0 5.395"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseSquareBroken;

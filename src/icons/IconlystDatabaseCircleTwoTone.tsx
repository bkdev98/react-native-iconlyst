import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseCircleTwoTone = ({
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
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.726 10.64a1.36 1.36 0 0 0-1.36-1.359h-1.772V12h1.772a1.36 1.36 0 0 0 1.36-1.36M16.726 13.36a1.36 1.36 0 0 0-1.36-1.36h-1.772v2.719h1.772a1.36 1.36 0 0 0 1.36-1.36M8.384 14.683H7.277V9.288h1.107a2.697 2.697 0 0 1 0 5.395"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseCircleTwoTone;

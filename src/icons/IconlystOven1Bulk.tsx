import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOven1Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.91 2.25h8.18c2.62 0 4.74 2.13 4.74 4.74v10.02c0 2.62-2.12 4.74-4.74 4.74H7.91c-2.62 0-4.74-2.12-4.74-4.74V6.99c0-2.61 2.12-4.74 4.74-4.74m11.12 5.48H4.97a.3.3 0 0 1-.3-.3v-.44c0-1.78 1.45-3.24 3.24-3.24h8.18c1.79 0 3.24 1.46 3.24 3.24v.44a.3.3 0 0 1-.3.3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.725 18.769c1.868 0 2.563-1.03 2.55-2.946v-2.204c0-1.916-.682-2.958-2.55-2.958h-7.45c-1.856 0-2.55 1.066-2.55 3.006v2.156c0 1.916.694 2.946 2.55 2.946z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.235 6.785h-.01a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.331.75-.745.75M15.785 6.785h-.01a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.33.75-.745.75M12.01 6.785H12a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.331.75-.745.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOven1Bulk;

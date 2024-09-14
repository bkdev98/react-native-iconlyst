import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOven1Bold = ({
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
      d="M19.33 7.43a.3.3 0 0 1-.3.3H4.97a.3.3 0 0 1-.3-.3v-.44c0-1.78 1.45-3.24 3.24-3.24h8.18c1.79 0 3.24 1.46 3.24 3.24zm-2.09 8.21c.01 1.6-.57 2.46-2.13 2.46H8.89c-1.55 0-2.13-.86-2.13-2.46v-1.8c0-1.62.58-2.51 2.13-2.51h6.22c1.56 0 2.13.87 2.13 2.47zM16.09 2.25H7.91c-2.62 0-4.74 2.13-4.74 4.74v10.02c0 2.62 2.12 4.74 4.74 4.74h8.18c2.62 0 4.74-2.12 4.74-4.74V6.99c0-2.61-2.12-4.74-4.74-4.74"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.235 6.785h-.01a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.331.75-.745.75M15.785 6.785h-.01a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.33.75-.745.75M12.01 6.785H12a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.331.75-.745.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOven1Bold;

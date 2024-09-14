import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUXOutline = ({
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
      fill={props.color}
      d="M6.89 8.4a.75.75 0 0 1 .75.75v3.55a1.5 1.5 0 0 0 3 0V9.15a.75.75 0 0 1 1.5 0v3.55a3 3 0 0 1-6 0V9.15a.75.75 0 0 1 .75-.75M13.453 8.54a.75.75 0 0 1 1.046.174l1.39 1.946 1.39-1.946a.745.745 0 0 1 1.046-.174.75.75 0 0 1 .174 1.046l-1.688 2.364 1.688 2.364a.75.75 0 1 1-1.22.872l-1.39-1.946-1.39 1.946a.75.75 0 1 1-1.22-.872l1.689-2.364-1.689-2.364a.75.75 0 0 1 .174-1.046"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.29 2c5.384 0 9.75 4.365 9.75 9.75s-4.366 9.75-9.75 9.75c-5.386 0-9.75-4.365-9.75-9.75S6.903 2 12.29 2m8.25 9.75a8.25 8.25 0 1 0-16.502 0 8.25 8.25 0 0 0 16.501 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUXOutline;

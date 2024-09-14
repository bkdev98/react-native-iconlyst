import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst24HourDeliveryBold = ({
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
      fillRule="evenodd"
      d="M22.039 9.404a.75.75 0 0 0-1.43.456 8.25 8.25 0 0 1-1.34 7.559c-2.784 3.598-7.973 4.26-11.57 1.479-3.598-2.783-4.26-7.973-1.478-11.57a8.21 8.21 0 0 1 9.165-2.782l-.361.82a.75.75 0 0 0 .108.78.75.75 0 0 0 .745.254l2.518-.571a.747.747 0 0 0 .51-1.057L17.72 2.31c-.129-.264-.413-.446-.69-.424a.75.75 0 0 0-.674.449l-.364.83c-3.873-1.38-8.3-.19-10.958 3.246-3.287 4.25-2.503 10.385 1.748 13.673a9.7 9.7 0 0 0 5.953 2.033c2.915 0 5.803-1.3 7.72-3.78a9.75 9.75 0 0 0 1.584-8.933"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.505 13.164.931-1.294v1.294zm1.681 2.79a.75.75 0 0 0 .75-.75v-.54h.343a.75.75 0 0 0 0-1.5h-.343V9.542a.75.75 0 0 0-1.36-.438l-3.143 4.372a.75.75 0 0 0 .61 1.188h2.393v.54c0 .413.336.75.75.75M10.244 13.552c.774-.527 1.74-1.183 1.74-2.481a2.26 2.26 0 0 0-2.258-2.257 2.26 2.26 0 0 0-2.257 2.257.75.75 0 0 0 1.5 0 .757.757 0 0 1 1.514 0c0 .457-.33.729-1.083 1.24-.814.554-1.93 1.314-1.93 2.873 0 .414.336.75.75.75h3.013a.75.75 0 0 0 0-1.5H9.197c.213-.302.568-.557 1.047-.882"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst24HourDeliveryBold;

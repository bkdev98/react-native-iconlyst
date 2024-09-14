import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoat1Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.43 16.479-2.49 4.03a2.3 2.3 0 0 1-1.93 1.07H6.24c-.91 0-1.72-.54-2.08-1.38l-1.62-3.79a.493.493 0 0 1 .46-.69h18a.5.5 0 0 1 .44.25c.09.16.08.35-.01.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M19.08 15.72h-9.4c0-.06.02-.12.05-.17 1.31-2.59 1.74-7.43 1.06-12.06-.02-.18.05-.36.19-.47s.34-.13.5-.07c.08.04 8.05 3.44 7.6 12.77"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoat1Bulk;

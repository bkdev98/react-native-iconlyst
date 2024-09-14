import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagLightcurved = ({
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
      d="M16.364 6.87a4.32 4.32 0 0 0-4.32-4.32 4.32 4.32 0 0 0-4.34 4.3v.02M14.973 11.374h-.046M9.142 11.374h-.046"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.034 21.49c-6.508 0-7.257-2.05-8.718-7.468-1.466-5.434 1.475-7.467 8.718-7.467s10.184 2.033 8.718 7.467c-1.46 5.417-2.21 7.467-8.718 7.467"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBagLightcurved;

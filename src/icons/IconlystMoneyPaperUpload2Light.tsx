import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperUpload2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.423 9.275h1.166c1.883 0 3.064 1.334 3.064 3.223v5.342c0 1.888-1.175 3.221-3.064 3.221H6.413c-1.89 0-3.066-1.333-3.066-3.22v-5.343c0-1.889 1.176-3.223 3.065-3.223H8.08M14.055 5.116l-2.054-2.053-2.054 2.053M12.002 8.885V3.063M6.438 11.928h1.348M17.563 18.41h-1.348"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.8 15.169a2.2 2.2 0 1 1 4.4-.001 2.2 2.2 0 0 1-4.4 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperUpload2Light;

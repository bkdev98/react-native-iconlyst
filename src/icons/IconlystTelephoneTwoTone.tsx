import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelephoneTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.498 7.33c-4.447 0-2.38 3.39-5.21 3.391-2.73 0-3.788.512-3.788-2.946.043-.391-.676-3.863 8.998-3.865 9.674 0 8.96 3.47 9.002 3.86 0 3.469-1.058 2.948-3.788 2.949-2.831 0-.767-3.39-5.214-3.39"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.06 11.012.747 5.002c.46 2.366-1.503 4.076-3.888 4.076H9.07c-2.385 0-4.185-1.71-3.87-4.076l.738-5.002"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.716 14.002a2.217 2.217 0 1 0-4.433 0 2.217 2.217 0 0 0 4.433 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelephoneTwoTone;

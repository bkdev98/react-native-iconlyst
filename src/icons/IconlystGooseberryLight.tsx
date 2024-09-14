import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooseberryLight = ({
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
      d="M8.445 18.463c1.858 1.858 4.567 2.163 6.05.68s1.178-4.192-.68-6.05c-1.859-1.859-4.567-2.163-6.05-.68s-1.179 4.191.68 6.05M15.172 10.305c2.156.577 4.277-.349 4.738-2.069.46-1.72-.913-3.583-3.07-4.16-2.155-.578-4.276.348-4.737 2.068s.913 3.583 3.069 4.16"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.159 16.637c1.858 1.858 3.641 3.2 4.336 2.506s-.479-2.447-2.337-4.305c-1.859-1.859-3.699-3.12-4.393-2.426-.695.695.535 2.366 2.394 4.225M7.735 12.43c-.17-.224-1.521-1.524-4.735-.721M11.958 6.296c-.743 0-5.525.55-7.358 4.876M14.766 18.966l.682.35M14.318 19.414l.35.682M20.07 8.361l.644.417M20.234 7.75 21 7.712"
    />
  </Svg>
);
export default IconlystGooseberryLight;

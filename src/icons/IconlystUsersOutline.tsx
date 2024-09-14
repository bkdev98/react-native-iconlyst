import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsersOutline = ({
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
      d="M18.29 14.322a.75.75 0 0 1 .886-.584c2.774.57 3.924 2.488 3.924 4.206a.75.75 0 0 1-1.5 0c0-.987-.63-2.307-2.725-2.736a.75.75 0 0 1-.584-.886M17.77 5.977a.75.75 0 0 1 .945-.484 3.502 3.502 0 0 1 .15 6.608.75.75 0 1 1-.527-1.404 2 2 0 0 0 1.3-1.866M17.77 5.977a.75.75 0 0 0 .483.944zm.483.944a2 2 0 0 1 1.384 1.91zM7.876 17.398c-.846.766-1.185 1.742-1.185 2.601a.75.75 0 0 1-1.5 0c0-1.25.494-2.64 1.678-3.713 1.186-1.075 2.997-1.77 5.53-1.77s4.343.69 5.53 1.76c1.185 1.067 1.679 2.455 1.679 3.705a.75.75 0 0 1-1.5 0c0-.86-.338-1.83-1.184-2.592-.844-.76-2.262-1.373-4.524-1.373-2.26 0-3.679.616-4.524 1.382M12.402 4.75a3.375 3.375 0 1 0-.002 6.75 3.375 3.375 0 0 0 .002-6.75M7.525 8.125a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0M6.51 14.322a.75.75 0 0 0-.886-.584c-2.773.57-3.923 2.488-3.923 4.206a.75.75 0 0 0 1.5 0c0-.987.63-2.307 2.725-2.736a.75.75 0 0 0 .584-.886M7.03 5.977a.75.75 0 0 0-.944-.484 3.502 3.502 0 0 0-.15 6.608.75.75 0 1 0 .526-1.404 2 2 0 0 1-1.299-1.866M7.03 5.977a.75.75 0 0 1-.483.944zm-.483.944a2 2 0 0 0-1.384 1.91z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUsersOutline;

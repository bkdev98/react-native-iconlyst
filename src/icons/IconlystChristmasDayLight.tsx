import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasDayLight = ({
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
      d="M15.912 3.615v3.223M8.087 3.615v3.223"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.486 5.102H7.522c-2.633 0-4.277 1.467-4.277 4.162v8.113c0 2.738 1.644 4.238 4.277 4.238h8.956c2.64 0 4.277-1.475 4.277-4.17V9.262c.007-2.695-1.628-4.161-4.27-4.161"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.345 14.664q-.817 1.663-1.966 2.901h7.241q-1.148-1.238-1.966-2.9h1.41C13.896 13.296 12.893 11.67 12 9.89c-.895 1.781-1.898 3.407-3.064 4.774zM11.998 17.565v3.553M18.043 15.878l.01.01M6.52 11.898l.578-.577M17.094 10.174l-.694.694"
    />
  </Svg>
);
export default IconlystChristmasDayLight;

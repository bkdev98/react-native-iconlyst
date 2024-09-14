import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.02 10.714-.56.63c-.02-.03-3.46-3.08-3.5-3.1l.56-.63a2.35 2.35 0 0 1 3.3-.2c.52.46.79 1.11.79 1.75 0 .55-.19 1.1-.59 1.55m-5.42 6.13c-.74.83-1.74 1.03-2.53 1.03-.72 0-1.28-.17-1.29-.17a.12.12 0 0 1-.07-.07c-.01-.02-1.04-2.27.39-3.89l3.88-4.39c.03.03 3.47 3.08 3.5 3.1zm.65-13.99c-7.2 0-9.75 2.55-9.75 9.75s2.55 9.75 9.75 9.75 9.75-2.55 9.75-9.75-2.55-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEditSquareBoldcurved;

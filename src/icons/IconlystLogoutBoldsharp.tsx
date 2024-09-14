import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutBoldsharp = ({
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
      d="m18.48 7.665-1.057 1.063 2.534 2.522h-6.202v1.5h6.202l-2.534 2.524 1.059 1.063L22.837 12zM7.495 11.25h6.26v-9H2.235v19.5h11.52v-9h-6.26z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogoutBoldsharp;

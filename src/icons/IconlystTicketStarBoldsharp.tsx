import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarBoldsharp = ({
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
      d="m14.724 15.928-2.475-1.217-2.475 1.217.393-2.731-1.923-1.978 2.718-.47 1.287-2.44 1.288 2.44 2.717.47-1.923 1.978zm6.776-4.882h.5V4.635H2.5v6.489H3c.863 0 1.513.607 1.513 1.412 0 .82-.679 1.488-1.513 1.488h-.5v6.41H22v-6.41h-.5c-.835 0-1.513-.668-1.513-1.488 0-.822.678-1.49 1.513-1.49"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketStarBoldsharp;

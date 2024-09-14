import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftMouseBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.006 10.428H5.105a.3.3 0 0 0-.3.3v5.494a5.11 5.11 0 0 0 5.104 5.104h4.183a5.11 5.11 0 0 0 5.104-5.105v-5.493a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.751 8.628a.3.3 0 0 0 .3.3h5.844a.3.3 0 0 0 .3-.3v-.851a5.11 5.11 0 0 0-5.103-5.103h-1.04a.3.3 0 0 0-.3.3zM10.951 8.928a.3.3 0 0 0 .3-.3V2.974a.3.3 0 0 0-.3-.3H9.908a5.11 5.11 0 0 0-5.104 5.104v.85a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftMouseBulk;

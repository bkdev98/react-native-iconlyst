import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserShieldBulk = ({
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
      d="M19.774 14.737c-.304-.304-2.332-.913-2.84-.913-.405 0-2.433.61-2.84.913-.303.304-.303.608-.303 1.318v1.42c0 2.535 2.738 3.245 2.94 3.347h.204c.1 0 2.94-.812 2.94-3.347v-1.52c.102-.61.102-.914-.101-1.218M16.123 7.84c.101-2.534-2.028-4.664-4.665-4.664A4.653 4.653 0 0 0 6.793 7.84a4.653 4.653 0 0 0 4.665 4.665 4.653 4.653 0 0 0 4.665-4.665"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.444 14.535c-1.42 0-2.738.203-3.752.507-.61.203-1.217.507-1.623.913a2.45 2.45 0 0 0-.71 1.724c0 .71.203 1.217.71 1.724.406.405 1.014.71 1.623.912 1.014.305 2.332.507 3.752.507.608 0 1.014-.405 1.014-1.014V15.55c0-.608-.406-1.014-1.014-1.014"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserShieldBulk;

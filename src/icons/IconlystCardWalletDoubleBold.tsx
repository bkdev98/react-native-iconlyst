import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletDoubleBold = ({
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
      d="M14.303 13.65H9.698c-.781 0-1.25.488-1.307 1.29h1.654a.75.75 0 0 1 .75.75c0 .709.53 1.24 1.206 1.24s1.204-.531 1.204-1.21c0-.413.337-.78.75-.78h1.654c-.058-.802-.526-1.29-1.306-1.29M15.63 8.5c0-.896-.496-1.43-1.327-1.43H9.697c-.832 0-1.33.534-1.33 1.43v.1h7.264z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.164 10.1H5.839a.75.75 0 0 1 0-1.5h1.029v-.1c0-1.724 1.164-2.929 2.829-2.929h4.606c1.665 0 2.828 1.205 2.828 2.929v.1h1.033a.75.75 0 0 1 0 1.5m-.005 6.34h-1.725c-.019.001-.034.011-.053.011s-.035-.01-.053-.011h-1.715A2.71 2.71 0 0 1 12 18.43a2.71 2.71 0 0 1-2.608-1.99H7.671c-.018.001-.034.011-.053.011s-.035-.01-.053-.011H5.842a.75.75 0 0 1 0-1.5h1.039c.067-1.647 1.201-2.789 2.816-2.789h4.606c1.614 0 2.747 1.142 2.815 2.789h1.041a.75.75 0 0 1 0 1.5M16.217 2.5H7.783C4.623 2.5 2.5 4.722 2.5 8.03v7.941c0 3.308 2.123 5.529 5.283 5.529h8.433c3.161 0 5.284-2.221 5.284-5.529V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardWalletDoubleBold;

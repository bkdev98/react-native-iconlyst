import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxDownBold = ({
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
      d="m17.165 12.329-1.664 1.67c-.023.023-.054.034-.08.053-.051.04-.101.083-.162.109a.8.8 0 0 1-.289.059l-.001-.001v.001c-.022 0-.041-.011-.062-.013a.8.8 0 0 1-.226-.046.7.7 0 0 1-.244-.163l-1.664-1.669a.75.75 0 1 1 1.063-1.059l.383.384V7.28a.75.75 0 0 1 1.5 0v4.375l.384-.385a.749.749 0 1 1 1.062 1.059m-.625 5.141H7.463a.75.75 0 0 1 0-1.5h9.077a.75.75 0 0 1 0 1.5m-9.702-6.201a.75.75 0 0 1 1.06.001l.384.385V7.28a.75.75 0 0 1 1.5 0v4.376l.384-.386a.75.75 0 1 1 1.062 1.059l-1.664 1.67c-.023.023-.054.034-.08.053-.051.04-.101.083-.161.109a.8.8 0 0 1-.29.059c-.022 0-.041-.011-.062-.013a.8.8 0 0 1-.227-.046.7.7 0 0 1-.243-.163l-1.665-1.669a.75.75 0 0 1 .002-1.06m9.38-8.769H7.783C4.623 2.5 2.5 4.722 2.5 8.03v7.94c0 3.307 2.123 5.53 5.283 5.53h8.435c3.159 0 5.282-2.223 5.282-5.53V8.03c0-3.308-2.123-5.53-5.282-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxDownBold;

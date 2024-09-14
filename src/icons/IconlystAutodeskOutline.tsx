import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAutodeskOutline = ({
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
      d="M6.96 3.697a1.76 1.76 0 0 1 1.62-1.072h4.46A1.76 1.76 0 0 1 14.662 3.7l7.029 16.621A.75.75 0 0 1 21 21.363h-4.245a1.76 1.76 0 0 1-1.622-1.074l-1.302-3.075-6.386 3.904a1.76 1.76 0 0 1-2.453-.64l-2.516-4.473.654-.367-.654.367a1.76 1.76 0 0 1-.086-1.551zl.69.294zm6.164 11.848-2.304-5.44-2.435 5.44zm-1.891 1.5H7.228a.75.75 0 0 1-.685-1.057l3.611-8.067a.75.75 0 0 1 1.375.014l4.985 11.77a.26.26 0 0 0 .24.158h3.114L13.282 4.284a.26.26 0 0 0-.24-.159H8.58a.26.26 0 0 0-.24.159L3.77 15.04a.26.26 0 0 0 .012.23L6.3 19.744a.26.26 0 0 0 .364.094z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAutodeskOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallingBoldcurved = ({
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
      d="M14.86 2.36a.744.744 0 0 0-.827.662.75.75 0 0 0 .662.828 7.18 7.18 0 0 1 6.378 6.371.75.75 0 1 0 1.49-.168A8.67 8.67 0 0 0 14.86 2.36"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.542 10.292a.75.75 0 0 0 1.473-.287 5.16 5.16 0 0 0-4.094-4.093.75.75 0 0 0-.285 1.473 3.66 3.66 0 0 1 2.905 2.907M15.776 14.452c-.998.486-1.862.908-4.11-1.34-2.245-2.246-1.825-3.11-1.338-4.108.705-1.448.99-2.765-2.212-5.402-.765-.625-1.595-.865-2.462-.697-1.833.343-3.128 2.383-3.126 2.383C1.716 6.424.604 9.84 7.77 17.008c4.714 4.715 7.806 5.846 9.682 5.846.976 0 1.623-.306 1.997-.575.02-.012 2.078-1.287 2.426-3.156.162-.87-.074-1.696-.7-2.461-2.636-3.2-3.953-2.915-5.4-2.21"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallingBoldcurved;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOntologyBold = ({
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
      d="M17.122 15.698a.278.278 0 0 1-.475.195L9.162 8.315a.28.28 0 0 1-.081-.205.28.28 0 0 1 .094-.198 4.7 4.7 0 0 1 3.286-1.18c2.568.046 4.662 2.27 4.662 4.957zm-2.296.391a4.71 4.71 0 0 1-3.287 1.18c-2.567-.046-4.661-2.27-4.661-4.958V8.303a.277.277 0 0 1 .475-.195l7.486 7.578a.277.277 0 0 1-.013.403M16.217 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOntologyBold;

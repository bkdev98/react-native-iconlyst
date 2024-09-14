import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts1Outline = ({
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
      d="M5.1 4.552c.963-1.01 2.346-1.518 4.013-1.513h8.062c1.666 0 3.052.51 4.017 1.52.96 1.007 1.413 2.413 1.413 4.03v8.508c0 1.617-.463 3.024-1.438 4.03-.978 1.01-2.38 1.52-4.068 1.52H9.112c-1.668 0-3.051-.513-4.013-1.525-.957-1.007-1.408-2.413-1.408-4.025V8.58c0-1.616.45-3.023 1.408-4.028m1.085 1.035c-.621.652-.994 1.645-.994 2.993v8.517c0 1.342.373 2.336.995 2.991.617.649 1.569 1.058 2.926 1.058h7.987c1.384 0 2.36-.412 2.991-1.063.635-.656 1.015-1.648 1.015-2.986V8.589c0-1.346-.375-2.34-.998-2.993-.62-.649-1.574-1.057-2.932-1.057H9.11c-1.358-.004-2.31.402-2.925 1.048"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.293 16.446a1.69 1.69 0 0 0-.572 1.25.75.75 0 1 1-1.5 0c0-.797.315-1.682 1.065-2.361.752-.682 1.871-1.097 3.38-1.097 1.506 0 2.626.412 3.378 1.09a3.17 3.17 0 0 1 1.067 2.359.75.75 0 0 1-1.5 0c0-.408-.16-.875-.571-1.245s-1.138-.704-2.375-.704c-1.234 0-1.962.336-2.372.708M13.665 8.738a1.61 1.61 0 1 0 0 3.221 1.61 1.61 0 0 0 0-3.22m-3.11 1.61a3.11 3.11 0 1 1 6.22.001 3.11 3.11 0 0 1-6.22 0M2.104 8.777a.75.75 0 0 1 .75-.75h3.31a.75.75 0 0 1 0 1.5h-3.31a.75.75 0 0 1-.75-.75m0 8.128a.75.75 0 0 1 .75-.75h3.31a.75.75 0 0 1 0 1.5h-3.31a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystContacts1Outline;

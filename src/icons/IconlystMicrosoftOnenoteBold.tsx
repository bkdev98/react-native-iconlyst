import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftOnenoteBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.644 9.526v2.579a.3.3 0 0 0 .3.3h3.63a.3.3 0 0 0 .3-.3V9.58a.3.3 0 0 0-.3-.3h-3.69a.24.24 0 0 0-.24.245M16.645 17.032a.3.3 0 0 0 .3.3h3.63a.3.3 0 0 0 .3-.3v-2.828a.3.3 0 0 0-.3-.3h-3.63a.3.3 0 0 0-.3.3zM16.644 21.141a.3.3 0 0 0 .3.3h.845c1.521 0 2.626-.88 2.968-2.267.044-.178-.097-.342-.28-.342h-3.533a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.785 3.577h-7.95c-1.628 0-2.816 1.064-3.049 2.641a4 4 0 0 0-.034.37.29.29 0 0 0 .293.3h2.48c1.97 0 3.34 1.43 3.34 3.47v4.3c0 2.05-1.37 3.47-3.34 3.47h-2.78c0 .272.015.544.065.813.281 1.503 1.446 2.496 3.025 2.496h5.01a.3.3 0 0 0 .3-.3V9.527c0-.96.78-1.75 1.74-1.75h3.69a.3.3 0 0 0 .3-.3v-.68c0-1.89-1.27-3.22-3.09-3.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.055 15.047c-.09.03-.17.04-.26.04-.22 0-.43-.09-.57-.26l-1.79-2.1v1.55c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-3.6c0-.31.2-.59.49-.7.3-.11.63-.02.83.22l.99 1.16.48.56.32.38v-1.62a.749.749 0 1 1 1.5 0v3.66c0 .32-.2.6-.49.71m2.31-.39v-4.3c0-1.23-.69-1.97-1.84-1.97h-4.56c-1.14 0-1.84.76-1.84 1.97v4.3c0 1.22.7 1.97 1.84 1.97h4.56c1.14 0 1.84-.75 1.84-1.97"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftOnenoteBold;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagAiOutline = ({
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
      d="M3.698 4.144c.958-1.027 2.32-1.601 3.928-1.601h8.16c1.61 0 2.974.574 3.931 1.602.951 1.021 1.445 2.43 1.445 4.01v3.923a.75.75 0 0 1-1.5 0V8.155c0-1.27-.394-2.291-1.043-2.988-.643-.691-1.593-1.124-2.834-1.124H7.626c-1.236 0-2.186.432-2.83 1.124-.65.698-1.046 1.72-1.046 2.988v7.688c0 1.27.393 2.291 1.042 2.988.643.691 1.593 1.124 2.834 1.124h4.522a.75.75 0 0 1 0 1.5H7.626c-1.612 0-2.975-.574-3.932-1.602-.95-1.022-1.444-2.43-1.444-4.01V8.155c0-1.58.496-2.99 1.448-4.01"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.242 8.174a.75.75 0 0 1 .75.75 2.713 2.713 0 1 0 5.426 0 .75.75 0 0 1 1.5 0 4.212 4.212 0 1 1-8.426 0 .75.75 0 0 1 .75-.75M17.56 21.455a.75.75 0 0 0 .704-.49l.11-.3a3.39 3.39 0 0 1 1.999-2.002l.3-.11a.75.75 0 0 0 0-1.407l-.3-.111a3.39 3.39 0 0 1-1.998-2.002l-.111-.3a.75.75 0 0 0-1.407 0l-.111.3a3.39 3.39 0 0 1-1.999 2.002l-.3.11a.75.75 0 0 0 0 1.407l.3.111a3.39 3.39 0 0 1 1.999 2.002l.11.3a.75.75 0 0 0 .704.49m-1.169-3.606c.454-.32.849-.716 1.17-1.17.32.454.715.85 1.168 1.17-.453.32-.849.716-1.169 1.17a4.9 4.9 0 0 0-1.169-1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagAiOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNpmOutline = ({
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
      d="M5.5 4.25c-.69 0-1.25.56-1.25 1.25v13c0 .69.56 1.25 1.25 1.25h5.745a.25.25 0 0 0 .25-.25V8.722c0-.967.783-1.75 1.75-1.75h2.593c.966 0 1.75.783 1.75 1.75V19.5c0 .138.111.25.25.25H19.5a.25.25 0 0 0 .25-.25v-14c0-.69-.56-1.25-1.25-1.25zM2.75 5.5A2.75 2.75 0 0 1 5.5 2.75h13a2.75 2.75 0 0 1 2.75 2.75v14a1.75 1.75 0 0 1-1.75 1.75h-1.663a1.75 1.75 0 0 1-1.75-1.75V8.722a.25.25 0 0 0-.25-.25h-2.592a.25.25 0 0 0-.25.25V19.5a1.75 1.75 0 0 1-1.75 1.75H5.5a2.75 2.75 0 0 1-2.75-2.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNpmOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightClickMouseOutline = ({
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
      d="m6.305 9.295-.001 5.408c-.001 3.02 2.617 5.547 5.945 5.547 3.327 0 5.945-2.525 5.945-5.544l.002-5.41c0-3.02-2.617-5.546-5.945-5.546S6.306 6.275 6.305 9.295m-1.5 0c0-3.934 3.378-7.045 7.446-7.045s7.446 3.113 7.445 7.047l-.002 5.409c0 3.933-3.378 7.044-7.445 7.044-4.069 0-7.446-3.113-7.445-7.047z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.254a.75.75 0 0 1 .75.75V8.85c0 .085.07.156.158.156h5.79a.75.75 0 1 1 0 1.5h-5.79c-.915 0-1.658-.74-1.658-1.656V3.004a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightClickMouseOutline;

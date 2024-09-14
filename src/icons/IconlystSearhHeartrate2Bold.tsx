import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearhHeartrate2Bold = ({
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
      d="M19.523 11.568a8.413 8.413 0 0 1-8.39 7.77 8.42 8.42 0 1 1 8.38-9.27h-1.57c-.26 0-.5.14-.63.35l-.65 1.02-1.34-2.04a.77.77 0 0 0-.62-.34c-.22-.04-.48.12-.62.33l-2.07 2.99-2.19-4.55a.76.76 0 0 0-.65-.43c-.28 0-.54.14-.68.39l-1.89 3.35c-.2.36-.07.81.29 1.02.36.2.82.07 1.02-.29l1.18-2.1 2.13 4.42c.12.24.35.4.62.42h.06c.24 0 .47-.12.61-.32l2.17-3.13 1.37 2.08c.14.21.37.33.62.33h.01c.25 0 .49-.13.63-.34l1.04-1.66zM20.993 19.794l-1.984-1.979a1.001 1.001 0 0 0-1.412 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearhHeartrate2Bold;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockHideOutline = ({
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
      d="M19.502 22.742a.75.75 0 0 1-.53-.22L4.333 7.884a.75.75 0 1 1 1.061-1.06L20.033 21.46a.75.75 0 0 1-.531 1.281M16.59 11.028a.75.75 0 0 1-.75-.75V8.224a3.61 3.61 0 0 0-3.614-3.55h-.044a3.59 3.59 0 0 0-3.057 1.793.75.75 0 0 1-1.3-.748 5.1 5.1 0 0 1 4.339-2.545h.062a5.113 5.113 0 0 1 5.11 5.04v2.064a.75.75 0 0 1-.746.75"
    />
    <Path
      fill={props.color}
      d="M14.935 22.44H9.607a7.66 7.66 0 0 1-3.3-.366 3.73 3.73 0 0 1-1.74-1.741 7.66 7.66 0 0 1-.366-3.3v-2.104a7.7 7.7 0 0 1 .366-3.3 3.72 3.72 0 0 1 1.741-1.74c.45-.203.936-.315 1.429-.33a.752.752 0 0 1 .109 1.5 2.4 2.4 0 0 0-.89.186c-.453.218-.82.584-1.038 1.038a7.3 7.3 0 0 0-.217 2.648v2.107a7.3 7.3 0 0 0 .217 2.648c.22.453.585.819 1.039 1.038a7.5 7.5 0 0 0 2.648.218h5.328a7.3 7.3 0 0 0 2.647-.218q.233-.112.433-.273a.75.75 0 1 1 .943 1.166q-.336.27-.726.459a7.65 7.65 0 0 1-3.295.364M19.59 17.97a.75.75 0 0 1-.75-.75v-2.288a7.3 7.3 0 0 0-.218-2.649 2.22 2.22 0 0 0-1.038-1.037 7.4 7.4 0 0 0-2.648-.219h-2.288a.75.75 0 0 1 0-1.5h2.288a7.64 7.64 0 0 1 3.3.367c.76.366 1.374.98 1.74 1.74a7.7 7.7 0 0 1 .366 3.3v2.287a.75.75 0 0 1-.751.748"
    />
  </Svg>
);
export default IconlystLockHideOutline;

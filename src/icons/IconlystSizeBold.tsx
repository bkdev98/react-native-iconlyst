import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSizeBold = ({
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
      d="M9.756 19.536a.316.316 0 0 0 .306-.368 6 6 0 0 1-.069-.912v-4.188c0-2.984 2.111-5.15 5.02-5.15h4.446q.318 0 .62.034a.316.316 0 0 0 .355-.313l-.02-1.099c-.003-2.957-1.905-4.944-4.736-4.944H8.214c-2.83 0-4.734 1.99-4.734 4.95v7.034c0 2.96 1.903 4.95 4.732 4.95z"
    />
    <Path
      fill={props.color}
      d="M15.013 21.404h4.446c1.78 0 3.022-1.295 3.022-3.149v-4.188c0-1.854-1.242-3.149-3.022-3.149h-4.446c-1.778 0-3.02 1.295-3.02 3.149v4.188c0 1.883 1.214 3.149 3.02 3.149"
    />
  </Svg>
);
export default IconlystSizeBold;

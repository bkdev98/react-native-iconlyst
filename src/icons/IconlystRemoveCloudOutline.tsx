import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveCloudOutline = ({
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
      d="M7.354 8.258a.75.75 0 0 1 .75.75v.009a.75.75 0 0 1-.742.75c-.97.01-1.806.338-2.393.897-.581.553-.969 1.379-.969 2.489 0 1.369.813 2.55 1.986 3.089a3.8 3.8 0 0 0 1.368.274h8.258a.75.75 0 1 1 0 1.5H7.354a5.3 5.3 0 0 1-1.975-.402A4.9 4.9 0 0 1 2.5 13.153c0-1.484.53-2.715 1.434-3.575.87-.827 2.037-1.269 3.289-1.309a1 1 0 0 1 .131-.011"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.63 5.282a.75.75 0 0 1 1.06 0L18.757 19.35a.75.75 0 1 1-1.06 1.06L3.63 6.343a.75.75 0 0 1 0-1.06M12.25 4.871c-1.233 0-2.118.43-2.748 1.027a.75.75 0 0 1-.516.205H8.98a.75.75 0 0 1-.442-1.356c.9-.823 2.13-1.376 3.714-1.376 2.07 0 3.507.946 4.4 2.134a6.3 6.3 0 0 1 1.19 2.81c1.036.137 1.988.562 2.725 1.263.905.861 1.435 2.092 1.435 3.575a4.85 4.85 0 0 1-1.632 3.647.75.75 0 0 1-.994-1.124 3.35 3.35 0 0 0 1.126-2.523c0-1.11-.388-1.935-.969-2.488-.587-.56-1.423-.887-2.393-.898a.75.75 0 0 1-.742-.75c0-.66-.269-1.722-.94-2.606l-.004-.003c-.64-.853-1.65-1.537-3.202-1.537"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRemoveCloudOutline;

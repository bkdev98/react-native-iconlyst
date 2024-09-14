import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.905V8.324c0-2.764-1.845-5.013-4.582-5.013H7.582C4.845 3.31 3 5.56 3 8.324v6.18c0 2.766 1.845 5.014 4.582 5.007h5.147"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.312 8.577-3.999 3.252a2.07 2.07 0 0 1-2.573 0L6.707 8.577M18.148 19.269l.11-.3a4.14 4.14 0 0 1 2.442-2.446l.3-.11-.3-.112a4.14 4.14 0 0 1-2.441-2.445l-.111-.3-.111.3a4.14 4.14 0 0 1-2.442 2.445l-.3.111.3.111a4.14 4.14 0 0 1 2.442 2.445z"
    />
  </Svg>
);
export default IconlystEmailAiLight;

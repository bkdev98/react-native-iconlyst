import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGemBulk = ({
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
      d="M11.135 2.5a8.42 8.42 0 0 0 0 16.84c4.64 0 8.41-3.77 8.41-8.42s-3.77-8.42-8.41-8.42"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.992 19.79-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416M11.623 14.372l3.09-3.43a.74.74 0 0 0 .1-.87l-1.03-1.84a.74.74 0 0 0-.66-.38h-4.12c-.27 0-.52.14-.65.38l-1.03 1.84a.74.74 0 0 0 .1.87l3.09 3.43c.14.16.34.25.55.25.22 0 .42-.09.56-.25m1.62-4.04-.56-.98h-3.24l-.55.98 2.17 2.42z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchGemBulk;

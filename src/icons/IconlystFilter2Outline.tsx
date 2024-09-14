import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.773 11.599q.027.022.052.049a5.87 5.87 0 0 1 1.674 4.126v3.984l2.236-1.218a.56.56 0 0 0 .285-.491v-2.287c0-1.55.59-3.01 1.658-4.11l4.837-5.144A1.8 1.8 0 0 0 20 5.277V4.34c0-.464-.366-.841-.814-.841H4.316a.83.83 0 0 0-.816.84v.937c0 .46.172.898.485 1.23zm1.373 9.902A1.146 1.146 0 0 1 9 20.346v-4.572a4.38 4.38 0 0 0-1.194-3.023 1 1 0 0 1-.066-.062L2.893 7.536A3.28 3.28 0 0 1 2 5.276v-.935C2 3.05 3.04 2 4.315 2h14.871C20.461 2 21.5 3.05 21.5 4.34v.937c0 .843-.317 1.645-.89 2.258l-4.848 5.154a4.38 4.38 0 0 0-1.242 3.073v2.287c0 .756-.409 1.448-1.067 1.808l-2.76 1.504c-.173.093-.36.14-.547.14"
    />
  </Svg>
);
export default IconlystFilter2Outline;

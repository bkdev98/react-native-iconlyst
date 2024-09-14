import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.742 11.307a4.24 4.24 0 0 0 2.524 3.876v4.422a1.718 1.718 0 0 0 3.434 0v-4.422a4.239 4.239 0 0 0-1.717-8.117c-1.15 0-2.193.458-2.957 1.202M9.7 18.563h-.91m.91-1.989h-.91"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.158 8.488a3.6 3.6 0 0 1 .692-.692 3.7 3.7 0 0 1 1.324-.63q.422-.098.855-.1c1.107 0 2.196.504 2.907 1.45l3.096 4.112a3.64 3.64 0 0 1-.72 5.086 3.64 3.64 0 0 1-5.086-.72l-.925-1.234"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.173 7.168v-1.17a2.676 2.676 0 0 0-2.682-2.674 2.667 2.667 0 0 0-2.665 2.674v5.04"
    />
  </Svg>
);
export default IconlystKeyBroken;

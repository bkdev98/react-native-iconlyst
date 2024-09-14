import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageAiAltLight = ({
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
      d="M6.958 9.014a1.667 1.667 0 1 0 3.335 0 1.667 1.667 0 0 0-3.335 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.774 15.658-3.517-3.365a2.35 2.35 0 0 0-3.307.057l-7.602 7.794"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.77 17.239V7.894C20.77 5.024 18.974 3 16.104 3H7.883c-2.87 0-4.657 2.024-4.657 4.894v7.746c0 2.871 1.797 4.894 4.657 4.894h3.148"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.11 15.892-.099.269a3.7 3.7 0 0 1-2.182 2.186l-.269.1.269.099a3.7 3.7 0 0 1 2.182 2.185l.1.269.099-.269a3.7 3.7 0 0 1 2.183-2.185l.268-.1-.268-.1a3.7 3.7 0 0 1-2.183-2.185z"
    />
  </Svg>
);
export default IconlystImageAiAltLight;

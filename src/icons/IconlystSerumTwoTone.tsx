import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSerumTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.91 21.001v-1.893M7.395 7.273v8.945c0 .815.471 1.565 1.212 1.903q4.302 1.974 8.605 0a2.09 2.09 0 0 0 1.213-1.903V7.273a2.11 2.11 0 0 0-2.112-2.113H9.507a2.11 2.11 0 0 0-2.112 2.113"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.292 5.16v-.78a1.38 1.38 0 0 0-2.763 0v.78"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.62 8.452c1.104-.024.802.026 1.804 0m-1.805 5.762c1.105-.025.803.026 1.805 0m-1.805-2.88c1.105-.025.803.024 1.805 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.39 9.516 1.022 1.067a1.556 1.556 0 0 1 0 2.133c-.563.59-1.477.59-2.041 0a1.556 1.556 0 0 1-.001-2.132v-.001z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSerumTwoTone;

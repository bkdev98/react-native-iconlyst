import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBulksharp = ({
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
      d="M19.358 5.12a9.66 9.66 0 0 0-6.876-2.846 9.66 9.66 0 0 0-6.877 2.847 9.66 9.66 0 0 0-2.85 6.883c0 2.636 1.384 5.148 1.886 5.972l-2.343 3.736.913-.008c.058 0 5.81-.05 9.06.02l.217.002a9.63 9.63 0 0 0 6.87-2.85c3.792-3.793 3.792-9.963 0-13.756"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.99 13.131h-1.598v-1.5h1.598zM13.256 13.131h-1.599v-1.5h1.6zM9.522 13.131H7.923v-1.5h1.6z"
    />
  </Svg>
);
export default IconlystChatBulksharp;

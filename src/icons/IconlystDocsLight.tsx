import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocsLight = ({
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
      d="m20.69 13.167-1.65 6.112A2.326 2.326 0 0 1 16.794 21h-9.59a2.33 2.33 0 0 1-2.246-1.72l-1.65-6.112a2.326 2.326 0 0 1 2.246-2.933h12.89a2.327 2.327 0 0 1 2.247 2.933"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.682 6.378h12.634M8.436 3h7.125"
    />
  </Svg>
);
export default IconlystDocsLight;

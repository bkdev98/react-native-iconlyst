import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeAfterEffectsSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.187 15.106c-.93.406-2.025.4-2.763-.393a2.67 2.67 0 0 1-.683-1.613c-.03-.512.098-1.04.399-1.45a1.94 1.94 0 0 1 1.511-.798 1.9 1.9 0 0 1 1.31.5c.352.322.587.775.65 1.262.012.091.018.31.018.31a.19.19 0 0 1-.187.195H13.74M11.88 15.348 9.125 8.656l-2.753 6.692M7.357 12.957h3.538"
    />
  </Svg>
);
export default IconlystAdobeAfterEffectsSquareTwoTone;

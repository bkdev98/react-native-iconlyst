import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsInTheHeart2Outline = ({
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
      d="M13.273 20.554a.75.75 0 0 1-.358-.091c-.265-.144-6.482-3.574-8-8.306a.75.75 0 1 1 1.428-.46c1.144 3.558 5.626 6.457 6.934 7.24.32-.193.835-.515 1.44-.94a.751.751 0 0 1 .862 1.229 23 23 0 0 1-1.945 1.239.75.75 0 0 1-.361.089M5.624 9.706a.75.75 0 0 1-.121-1.49l1.9-.315-.322-1.9a.75.75 0 0 1 1.478-.252l.449 2.645a.75.75 0 0 1-.616.866l-2.647.44a1 1 0 0 1-.121.006"
    />
    <Path
      fill={props.color}
      d="M3.23 8.03a.751.751 0 0 1-.123-1.49l1.9-.315-.322-1.9a.75.75 0 1 1 1.48-.25l.447 2.644a.75.75 0 0 1-.617.865l-2.646.438a1 1 0 0 1-.12.008"
    />
    <Path
      fill={props.color}
      d="M10.143 10.556a.74.74 0 0 1-.427-.134L5.453 7.458a.75.75 0 1 1 .856-1.232l4.267 2.964a.75.75 0 0 1-.428 1.366zM20.76 18.158l-2.74-.008a.75.75 0 0 1 0-1.5l1.715.005-.532-1.7a.75.75 0 0 1 1.431-.45l.84 2.676a.75.75 0 0 1-.715.975z"
    />
    <Path
      fill={props.color}
      d="M20.762 18.157a.75.75 0 0 1-.442-.145l-3.772-2.754a.751.751 0 1 1 .885-1.211l3.772 2.754a.75.75 0 0 1-.443 1.356M20.922 12.679a.75.75 0 0 1-.715-.978c.728-2.278.056-5.163-2.622-6.025a4.32 4.32 0 0 0-3.865.653.75.75 0 0 1-.9 0 4.26 4.26 0 0 0-2.226-.842.75.75 0 0 1-.687-.809.765.765 0 0 1 .807-.687 5.8 5.8 0 0 1 2.559.833 5.83 5.83 0 0 1 4.764-.576c3.477 1.12 4.557 4.9 3.6 7.91a.75.75 0 0 1-.715.52"
    />
  </Svg>
);
export default IconlystArrowsInTheHeart2Outline;

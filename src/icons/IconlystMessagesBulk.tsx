import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.387 10.32c-.4-4.044-3.597-7.305-7.601-7.754-2.39-.267-4.692.427-6.487 1.956-1.895 1.616-3.052 4.026-3.172 6.615-.242 5.182 3.962 9.122 8.241 10.335a.97.97 0 0 0 .86-.164c.252-.19.402-.491.402-.806L12.66 19c4.994-.6 8.171-4.169 7.727-8.68"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.035 11.417a1.009 1.009 0 0 0 2.016 0 1.01 1.01 0 0 0-1.008-1.008 1.01 1.01 0 0 0-1.008 1.008M8.504 11.417a1.009 1.009 0 1 0 1.01-1.008 1.01 1.01 0 0 0-1.01 1.008"
    />
  </Svg>
);
export default IconlystMessagesBulk;

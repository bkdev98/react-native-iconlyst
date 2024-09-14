import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPepperLight = ({
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
      d="M13.723 11.688C12.358 16.697 5.43 16.538 3 14.028c1.43 8.618 16.804 6.354 16.804-2.664 0-1.7-1.024-2.713-2.885-2.713-.803 0-1.542.029-2.11.596-.567.568-.806 1.417-1.086 2.441M17.418 8.651c0-2.018.825-4.648 3.582-3.984"
    />
  </Svg>
);
export default IconlystPepperLight;

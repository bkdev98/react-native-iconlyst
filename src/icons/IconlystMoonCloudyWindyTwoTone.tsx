import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCloudyWindyTwoTone = ({
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
      d="M12.643 7.166a4.255 4.255 0 0 1 3.883-3.823c-1.26 3.403 1.26 5.896 4.589 4.585a4.255 4.255 0 0 1-3.709 3.875"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.85 5.134-.027-.007M16.943 18.35a3.68 3.68 0 0 0 2.165-3.354c0-2.306-1.626-3.677-3.646-3.68 0-1.45-1.138-4.351-4.351-4.351S6.76 9.866 6.76 11.317c-2.017.018-3.646 1.373-3.646 3.68 0 1.491.888 2.776 2.165 3.353"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.493 20.657H6.84m8.523 0h-1.826m-.001-3.386H9.275"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMoonCloudyWindyTwoTone;

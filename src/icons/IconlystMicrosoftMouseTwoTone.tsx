import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftMouseTwoTone = ({
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
      d="M19.194 7.795v8.444a4.604 4.604 0 0 1-4.603 4.604h-4.183a4.603 4.603 0 0 1-4.604-4.603l-.001-8.444a4.604 4.604 0 0 1 4.604-4.605h4.184a4.603 4.603 0 0 1 4.603 4.604"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 3.191v6.505m-6.695 0h13.392"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMicrosoftMouseTwoTone;

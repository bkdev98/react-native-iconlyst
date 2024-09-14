import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftMouseLight = ({
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
      d="M18.694 7.795v8.444a4.604 4.604 0 0 1-4.603 4.604H9.908a4.603 4.603 0 0 1-4.604-4.603l-.001-8.444A4.604 4.604 0 0 1 9.907 3.19h4.184a4.603 4.603 0 0 1 4.603 4.604M12 3.191v6.505M5.305 9.695h13.392"
    />
  </Svg>
);
export default IconlystMicrosoftMouseLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditProfileBulk = ({
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
      d="M6.449 7.75c0-2.3 1.8-4.1 4-4.1s4 1.8 4 4.1c0 2.2-1.8 4-4 4s-4-1.8-4-4M13.901 17.908a1.43 1.43 0 0 0 1.226.375l.85-.142a2.54 2.54 0 0 0 1.458-.802l3.278-3.607a1.66 1.66 0 0 0-.097-2.339l-.772-.719a1.673 1.673 0 0 0-2.349.095l-3.315 3.657a2.6 2.6 0 0 0-.632 1.411l-.09.864c-.05.453.111.892.443 1.207"
    />
    <Path
      fill={props.color}
      d="M9.749 13.75c.4-.1.8.2.9.6l1.8 4.6c.3.7-.2 1.4-.9 1.4h-5.8c-.8 0-1.5-.3-2-.8s-.8-1.2-.8-1.9.2-1.4.6-1.9.9-.9 1.6-1.2c1.2-.5 2.8-.7 4.6-.8"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEditProfileBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicWandTo3Light = ({
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
      strokeWidth={1.5}
      d="M15.26 5.194a1.855 1.855 0 0 1 2.623 2.623l-1.64 1.64-9.509 9.509a1.855 1.855 0 1 1-2.623-2.623l9.51-9.51zM13.62 6.834l2.623 2.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.499 15.124.114.309a4.25 4.25 0 0 0 2.511 2.515l.308.114-.308.114a4.25 4.25 0 0 0-2.511 2.515l-.114.309-.114-.309a4.25 4.25 0 0 0-2.512-2.515l-.308-.114.309-.114a4.25 4.25 0 0 0 2.51-2.515zM5.847 3l.088.24a3.3 3.3 0 0 0 1.95 1.953l.24.09-.24.088a3.3 3.3 0 0 0-1.95 1.953l-.088.24-.09-.24a3.3 3.3 0 0 0-1.95-1.953l-.24-.089.24-.089a3.3 3.3 0 0 0 1.95-1.953z"
    />
  </Svg>
);
export default IconlystMagicWandTo3Light;

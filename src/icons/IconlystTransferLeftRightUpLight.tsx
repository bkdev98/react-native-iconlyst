import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferLeftRightUpLight = ({
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
      d="m8.605 9.071 2.864-2.204L9.862 4.78l7.957-.029-2.065 7.685-1.607-2.088-4.295 3.306-1.607-2.088-2.064 7.685 7.957-.03-1.607-2.087 2.863-2.204"
    />
  </Svg>
);
export default IconlystTransferLeftRightUpLight;

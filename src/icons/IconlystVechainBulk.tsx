import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVechainBulk = ({
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
      d="M20.797 2.829a.75.75 0 0 1 1.406.522c-1.404 3.774-3.954 10.715-5.431 14.734l-.036.098c-.601 1.637-1.018 2.77-1.094 2.974l-.713-2.404.399-1.087.089-.242c1.485-4.041 3.993-10.865 5.38-14.595"
    />
    <Path
      fill={props.color}
      d="m8.989 2.828 5.94 15.925.713 2.404a.75.75 0 0 1-.708.503h-.006c-1.385-.011-4.774 0-4.774 0h-.002a.75.75 0 0 1-.703-.487L2.798 3.376a.752.752 0 0 1 .6-1.01c.065-.008.125-.016 4.886-.026h.002a.75.75 0 0 1 .703.488"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVechainBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowBulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.802c-5.402 0-9.752 4.268-9.752 7.802s4.35 7.802 9.752 7.802 9.752-4.268 9.752-7.802-4.35-7.802-9.752-7.802"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 16.516a3.917 3.917 0 0 1-3.912-3.912 3.917 3.917 0 0 1 3.912-3.912 3.917 3.917 0 0 1 3.912 3.912 3.917 3.917 0 0 1-3.912 3.912m-2.412-3.912a2.415 2.415 0 0 1 2.412-2.412 2.415 2.415 0 0 1 2.412 2.412 2.415 2.415 0 0 1-2.412 2.412 2.415 2.415 0 0 1-2.412-2.412"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShowBulkcurved;

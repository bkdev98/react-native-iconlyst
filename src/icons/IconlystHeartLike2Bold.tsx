import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLike2Bold = ({
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
      fillRule="evenodd"
      d="M17.785 3.469c-1.65-.518-3.893-.157-5.284 1.72-1.351-1.812-3.595-2.261-5.298-1.72-3.717 1.194-4.865 5.264-3.827 8.51 1.68 5.226 7.553 8.767 9.125 8.767 1.587 0 7.479-3.541 9.125-8.767 1.036-3.245-.116-7.315-3.841-8.51"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartLike2Bold;

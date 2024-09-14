import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75c-1.006 0-2.442 2.898-2.586 7.5h5.172c-.144-4.602-1.58-7.5-2.586-7.5M9.414 12.75c.144 4.6 1.58 7.5 2.586 7.5s2.442-2.9 2.586-7.5zM16.087 11.25h5.375a9.51 9.51 0 0 0-8.35-8.68c1.845 1.08 2.858 4.811 2.975 8.68M7.913 11.25c.116-3.869 1.13-7.6 2.974-8.68a9.51 9.51 0 0 0-8.35 8.68zM16.087 12.75c-.117 3.867-1.13 7.6-2.974 8.678a9.51 9.51 0 0 0 8.35-8.679zM7.913 12.75H2.537a9.51 9.51 0 0 0 8.35 8.678c-1.845-1.079-2.858-4.81-2.974-8.679"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldBold;

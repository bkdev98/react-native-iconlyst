import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarDropBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.47 16.782 2.331-2.24a.953.953 0 0 0-.537-1.633l-3.223-.463a.97.97 0 0 1-.731-.525l-1.441-2.879a.977.977 0 0 0-1.735 0l-1.444 2.88a.97.97 0 0 1-.73.525l-3.225.463a.953.953 0 0 0-.537 1.633l2.334 2.24a.95.95 0 0 1 .28.848l-.553 3.163a.968.968 0 0 0 1.41 1.009l2.88-1.494a.99.99 0 0 1 .905 0l2.879 1.494a.97.97 0 0 0 1.41-1.01M6.268 4.96v3.258M12 3.916v1.37M17.732 4.96v3.258"
    />
  </Svg>
);
export default IconlystStarDropBroken;

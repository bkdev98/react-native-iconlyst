import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraBold = ({
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
      d="M22.263 7.062a1.796 1.796 0 0 0-2.52-.249l-1.226 1.004c-.258.21-.376.534-.36.867q.003.057.003.115V15.2q0 .062-.003.123c-.017.33.101.653.358.864l1.214.998c.316.261.719.404 1.134.404.986 0 1.791-.802 1.794-1.789l.012-7.598a1.8 1.8 0 0 0-.406-1.14M12.472 4.25h-6.79c-2.602 0-4.35 1.828-4.35 4.55v6.4c0 2.722 1.748 4.55 4.35 4.55h6.789c2.604 0 4.353-1.828 4.353-4.55V8.8c0-2.722-1.749-4.55-4.352-4.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoCameraBold;

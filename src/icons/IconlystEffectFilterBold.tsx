import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEffectFilterBold = ({
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
      d="M11.966 16.608a1 1 0 0 0 0-2 4.87 4.87 0 0 1-4.863-4.863 4.87 4.87 0 0 1 4.863-4.863A4.84 4.84 0 0 1 16.48 7.93a1 1 0 1 0 1.855-.747 6.835 6.835 0 0 0-6.37-4.301 6.87 6.87 0 0 0-6.862 6.863 6.87 6.87 0 0 0 6.863 6.863"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.32 8.745c-1.86 0-3.6.731-4.902 2.06a.999.999 0 1 0 1.428 1.4 4.83 4.83 0 0 1 3.474-1.46 4.87 4.87 0 0 1 4.863 4.863 4.87 4.87 0 0 1-4.863 4.864 1 1 0 0 0 0 2 6.87 6.87 0 0 0 6.863-6.864 6.87 6.87 0 0 0-6.863-6.863"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.431 13.086a1 1 0 0 0-1.297-.562 1 1 0 0 0-.562 1.297 4.869 4.869 0 0 1-4.525 6.651 4.87 4.87 0 0 1-4.2-7.316 1 1 0 0 0-1.728-1.009 6.87 6.87 0 0 0-.935 3.46c0 3.786 3.08 6.865 6.863 6.865 3.785 0 6.863-3.079 6.863-6.865 0-.869-.16-1.717-.479-2.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEffectFilterBold;

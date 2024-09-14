import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteShieldBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.979 12.134V8.201c0-2.857-1.779-4.875-4.639-4.875H8.16c-2.851 0-4.639 2.018-4.639 4.875v3.854M9.857 20.784H8.16c-2.86 0-4.639-2.018-4.639-4.874v-1.047M6.728 6.768h-.064m2.614 0h-.064m2.614 0h-.064M17.684 9.62H3.521M19.972 17.76c0 2.615-3.133 3.563-3.133 3.563s-3.133-.948-3.133-3.564-.115-2.534.137-2.785 2.585-1.066 2.996-1.066c.41 0 2.996 1.066 2.996 1.066"
    />
  </Svg>
);
export default IconlystWebsiteShieldBroken;

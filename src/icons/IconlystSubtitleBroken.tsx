import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.86 20.243c-2.935 0-4.768-1.68-4.768-4.744V8.416c0-3.017 1.833-4.658 4.767-4.658h8.46c2.943 0 4.766 1.641 4.757 4.658v7.16c0 3.017-1.823 4.667-4.766 4.667h-5.06M7.287 15.832h2.21m5.445 0h1.939M14.047 12.375h-2.341m-2.705 0H7.347M12.07 15.832h-.01M16.835 12.375h.01M17.133 8.574H3.084"
    />
  </Svg>
);
export default IconlystSubtitleBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSilentSleep3Bulk = ({
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
      d="m19.524 12.802.466.99a2.77 2.77 0 0 1-.168 2.675 2.77 2.77 0 0 1-2.35 1.292H6.528a2.77 2.77 0 0 1-2.35-1.292 2.77 2.77 0 0 1-.167-2.675l.465-.99a4.8 4.8 0 0 0 .457-2.043V9.441c0-.619.089-1.216.239-1.788.374.485.946.789 1.576.789H8.91c-.004.054-.016.105-.016.16a2 2 0 0 0 .878 1.657l-.36.397a2 2 0 0 0 1.482 3.343h3.08a2 2 0 0 0 1.122-3.656l.359-.397a2 2 0 0 0-1.481-3.344h-3.033c.004-.054.016-.105.016-.16 0-.459-.154-.882-.414-1.219a2 2 0 0 0 .243-2.028 2 2 0 0 0-.451-.614A7 7 0 0 1 12 2.375a7.074 7.074 0 0 1 7.066 7.066v1.318c0 .702.159 1.409.458 2.043"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.78 4.729h.517L6.223 5.912a.752.752 0 0 0 .556 1.254h2.21a.75.75 0 0 0 0-1.5h-.518l1.074-1.183a.752.752 0 0 0-.556-1.254H6.78a.75.75 0 0 0 0 1.5M14.692 8.273a.75.75 0 0 0-.686-.446h-3.08a.75.75 0 0 0 0 1.5h1.388l-1.943 2.143a.75.75 0 0 0 .555 1.254h3.08a.75.75 0 1 0 0-1.5H12.62l1.943-2.143a.75.75 0 0 0 .13-.808"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.999 20.098a2.354 2.354 0 0 0 2.35-2.35h1.5a3.855 3.855 0 0 1-3.85 3.85 3.853 3.853 0 0 1-3.848-3.85h1.5a2.35 2.35 0 0 0 2.348 2.35"
    />
  </Svg>
);
export default IconlystRingtoneSilentSleep3Bulk;

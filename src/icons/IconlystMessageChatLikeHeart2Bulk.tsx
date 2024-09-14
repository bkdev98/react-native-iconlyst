import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart2Bulk = ({
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
      d="M19.196 5.279c-3.704-3.701-9.73-3.701-13.435 0-2.808 2.808-3.573 7.118-1.913 10.7.184.457.315.8.315 1.084 0 .335-.142.75-.279 1.152-.264.778-.564 1.658.08 2.3.644.645 1.526.342 2.302.076.4-.137.811-.278 1.14-.278.291 0 .658.147 1.082.318a9.542 9.542 0 0 0 10.708-1.916c3.703-3.702 3.703-9.73 0-13.436"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.35 9.85a2.52 2.52 0 0 0-1.583-1.48 2.64 2.64 0 0 0-1.248-.088c-.382.064-.729.293-1.02.506-.282-.204-.637-.437-1.021-.501a2.7 2.7 0 0 0-1.247.084c-1.599.517-2.091 2.267-1.644 3.657.696 2.234 3.694 3.654 3.821 3.713a.22.22 0 0 0 .181 0c.126-.058 3.08-1.453 3.817-3.71.236-.736.216-1.51-.055-2.18"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart2Bulk;

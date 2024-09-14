import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLemonHalfOutline = ({
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
      d="M17.872 3.644a.75.75 0 0 1 1.061 0c4.19 4.19 4.19 10.985 0 15.176-4.19 4.19-10.985 4.19-15.176 0a.75.75 0 0 1 1.06-1.06A9.231 9.231 0 0 0 17.873 4.704a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.954 4.344c-1.776.602-3.832 1.9-5.704 3.772-1.873 1.872-3.17 3.928-3.773 5.705-.62 1.829-.436 3.11.206 3.75.641.642 1.922.827 3.751.206 1.776-.602 3.832-1.9 5.704-3.772 1.873-1.872 3.17-3.928 3.773-5.704.62-1.83.436-3.11-.206-3.752-.641-.641-1.922-.826-3.75-.205m-.482-1.42c1.984-.674 4.024-.705 5.294.565s1.238 3.31.566 5.293c-.691 2.036-2.132 4.283-4.133 6.284s-4.247 3.441-6.283 4.132c-1.984.673-4.024.704-5.294-.565-1.27-1.27-1.238-3.31-.565-5.294.69-2.036 2.131-4.283 4.132-6.283s4.247-3.442 6.283-4.133"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.507 3.111a.75.75 0 0 1 .51.93l-1.286 4.422 4.974-4.974a.75.75 0 0 1 1.061 1.06l-4.865 4.866 4.365-1.386a.75.75 0 0 1 .454 1.43l-6.124 1.943 2.603 2.603a.75.75 0 0 1-1.06 1.06l-2.603-2.602-1.944 6.124a.75.75 0 0 1-1.43-.454l1.386-4.366-4.865 4.866a.75.75 0 0 1-1.061-1.061l4.865-4.865-4.365 1.385a.75.75 0 1 1-.454-1.43l6.124-1.943-2.603-2.603a.75.75 0 1 1 1.06-1.06l2.579 2.578 1.75-6.012a.75.75 0 0 1 .93-.511"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLemonHalfOutline;

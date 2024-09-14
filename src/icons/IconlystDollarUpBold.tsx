import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarUpBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.876 12.435a.75.75 0 0 1 .75-.75h2.216a.44.44 0 0 0 .443-.44.44.44 0 0 0-.443-.441H10.48a1.941 1.941 0 0 1-.069-3.882v-.261a.75.75 0 0 1 1.5 0v.254h.784a.75.75 0 0 1 0 1.5H10.48a.443.443 0 0 0-.445.441c0 .247.2.448.445.448h1.363c1.071 0 1.943.87 1.943 1.941a1.94 1.94 0 0 1-1.875 1.933v.262a.75.75 0 0 1-1.5 0v-.255h-.784a.75.75 0 0 1-.75-.75m3.581 2.976 3.183.948a.3.3 0 0 0 .345-.138l.035-.06a.33.33 0 0 0-.047-.38 2 2 0 0 1-.405-.743 2 2 0 0 1 1.373-2.473l2.137-.61.02-.004c.086-.024.176-.035.266-.047.04-.005.078-.018.117-.02q.199-.015.399.01c.189.024.378-.098.39-.288q.018-.27.018-.547c0-4.765-3.876-8.641-8.64-8.641s-8.64 3.876-8.64 8.641c0 3.544 2.146 6.59 5.206 7.922a.29.29 0 0 0 .365-.117l1.608-2.591a2.01 2.01 0 0 1 2.27-.862"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.963 15.8-.607-2.107a.8.8 0 0 0-.14-.28c-.033-.043-.077-.07-.117-.104-.033-.027-.058-.06-.096-.083q-.002 0-.005-.002a.73.73 0 0 0-.377-.084c-.065.001-.13 0-.19.016h-.009l-2.137.611a.75.75 0 0 0-.514.927.74.74 0 0 0 .926.514l.368-.105-1.605 2.805-4.36-1.299a.754.754 0 0 0-.852.323l-2.253 3.63a.752.752 0 0 0 .637 1.145.75.75 0 0 0 .64-.354l1.95-3.143 4.38 1.306c.33.1.691-.044.865-.347l1.933-3.377.122.423a.75.75 0 1 0 1.441-.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarUpBold;

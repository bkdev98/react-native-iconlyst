import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHelpBulk = ({
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
      d="M21.572 17.604c-.012-.936-.71-1.599-1.674-2.517-.235-.223-.49-.465-.76-.735-1.25-1.248-2.327-.823-3.193-.483-1.024.401-1.994.786-3.767-.987-1.772-1.77-1.392-2.742-.99-3.769.34-.866.761-1.944-.487-3.19q-.408-.41-.742-.769c-.914-.963-1.575-1.658-2.507-1.67-.843.011-1.651.5-2.908 1.758a2 2 0 0 0-.088.091c-.28.272-1.02.997-1.027 2.412-.01 2.202 1.764 5.096 5.276 8.604 3.5 3.5 6.389 5.276 8.59 5.276h.02c1.415-.008 2.14-.749 2.413-1.028l.091-.088c1.256-1.256 1.764-2.096 1.753-2.905"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.58 8.93c-.414 0-.75.36-.75.775a.75.75 0 0 0 1.5 0v-.05c0-.413-.336-.724-.75-.724M14.979 5.655a.75.75 0 0 0 .75-.75c0-.578.454-1.03 1.033-1.03.57 0 1.032.462 1.032 1.03 0 .215-.053.531-.544.801l-.113.063c-.462.261-1.322.747-1.308 1.805.005.411.34.74.75.74h.01a.75.75 0 0 0 .74-.76c-.002-.132.116-.236.546-.479l.11-.063c.845-.462 1.31-1.211 1.31-2.107a2.534 2.534 0 0 0-5.067 0c0 .414.337.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallHelpBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEraserBold = ({
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
      d="m16.517 12.744-4.279 4.28c-.469.468-1.028.703-1.58.703-.531 0-1.057-.217-1.493-.653l-1.729-1.73c-.889-.89-.869-2.153.049-3.071l2.125-2.125q.006-.008.012-.018.009-.006.018-.012l2.125-2.124c.903-.905 2.195-.927 3.071-.051l1.731 1.73c.888.889.868 2.152-.05 3.07m-.3-9.735H7.783c-3.16 0-5.283 2.22-5.283 5.526v7.947c0 3.306 2.123 5.527 5.283 5.527h8.433c3.161 0 5.284-2.221 5.284-5.527V8.535c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.776 9.004c-.15-.151-.299-.208-.436-.208-.2 0-.379.123-.514.258l-1.61 1.61 2.63 2.63 1.61-1.61c.227-.228.422-.578.05-.95zM10.155 11.724l-1.609 1.609c-.228.228-.422.579-.049.952l1.728 1.728c.372.372.722.179.952-.05l1.61-1.61z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEraserBold;

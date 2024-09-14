import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire1Bold = ({
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
      d="M12.324 18.261c-.77-.914-.993-2.179-1.028-3.202-.55.483-1.062 1.015-1.264 1.436l-.01.018c-.503.978-.526 2.163-.06 3.091.268.534.813 1.208 1.884 1.386 1.334.278 2.505-.52 2.994-1.451.416-.794.368-1.633-.114-2.386-.736.926-1.17 1.409-1.728 1.417-.27-.015-.528-.136-.674-.309"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.007 9.523c-1.2-2.5-3.293-4.545-6.217-6.076a.498.498 0 0 0-.728.508c.298 2.277-.117 5.454-1.324 6.828-.265.303-.552.504-.869.606-.008-1.319-.425-2.589-1.244-3.782a.498.498 0 0 0-.702-.125c-.39.278-1.24 1.077-1.49 1.325-2.644 2.517-3.259 6.2-1.569 9.381 1.323 2.49 3.675 3.976 6.317 4.164a3.95 3.95 0 0 1-2.56-2.075c-.676-1.346-.65-3.047.064-4.442.665-1.37 2.795-2.842 3.036-3.006a.751.751 0 0 1 1.159.754c-.103.577-.215 2.082.251 3.15.186-.216.388-.472.525-.646.193-.243.37-.465.503-.612a.75.75 0 0 1 1.071-.04c1.423 1.347 1.783 3.186.937 4.8a4.34 4.34 0 0 1-1.663 1.736c2.031-.594 3.655-1.945 4.632-3.885 1.303-2.59 1.251-5.876-.129-8.563"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFire1Bold;

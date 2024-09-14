import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAuthyCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M10.14 16.472c-.19 0-.38-.07-.53-.22l-2.02-2.02c-.63-.62-.99-1.49-.99-2.39s.36-1.77.99-2.39c1.27-1.28 3.5-1.28 4.78 0l2.02 2.02c.29.29.29.77 0 1.06s-.77.29-1.06 0l-2.02-2.02c-.71-.71-1.95-.71-2.66 0a1.885 1.885 0 0 0 0 2.66l2.02 2.02c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
    <Path
      fill={props.color}
      d="M14.02 15.543a3.4 3.4 0 0 1-2.39-.99l-2.02-2.02a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.02 2.02c.7.7 1.96.7 2.66 0a1.885 1.885 0 0 0 0-2.66l-2.02-2.02a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.02 2.02c.63.63.99 1.5.99 2.39s-.36 1.77-.99 2.39a3.4 3.4 0 0 1-2.39.99"
    />
  </Svg>
);
export default IconlystAuthyCircleOutline;

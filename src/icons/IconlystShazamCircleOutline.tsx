import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShazamCircleOutline = ({
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
      d="M10.02 15.52c-.92 0-1.78-.36-2.43-1.01-.64-.64-1-1.5-1-2.41 0-.92.35-1.78 1-2.44l2.94-2.93c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.94 2.93c-.36.37-.57.85-.56 1.37 0 .51.2.99.56 1.35.37.37.85.57 1.37.57.51 0 1-.2 1.36-.57l1.8-1.79c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.8 1.79c-.65.65-1.51 1.01-2.42 1.01z"
    />
    <Path
      fill={props.color}
      d="M12.93 17.508c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.94-2.94c.75-.75.75-1.98 0-2.73s-1.98-.75-2.73 0l-1.79 1.8c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l1.79-1.8a3.447 3.447 0 0 1 4.85 0 3.446 3.446 0 0 1 0 4.85l-2.94 2.94c-.15.15-.34.22-.53.22"
    />
  </Svg>
);
export default IconlystShazamCircleOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCipherOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.25 14.311-1.44 1.442 1.44 1.441 1.442-1.441zm-.972-1.148a1.376 1.376 0 0 1 1.945 0l1.618 1.617-.53.53.53-.53a1.376 1.376 0 0 1 0 1.945l-1.617 1.618a1.376 1.376 0 0 1-1.946 0L9.66 16.725a1.376 1.376 0 0 1 0-1.945zM12.249 6.801l-1.442 1.442 1.442 1.441 1.441-1.441zm-.973-1.148a1.376 1.376 0 0 1 1.946 0l1.617 1.617a1.376 1.376 0 0 1 0 1.946l-1.617 1.617a1.376 1.376 0 0 1-1.946 0L9.659 9.216a1.376 1.376 0 0 1 0-1.946zM8.497 10.555l-1.442 1.442 1.442 1.441 1.441-1.441zm-.973-1.149a1.376 1.376 0 0 1 1.946 0l1.617 1.618a1.376 1.376 0 0 1 0 1.946L9.47 14.587a1.376 1.376 0 0 1-1.946 0L5.907 12.97a1.376 1.376 0 0 1 0-1.946zM15.03 9.407a1.376 1.376 0 0 1 1.945 0l1.618 1.617a1.376 1.376 0 0 1 0 1.946l-1.618 1.617a1.376 1.376 0 0 1-1.945 0l-1.617-1.617a1.376 1.376 0 0 1 0-1.946l.53.53-.53-.53zm.973 1.148-1.442 1.442 1.442 1.441 1.441-1.441zm1.529 1.354"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCipherOutline;

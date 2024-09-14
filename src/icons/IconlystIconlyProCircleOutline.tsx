import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconlyProCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.427 7.497c2.536-2.475 6.64-2.475 9.176 0a.75.75 0 0 1 0 1.073l-1.6 1.562a.75.75 0 0 1-1.047 0 2.796 2.796 0 0 0-3.881 0 2.593 2.593 0 0 0 0 3.736 2.796 2.796 0 0 0 3.88 0 .75.75 0 0 1 1.048 0l1.6 1.562a.75.75 0 0 1 0 1.073c-2.536 2.475-6.64 2.475-9.176 0a6.264 6.264 0 0 1 0-9.006m7.536.578c-1.957-1.393-4.722-1.228-6.488.495a4.764 4.764 0 0 0 0 6.86c1.766 1.723 4.53 1.889 6.488.495l-.53-.517c-1.648 1.127-3.932.972-5.406-.466a4.093 4.093 0 0 1 0-5.884c1.474-1.438 3.758-1.593 5.407-.466z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIconlyProCircleOutline;

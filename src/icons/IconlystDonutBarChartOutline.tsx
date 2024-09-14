import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDonutBarChartOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 7.607a4.512 4.512 0 1 0 0 9.023 4.512 4.512 0 0 0 0-9.023m-6.012 4.511a6.012 6.012 0 1 1 12.023 0 6.012 6.012 0 0 1-12.023 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 3.869a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25c0-5.385 4.365-9.75 9.75-9.75 2.675 0 5.1 1.078 6.86 2.822a9.72 9.72 0 0 1 2.89 6.928c0 5.384-4.365 9.75-9.75 9.75s-9.75-4.366-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.369a.75.75 0 0 1 .75.75v3.738a.75.75 0 0 1-1.5 0V3.12a.75.75 0 0 1 .75-.75M19.238 5.071a.75.75 0 0 1 .045 1.06l-2.528 2.756a.75.75 0 1 1-1.105-1.014l2.528-2.756a.75.75 0 0 1 1.06-.046M2.75 12.119a.75.75 0 0 1 .75-.75h3.738a.75.75 0 1 1 0 1.5H3.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDonutBarChartOutline;

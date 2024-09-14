import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiCircleAlertOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 8.01 6.264.75.75 0 1 1 1.456-.36A9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12c0-5.384 4.365-9.75 9.75-9.75.77 0 1.521.09 2.242.26a.75.75 0 0 1-.344 1.46A8.3 8.3 0 0 0 12 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.198 3.75a1.052 1.052 0 1 0 0 2.104 1.052 1.052 0 0 0 0-2.104m-2.552 1.052a2.552 2.552 0 1 1 5.104 0 2.552 2.552 0 0 1-5.103 0M9.615 14.891a.75.75 0 0 1-.703-.49l-.094-.253a2.74 2.74 0 0 0-1.62-1.623l-.254-.094a.75.75 0 0 1 0-1.407l.254-.094a2.74 2.74 0 0 0 1.62-1.622l.094-.254a.75.75 0 0 1 1.407 0l.093.254c.278.752.87 1.344 1.62 1.622l.254.094a.75.75 0 0 1 0 1.407l-.253.094c-.75.278-1.343.87-1.62 1.623l-.094.253a.75.75 0 0 1-.704.49m.792-3.163a4.3 4.3 0 0 1-.792-.793 4.3 4.3 0 0 1-.792.793q.448.343.792.792.343-.448.792-.792M15.702 15.436a.75.75 0 0 1-.717-.532.9.9 0 0 0-.594-.595.75.75 0 0 1 0-1.434.9.9 0 0 0 .594-.595.75.75 0 0 1 1.435 0c.087.285.31.508.594.595a.75.75 0 0 1 0 1.434.9.9 0 0 0-.594.595.75.75 0 0 1-.718.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiCircleAlertOutline;

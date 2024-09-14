import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygonAiSparkOutline = ({
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
      d="M9.21 3.75c-.4 0-.784.158-1.066.44L4.192 8.144a1.5 1.5 0 0 0-.442 1.066v5.581c0 .4.16.784.442 1.066l3.951 3.952c.282.282.667.442 1.067.442h5.581c.4 0 .783-.159 1.067-.442l3.951-3.952c.282-.282.441-.665.441-1.066V9.209c0-.4-.159-.784-.441-1.066L15.858 4.19a1.5 1.5 0 0 0-1.067-.441zM7.082 3.13A3 3 0 0 1 9.21 2.25h5.581c.798 0 1.563.316 2.127.88l3.952 3.952c.564.564.88 1.33.88 2.127v5.581c0 .798-.316 1.563-.88 2.127l-3.952 3.951a3 3 0 0 1-2.126.882H9.21a3 3 0 0 1-2.128-.882l-3.95-3.951a3 3 0 0 1-.882-2.127V9.209c0-.799.318-1.563.881-2.127z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.385 9.109a.75.75 0 0 1 .703.49l.094.254c.278.752.87 1.344 1.62 1.622l.254.094a.75.75 0 0 1 0 1.407l-.254.094c-.75.278-1.342.87-1.62 1.622l-.094.254a.75.75 0 0 1-1.407 0l-.093-.254a2.74 2.74 0 0 0-1.62-1.622l-.254-.094a.75.75 0 0 1 0-1.407l.253-.094a2.74 2.74 0 0 0 1.62-1.622l.094-.254a.75.75 0 0 1 .704-.49m-.792 3.163c.298.228.564.495.792.793q.344-.449.792-.793a4.2 4.2 0 0 1-.792-.792 4.3 4.3 0 0 1-.792.792M8.298 8.564a.75.75 0 0 1 .717.532c.087.285.31.508.594.595a.75.75 0 0 1 0 1.435.9.9 0 0 0-.594.594.75.75 0 0 1-1.435 0 .9.9 0 0 0-.594-.594.75.75 0 0 1 0-1.435.9.9 0 0 0 .594-.595.75.75 0 0 1 .718-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolygonAiSparkOutline;

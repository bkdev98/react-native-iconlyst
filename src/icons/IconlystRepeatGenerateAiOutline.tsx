import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeatGenerateAiOutline = ({
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
      d="M12.46 6.388a.75.75 0 0 1 .75-.75h2.176c1.75 0 3.342.714 4.495 1.865A6.31 6.31 0 0 1 21.748 12a6.32 6.32 0 0 1-1.486 4.08.75.75 0 0 1-1.15-.964A4.82 4.82 0 0 0 20.25 12a4.82 4.82 0 0 0-1.425-3.432l-.003-.003a4.85 4.85 0 0 0-3.435-1.427H13.21a.75.75 0 0 1-.75-.75M12.237 14.458a.75.75 0 0 1 1.06 0l2.623 2.622a.75.75 0 0 1 0 1.06l-2.622 2.624a.75.75 0 0 1-1.06-1.06l2.091-2.094-2.092-2.091a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3 11.25a.75.75 0 0 1 .75.75c0 1.345.543 2.552 1.426 3.436a4.85 4.85 0 0 0 3.435 1.427h6.778a.75.75 0 0 1 0 1.5H8.61a6.35 6.35 0 0 1-4.495-1.866A6.34 6.34 0 0 1 2.25 12a.75.75 0 0 1 .75-.75M6.572 10.044a.75.75 0 0 1-.703-.49L5.775 9.3a2.74 2.74 0 0 0-1.62-1.623l-.253-.094a.75.75 0 0 1 0-1.406l.253-.094a2.74 2.74 0 0 0 1.62-1.623l.094-.253a.75.75 0 0 1 1.407 0l.094.253c.278.752.87 1.345 1.62 1.623l.253.094a.75.75 0 0 1 0 1.406l-.253.094c-.75.278-1.342.871-1.62 1.623l-.094.254a.75.75 0 0 1-.704.49m.792-3.164a4.3 4.3 0 0 1-.792-.792 4.3 4.3 0 0 1-.791.792c.297.228.564.495.791.793.228-.298.494-.565.792-.793M11.252 12.232a.75.75 0 0 1-.718-.531.9.9 0 0 0-.593-.595.75.75 0 0 1 0-1.435.9.9 0 0 0 .593-.595.75.75 0 0 1 1.436 0c.086.285.31.508.593.595a.75.75 0 0 1 0 1.435.9.9 0 0 0-.593.595.75.75 0 0 1-.718.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRepeatGenerateAiOutline;

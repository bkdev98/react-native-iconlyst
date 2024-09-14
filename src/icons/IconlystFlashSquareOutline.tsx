import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashSquareOutline = ({
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
      d="M4.312 4.034C5.297 2.978 6.7 2.387 8.354 2.387h8.435c1.66 0 3.062.59 4.046 1.647.979 1.051 1.487 2.502 1.487 4.13v7.946c0 1.628-.508 3.078-1.487 4.13-.984 1.056-2.387 1.647-4.047 1.647H8.354c-1.659 0-3.061-.591-4.045-1.648-.978-1.05-1.487-2.501-1.487-4.129V8.163c0-1.628.511-3.079 1.49-4.129M5.41 5.057c-.677.726-1.088 1.79-1.088 3.106v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.659 1.17 2.947 1.17h8.434c1.29 0 2.279-.45 2.95-1.17.675-.726 1.084-1.789 1.084-3.107V8.163c0-1.318-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.354c-1.283 0-2.273.45-2.944 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.704 8.66-1.425 3.478H11.5c.678 0 1.17.642.996 1.297l-.312 1.169 2.345-2.676h-1.256a1.03 1.03 0 0 1-.955-1.42l.787-1.848zm-1.276-.841c.153-.396.535-.659.962-.659h2.425a1.03 1.03 0 0 1 .955 1.419l-.787 1.848h1.58c.886 0 1.36 1.045.776 1.711l-4.35 4.964c-.718.82-2.052.109-1.771-.945l.672-2.52H9.58a1.03 1.03 0 0 1-.958-1.412z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashSquareOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber0SquareOutline = ({
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
      d="M11.563 9.922c-.333.592-.563 1.46-.563 2.46s.23 1.87.563 2.462c.346.615.707.789.937.789s.591-.174.937-.79c.333-.592.563-1.46.563-2.46s-.23-1.869-.563-2.46c-.346-.617-.707-.79-.937-.79s-.591.173-.937.79m-1.308-.735c.468-.832 1.232-1.554 2.245-1.554s1.777.722 2.245 1.554c.481.855.755 1.987.755 3.196s-.274 2.34-.755 3.196c-.468.832-1.232 1.554-2.245 1.554s-1.777-.722-2.245-1.554c-.481-.856-.755-1.987-.755-3.196s.274-2.34.755-3.196"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.24 4.28c.986-1.056 2.388-1.647 4.043-1.647h8.435c1.66 0 3.061.59 4.045 1.647.979 1.05 1.487 2.501 1.487 4.13v7.946c0 1.628-.508 3.078-1.487 4.13-.984 1.056-2.386 1.647-4.046 1.647H8.283c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.129V8.41c0-1.629.511-3.08 1.49-4.13m1.098 1.023C4.66 6.029 4.25 7.092 4.25 8.409v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107V8.41c0-1.318-.409-2.38-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H8.283c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber0SquareOutline;

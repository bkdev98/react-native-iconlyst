import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeGlobeLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.345 11.693q-.817 1.662-1.966 2.9h7.241q-1.148-1.239-1.966-2.9h1.41C13.896 10.326 12.893 8.7 12 6.918c-.895 1.782-1.898 3.407-3.064 4.775zM11.998 14.593v3.552"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 3.365a7.839 7.839 0 0 1 3.644 14.78H8.354A7.839 7.839 0 0 1 12 3.366M8.374 18.18l-.793 1.237c-.505.79-.758 1.184-.738 1.51a1 1 0 0 0 .408.745c.263.193.732.193 1.669.193h6.164c.937 0 1.405 0 1.669-.193a1 1 0 0 0 .408-.745c.02-.326-.233-.72-.738-1.51l-.797-1.243"
    />
  </Svg>
);
export default IconlystTreeGlobeLight;

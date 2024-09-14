import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendUpGraphBoxOutline = ({
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
      d="M4.24 4.016c.985-1.056 2.388-1.647 4.043-1.647h8.435c1.66 0 3.062.59 4.045 1.647.979 1.051 1.487 2.502 1.487 4.129v7.947c0 1.628-.508 3.078-1.487 4.129-.984 1.057-2.386 1.648-4.046 1.648H8.283c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.129V8.145c0-1.628.511-3.079 1.49-4.13m1.098 1.023c-.678.726-1.088 1.79-1.088 3.106v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107V8.145c0-1.318-.409-2.38-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H8.283c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.342 15.26a.75.75 0 0 1 .75.75v.988a.75.75 0 0 1-1.5 0v-.987a.75.75 0 0 1 .75-.75M12.5 13.577a.75.75 0 0 1 .75.75v2.67a.75.75 0 0 1-1.5 0v-2.67a.75.75 0 0 1 .75-.75M16.658 11.893a.75.75 0 0 1 .75.75v4.354a.75.75 0 0 1-1.5 0v-4.354a.75.75 0 0 1 .75-.75M17.148 6.67a.75.75 0 0 1 .081 1.057l-.376.439a16.1 16.1 0 0 1-8.33 5.148.75.75 0 0 1-.363-1.455 14.6 14.6 0 0 0 7.554-4.67l.377-.439a.75.75 0 0 1 1.057-.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.717 7.239a.75.75 0 0 1 .75-.75h2.192a.75.75 0 0 1 .75.75v2.19a.75.75 0 0 1-1.5 0V7.99h-1.442a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrendUpGraphBoxOutline;

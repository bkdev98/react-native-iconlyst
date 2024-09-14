import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameBoldsharp = ({
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
      d="M16.153 17.234h1.604v-1.5h-1.605zm-1.766-3.482h1.604v-1.5h-1.604zm-2.885 1.714h-1.86v1.823h-1.5v-1.823H6.282v-1.5h1.862v-1.824h1.5v1.824h1.86zm4.51-8.138h-3.011V6.98c-.008-1.52-1.266-2.76-2.81-2.764H9.16a.57.57 0 0 1-.582-.556v-.75h-1.5v.75c0 1.133.935 2.056 2.083 2.056h1.025c.722.002 1.31.573 1.314 1.268v.344H8.488c-4.09 0-7.416 3.327-7.416 7.416s3.326 7.416 7.416 7.416h7.525c4.09 0 7.415-3.327 7.415-7.416s-3.326-7.416-7.416-7.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGameBoldsharp;

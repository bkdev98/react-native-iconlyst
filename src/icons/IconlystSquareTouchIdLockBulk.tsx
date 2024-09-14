import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdLockBulk = ({
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
      d="M7.782 2.375h8.435c3.16 0 5.283 2.223 5.283 5.531v4.989c0 .32-.541.474-.764.243a4.04 4.04 0 0 0-2.915-1.243h-.047c-3.037-.104-4.43 3.124-4.755 4.78a.3.3 0 0 1-.016.055c-.47 1.18-.486 2.99-.015 4.188.084.212-.063.457-.29.457H7.781c-3.159 0-5.282-2.222-5.282-5.53V7.906c0-3.308 2.123-5.531 5.282-5.531"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.669 19.585c0 .297-.243.54-.542.54h-2.604a.54.54 0 0 1-.542-.54v-1.46c0-.303.238-.54.542-.54h2.604c.304 0 .542.236.542.54zm-1.854-4.44c.415-.037.809.348.816.78v.16h-1.608v-.147a.8.8 0 0 1 .792-.793m2.316 1.213v-.444a2.31 2.31 0 0 0-2.307-2.27h-.027a2.3 2.3 0 0 0-2.274 2.28v.434a2.03 2.03 0 0 0-1.041 1.767v1.46c0 1.124.916 2.04 2.04 2.04h2.605a2.043 2.043 0 0 0 2.042-2.04v-1.46c0-.76-.421-1.415-1.038-1.767"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.351 13.661c-.75.994-1.171 2.195-1.332 3.012a.3.3 0 0 1-.016.057l-.023.058a.75.75 0 0 1-.129-.419v-4.272a1.054 1.054 0 1 0-2.106 0v.483a.75.75 0 0 1-1.5 0v-.483a2.553 2.553 0 1 1 5.106 0zM17.166 11.919a3.7 3.7 0 0 0-1.5.52v-.509c0-.822-.258-1.582-.697-2.204a.75.75 0 1 1 1.225-.866c.61.865.97 1.921.972 3.059"
    />
    <Path
      fill={props.color}
      d="M11.838 8.102c-1.426 0-2.672.78-3.331 1.94A.75.75 0 1 1 7.203 9.3a5.33 5.33 0 0 1 6.688-2.287.75.75 0 1 1-.579 1.384 3.8 3.8 0 0 0-1.474-.295M7.259 11.742a.75.75 0 0 1 .75.75v2.836a.75.75 0 0 1-1.5 0v-2.836a.75.75 0 0 1 .75-.75M10.745 14.746a.75.75 0 0 0-1.5 0v1.623a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystSquareTouchIdLockBulk;

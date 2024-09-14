import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAliensLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.91 10.365c2.825-.757 4.94-2.021 4.618-3.224a4.8 4.8 0 0 0-2.4-2.978c-1.196-.635-2.629-.787-3.983-.425S7.627 4.95 6.91 6.098s-.938 2.52-.6 3.781c.322 1.203 2.776 1.243 5.6.486"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.902 5.741c2.947.106 5.164 1.124 5.625 2.846.705 2.63-2.944 5.88-8.14 7.272S3.405 16.26 2.7 13.632c-.46-1.72.952-3.72 3.454-5.287M18.034 16.489l1.105 1.396M9.357 18.704l-.283 1.919M12.664 13.161l.003.01M17.305 10.522l.002.01M7.324 13.195l.003.01"
    />
  </Svg>
);
export default IconlystAliensLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallPhoneBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22 17.303c-.013-.97-.741-1.663-1.749-2.62a38 38 0 0 1-.798-.776c-1.3-1.3-2.377-.879-3.328-.506-1.086.424-2.111.828-3.981-1.043h-.001c-1.87-1.867-1.469-2.893-1.044-3.979.372-.95.794-2.029-.505-3.33-.285-.286-.542-.557-.779-.806C8.86 3.238 8.168 2.51 7.199 2.498c-.79-.012-1.72.523-3.036 1.84-.013.013-.081.081-.093.096C3.78 4.72 3.007 5.477 3 6.951c-.01 2.307 1.85 5.342 5.532 9.024 3.669 3.67 6.696 5.53 8.999 5.528h.031c1.475-.01 2.229-.786 2.513-1.078l.092-.09c1.312-1.313 1.843-2.19 1.833-3.032"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallPhoneBold;

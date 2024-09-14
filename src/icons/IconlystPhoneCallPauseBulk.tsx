import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallPauseBulk = ({
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
      d="M22 17.303c-.012-.971-.741-1.663-1.749-2.622-.247-.235-.516-.49-.798-.774-1.3-1.299-2.377-.879-3.328-.506-1.085.425-2.111.828-3.981-1.043h-.001c-1.87-1.867-1.468-2.893-1.044-3.979.372-.95.794-2.029-.505-3.33-.285-.286-.542-.557-.779-.806C8.86 3.238 8.168 2.51 7.199 2.498h-.025c-.833 0-1.708.535-3.011 1.839-.013.014-.081.082-.093.097C3.78 4.72 3.007 5.477 3 6.951c-.01 2.307 1.85 5.342 5.532 9.024 3.669 3.669 6.696 5.529 8.999 5.528h.031c1.475-.011 2.229-.786 2.513-1.078l.092-.09c1.312-1.313 1.844-2.192 1.833-3.032"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.646 9.011a.75.75 0 0 0 .75-.75v-4.22a.75.75 0 0 0-1.5 0v4.22c0 .414.336.75.75.75M16.275 9.011a.75.75 0 0 0 .75-.75v-4.22a.75.75 0 0 0-1.5 0v4.22c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallPauseBulk;

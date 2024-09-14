import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm2Bold = ({
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
      d="M18.249 6.014a.3.3 0 0 0 .3.3h2.339c.19 0 .332-.175.28-.358a4.51 4.51 0 0 0-2.524-2.95c-.19-.086-.395.058-.395.266zM7.249 10.822a.3.3 0 0 0 .3.3h8.9a.3.3 0 0 0 .3-.3v-8a.306.306 0 0 0-.273-.303c-.1-.01-.201-.019-.307-.019H7.83a3 3 0 0 0-.309.02.306.306 0 0 0-.273.303zM18.248 10.822a.3.3 0 0 0 .3.3h2.531a.3.3 0 0 0 .3-.3V8.113a.3.3 0 0 0-.3-.3h-2.53a.3.3 0 0 0-.3.3zM18.25 15.63a.3.3 0 0 0 .3.3h2.53a.3.3 0 0 0 .3-.3v-2.709a.3.3 0 0 0-.3-.3h-2.53a.3.3 0 0 0-.3.3zM2.62 15.63a.3.3 0 0 0 .3.3h2.53a.3.3 0 0 0 .3-.3v-2.709a.3.3 0 0 0-.3-.3H2.92a.3.3 0 0 0-.3.3zM5.749 17.73a.3.3 0 0 0-.3-.3H3.052a.286.286 0 0 0-.286.345c.332 1.477 1.251 2.608 2.588 3.217.189.086.395-.058.395-.266zM16.749 12.922a.3.3 0 0 0-.3-.3h-8.9a.3.3 0 0 0-.3.3v8.255c0 .156.118.288.273.304.1.01.202.02.309.02h8.338c.105 0 .207-.01.307-.02a.306.306 0 0 0 .273-.304zM18.549 17.43a.3.3 0 0 0-.3.3v2.997c0 .208.206.352.395.266 1.337-.609 2.257-1.74 2.588-3.218a.286.286 0 0 0-.285-.344zM2.62 10.822a.3.3 0 0 0 .3.3h2.53a.3.3 0 0 0 .3-.3V8.113a.3.3 0 0 0-.3-.3H2.92a.3.3 0 0 0-.3.3zM5.449 6.314a.3.3 0 0 0 .3-.3V3.272c0-.208-.206-.352-.395-.266a4.51 4.51 0 0 0-2.524 2.95.285.285 0 0 0 .281.358z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilm2Bold;

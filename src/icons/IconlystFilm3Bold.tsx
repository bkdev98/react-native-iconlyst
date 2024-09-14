import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm3Bold = ({
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
      d="M8.068 21.08a.3.3 0 0 0 .3.3h2.709a.3.3 0 0 0 .3-.3v-2.533a.3.3 0 0 0-.3-.3h-2.71a.3.3 0 0 0-.3.3zM8.068 5.447a.3.3 0 0 0 .3.3h2.709a.3.3 0 0 0 .3-.3v-2.53a.3.3 0 0 0-.3-.3h-2.71a.3.3 0 0 0-.3.3zM12.877 21.08a.3.3 0 0 0 .3.3h2.709a.3.3 0 0 0 .3-.3v-2.533a.3.3 0 0 0-.3-.3h-2.71a.3.3 0 0 0-.3.3zM11.377 7.547a.3.3 0 0 0-.3-.3H2.823a.306.306 0 0 0-.304.273c-.01.1-.019.203-.019.31v8.337q.001.158.019.307a.306.306 0 0 0 .304.273h8.254a.3.3 0 0 0 .3-.3zM12.877 5.447a.3.3 0 0 0 .3.3h2.709a.3.3 0 0 0 .3-.3v-2.53a.3.3 0 0 0-.3-.3h-2.71a.3.3 0 0 0-.3.3zM6.568 18.547a.3.3 0 0 0-.3-.3H3.272c-.207 0-.352.206-.266.395.609 1.337 1.74 2.258 3.218 2.59.18.04.344-.102.344-.286zM21.5 16.167V7.83q-.002-.158-.02-.309a.306.306 0 0 0-.303-.273h-8a.3.3 0 0 0-.3.3v8.9a.3.3 0 0 0 .3.3h8a.306.306 0 0 0 .304-.273q.017-.149.019-.307M17.986 18.247a.3.3 0 0 0-.3.3v2.34c0 .19.174.332.358.28a4.52 4.52 0 0 0 2.95-2.525c.085-.189-.059-.395-.267-.395zM17.686 5.447a.3.3 0 0 0 .3.3h2.741c.208 0 .352-.206.266-.395a4.52 4.52 0 0 0-2.95-2.524.285.285 0 0 0-.357.282zM6.268 5.746a.3.3 0 0 0 .3-.3V3.05a.286.286 0 0 0-.344-.285c-1.477.331-2.608 1.251-3.217 2.587-.086.19.058.395.266.395z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilm3Bold;

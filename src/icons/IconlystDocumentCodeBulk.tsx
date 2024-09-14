import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentCodeBulk = ({
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
      d="M19.85 9.096c.241 0 .434.195.434.438v7.836c0 2.417-1.939 4.376-4.342 4.376H8.271c-2.509 0-4.555-2.056-4.555-4.59V6.65c0-2.417 1.95-4.396 4.352-4.396h5.153c.251 0 .444.205.444.449V5.84c0 1.783 1.457 3.245 3.223 3.255z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.134 17.752a.749.749 0 0 1-.53-1.28l1.64-1.639-1.607-1.608a.749.749 0 1 1 1.06-1.06l2.138 2.137a.75.75 0 0 1 0 1.061l-2.171 2.17a.74.74 0 0 1-.53.22m-2.798-2.232c.146.147.338.22.53.22a.749.749 0 0 0 .53-1.28l-1.64-1.639 1.607-1.608a.749.749 0 1 0-1.06-1.06L8.165 12.29a.75.75 0 0 0 0 1.061z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M19.417 7.679c-.793.003-1.728 0-2.401-.007-1.067 0-1.946-.888-1.946-1.966v-2.57c0-.42.505-.627.793-.324l.65.683 1.305 1.37 1.93 2.028a.464.464 0 0 1-.331.786"
    />
  </Svg>
);
export default IconlystDocumentCodeBulk;

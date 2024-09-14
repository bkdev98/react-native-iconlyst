import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPartyingBold = ({
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
      d="M16.844 11.028a.75.75 0 0 1-1.052-.138c-.076-.1-.242-.266-.493-.266s-.417.167-.493.266a.75.75 0 0 1-1.19-.913c.832-1.084 2.534-1.084 3.366 0a.75.75 0 0 1-.138 1.05M16.1 15.37c-.865 1.129-2.132 1.776-3.475 1.776-1.34 0-2.606-.647-3.474-1.775a.751.751 0 0 1 1.189-.915c.58.756 1.414 1.19 2.285 1.19s1.705-.433 2.285-1.19a.75.75 0 0 1 1.19.914m-7.813-4.342a.75.75 0 0 1-.14-1.051c.83-1.088 2.537-1.086 3.367 0a.75.75 0 0 1-1.191.91c-.077-.098-.241-.264-.493-.264-.251 0-.415.166-.491.265a.75.75 0 0 1-1.052.14M4.49 7.746l-.252-1.173 2.335-2.335 1.173.252A9.55 9.55 0 0 0 4.49 7.746m-.888-4.144 1.224.262-.962.962zm9.023-.476c-.903 0-1.774.134-2.602.371a.7.7 0 0 0-.241-.105l-7-1.5a.749.749 0 0 0-.89.891l1.5 7a.7.7 0 0 0 .103.247 9.4 9.4 0 0 0-.37 2.596c0 5.238 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPartyingBold;

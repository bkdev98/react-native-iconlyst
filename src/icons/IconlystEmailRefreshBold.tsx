import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRefreshBold = ({
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
      d="M11.325 12.725q-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l4-3.2c.3-.3.8-.2 1.1.1.2.5.2.9-.1 1.2l-4 3.2q-.75.6-1.8.6m4.186.014a2.49 2.49 0 0 1 2.413 0 .35.35 0 0 0 .36-.012 2.5 2.5 0 0 1 1.14-.382l.036-.003c.056-.004.11-.017.165-.017h.9a.3.3 0 0 0 .3-.3v-3.9c0-3.2-2.2-5.5-5.1-5.5h-8.8c-2.9 0-5.1 2.4-5.1 5.5v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.1 1.4 3.5 1.4h5.834c.218 0 .364-.226.29-.431a5.5 5.5 0 0 1-.324-1.869c0-1.998 1.067-3.832 2.786-4.786"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.587 15.522a.746.746 0 0 0-.262-1.447h-1.7a.75.75 0 0 0-.75.75v1.7a.75.75 0 0 0 1.5 0v-.086c.187.328.3.696.3 1.086a2.35 2.35 0 0 1-2.35 2.35 2.35 2.35 0 0 1-2.35-2.35c0-.805.438-1.569 1.114-1.945a.749.749 0 1 0-.728-1.31c-1.163.645-1.886 1.893-1.886 3.255a3.854 3.854 0 0 0 3.85 3.85 3.854 3.854 0 0 0 3.85-3.85c0-.725-.211-1.414-.588-2.003"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailRefreshBold;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardMenuBold = ({
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
      d="M15.47 12.36h-3.99c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.99c.41 0 .75.34.75.75s-.34.75-.75.75m0 4.82h-3.99c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.99c.41 0 .75.34.75.75s-.34.75-.75.75m-6.66-4.82h-.29c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.29c.41 0 .75.34.75.75s-.34.75-.75.75m0 4.82h-.29c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.29c.41 0 .75.34.75.75s-.34.75-.75.75m8.083-12.798c-.12-.035-.238.054-.256.178a2.48 2.48 0 0 1-2.447 2.12H9.81a2.49 2.49 0 0 1-2.457-2.12c-.018-.124-.136-.213-.256-.177A4.25 4.25 0 0 0 4.07 8.46v8.9c0 2.34 1.9 4.25 4.25 4.25h7.36c2.35 0 4.25-1.91 4.25-4.25v-8.9a4.25 4.25 0 0 0-3.037-4.079"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.807 5.48h4.38c.68 0 1.24-.54 1.26-1.22.01-.02.01-.04.01-.06v-.54c0-.7-.57-1.27-1.27-1.27h-4.38c-.7 0-1.28.57-1.28 1.27v.54c0 .02 0 .03.01.05.02.69.59 1.23 1.27 1.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClipboardMenuBold;

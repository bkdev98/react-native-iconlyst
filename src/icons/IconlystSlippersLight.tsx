import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippersLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.044 11.179a3.816 3.816 0 0 1 3.203-4.346 3.816 3.816 0 0 1 4.346 3.203s.272 4.264.394 6.554c.091 1.723-1.199 3.099-2.758 3.333-1.557.238-3.198-.694-3.62-2.366-.562-2.224-1.565-6.378-1.565-6.378"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.819 13.683c-.758-4.607-7.629-3.393-6.87 1.215M17.753 4.085a3.816 3.816 0 0 1 3.203 4.346s-1.004 4.153-1.566 6.377c-.422 1.673-2.063 2.605-3.62 2.366-1.559-.233-2.85-1.609-2.758-3.332.122-2.29.394-6.554.394-6.554a3.816 3.816 0 0 1 4.347-3.203"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.18 10.935c.759-4.607 7.628-3.394 6.87 1.214"
    />
  </Svg>
);
export default IconlystSlippersLight;

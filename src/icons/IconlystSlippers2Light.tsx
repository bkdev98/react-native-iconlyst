import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers2Light = ({
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
      d="M17.753 4.084a3.817 3.817 0 0 1 3.203 4.346s-1.003 4.154-1.565 6.379c-.423 1.672-2.063 2.604-3.62 2.366-1.56-.234-2.851-1.61-2.759-3.333.122-2.29.395-6.555.395-6.555a3.817 3.817 0 0 1 4.346-3.203"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.044 11.178a3.817 3.817 0 0 1 3.203-4.346 3.817 3.817 0 0 1 4.347 3.203s.272 4.265.394 6.555c.091 1.724-1.2 3.1-2.758 3.333-1.558.238-3.198-.694-3.622-2.365a868 868 0 0 1-1.564-6.38"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.729 12.197c-2.452-.764-4.84-.441-7.153 1.177M7.327 11.803l-.33-1.85M16.674 9.055l.33-1.85M13.272 9.449c2.45-.764 4.84-.441 7.152 1.177"
    />
  </Svg>
);
export default IconlystSlippers2Light;

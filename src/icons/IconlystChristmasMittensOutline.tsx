import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasMittensOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M4.715 18.19c-.41 0-.75-.34-.75-.75v-9c0-3.21 2.61-5.82 5.82-5.82s5.82 2.61 5.82 5.82v3.86c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.44c0-2.38-1.94-4.32-4.32-4.32s-4.32 1.94-4.32 4.32v9c0 .41-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M14.795 17.98c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l4.25-4.25c.28-.28.44-.65.44-1.05s-.15-.77-.43-1.05c-.58-.58-1.52-.58-2.1 0l-1.04 1.04c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l1.04-1.04a2.994 2.994 0 0 1 4.22 0c.56.56.87 1.31.87 2.11s-.31 1.55-.88 2.11l-4.25 4.25c-.15.15-.34.22-.53.22"
    />
    <Path
      fill={props.color}
      d="M13.795 22.61h-7.69c-1.48 0-2.56-.98-2.56-2.32V19c0-1.34 1.08-2.32 2.56-2.32h7.69c1.48 0 2.56.97 2.56 2.32v1.29c0 1.34-1.08 2.32-2.56 2.32m-7.69-4.42c-.49 0-1.06.21-1.06.82v1.29c0 .6.57.82 1.06.82h7.69c.49 0 1.06-.21 1.06-.82v-1.29c0-.6-.57-.82-1.06-.82z"
    />
  </Svg>
);
export default IconlystChristmasMittensOutline;

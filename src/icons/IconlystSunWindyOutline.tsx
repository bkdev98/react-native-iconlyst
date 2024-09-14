import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunWindyOutline = ({
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
      d="M6.175 19.11c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.97-.97c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.97.97c-.15.15-.34.22-.53.22m-1.26-6.36h-1.37c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.37c.41 0 .75.34.75.75s-.34.75-.75.75m2.23-5.39c-.19 0-.38-.07-.53-.22l-.97-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.97.97c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22m10.79 0c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.97-.97c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.97.97c-.15.15-.34.22-.53.22m-5.39-2.23c-.41 0-.75-.34-.75-.75V3.01c0-.41.34-.75.75-.75s.75.34.75.75v1.37c0 .41-.34.75-.75.75M9.575 15.71c-.19 0-.38-.07-.53-.22a4.95 4.95 0 0 1 3.5-8.45c1.32 0 2.56.51 3.5 1.45.29.29.29.77 0 1.06s-.77.29-1.06 0c-1.3-1.3-3.57-1.3-4.87 0-.65.65-1.01 1.52-1.01 2.44s.36 1.79 1.01 2.44c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM18.135 14.96h-5.04c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.04c.34 0 .46-.25.46-.46 0-.4-.61-.59-.84-.26-.23.34-.7.43-1.04.2a.753.753 0 0 1-.2-1.04c.36-.54.97-.86 1.62-.86 1.08 0 1.96.88 1.96 1.96s-.84 1.96-1.96 1.96M14.924 21.74c-.61 0-1.18-.3-1.52-.81a.753.753 0 0 1 .2-1.04c.34-.23.81-.14 1.04.2.17.24.61.11.61-.19 0-.08-.02-.33-.33-.33h-2.81c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.81c1.04 0 1.83.79 1.83 1.83s-.82 1.83-1.83 1.83zM20.225 20.1c-.56 0-1.11-.23-1.5-.64-.29-.3-.27-.77.03-1.06.3-.28.77-.27 1.06.03.33.35.99.08.99-.39 0-.26-.1-.56-.58-.57h-5.12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.14c1.21.02 2.07.89 2.07 2.07s-.93 2.07-2.07 2.07z"
    />
  </Svg>
);
export default IconlystSunWindyOutline;
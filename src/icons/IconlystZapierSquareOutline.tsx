import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZapierSquareOutline = ({
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
      d="M9.885 10.64c-.19 0-.38-.07-.53-.22L7.935 9a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.42 1.42c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22M15.546 16.278c-.19 0-.38-.07-.53-.22l-1.43-1.41a.745.745 0 0 1 0-1.06c.29-.29.77-.3 1.06 0l1.43 1.41c.29.29.3.77 0 1.06-.15.15-.34.22-.53.22M8.465 16.277c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1.42-1.42c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.42 1.42c-.15.15-.34.22-.53.22M14.116 10.64c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1.42-1.42c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.42 1.42c-.15.15-.34.22-.53.22M17.005 12.758h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75M9.505 12.758h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75M11.995 10.248c-.41 0-.75-.34-.75-.75v-2.49c0-.41.34-.75.75-.75s.75.34.75.75v2.49c0 .41-.34.75-.75.75M11.995 17.74c-.41 0-.75-.34-.75-.75V14.5c0-.41.34-.75.75-.75s.75.34.75.75v2.49c0 .41-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.005 15.249c-.83 0-1.63-.15-2.39-.44a.76.76 0 0 1-.43-.43c-.29-.76-.43-1.56-.43-2.38s.15-1.62.44-2.38c.08-.2.23-.36.43-.43 1.52-.58 3.25-.58 4.77 0 .2.08.36.23.43.43.29.76.43 1.56.43 2.38 0 .81-.15 1.62-.43 2.38-.08.2-.24.36-.44.44-.76.28-1.56.43-2.37.43zm-1.53-1.73c.97.3 2.05.3 3.05 0 .15-.5.23-1.01.23-1.53 0-.51-.08-1.03-.23-1.52-.98-.3-2.06-.3-3.05 0-.15.49-.23 1.01-.23 1.52s.08 1.03.23 1.52z"
    />
    <Path
      fill={props.color}
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.77V8.03c0-3.46 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.77-5.53 5.77m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.59 1.58 4.27 4.03 4.27h8.43c2.45 0 4.03-1.68 4.03-4.27V8.03c0-2.6-1.58-4.28-4.03-4.28z"
    />
  </Svg>
);
export default IconlystZapierSquareOutline;

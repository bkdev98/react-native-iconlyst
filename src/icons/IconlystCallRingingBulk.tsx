import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallRingingBulk = ({
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
      fillRule="evenodd"
      d="M19.799 14.748a40 40 0 0 1-.787-.764c-1.277-1.271-2.38-.84-3.267-.492-1.063.415-2.065.81-3.893-1.017-1.83-1.827-1.437-2.832-1.021-3.895.347-.888.779-1.992-.498-3.265a42 42 0 0 1-.76-.787c-.938-.99-1.616-1.707-2.571-1.719-.781-.026-1.691.511-2.983 1.805l-.09.092c-.285.278-1.044 1.02-1.053 2.467-.015 2.263 1.81 5.243 5.423 8.859 3.596 3.595 6.564 5.416 8.823 5.416h.025c1.45-.009 2.193-.768 2.473-1.055l.094-.09c1.287-1.288 1.809-2.152 1.798-2.977-.011-.956-.725-1.636-1.713-2.578"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.353 9.992a.75.75 0 0 0 1.473-.287 4.84 4.84 0 0 0-3.842-3.843.76.76 0 0 0-.88.593.75.75 0 0 0 .593.88 3.345 3.345 0 0 1 2.656 2.657"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.923 2.563c-.407-.063-.783.25-.828.662a.75.75 0 0 0 .663.828A6.61 6.61 0 0 1 20.63 9.92a.75.75 0 0 0 .744.667q.042 0 .085-.004a.75.75 0 0 0 .66-.83 8.1 8.1 0 0 0-7.196-7.191"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallRingingBulk;

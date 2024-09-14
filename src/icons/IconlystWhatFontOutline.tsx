import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhatFontOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.333 6.878c-.346.293-.597.739-.597 1.399a.75.75 0 0 1-1.5 0c0-1.093.439-1.96 1.127-2.544.672-.569 1.54-.835 2.38-.835s1.71.266 2.38.835c.69.583 1.128 1.451 1.128 2.544 0 .769-.197 1.355-.518 1.837-.27.406-.62.719-.897.965l-.087.078c-.308.277-.54.506-.71.807-.163.288-.295.69-.295 1.332a.75.75 0 0 1-1.5 0c0-.864.182-1.528.49-2.07.299-.53.693-.897 1.012-1.184l.071-.064c.302-.27.51-.457.668-.695.149-.224.266-.518.266-1.006 0-.66-.251-1.106-.597-1.4-.362-.306-.872-.479-1.41-.479-.54 0-1.05.173-1.411.48M9.364 8a.75.75 0 0 1 .688.45l4.863 11.132a.75.75 0 0 1-1.375.6l-4.176-9.559-4.177 9.56a.75.75 0 1 1-1.374-.6L8.677 8.45A.75.75 0 0 1 9.364 8"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.49 15.902a.75.75 0 0 1 .75-.75h6.249a.75.75 0 0 1 0 1.5h-6.25a.75.75 0 0 1-.75-.75M16.982 16.358a1.01 1.01 0 1 1 2.022 0 1.01 1.01 0 0 1-2.022 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWhatFontOutline;

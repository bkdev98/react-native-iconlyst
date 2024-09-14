import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSaturnBold = ({
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
      d="M20.322 12.667a7.337 7.337 0 0 0-11.507-6.72 15 15 0 0 0-.728-.174c-.969-.206-1.865-.283-2.61-.184-.731.098-1.456.39-1.844 1.06-.387.671-.277 1.445.004 2.127.286.695.802 1.432 1.464 2.169q.26.288.556.584-.018.255-.018.512a7.335 7.335 0 0 0 11.5 6.04q.274.07.54.125c.969.206 1.865.283 2.61.184.73-.098 1.456-.39 1.843-1.06.387-.671.278-1.445-.004-2.127-.286-.695-.801-1.432-1.463-2.169q-.165-.183-.343-.367M7.485 7.143c-.747-.137-1.359-.166-1.814-.106-.529.07-.712.239-.772.343s-.114.347.09.84c.176.43.512.95 1.013 1.536a7.3 7.3 0 0 0-.345 1.773c1.312 1.31 3.13 2.68 5.24 3.9 2.207 1.274 4.399 2.187 6.241 2.652a7.4 7.4 0 0 0 1.355-1.208c.651.105 1.19.123 1.602.069.528-.07.712-.239.772-.343s.114-.347-.09-.84c-.156-.38-.438-.832-.848-1.337a7.4 7.4 0 0 1-.447 1.005 7.4 7.4 0 0 1-.989 1.446 11 11 0 0 1-.512-.096c-1.758-.373-4.022-1.268-6.353-2.614-2.332-1.346-4.238-2.858-5.44-4.195l-.186-.212q.238-.724.614-1.374a7.4 7.4 0 0 1 .869-1.24"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSaturnBold;

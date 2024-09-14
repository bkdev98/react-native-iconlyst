import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieStarBold = ({
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
      d="M9.4 6.429a.3.3 0 0 0 .3.3h4.595a.3.3 0 0 0 .3-.3V2.8a.3.3 0 0 0-.3-.3H9.7a.3.3 0 0 0-.3.3zM7.6 6.729a.3.3 0 0 0 .3-.3V2.812a.29.29 0 0 0-.304-.292C5.259 2.67 3.585 4.14 3.1 6.384a.288.288 0 0 0 .286.345zM12.334 12.969l-.336-.672-.328.658c-.18.35-.509.584-.883.637l-.709.103.506.484c.284.284.407.67.34 1.044l-.122.703.654-.341a1.24 1.24 0 0 1 .547-.13c.182 0 .361.042.524.123l.669.349-.123-.708a1.17 1.17 0 0 1 .326-1.026l.52-.498-.711-.103a1.18 1.18 0 0 1-.874-.623"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.448 14.305-.866.83.208 1.196a1.18 1.18 0 0 1-.956 1.346 1.24 1.24 0 0 1-.725-.104l-1.11-.58-1.097.572c-.179.087-.365.13-.547.13-.426 0-.825-.23-1.032-.631a1.15 1.15 0 0 1-.115-.733l.208-1.194-.882-.847a1.14 1.14 0 0 1-.357-.804 1.17 1.17 0 0 1 .333-.844c.17-.183.423-.31.7-.338l1.194-.172.548-1.098c.318-.587 1.023-.808 1.592-.508a1.2 1.2 0 0 1 .501.508l.548 1.098 1.223.175c.625.085 1.073.666.993 1.297a1.16 1.16 0 0 1-.36.7M3.25 8.229a.3.3 0 0 0-.3.3v7.7c0 3.153 2.027 5.27 5.044 5.27h8.013c3.016 0 5.043-2.117 5.043-5.27v-7.7a.3.3 0 0 0-.3-.3zM16.095 6.429a.3.3 0 0 0 .3.3h4.217a.288.288 0 0 0 .287-.345c-.486-2.244-2.161-3.716-4.5-3.864a.29.29 0 0 0-.304.292z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieStarBold;

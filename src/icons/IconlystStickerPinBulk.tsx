import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerPinBulk = ({
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
      d="M21.15 13.776a.507.507 0 0 0 .506-.512V7.35c0-2.817-2.261-5.1-5.061-5.1H7.653c-2.924 0-5.308 2.397-5.308 5.35v9.027c0 2.817 2.272 5.123 5.072 5.123h6.006a.52.52 0 0 0 .518-.523V17.57c0-2.079 1.697-3.783 3.755-3.794z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.847 15.435a229 229 0 0 1 2.797-.008.542.542 0 0 1 .387.917l-2.25 2.363-2.278 2.393c-.337.353-.925.11-.925-.38v-2.994c0-1.256 1.024-2.291 2.268-2.291"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.525 13.82h1.59c.79 0 1.43-.64 1.43-1.43 0-.77-.36-1.51-.98-1.97l-.09-.06c-.16-.09-.39-.23-.5-.32a1.7 1.7 0 0 1 0-.32c.08-.07.23-.2.41-.35.54-.51.71-1.3.43-1.99-.28-.7-.94-1.15-1.7-1.15h-2.69c-.76 0-1.42.45-1.7 1.15-.28.69-.11 1.47.5 2.05.12.1.26.22.34.29.01.09.01.23.01.32-.11.09-.33.22-.51.32l-.09.06c-.62.46-.98 1.2-.98 1.97 0 .79.64 1.43 1.43 1.43h1.6v1.29a.749.749 0 1 0 1.5 0zm-.55-1.47 2.14-.03c-.06-.22-.19-.49-.41-.67-.87-.48-1.03-.8-1.08-.91-.22-.44-.19-1.23-.02-1.64l.001-.002c.041-.093.165-.372.809-.858.03-.04.06-.18.01-.3a.325.325 0 0 0-.31-.21h-2.69c-.14 0-.26.08-.31.21-.05.12-.02.26.08.36.574.426.697.704.739.797l.001.003c.18.41.2 1.2-.02 1.64-.05.11-.21.43-1.08.91-.21.18-.34.45-.34.74l2.05-.03c.14-.04.29-.04.43-.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerPinBulk;

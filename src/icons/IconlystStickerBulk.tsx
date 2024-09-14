import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerBulk = ({
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
  </Svg>
);
export default IconlystStickerBulk;

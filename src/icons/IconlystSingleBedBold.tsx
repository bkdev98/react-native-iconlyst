import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSingleBedBold = ({
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
      d="M4.584 10.499h3.35c.11 0 .2-.09.198-.2-.006-.386-.014-.79.137-1.145.217-.508.681-.907 1.271-1.096.345-.1.698-.1 1.399-.1h2.393c.7 0 1.052 0 1.384.096.606.194 1.069.593 1.284 1.102.152.353.143.758.137 1.143-.002.11.087.2.197.2h3.352a.5.5 0 0 0 .5-.5V6.728c0-.786 0-1.179-.134-1.548a2.32 2.32 0 0 0-1.381-1.386c-.372-.126-.764-.126-1.549-.126H7.148c-.785 0-1.178 0-1.564.132a2.32 2.32 0 0 0-1.366 1.378c-.134.371-.134.765-.134 1.55v3.271a.5.5 0 0 0 .5.5M21.51 12.912a2.1 2.1 0 0 0-1.271-1.274c-.342-.117-.698-.117-1.408-.117H5.439c-.71 0-1.066 0-1.414.12a2.09 2.09 0 0 0-1.266 1.269c-.124.343-.124.7-.124 1.411v1.391c0 .717 0 1.077.124 1.42a2.07 2.07 0 0 0 1.84 1.373v1.076a.75.75 0 0 0 1.5 0v-1.06h12.072v1.06a.75.75 0 0 0 1.5 0v-1.076a2.07 2.07 0 0 0 1.839-1.372c.125-.344.125-.704.125-1.421v-1.391c0-.712 0-1.068-.124-1.409"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSingleBedBold;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSerumBold = ({
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
      d="m11.48 10.704-.418.435a1 1 0 0 1-.063.077.8.8 0 0 0 .002 1.089.664.664 0 0 0 .96 0 .815.815 0 0 0-.002-1.103z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.045 13.342a2.15 2.15 0 0 1-3.127 0c-.816-.854-.839-2.22-.069-3.093a1 1 0 0 1 .071-.087l1.021-1.06a.773.773 0 0 1 1.08 0l1.021 1.06c.84.877.84 2.302.003 3.18m-1.676-8.858a.631.631 0 0 1 1.262 0v.28h-1.262zm4.757 3.32c.895-.012 1.236-.004 1.543.003.109.003.221.005.346.006v-.44a2.614 2.614 0 0 0-2.612-2.61h-1.272v-.28a2.132 2.132 0 0 0-4.262 0v.28H8.597a2.614 2.614 0 0 0-2.612 2.61v8.95c0 1.01.59 1.936 1.503 2.354 1.252.576 2.51.902 3.77.997a32 32 0 0 0 .008 1.236.75.75 0 0 0 .763.735c.414-.008.767-.351.737-.762-.013-.65-.012-.957-.008-1.211a10.9 10.9 0 0 0 3.752-.995 2.59 2.59 0 0 0 1.505-2.354v-1.251l-.377-.005a36 36 0 0 0-1.494-.004c-.426.035-.755-.327-.759-.742a.75.75 0 0 1 .741-.758c.895-.01 1.236-.003 1.543.003l.346.005v-1.38l-.381-.005a42 42 0 0 0-1.491-.002c-.425.023-.754-.327-.758-.742a.75.75 0 0 1 .742-.758c.891-.01 1.232-.002 1.537.004l.351.003v-1.38q-.204 0-.377-.004c-.298-.006-.627-.015-1.494-.003a.74.74 0 0 1-.759-.741.75.75 0 0 1 .741-.76"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSerumBold;

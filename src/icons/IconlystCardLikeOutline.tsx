import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardLikeOutline = ({
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
      d="M8.203 3.75a2.774 2.774 0 0 0-2.774 2.774v10.952a2.774 2.774 0 0 0 2.774 2.774h8.048a2.775 2.775 0 0 0 2.774-2.774V6.524a2.775 2.775 0 0 0-2.774-2.774zM3.929 6.524A4.274 4.274 0 0 1 8.203 2.25h8.048a4.275 4.275 0 0 1 4.274 4.274v10.952a4.275 4.275 0 0 1-4.274 4.274H8.203a4.274 4.274 0 0 1-4.274-4.274z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.94 7.991c-.475.154-.76.714-.548 1.377.173.535.666 1.076 1.214 1.522.228.185.446.338.62.452a8 8 0 0 0 .627-.458c.553-.45 1.042-.99 1.206-1.511l.002-.004c.211-.66-.073-1.222-.55-1.377a.94.94 0 0 0-.837.142.75.75 0 0 1-.898-.002.92.92 0 0 0-.836-.14m1.287 4.23-.36.66v-.001l-.003-.002-.007-.003-.022-.013-.078-.044a9.196 9.196 0 0 1-1.097-.763c-.604-.492-1.385-1.263-1.696-2.227-.386-1.207.029-2.786 1.517-3.265h.001a2.43 2.43 0 0 1 1.746.103 2.44 2.44 0 0 1 1.737-.104l.005.001c1.484.479 1.906 2.053 1.52 3.262-.303.959-1.087 1.731-1.69 2.222a9.4 9.4 0 0 1-1.18.814l-.022.012-.007.004-.002.002h-.001zm0 0 .36.658a.75.75 0 0 1-.72.001zM3.928 15.602a.75.75 0 0 1 .75-.75h15.096a.75.75 0 1 1 0 1.5H4.678a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardLikeOutline;

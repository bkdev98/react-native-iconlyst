import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst24HourReturnGuaranteeBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.352 5.013c3.179-1.973 7.26-1.46 9.893 1l-.603.607a.75.75 0 0 0 .532 1.279l2.22-.002a.75.75 0 0 0 .75-.751l-.002-2.233a.749.749 0 0 0-1.282-.527l-.56.563c-3.112-2.935-7.96-3.553-11.74-1.21A9.67 9.67 0 0 0 3 11.484a.75.75 0 0 0 .713.786h.038a.75.75 0 0 0 .748-.713 8.18 8.18 0 0 1 3.853-6.544M21.787 11.728a.76.76 0 0 0-.786.712 8.17 8.17 0 0 1-3.853 6.544c-3.18 1.972-7.26 1.459-9.892-1l.6-.604a.748.748 0 0 0-.532-1.278l-2.222.002a.75.75 0 0 0-.749.75l.002 2.233a.749.749 0 0 0 1.283.528l.562-.566a9.76 9.76 0 0 0 6.68 2.646 9.57 9.57 0 0 0 5.06-1.437 9.66 9.66 0 0 0 4.56-7.744.75.75 0 0 0-.713-.786" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.763 12.445.736-1.023v1.023zm1.486 2.709a.75.75 0 0 0 .75-.75v-.46h.276a.75.75 0 0 0 0-1.5h-.276v-3.35a.75.75 0 0 0-1.36-.438l-2.948 4.1a.75.75 0 0 0 .609 1.189h2.199v.459c0 .414.336.75.75.75M12.352 10.527a2.167 2.167 0 0 0-2.164-2.164 2.167 2.167 0 0 0-2.163 2.164.75.75 0 0 0 1.5 0 .665.665 0 0 1 1.327 0c0 .407-.304.656-.996 1.127-.773.525-1.83 1.245-1.83 2.732 0 .414.336.75.75.75h2.826a.75.75 0 0 0 0-1.5H9.788c.199-.248.508-.467.912-.742.736-.501 1.652-1.124 1.652-2.367"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst24HourReturnGuaranteeBulk;

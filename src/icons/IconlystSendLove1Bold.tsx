import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendLove1Bold = ({
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
      d="M14.107 10.52a.5.5 0 0 0 .423 0c.13-.06 3.198-1.507 3.975-3.877V6.64c.258-.802.237-1.647-.061-2.382a2.8 2.8 0 0 0-1.764-1.646 3.06 3.06 0 0 0-1.393-.108c-.363.067-.686.245-.972.445-.283-.194-.607-.378-.966-.434a2.9 2.9 0 0 0-1.39.097c-1.773.568-2.323 2.495-1.832 4.024.734 2.344 3.848 3.822 3.98 3.884M20.304 16.379l-.182.183c-1.241 1.254-2.312 2.336-3.898 2.947-2.31.898-4.471.469-7-.037-.864-.167-1.658-.203-2.538-.211v-3.605l.382-.26c1.26-.864 2.35-1.61 3.809-1.65 1.04-.037 2.055.166 3.245.459.48.12.779.483.779.943 0 .544-.431.938-1.024.94l-.04-.001q-.444-.016-.912 0h-.428a.74.74 0 0 0-.712.562q-.01.042-.017.084c-.005.036-.021.068-.021.105 0 .02.01.039.012.06 0 .026-.008.05-.004.078.007.046.03.082.045.125l.016.044c.129.31.449.51.789.465.11-.015.227-.016.342-.022h.927l.007-.001c.249.009.498.016.742.01 1.568-.038 2.789-1.042 3.867-1.928.242-.2.48-.394.714-.573a.85.85 0 0 1 1.098.078.855.855 0 0 1 .002 1.205m1.062-2.263A2.354 2.354 0 0 0 18.3 13.9c-.252.19-.506.399-.763.61-.38.314-.767.629-1.163.897.01-.087.027-.17.027-.26 0-1.144-.768-2.108-1.915-2.398-1.135-.28-2.365-.54-3.648-.502-1.802.049-3.136.9-4.408 1.769-.3-.524-.842-.848-1.522-.848H3.403a.5.5 0 0 0-.5.5v7.3a.5.5 0 0 0 .5.5h1.505c.618 0 1.122-.27 1.434-.71.943.003 1.75.023 2.613.189 1.487.297 2.927.584 4.39.584a9.3 9.3 0 0 0 3.42-.623c1.885-.726 3.118-1.972 4.424-3.291l.177-.178c.912-.908.914-2.396 0-3.323"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSendLove1Bold;

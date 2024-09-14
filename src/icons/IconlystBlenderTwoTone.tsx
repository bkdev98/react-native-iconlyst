import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlenderTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.223 4.943c-.314-.272-.772-.323-1.159-.2-.25.08-.491.241-.598.488a.58.58 0 0 0 .018.52c.078.153.225.249.353.356l1.105.899c.348.288.707.564 1.047.86q-3.553.009-7.107.006c-.467-.006-.952.215-1.204.617-.124.202-.175.462-.081.685.1.257.356.424.62.474.25.055.508.024.763.029 1.035-.001 2.07.002 3.105-.002-2.157 1.652-4.31 3.309-6.467 4.962-.22.166-.406.381-.519.633a.9.9 0 0 0-.098.387c.003.127-.007.255.006.383.053.244.218.46.434.585.198.115.43.158.657.143.352-.022.689-.172.956-.4 1.16-.952 2.326-1.898 3.482-2.854-.004.161-.034.32-.032.481-.015.263.029.524.082.78.143.673.434 1.309.822 1.874a6.06 6.06 0 0 0 2.06 1.85 6.66 6.66 0 0 0 2.819.812c.4.008.802.02 1.2-.03a6.6 6.6 0 0 0 2.903-1.037 6 6 0 0 0 1.841-1.901c.506-.844.793-1.828.767-2.814a5.2 5.2 0 0 0-.432-2.05 5.8 5.8 0 0 0-1.802-2.28q-2.77-2.128-5.54-4.256"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.092 10.724a4 4 0 0 1 2.108-.899 4.4 4.4 0 0 1 1.434.08c.906.206 1.744.738 2.277 1.503.49.694.697 1.587.536 2.422-.147.825-.64 1.564-1.3 2.072a4.03 4.03 0 0 1-2.511.823c-.958-.005-1.92-.35-2.632-.996-.63-.557-1.06-1.35-1.124-2.192a3.2 3.2 0 0 1 .136-1.228c.194-.619.58-1.17 1.076-1.585"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.59 12.094c.412-.058.858.095 1.123.422a1 1 0 0 1 .02 1.25c-.228.295-.601.463-.971.456a1.2 1.2 0 0 1-1.008-.516 1 1 0 0 1-.161-.673c.026-.218.129-.425.281-.582a1.2 1.2 0 0 1 .715-.357"
    />
  </Svg>
);
export default IconlystBlenderTwoTone;

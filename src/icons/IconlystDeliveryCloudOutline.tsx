import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryCloudOutline = ({
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
      d="m14.52 2.275-6.791.016c-1.613.004-2.978.583-3.936 1.615C2.84 4.933 2.346 6.348 2.35 7.933l.018 7.713c.004 1.584.502 2.997 1.459 4.02.962 1.028 2.33 1.6 3.946 1.597a.75.75 0 0 0-.003-1.5c-1.246.003-2.2-.43-2.848-1.122-.653-.698-1.05-1.724-1.054-2.998L3.85 7.929c-.003-1.274.39-2.3 1.042-3.002.646-.696 1.6-1.133 2.84-1.136l.598-.001.008 5.729a.75.75 0 0 0 .985.711l2.534-.835 2.519.82a.75.75 0 0 0 .982-.714l-.014-5.728.575-.001c1.246-.003 2.2.43 2.848 1.122.653.698 1.05 1.723 1.054 2.997l.018 3.52a.75.75 0 0 0 1.5-.008l-.018-3.515v-.002c-.004-1.583-.503-2.995-1.459-4.017-.962-1.029-2.33-1.6-3.946-1.597l-1.257.003a1 1 0 0 0-.138 0M9.83 3.786l.007 4.695 1.784-.588a.75.75 0 0 1 .467 0l1.768.575-.012-4.691zm3.648 10.534c.549-.726 1.432-1.305 2.685-1.305s2.136.58 2.685 1.304c.348.46.564.978.67 1.452.54.112 1.04.36 1.44.743.57.542.892 1.31.892 2.207a3.03 3.03 0 0 1-1.807 2.77c-.43.172-.856.237-1.196.237h-5.372a3.3 3.3 0 0 1-1.221-.253 3.02 3.02 0 0 1-1.777-2.754c0-.897.322-1.665.89-2.207.402-.383.901-.63 1.44-.743a3.8 3.8 0 0 1 .671-1.452m1.196.905c-.321.425-.447.936-.447 1.226a.75.75 0 0 1-.744.75c-.456.004-.828.157-1.08.398-.246.234-.426.597-.426 1.122 0 .612.36 1.14.88 1.381.235.093.463.126.618.126h5.372c.16 0 .388-.032.623-.123.52-.243.88-.772.88-1.384 0-.525-.181-.888-.427-1.122-.252-.24-.623-.394-1.08-.398a.75.75 0 0 1-.744-.75c0-.29-.125-.802-.447-1.226-.298-.394-.758-.71-1.489-.71-.73 0-1.19.316-1.489.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryCloudOutline;
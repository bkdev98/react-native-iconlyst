import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTriangleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.746 17.471H5.853a.74.74 0 0 1-.653-.378.73.73 0 0 1 .001-.74l.947-1.647a1 1 0 1 0-1.734-.998l-.945 1.643a2.71 2.71 0 0 0-.002 2.741 2.73 2.73 0 0 0 2.386 1.38h1.893a1 1 0 1 0 0-2M10.464 7.236l.93-1.612a.74.74 0 0 1 .648-.374.74.74 0 0 1 .653.378l.912 1.603a.997.997 0 0 0 1.363.375 1 1 0 0 0 .375-1.364l-.913-1.606a2.73 2.73 0 0 0-2.386-1.386h-.004c-.994 0-1.884.514-2.381 1.375l-.93 1.612a.999.999 0 1 0 1.733.999M8.651 8.46a1 1 0 0 0-1.367.363l-1.469 2.44a1 1 0 1 0 1.73 1.002l1.47-2.439A1 1 0 0 0 8.65 8.46M15.022 9.775l1.32 2.482a.997.997 0 0 0 1.364.373 1 1 0 0 0 .372-1.364l-1.32-2.482a.999.999 0 1 0-1.736.991" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.539 15.368-.938-1.646a1.001 1.001 0 0 0-1.739.99l.941 1.648a.73.73 0 0 1-.004.74.74.74 0 0 1-.648.373h-4.055l.003-.782a1 1 0 0 0-1.658-.756l-2.048 1.786c-.009.008-.012.02-.021.03-.057.053-.097.12-.14.187-.032.048-.073.09-.096.142-.019.045-.019.097-.031.145-.022.082-.054.162-.054.25 0 .095.033.184.059.274.011.038.01.081.026.118.026.06.071.107.109.161.04.058.073.12.124.167.01.01.014.024.024.033l2.039 1.778a1 1 0 0 0 1.07.157 1 1 0 0 0 .587-.908l.002-.782h4.06a2.72 2.72 0 0 0 2.378-1.37c.496-.858.499-1.88.01-2.735"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshTriangleBulk;

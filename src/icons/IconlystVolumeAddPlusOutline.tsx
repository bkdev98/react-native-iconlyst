import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeAddPlusOutline = ({
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
      d="M11.889 19.678a3.16 3.16 0 0 1-1.68-.488l-2.777-1.735a1.5 1.5 0 0 0-.747-.2c-.372-.026-.64-.036-.872-.044a3.17 3.17 0 0 1-2.27-.713c-1.052-.881-1.046-2.74-1.042-4.233v-.532c0-1.492-.01-3.35 1.04-4.226a3.16 3.16 0 0 1 2.278-.718c.23-.008.5-.017.806-.041a1.8 1.8 0 0 0 .806-.2l2.778-1.736a3.13 3.13 0 0 1 3.117-.136 3.47 3.47 0 0 1 1.846 2.877 61 61 0 0 1 0 8.9 3.44 3.44 0 0 1-1.828 2.861 3.15 3.15 0 0 1-1.455.364M6.75 15.761c.52.008 1.03.154 1.475.423l2.775 1.734a1.63 1.63 0 0 0 1.65.07 1.94 1.94 0 0 0 1.024-1.623 60 60 0 0 0 0-8.7 1.97 1.97 0 0 0-1.038-1.644 1.61 1.61 0 0 0-1.636.074L8.225 7.832c-.46.272-.983.418-1.517.423-.322.024-.6.034-.838.042-.763.027-.968.035-1.372.372-.507.423-.5 2.079-.5 3.068v.541c0 .991-.007 2.649.5 3.075.4.333.608.34 1.366.368.25.009.535.02.875.045zM19.205 14.801a.75.75 0 0 1-.75-.75v-1.3H17.16a.75.75 0 0 1 0-1.5h1.295v-1.3a.75.75 0 1 1 1.5 0v1.3h1.295a.75.75 0 0 1 0 1.5h-1.295v1.3a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystVolumeAddPlusOutline;

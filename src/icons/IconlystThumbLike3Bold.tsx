import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike3Bold = ({
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
      d="M21.248 11.282a2.5 2.5 0 0 0-1.09-1.091c-.524-.262-1.164-.262-2.464-.262h-1.878a.43.43 0 0 1-.405-.558c.702-2.276.756-4.025.154-5.083-.304-.546-.776-.892-1.363-1.007-.388-.084-.88-.157-1.269-.01-.598.23-.723.807-.828 1.268-.344 1.553-1.278 3.668-2.688 4.66a.51.51 0 0 0-.202.516c.111.525.111 1.123.111 1.934v6.07c0 .746 0 1.31-.08 1.801a.46.46 0 0 0 .262.502l1.14.476c.283.116.419.179.566.22.125.032.272.064.419.084.157.011.304.011.608.011h4.614c.681 0 1.017 0 1.342-.084.304-.073.598-.21.85-.388.282-.189.513-.461.943-.965l.514-.587c.356-.42.535-.618.67-.87.127-.22.221-.472.274-.724.052-.272.052-.555.052-1.111v-2.338c0-1.3 0-1.94-.252-2.465M4.975 18.998a.78.78 0 0 1-.787-.786v-.01a.785.785 0 1 1 1.573 0c0 .43-.356.796-.786.796m2.58-9.311a1.93 1.93 0 0 0-.84-.85c-.398-.199-.923-.199-1.971-.199h-.241c-.692 0-1.038 0-1.311.137-.241.125-.44.325-.556.566-.136.262-.136.608-.136 1.31v8.074c0 .692 0 1.049.136 1.311.116.241.315.44.556.566.273.126.619.126 1.31.126h.242c1.048 0 1.573 0 1.971-.189.357-.188.66-.482.84-.849.062-.126.104-.262.135-.43.063-.356.063-.828.063-1.541v-6.071c0-.881 0-1.384-.126-1.762a1 1 0 0 0-.073-.2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbLike3Bold;

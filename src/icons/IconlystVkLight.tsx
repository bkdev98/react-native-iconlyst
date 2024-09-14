import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVkLight = ({
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
      d="M3.431 6.655c.721-.02 1.443-.003 2.164-.01.735-.03.895.664 1.099 1.244.577 1.57 1.376 3.356 2.607 4.527.193.162.654.449.787.06.077-.3.056-.614.06-.922l-.001-2.522c-.029-.503-.167-1.02-.5-1.409-.35-.429-.383-.954.316-.978 1.055.006 2.11-.009 3.166.008.381.063.39.472.39.774v3.368c.013 1.103.534 1.276 1.284.39 1.017-1.205 1.771-2.608 2.41-4.043.161-.349.476-.498.842-.497l2.007.001c1.154.002.2 1.585-.053 2.057-.634 1.131-1.373 2.199-2.095 3.274-.274.45-.04.669.247 1.04.925.98 1.918 1.907 2.62 3.073.28.465.39 1.12-.277 1.247-.414.018-.829.005-1.243.009-.84-.008-1.217.08-1.862-.45-.865-.913-1.76-2.198-2.977-2.68-.673-.216-.79.05-.9.625-.014.655.012 1.312-.013 1.966-.03.292-.333.438-.59.477-2.182.373-4.332-.792-5.806-2.32-1.022-1.008-1.752-2.307-2.48-3.532-.604-1.085-1.13-2.22-1.484-3.412-.11-.436-.38-1.253.282-1.365"
    />
  </Svg>
);
export default IconlystVkLight;

import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoapBulk = ({
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
      d="M4.164 10.834c0-.91.737-1.645 1.645-1.645h13.33c.907 0 1.644.736 1.644 1.645v1.11a8.3 8.3 0 0 1-3.83 7v1.061c0 .826-.67 1.495-1.495 1.495h-5.97c-.826 0-1.496-.67-1.496-1.495v-1.062a8.3 8.3 0 0 1-3.828-6.998z"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M3.744 4.628a.75.75 0 0 1 1.059.054l4.066 4.504a.75.75 0 0 1-1.114 1.005L3.69 5.687a.75.75 0 0 1 .055-1.06M8.012 2.467a.75.75 0 0 1 1.032.244l4.066 6.585a.75.75 0 0 1-1.276.788L7.768 3.499a.75.75 0 0 1 .244-1.032M11.857 2.764a.75.75 0 0 1 .948-.475c.623.207 1.1.646 1.324 1.22.223.576.167 1.223-.153 1.796a.75.75 0 1 1-1.31-.731c.12-.213.114-.394.065-.52-.05-.128-.168-.265-.4-.342a.75.75 0 0 1-.474-.948M17.78 4.898a.75.75 0 0 1-.52.924c-.237.066-.361.198-.417.322s-.07.305.039.524a.75.75 0 1 1-1.345.664c-.29-.588-.315-1.236-.063-1.8.251-.563.75-.978 1.382-1.154a.75.75 0 0 1 .924.52" />
    </G>
  </Svg>
);
export default IconlystSoapBulk;

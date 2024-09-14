import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVIPTicketBulk = ({
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
      <Path d="M17.122 10.672h-1.003v1.024h1.003a.513.513 0 0 0 0-1.024" />
      <Path d="M17.122 13.196h-1.003v.794a.75.75 0 0 1-1.5 0V9.922a.75.75 0 0 1 .75-.75h1.753c1.11 0 2.013.902 2.013 2.012a2.015 2.015 0 0 1-2.013 2.012M13.248 14a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 1.5 0zm-2.695-3.65-1.56 3.858a.75.75 0 0 1-1.391 0L6.043 10.35a.75.75 0 1 1 1.391-.562l.864 2.137.864-2.137a.75.75 0 0 1 1.391.562m11.14-3.6a4.13 4.13 0 0 0-2.234-2.232c-.749-.308-1.617-.308-3.346-.308-.355 0-.516 0-.698.045-.256.064-.329.104-.541.3-.114.106-.231.283-.709 1.014a1.43 1.43 0 0 1-1.22.659c-.453 0-.872-.203-1.146-.558-.701-.907-.873-1.125-1.07-1.258a.9.9 0 0 0-.289-.136c-.199-.066-.407-.066-.821-.066-2.446 0-3.674 0-4.66.603A4.1 4.1 0 0 0 3.604 6.17C3 7.155 3 8.383 3 10.829v2.342c0 2.446 0 3.674.604 4.659.337.55.806 1.019 1.355 1.356.986.603 2.214.603 4.66.603.414 0 .622 0 .857-.077a.9.9 0 0 0 .284-.145c.166-.113.336-.328 1.038-1.233.276-.357.694-.562 1.19-.562.466.017.884.247 1.147.632.526.767.654.952.803 1.085.174.158.25.198.524.263.152.037.312.037.662.037 1.719 0 2.581 0 3.326-.304a4.12 4.12 0 0 0 2.246-2.247c.304-.744.304-1.606.304-3.325v-3.815c0-1.73 0-2.597-.307-3.346" />
      <Path d="M17.122 10.672h-1.003v1.024h1.003a.513.513 0 0 0 0-1.024" />
      <Path d="M17.122 13.196h-1.003v.794a.75.75 0 0 1-1.5 0V9.922a.75.75 0 0 1 .75-.75h1.753c1.11 0 2.013.902 2.013 2.012a2.015 2.015 0 0 1-2.013 2.012M13.248 14a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 1.5 0zm-2.695-3.65-1.56 3.858a.75.75 0 0 1-1.391 0L6.043 10.35a.75.75 0 1 1 1.391-.562l.864 2.137.864-2.137a.75.75 0 0 1 1.391.562m11.14-3.6a4.13 4.13 0 0 0-2.234-2.232c-.749-.308-1.617-.308-3.346-.308-.355 0-.516 0-.698.045-.256.064-.329.104-.541.3-.114.106-.231.283-.709 1.014a1.43 1.43 0 0 1-1.22.659c-.453 0-.872-.203-1.146-.558-.701-.907-.873-1.125-1.07-1.258a.9.9 0 0 0-.289-.136c-.199-.066-.407-.066-.821-.066-2.446 0-3.674 0-4.66.603A4.1 4.1 0 0 0 3.604 6.17C3 7.155 3 8.383 3 10.829v2.342c0 2.446 0 3.674.604 4.659.337.55.806 1.019 1.355 1.356.986.603 2.214.603 4.66.603.414 0 .622 0 .857-.077a.9.9 0 0 0 .284-.145c.166-.113.336-.328 1.038-1.233.276-.357.694-.562 1.19-.562.466.017.884.247 1.147.632.526.767.654.952.803 1.085.174.158.25.198.524.263.152.037.312.037.662.037 1.719 0 2.581 0 3.326-.304a4.12 4.12 0 0 0 2.246-2.247c.304-.744.304-1.606.304-3.325v-3.815c0-1.73 0-2.597-.307-3.346" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.37 14.74a.75.75 0 0 0 .75-.75v-.794h1.002c1.11 0 2.013-.903 2.013-2.012 0-1.11-.903-2.012-2.013-2.012H15.37a.75.75 0 0 0-.75.75v4.068c0 .414.336.75.75.75m-2.872.01a.75.75 0 0 0 .75-.75v-4a.75.75 0 1 0-1.5 0v4c0 .415.336.75.75.75m-3.505-.541 1.56-3.858a.75.75 0 0 0-1.39-.562l-.865 2.137-.864-2.137a.75.75 0 1 0-1.391.562l1.56 3.858a.75.75 0 0 0 1.39 0m7.126-3.537h1.003a.513.513 0 0 1 0 1.024H16.12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVIPTicketBulk;
